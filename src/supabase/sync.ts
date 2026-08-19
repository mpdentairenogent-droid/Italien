import { PersistedState } from '../types';
import { supabase } from './client';

const TABLE = 'app_state';

/** Fetches the signed-in user's cloud state. Returns null on error or if nothing was synced yet. */
export async function pullRemoteState(userId: string): Promise<PersistedState | null> {
  const { data, error } = await supabase.from(TABLE).select('state').eq('user_id', userId).maybeSingle();
  if (error) {
    console.warn('[supabase] pull failed:', error.message);
    return null;
  }
  return (data?.state as PersistedState | undefined) ?? null;
}

/** Upserts the local state blob as this user's cloud copy. Fails silently (e.g. offline) — local storage stays authoritative. */
export async function pushRemoteState(userId: string, state: PersistedState): Promise<void> {
  const { error } = await supabase.from(TABLE).upsert({ user_id: userId, state, updated_at: new Date().toISOString() });
  if (error) {
    console.warn('[supabase] push failed:', error.message);
  }
}

/** Conflict resolution: whichever copy was mutated more recently wins. */
export function pickNewerState(local: PersistedState, remote: PersistedState | null): PersistedState {
  if (!remote) return local;
  return remote.updatedAt > local.updatedAt ? remote : local;
}
