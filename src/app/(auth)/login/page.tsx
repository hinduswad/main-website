"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { LogIn, Phone, Lock, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchParams.get("registered") === "true") {
      setSuccess("Account registered successfully! Please sign in.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        phone,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid phone number or password.");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="text-center mb-8">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
          <LogIn size={24} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
          Sign In
        </h1>
        <p className="mt-2 text-xs text-zinc-500">
          Welcome back! Access your recruitment status tracker.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2"
          >
            Mobile Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-zinc-400 text-xs sm:text-sm font-medium">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              pattern="^[6-9]\d{9}$"
              maxLength={10}
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 h-4 w-4 text-zinc-400" />
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {success && (
          <div className="bg-emerald-50 text-emerald-600 text-xs px-4 py-3 rounded-2xl flex items-center gap-2 border border-emerald-100 animate-fade-in">
            <CheckCircle2 size={16} className="shrink-0" />
            <span>{success}</span>
          </div>
        )}

        {error && (
          <div className="bg-red-50 text-red-600 text-xs px-4 py-3 rounded-2xl flex items-center gap-2 border border-red-100 animate-fade-in">
            <AlertCircle size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full py-6 text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          {isLoading ? (
            "Signing In..."
          ) : (
            <>
              Sign In <ArrowRight size={16} />
            </>
          )}
        </Button>
      </form>

      <div className="mt-8 text-center text-xs text-zinc-500">
        Don&apos;t have an account?{" "}
        <Link
          href="/register"
          className="font-bold text-orange-500 hover:text-orange-600 underline"
        >
          Register Now
        </Link>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-zinc-50/50 flex flex-col items-center justify-center px-4 py-16 sm:py-24">
      <Suspense fallback={<div className="text-zinc-500 text-sm">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
