import "server-only";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const SECRET = process.env.ADMIN_SESSION_SECRET ?? "dev-secret-change-me";
const COOKIE = "hs_admin_session";
const MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

export type AdminSessionPayload = {
  adminId: string;
  email: string;
  name: string;
};

export async function createAdminSession(payload: AdminSessionPayload) {
  const token = jwt.sign(payload, SECRET, { expiresIn: "7d" });
  const cookieStore = await cookies();
  cookieStore.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: MAX_AGE,
    path: "/",
  });
}

export async function getAdminSession(): Promise<AdminSessionPayload | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE)?.value;
    if (!token) return null;
    const payload = jwt.verify(token, SECRET) as AdminSessionPayload;
    return payload;
  } catch {
    return null;
  }
}

export async function deleteAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE);
}
