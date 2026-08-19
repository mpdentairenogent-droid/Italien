-- Italien Flashcards — Supabase schema
-- Run this once in your Supabase project's SQL editor (Database -> SQL Editor -> New query).
-- Stores one row per signed-in user with their entire app state as JSON, mirroring the
-- local AsyncStorage blob so the client can sync with almost no extra logic.

create table if not exists public.app_state (
  user_id uuid primary key references auth.users (id) on delete cascade,
  state jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.app_state enable row level security;

-- Each user can only ever read or write their own row.
create policy "Users can read their own state"
  on public.app_state for select
  using (auth.uid() = user_id);

create policy "Users can insert their own state"
  on public.app_state for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own state"
  on public.app_state for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own state"
  on public.app_state for delete
  using (auth.uid() = user_id);

-- Keep updated_at correct even if a row is ever written outside the app client.
create or replace function public.set_app_state_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists app_state_set_updated_at on public.app_state;
create trigger app_state_set_updated_at
  before update on public.app_state
  for each row
  execute function public.set_app_state_updated_at();
