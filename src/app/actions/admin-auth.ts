"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { supabaseAdmin } from "@/lib/supabase";
import { createAdminSession, deleteAdminSession } from "@/lib/admin-session";

export type AdminAuthState = {
  error?: string;
  fieldErrors?: { name?: string; email?: string; password?: string };
} | null;

/* ── Register ─────────────────────────────────── */
export async function adminRegister(
  prevState: AdminAuthState,
  formData: FormData
): Promise<AdminAuthState> {
  const name     = (formData.get("name")     as string)?.trim();
  const email    = (formData.get("email")    as string)?.trim().toLowerCase();
  const password = (formData.get("password") as string);

  const fieldErrors: NonNullable<AdminAuthState>["fieldErrors"] = {};
  if (!name || name.length < 2)       fieldErrors.name     = "Name must be at least 2 characters.";
  if (!email || !email.includes("@")) fieldErrors.email    = "Enter a valid email.";
  if (!password || password.length < 8)
                                       fieldErrors.password = "Password must be at least 8 characters.";

  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  // Check if admin already exists with this email
  const { data: existing } = await supabaseAdmin
    .from("admin_users")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) return { error: "An admin account with this email already exists." };

  const password_hash = await bcrypt.hash(password, 12);

  const { data: admin, error } = await supabaseAdmin
    .from("admin_users")
    .insert({ name, email, password_hash })
    .select("id, name, email")
    .single();

  if (error || !admin) {
    console.error("[admin-register] Supabase error:", error?.message);
    return { error: "Failed to create account. Please try again." };
  }

  await createAdminSession({ adminId: admin.id, email: admin.email, name: admin.name });
  redirect("/admin");
}

/* ── Login ────────────────────────────────────── */
export async function adminLogin(
  prevState: AdminAuthState,
  formData: FormData
): Promise<AdminAuthState> {
  const email    = (formData.get("email")    as string)?.trim().toLowerCase();
  const password = (formData.get("password") as string);

  if (!email || !password) return { error: "Email and password are required." };

  const { data: admin, error } = await supabaseAdmin
    .from("admin_users")
    .select("id, name, email, password_hash")
    .eq("email", email)
    .maybeSingle();

  if (error || !admin) return { error: "Invalid email or password." };

  const valid = await bcrypt.compare(password, admin.password_hash);
  if (!valid) return { error: "Invalid email or password." };

  await createAdminSession({ adminId: admin.id, email: admin.email, name: admin.name });
  redirect("/admin");
}

/* ── Logout ───────────────────────────────────── */
export async function adminLogout() {
  await deleteAdminSession();
  redirect("/admin/login");
}

/* ── Update submission status ─────────────────── */
export async function updateSubmissionStatus(id: string, status: "new" | "read" | "replied") {
  const { error } = await supabaseAdmin
    .from("contact_submissions")
    .update({ status })
    .eq("id", id);

  if (error) {
    console.error("[admin] update status error:", error.message);
  }
}
