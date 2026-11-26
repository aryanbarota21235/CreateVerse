-- CreateVerse admin + Google Review QR service. Run once in the Supabase SQL editor.
-- Every record (clients, plans, sign-ups, payments, enquiries, scan events) is one row here.
create table if not exists cv_records (
  collection text not null,
  id text not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  primary key (collection, id)
);
create index if not exists cv_records_collection_created_idx on cv_records (collection, created_at desc);
create index if not exists cv_records_slug_idx on cv_records ((data->>'slug')) where collection = 'businesses';
create index if not exists cv_records_business_idx on cv_records ((data->>'businessId'));

-- The site reads and writes only from the server with the service-role key.
-- Row level security with no policies blocks the public anon key entirely.
alter table cv_records enable row level security;
-- New Supabase projects may not grant API roles on new tables automatically.
grant all on table cv_records to service_role;

-- Scan counts: one row per business per day (instead of one row per scan), so the free
-- database lasts for years. cv_bump_stat adds 1 atomically; cv_stats_totals sums all days.
create table if not exists cv_daily_stats (
  business_id text not null,
  day date not null,
  rated1 int not null default 0,
  rated2 int not null default 0,
  rated3 int not null default 0,
  rated4 int not null default 0,
  rated5 int not null default 0,
  copied int not null default 0,
  primary key (business_id, day)
);
alter table cv_daily_stats enable row level security;
grant all on table cv_daily_stats to service_role;

create or replace function cv_bump_stat(p_business text, p_day date, p_col text) returns void
language plpgsql security definer set search_path = public as $$
begin
  if p_col not in ('rated1', 'rated2', 'rated3', 'rated4', 'rated5', 'copied') then
    raise exception 'unknown counter %', p_col;
  end if;
  execute format(
    'insert into cv_daily_stats (business_id, day, %1$I) values ($1, $2, 1)
     on conflict (business_id, day) do update set %1$I = cv_daily_stats.%1$I + 1', p_col)
  using p_business, p_day;
end $$;
revoke execute on function cv_bump_stat(text, date, text) from public, anon, authenticated;
grant execute on function cv_bump_stat(text, date, text) to service_role;

create or replace view cv_stats_totals with (security_invoker = on) as
  select business_id,
         sum(rated1)::int as rated1, sum(rated2)::int as rated2, sum(rated3)::int as rated3,
         sum(rated4)::int as rated4, sum(rated5)::int as rated5, sum(copied)::int as copied
  from cv_daily_stats group by business_id;
grant select on cv_stats_totals to service_role;
