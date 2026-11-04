-- QuestLog: таблица для хранения прогресса.
-- Выполни целиком в Supabase: SQL Editor → New query → вставить → Run.

create table if not exists public.user_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null,
  updated_at timestamptz not null default now()
);

-- Каждый пользователь видит и меняет только свою строку
alter table public.user_state enable row level security;

drop policy if exists "read own state"   on public.user_state;
drop policy if exists "insert own state" on public.user_state;
drop policy if exists "update own state" on public.user_state;

create policy "read own state"   on public.user_state for select to authenticated using ((select auth.uid()) = user_id);
create policy "insert own state" on public.user_state for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "update own state" on public.user_state for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

grant select, insert, update on public.user_state to authenticated;
