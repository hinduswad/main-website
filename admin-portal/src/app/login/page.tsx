import React from "react";
import { loginAction } from "@/actions/auth-actions";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center bg-[#f8f9fa] overflow-hidden px-4">
      {/* Premium Decorative Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Render Client Form and pass action as prop */}
      <LoginForm loginAction={loginAction} />
    </main>
  );
}
