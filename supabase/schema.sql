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
