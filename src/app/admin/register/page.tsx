"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { adminRegister, type AdminAuthState } from "@/app/actions/admin-auth";
import { AlertCircle, Loader2, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function RegisterBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      id="admin-register-btn"
      type="submit"
      disabled={pending}
      className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 rounded-xl transition-all duration-200 text-sm"
    >
      {pending ? <Loader2 size={16} className="animate-spin" /> : <UserPlus size={16} />}
      {pending ? "Creating account…" : "Create Admin Account"}
    </button>
  );
}

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-400 mt-1">{msg}</p>;
}

export default function AdminRegisterPage() {
  const [state, action] = useActionState<AdminAuthState, FormData>(adminRegister, null);

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-12 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-1 ring-orange-500/30 mb-4">
            <Image src="/images/logo.jpeg" alt="Hindu Swad" fill className="object-cover" />
          </div>
          <p className="text-lg font-extrabold text-white tracking-tight font-display">
            Hindu<span className="text-orange-400">Swad</span>
          </p>
          <p className="text-xs text-zinc-500 mt-0.5 uppercase tracking-widest font-semibold">Admin Portal</p>
        </div>

        {/* Card */}
        <div className="bg-zinc-900 border border-white/8 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-xl font-black text-white mb-1">Create Admin Account</h1>
          <p className="text-sm text-zinc-500 mb-7">Set up your admin access credentials.</p>

          {state?.error && (
            <div className="flex items-center gap-2.5 p-3.5 bg-red-950/50 border border-red-800/60 rounded-xl text-sm text-red-400 mb-5">
              <AlertCircle size={15} className="flex-shrink-0" />
              {state.error}
            </div>
          )}

          <form action={action} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="admin-reg-name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                Full Name
              </label>
              <input
                id="admin-reg-name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/60 transition-colors ${
                  state?.fieldErrors?.name ? "border-red-700" : "border-white/10"
                }`}
              />
              <FieldError msg={state?.fieldErrors?.name} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="admin-reg-email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                Email Address
              </label>
              <input
                id="admin-reg-email"
                name="email"
                type="email"
                placeholder="admin@hinduswad.com"
                required
                autoComplete="email"
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/60 transition-colors ${
                  state?.fieldErrors?.email ? "border-red-700" : "border-white/10"
                }`}
              />
              <FieldError msg={state?.fieldErrors?.email} />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="admin-reg-password" className="block text-xs font-bold text-zinc-400 uppercase tracking-wide">
                Password
              </label>
              <input
                id="admin-reg-password"
                name="password"
                type="password"
                placeholder="Minimum 8 characters"
                required
                autoComplete="new-password"
                minLength={8}
                className={`w-full px-4 py-3 rounded-xl border bg-zinc-800/60 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-orange-500/60 transition-colors ${
                  state?.fieldErrors?.password ? "border-red-700" : "border-white/10"
                }`}
              />
              <FieldError msg={state?.fieldErrors?.password} />
            </div>

            <div className="pt-2">
              <RegisterBtn />
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-white/6 text-center">
            <p className="text-xs text-zinc-600">
              Already have an account?{" "}
              <Link href="/admin/login" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-zinc-700 mt-6">
          This portal is restricted to authorised Hindu Swad personnel only.
        </p>
      </div>
    </div>
  );
}
