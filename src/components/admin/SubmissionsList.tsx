"use client";

import { useState } from "react";
import {
  Copy, CheckCheck, Mail, Phone, Clock, User, MessageSquare, Tag,
} from "lucide-react";
import type { ContactSubmission } from "@/lib/supabase";
import { updateSubmissionStatus } from "@/app/actions/admin-auth";

/* ── Copy button ─────────────────────────────── */
function CopyBtn({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: do nothing */
    }
  };
  return (
    <button
      onClick={handleCopy}
      title={`Copy ${label}`}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all duration-150"
    >
      {copied ? <CheckCheck size={12} className="text-green-400" /> : <Copy size={12} />}
      {copied ? "Copied!" : `Copy ${label}`}
    </button>
  );
}

/* ── Status badge ────────────────────────────── */
const STATUS_STYLES: Record<ContactSubmission["status"], string> = {
  new:     "bg-orange-500/15 text-orange-300 border-orange-500/20",
  read:    "bg-blue-500/15 text-blue-300 border-blue-500/20",
  replied: "bg-green-500/15 text-green-300 border-green-500/20",
};

function StatusBadge({ status }: { status: ContactSubmission["status"] }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[0.65rem] font-bold uppercase tracking-wider ${STATUS_STYLES[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === "new" ? "bg-orange-400 animate-pulse" :
        status === "read" ? "bg-blue-400" : "bg-green-400"
      }`} />
      {status}
    </span>
  );
}

/* ── Single submission card ──────────────────── */
function SubmissionCard({ sub }: { sub: ContactSubmission }) {
  const [status, setStatus] = useState(sub.status);
  const [updating, setUpdating] = useState(false);

  const handleStatusChange = async (newStatus: ContactSubmission["status"]) => {
    setUpdating(true);
    setStatus(newStatus);
    await updateSubmissionStatus(sub.id, newStatus);
    setUpdating(false);
  };

  const date = new Date(sub.created_at).toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  return (
    <div className="bg-zinc-900 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <User size={14} className="text-zinc-500" />
            <h3 className="text-sm font-bold text-white">{sub.name}</h3>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <Tag size={11} className="text-orange-500/60" />
            <span className="text-orange-400/80 font-medium">{sub.subject}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <StatusBadge status={status} />
          <select
            value={status}
            disabled={updating}
            onChange={(e) => handleStatusChange(e.target.value as ContactSubmission["status"])}
            className="text-xs bg-zinc-800 border border-white/10 text-zinc-300 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-orange-500/40 disabled:opacity-50"
          >
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>
      </div>

      {/* Contact actions row */}
      <div className="flex flex-wrap items-center gap-2 mb-4 p-3 bg-zinc-800/50 rounded-xl border border-white/5">
        {/* Email actions */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-zinc-500 font-medium">{sub.email}</span>
          <CopyBtn text={sub.email} label="Email" />
          <a
            href={`mailto:${sub.email}?subject=Re: ${encodeURIComponent(sub.subject)}`}
            title="Send email"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/20 rounded-lg text-xs font-medium text-orange-300 hover:text-orange-200 transition-all duration-150"
          >
            <Mail size={12} />
            Mail them
          </a>
        </div>

        {/* Divider */}
        {sub.phone && (
          <>
            <span className="hidden sm:block w-px h-6 bg-white/8" />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-zinc-500 font-medium">{sub.phone}</span>
              <CopyBtn text={sub.phone} label="Phone" />
              <a
                href={`tel:${sub.phone}`}
                title="Call"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-green-500/15 hover:bg-green-500/25 border border-green-500/20 rounded-lg text-xs font-medium text-green-300 hover:text-green-200 transition-all duration-150"
              >
                <Phone size={12} />
                Call them
              </a>
            </div>
          </>
        )}
      </div>

      {/* Message */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <MessageSquare size={12} className="text-zinc-600" />
          <span className="text-[0.65rem] font-bold text-zinc-600 uppercase tracking-wider">Message</span>
        </div>
        <p className="text-sm text-zinc-400 leading-relaxed whitespace-pre-wrap bg-zinc-800/30 rounded-xl p-4 border border-white/4">
          {sub.message}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-1.5 text-[0.7rem] text-zinc-600">
        <Clock size={11} />
        {date}
      </div>
    </div>
  );
}

/* ── Dashboard list ──────────────────────────── */
const FILTERS: { label: string; value: ContactSubmission["status"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "New",     value: "new" },
  { label: "Read",    value: "read" },
  { label: "Replied", value: "replied" },
];

export default function SubmissionsList({ submissions }: { submissions: ContactSubmission[] }) {
  const [filter, setFilter] = useState<ContactSubmission["status"] | "all">("all");

  const filtered = filter === "all"
    ? submissions
    : submissions.filter((s) => s.status === filter);

  const counts = {
    all: submissions.length,
    new: submissions.filter((s) => s.status === "new").length,
    read: submissions.filter((s) => s.status === "read").length,
    replied: submissions.filter((s) => s.status === "replied").length,
  };

  return (
    <>
      {/* Filter tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-6">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-150 ${
              filter === f.value
                ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                : "bg-zinc-800 border border-white/8 text-zinc-400 hover:text-white hover:border-white/15"
            }`}
          >
            {f.label}
            <span className={`text-[0.65rem] px-1.5 py-0.5 rounded-full ${
              filter === f.value ? "bg-orange-400/30 text-orange-100" : "bg-white/10 text-zinc-500"
            }`}>
              {counts[f.value]}
            </span>
          </button>
        ))}
      </div>

      {/* Cards */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <MessageSquare size={36} className="text-zinc-700 mb-4" />
          <p className="text-zinc-500 font-semibold">No submissions yet.</p>
          <p className="text-xs text-zinc-600 mt-1">Contact form submissions will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((sub) => (
            <SubmissionCard key={sub.id} sub={sub} />
          ))}
        </div>
      )}
    </>
  );
}
