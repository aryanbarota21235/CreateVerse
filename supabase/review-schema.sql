-- CreateVerse Review QR service. Run once in the Supabase SQL editor.
create table if not exists review_businesses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  category text not null default 'Other',
  city text not null default '',
  highlights text not null default '',
  language text not null default 'English',
  place_id text not null default '',
  review_url text not null default '',
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists review_events (
  id bigint generated always as identity primary key,
  business_id uuid not null references review_businesses(id) on delete cascade,
  type text not null check (type in ('rated', 'copied')),
  rating smallint check (rating between 1 and 5),
  created_at timestamptz not null default now()
);
create index if not exists review_events_business_idx on review_events (business_id, created_at);

-- The app talks to these tables only from the server with the service-role key.
-- Row level security with no policies blocks the public anon key entirely.
alter table review_businesses enable row level security;
alter table review_events enable row level security;
