"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import {
  Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2,
} from "lucide-react";

const SUBJECTS = [
  "General Inquiry",
  "Restaurant Partnership",
  "Delivery Partner",
  "Investor Relations",
  "Media & Press",
  "Support",
  "Other",
];

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      id="contact-submit-btn"
      type="submit"
      disabled={pending}
      className="btn-primary w-full sm:w-auto px-10 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
    >
      {pending ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Sending…
        </>
      ) : (
        <>
          <Send size={15} />
          Send Message
        </>
      )}
    </button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    null
  );

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center gap-5 animate-fade-up">
        <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center">
          <CheckCircle2 size={30} className="text-green-500" />
        </div>
        <div>
          <h3 className="text-xl font-black text-zinc-900 mb-2">Message Received!</h3>
          <p className="text-sm text-zinc-500 max-w-sm">
            Thank you for reaching out. Our team will get back to you at the email address
            you provided — usually within 1–2 business days.
          </p>
        </div>
        <a href="/" className="btn-ghost text-sm px-7 py-3">
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {/* Global error */}
      {state?.error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-2xl text-sm text-red-700">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
          {state.error}
        </div>
      )}

      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-700 uppercase tracking-wide">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Ravi Kumar"
            required
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-colors ${
              state?.fieldErrors?.name ? "border-red-400 bg-red-50" : "border-zinc-200"
            }`}
          />
          {state?.fieldErrors?.name && (
            <p className="text-xs text-red-500">{state.fieldErrors.name}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-700 uppercase tracking-wide">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="ravi@example.com"
            required
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-colors ${
              state?.fieldErrors?.email ? "border-red-400 bg-red-50" : "border-zinc-200"
            }`}
          />
          {state?.fieldErrors?.email && (
            <p className="text-xs text-red-500">{state.fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="contact-phone" className="block text-xs font-bold text-zinc-700 uppercase tracking-wide">
            Phone Number <span className="text-zinc-400 font-normal normal-case">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-700 uppercase tracking-wide">
            Subject <span className="text-orange-500">*</span>
          </label>
          <select
            id="contact-subject"
            name="subject"
            required
            defaultValue=""
            className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-colors appearance-none ${
              state?.fieldErrors?.subject ? "border-red-400 bg-red-50" : "border-zinc-200"
            }`}
          >
            <option value="" disabled>Select a subject…</option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {state?.fieldErrors?.subject && (
            <p className="text-xs text-red-500">{state.fieldErrors.subject}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-700 uppercase tracking-wide">
          Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          placeholder="Tell us how we can help you…"
          required
          className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-colors resize-none ${
            state?.fieldErrors?.message ? "border-red-400 bg-red-50" : "border-zinc-200"
          }`}
        />
        {state?.fieldErrors?.message && (
          <p className="text-xs text-red-500">{state.fieldErrors.message}</p>
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <SubmitBtn />
        <p className="text-xs text-zinc-400">
          We typically respond within 1–2 business days.
        </p>
      </div>
    </form>
  );
}

/* ── Contact Info sidebar ───────────────── */
export function ContactInfo() {
  return (
    <div className="space-y-6">
      <a
        href="mailto:support@hinduswad.com"
        className="flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-2xl hover:border-orange-300 hover:shadow-md transition-all duration-300 group"
      >
        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
          <Mail size={18} className="text-orange-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Email</p>
          <p className="text-sm font-semibold text-zinc-900">support@hinduswad.com</p>
          <p className="text-xs text-zinc-400 mt-0.5">Click to send an email</p>
        </div>
      </a>

      <div className="flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-2xl">
        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <Phone size={18} className="text-orange-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Phone</p>
          <p className="text-sm font-semibold text-zinc-900">Available after launch</p>
          <p className="text-xs text-zinc-400 mt-0.5">Email is the fastest way to reach us</p>
        </div>
      </div>

      <div className="flex items-start gap-4 p-5 bg-white border border-zinc-200 rounded-2xl">
        <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
          <MapPin size={18} className="text-orange-500" />
        </div>
        <div>
          <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-0.5">Office</p>
          <p className="text-sm font-semibold text-zinc-900">Hindu Swad Pvt. Ltd.</p>
          <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
            Karnataka Regional Office<br />
            Bangalore, Karnataka, India
          </p>
        </div>
      </div>
    </div>
  );
}
