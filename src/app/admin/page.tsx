import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/admin-session";
import { supabaseAdmin, type ContactSubmission } from "@/lib/supabase";
import { adminLogout } from "@/app/actions/admin-auth";
import SubmissionsList from "@/components/admin/SubmissionsList";
import Image from "next/image";
import { LogOut, MessageSquare, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = { title: "Dashboard" };

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const session = await getAdminSession();
  if (!session) redirect("/admin/login");

  const { data: submissions, error } = await supabaseAdmin
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<ContactSubmission[]>();

  if (error) console.error("[admin] fetch submissions:", error.message);

  const rows = submissions ?? [];
  const newCount     = rows.filter((r) => r.status === "new").length;
  const readCount    = rows.filter((r) => r.status === "read").length;
  const repliedCount = rows.filter((r) => r.status === "replied").length;

  return (
    <div className="min-h-screen bg-zinc-950">

      {/* ── Top bar ── */}
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-xl border-b border-white/8">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-orange-500/30 flex-shrink-0">
              <Image src="/images/logo.jpeg" alt="Hindu Swad" fill className="object-cover" />
            </div>
            <div className="leading-none">
              <p className="text-sm font-extrabold text-white font-display">
                Hindu<span className="text-orange-400">Swad</span>
              </p>
              <p className="text-[0.55rem] font-bold text-zinc-600 uppercase tracking-widest">Admin</p>
            </div>
          </div>

          {/* Right: user + logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end">
              <p className="text-xs font-semibold text-zinc-300">{session.name}</p>
              <p className="text-[0.65rem] text-zinc-600">{session.email}</p>
            </div>
            <form action={adminLogout}>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 border border-white/8 hover:border-white/15 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white transition-all duration-150"
              >
                <LogOut size={13} />
                <span className="hidden sm:inline">Sign out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 sm:px-8 py-10">

        {/* ── Page title ── */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-white mb-1">Contact Submissions</h1>
          <p className="text-sm text-zinc-500">
            View and manage all messages sent via the Contact Us form.
          </p>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total",   value: rows.length,  icon: MessageSquare, color: "text-zinc-300" },
            { label: "New",     value: newCount,      icon: TrendingUp,    color: "text-orange-400" },
            { label: "Read",    value: readCount,     icon: Users,         color: "text-blue-400" },
            { label: "Replied", value: repliedCount,  icon: MessageSquare, color: "text-green-400" },
          ].map((s) => (
            <div key={s.label} className="bg-zinc-900 border border-white/8 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-white/4 rounded-xl flex items-center justify-center flex-shrink-0">
                <s.icon size={16} className={s.color} />
              </div>
              <div>
                <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
                <p className="text-[0.65rem] font-bold text-zinc-600 uppercase tracking-wider">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Submissions list (client component) ── */}
        <SubmissionsList submissions={rows} />

      </main>
    </div>
  );
}
