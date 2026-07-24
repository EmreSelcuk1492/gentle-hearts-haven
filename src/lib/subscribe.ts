import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Publishable (anon) credentials — safe to ship in the browser bundle. They only
// grant what RLS allows: INSERT into public.subscribers, nothing else.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

let client: SupabaseClient | null = null;
if (url && anonKey) {
  client = createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** True when Supabase env vars are present and the form can submit. */
export const isSubscribeConfigured = client !== null;

// "already" and "success" are both wins for the visitor; the rest are failures.
export type SubscribeStatus = "success" | "already" | "invalid" | "unconfigured" | "error";

/**
 * Record an email for event notifications. Insert-only by RLS; we never read the
 * list back. A duplicate address is reported as "already" (still a success for the
 * visitor — they are on the list either way).
 */
export async function subscribeEmail(
  rawEmail: string,
  source = "events_notify"
): Promise<SubscribeStatus> {
  const email = rawEmail.trim().toLowerCase();
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "invalid";
  if (!client) return "unconfigured";

  const { error } = await client.from("subscribers").insert({ email, source });
  if (!error) return "success";
  if (error.code === "23505") return "already"; // unique_violation
  return "error";
}
