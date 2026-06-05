import { createClient } from "@supabase/supabase-js";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
};

/** Public client — used for public form submissions (anon key). */
export function getSupabasePublic() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

/**
 * Service-role client — bypasses RLS.
 * ONLY ever used inside Server Actions / Route Handlers (never in the browser).
 */
export function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

// Convenience aliases kept for backwards-compat with existing imports
export const supabasePublic = new Proxy({} as ReturnType<typeof getSupabasePublic>, {
  get(_t, prop) {
    return (getSupabasePublic() as any)[prop];
  },
});

export const supabaseAdmin = new Proxy({} as ReturnType<typeof getSupabaseAdmin>, {
  get(_t, prop) {
    return (getSupabaseAdmin() as any)[prop];
  },
});
