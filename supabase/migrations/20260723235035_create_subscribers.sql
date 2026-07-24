-- Email capture for event notifications ("Be the first to know when dates open").
-- Public visitors can subscribe (INSERT only). Nobody can read, update, or delete
-- through the API, so the email list cannot be scraped. Asli views signups in the
-- Supabase dashboard (Table editor / SQL), which uses the privileged service role.

create table if not exists public.subscribers (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  source     text not null default 'events_notify',
  created_at timestamptz not null default now(),
  constraint subscribers_email_format
    check (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$')
);

-- Case-insensitive uniqueness so the same address can't be added twice.
create unique index if not exists subscribers_email_lower_key
  on public.subscribers (lower(email));

-- RLS: required on every table in the exposed public schema.
alter table public.subscribers enable row level security;

-- Table-level privilege. Supabase's default privileges grant ALL on new public
-- tables to anon/authenticated, so revoke first, then grant INSERT only —
-- deliberately no SELECT/UPDATE/DELETE, defense-in-depth behind RLS.
revoke all on public.subscribers from anon, authenticated;
grant insert on public.subscribers to anon, authenticated;

-- RLS policy allowing the insert. No USING/SELECT policy exists, so reads return
-- zero rows for anon/authenticated and the list stays private.
create policy "Anyone can subscribe"
  on public.subscribers
  for insert
  to anon, authenticated
  with check (true);
