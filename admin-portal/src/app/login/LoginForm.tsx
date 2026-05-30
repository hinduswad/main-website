"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { KeyRound, ShieldAlert, ArrowRight, Lock } from "lucide-react";

interface LoginFormProps {
  loginAction: (prevState: unknown, formData: FormData) => Promise<{ success: boolean; error?: string }>;
}

export default function LoginForm({ loginAction }: LoginFormProps) {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setPhone(val);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (phone.length !== 10) {
      setError("Mobile number must be exactly 10 digits.");
      return;
    }

    startTransition(async () => {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("password", password);

      const result = await loginAction(null, formData);

      if (result.success) {
        router.push("/");
        router.refresh();
      } else {
        setError(result.error || "Login failed");
      }
    });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-[2.5rem] border border-zinc-200 p-10 sm:p-12 shadow-xl relative z-10 transition-all duration-350 hover:border-orange-500/20 hover:shadow-2xl animate-fade-up">
      
      {/* Header */}
      <div className="text-center mb-10">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-5 animate-pulse shadow-sm">
          <KeyRound size={22} />
        </div>
        <span className="text-[9px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
          Internal Operations
        </span>
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950">
          Admin Workspace
        </h1>
        <p className="mt-2 text-xs text-zinc-500 leading-relaxed">
          Secure administrative control portal for HinduSwad.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Phone Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5"
          >
            Mobile Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4.5 flex items-center text-zinc-450 text-xs sm:text-sm font-semibold select-none">
              +91
            </span>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              maxLength={10}
              placeholder="9876543210"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full pl-13 pr-4.5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm text-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-zinc-400 shadow-inner"
            />
          </div>
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2.5"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-4.5 flex items-center text-zinc-400">
              <Lock size={16} />
            </span>
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-4.5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm text-zinc-950 focus:outline-none focus:ring-2 focus:ring-orange-500/10 focus:border-orange-500 transition-all placeholder-zinc-400 shadow-inner"
            />
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 text-red-600 text-xs px-4.5 py-3.5 rounded-2xl flex items-center gap-2.5 border border-red-100 animate-shake">
            <ShieldAlert size={16} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full py-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-orange-500/15"
        >
          {isPending ? (
            "Authenticating..."
          ) : (
            <>
              Sign In to Workspace <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="mt-10 text-center text-[10px] text-zinc-400 leading-relaxed">
        This system is restricted to authorized users only. Unauthorized access is strictly prohibited and subject to monitoring.
      </div>

    </div>
  );
}
