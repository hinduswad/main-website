"use client";

import { useState } from "react";
import IntersectionReveal from "@/components/ui/IntersectionReveal";
import {
  Mail, MapPin, Send, CheckCircle2, Phone,
  MessageCircle, Store, Briefcase, AlertTriangle,
  Megaphone, HeadphonesIcon, Clock,
} from "lucide-react";

/* ─── Contact directory data ─────────────────── */
const contactChannels = [
  {
    category: "Customer Support",
    icon: HeadphonesIcon,
    accent: "bg-orange-50 border-orange-100 text-orange-500",
    description: "For order issues, delivery complaints, refunds, and account queries.",
    contacts: [
      { label: "Support Email", value: "support@hinduswad.com", href: "mailto:support@hinduswad.com", type: "email" },
      { label: "Customer Helpline", value: "+91 97405 88433", href: "tel:+919740588433", type: "phone" },
      { label: "In-App Live Chat", value: "Available 24/7 in the app", href: null, type: "info" },
      { label: "Help Centre", value: "help.hinduswad.com", href: "https://help.hinduswad.com", type: "link" },
    ],
    hours: "Available 24 hours a day, 7 days a week, 365 days a year.",
  },
  {
    category: "Restaurant Partner Inquiries",
    icon: Store,
    accent: "bg-blue-50 border-blue-100 text-blue-600",
    description: "For restaurant onboarding, partnership terms, menu setup, and partner account support.",
    contacts: [
      { label: "Partner Email", value: "contact@hinduswad.com", href: "mailto:contact@hinduswad.com", type: "email" },
      { label: "Partner Helpline", value: "+91 97405 88433", href: "tel:+919740588433", type: "phone" },
    ],
    hours: "Monday to Saturday, 9:00 AM – 8:00 PM IST.",
  },
  {
    category: "Corporate & Advertising",
    icon: Briefcase,
    accent: "bg-purple-50 border-purple-100 text-purple-600",
    description: "For corporate catering contracts, bulk orders, brand advertising, and co-marketing proposals.",
    contacts: [
      { label: "Business Email", value: "contact@hinduswad.com", href: "mailto:contact@hinduswad.com", type: "email" },
    ],
    hours: "Monday to Friday, 10:00 AM – 6:00 PM IST.",
  },
  {
    category: "Media & Press",
    icon: Megaphone,
    accent: "bg-amber-50 border-amber-100 text-amber-600",
    description: "For press enquiries, interview requests, editorial coverage, and media kit access.",
    contacts: [
      { label: "Press Email", value: "contact@hinduswad.com", href: "mailto:contact@hinduswad.com", type: "email" },
    ],
    hours: "Responses within 1 business day.",
  },
];

const grievanceOfficer = {
  name: "Hanumanth",
  designation: "Grievance Officer",
  company: "Hindu Swad Private Limited",
  email: "support@hinduswad.com",
  phone: "+91 9900754588",
  address: "Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India",
  hours: "Monday to Friday, 10:00 AM – 6:00 PM IST",
  responseTime: "Acknowledgement within 24 hours; Resolution within 30 days of receipt.",
  legalBasis: "Appointed under Rule 3(2) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021 and the Consumer Protection Act, 2019.",
};

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={26} className="text-green-500" />
        </div>
        <h3 className="text-lg font-black text-zinc-900 mb-2">Message Received</h3>
        <p className="text-sm text-zinc-500 max-w-xs mx-auto leading-relaxed">
          Thank you for contacting Hindu Swad. Our team will review your message and respond within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-label="General contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="cf-name" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            required
            placeholder="Your full name"
            className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-phone" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
          Phone Number (optional)
        </label>
        <input
          id="cf-phone"
          type="tel"
          placeholder="+91 98765 43210"
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
        />
      </div>

      <div>
        <label htmlFor="cf-type" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
          Inquiry Type <span className="text-orange-500">*</span>
        </label>
        <select
          id="cf-type"
          required
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 text-zinc-700"
        >
          <option value="">Select inquiry type</option>
          <option value="customer-support">Customer Support</option>
          <option value="restaurant-partner">Restaurant Partnership</option>
          <option value="corporate">Corporate / Advertising</option>
          <option value="press">Media & Press</option>
          <option value="grievance">Grievance / Complaint</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="cf-subject" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
          Subject <span className="text-orange-500">*</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          required
          placeholder="Brief subject of your inquiry"
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="block text-[0.65rem] font-bold text-zinc-500 uppercase tracking-widest mb-1.5">
          Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          id="cf-message"
          rows={5}
          required
          placeholder="Please describe your query or concern in detail..."
          className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50/80 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <span className="flex items-center gap-2"><Send size={15} /> Send Message</span>
        )}
      </button>

      <p className="text-[10px] text-zinc-400 text-center leading-relaxed">
        By submitting this form you agree to our{" "}
        <a href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</a>.
        We will respond within 1–2 business days.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="section-pad warm-bg border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8 relative">
          <IntersectionReveal>
            <span className="badge-soon mb-5 block w-fit">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.04] max-w-2xl mb-5">
              How can we{" "}
              <span className="brand-gradient-text">help you?</span>
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
              Whether you&apos;re a customer with an order issue, a restaurant looking to partner, a journalist, or someone with a grievance — you&apos;ll find the right contact below. We are committed to responding to every inquiry promptly and professionally.
            </p>
          </IntersectionReveal>
        </div>
      </section>

      {/* Contact Directory */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mb-10">Contact Directory</h2>
          </IntersectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {contactChannels.map((ch, i) => (
              <IntersectionReveal key={ch.category} delay={i * 80}>
                <div className="card-base p-7 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${ch.accent}`}>
                      <ch.icon size={18} />
                    </div>
                    <h3 className="text-sm font-black text-zinc-900">{ch.category}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-5">{ch.description}</p>

                  <div className="space-y-3 mb-5">
                    {ch.contacts.map((c) => (
                      <div key={c.label} className="flex items-start gap-3">
                        <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-wider w-24 flex-shrink-0 mt-0.5">{c.label}</span>
                        {c.href ? (
                          <a href={c.href} className="text-xs font-semibold text-zinc-800 hover:text-orange-500 transition-colors break-all">
                            {c.value}
                          </a>
                        ) : (
                          <span className="text-xs font-semibold text-zinc-800">{c.value}</span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t border-zinc-100">
                    <Clock size={11} className="text-zinc-400 flex-shrink-0" />
                    <p className="text-[10px] text-zinc-400">{ch.hours}</p>
                  </div>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grievance Officer */}
      <section className="section-pad warm-bg border-y border-zinc-100" aria-labelledby="grievance-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={20} className="text-red-500" />
              </div>
              <div>
                <h2 id="grievance-heading" className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mb-2">
                  Grievance Officer
                </h2>
                <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl">
                  In accordance with the <strong className="text-zinc-700">Consumer Protection (E-Commerce) Rules, 2020</strong>, the <strong className="text-zinc-700">Consumer Protection Act, 2019</strong>, and the <strong className="text-zinc-700">Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, Hindu Swad Private Limited has appointed a Grievance Officer to handle consumer complaints and disputes arising from the use of our platform.
                </p>
              </div>
            </div>
          </IntersectionReveal>

          <IntersectionReveal delay={100}>
            <div className="bg-white border-2 border-red-100 rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Officer details */}
                <div>
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-5">Officer Details</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Full Name", value: grievanceOfficer.name },
                      { label: "Designation", value: grievanceOfficer.designation },
                      { label: "Organisation", value: grievanceOfficer.company },
                      { label: "Email", value: grievanceOfficer.email, href: `mailto:${grievanceOfficer.email}` },
                      { label: "Phone", value: grievanceOfficer.phone, href: `tel:${grievanceOfficer.phone}` },
                    ].map((d) => (
                      <div key={d.label} className="flex items-start gap-3">
                        <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-wider w-28 flex-shrink-0 mt-0.5">{d.label}</span>
                        {d.href ? (
                          <a href={d.href} className="text-sm font-semibold text-zinc-800 hover:text-orange-500 transition-colors">{d.value}</a>
                        ) : (
                          <span className="text-sm font-semibold text-zinc-800">{d.value}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office & timelines */}
                <div>
                  <h3 className="text-xs font-black text-zinc-400 uppercase tracking-widest mb-5">Contact & Timelines</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Registered Address</span>
                      <p className="text-sm text-zinc-800 font-semibold leading-relaxed">{grievanceOfficer.address}</p>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Working Hours</span>
                      <p className="text-sm text-zinc-800 font-semibold">{grievanceOfficer.hours}</p>
                    </div>
                    <div>
                      <span className="text-[0.6rem] font-bold text-zinc-400 uppercase tracking-wider block mb-1">Response Commitment</span>
                      <p className="text-sm text-zinc-800 font-semibold">{grievanceOfficer.responseTime}</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="text-[10px] font-semibold text-amber-700 mb-1">Legal Basis</p>
                    <p className="text-[10px] text-amber-600 leading-relaxed">{grievanceOfficer.legalBasis}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <h3 className="text-xs font-black text-zinc-400 uppercase tracking-wider mb-3">How to File a Grievance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { step: "01", title: "Submit via Email", desc: `Send a detailed complaint to ${grievanceOfficer.email} with your name, contact details, order ID (if applicable), and a clear description of the issue.` },
                    { step: "02", title: "Acknowledgement", desc: "Your grievance will be acknowledged within 24 hours of receipt with a unique grievance reference number." },
                    { step: "03", title: "Resolution", desc: "Your grievance will be investigated and resolved within 30 days of acknowledgement. If unsatisfied, you may escalate to the Consumer Disputes Redressal Commission." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3">
                      <div className="w-7 h-7 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white">
                        {s.step}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-zinc-800 mb-1">{s.title}</p>
                        <p className="text-[10px] text-zinc-500 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* Corporate Address */}
      <section className="py-12 bg-zinc-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4">Registered Corporate Office</h3>
              <p className="text-lg font-black text-white mb-1">Hindu Swad Private Limited</p>
              <p className="text-sm text-zinc-400">Hindu Swad Pvt. Ltd., Karnataka Regional Office</p>
              <p className="text-sm text-zinc-400">Bangalore, Karnataka — 560001, India</p>
              <p className="text-xs text-zinc-600 mt-2">CIN: U63120KA2025PTC206410 &nbsp;|&nbsp; GSTIN: 29AAICH1082Q1ZY &nbsp;|&nbsp; FSSAI: 11225999000308</p>
            </div>
            <div className="flex items-center gap-3 md:justify-end">
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-soft" />
              <span className="text-sm font-semibold text-zinc-300">Platform launching in 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center mb-10">
              <span className="badge-soon mb-4 block mx-auto w-fit">Send a Message</span>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 mb-3">
                Can&apos;t find what you need?
              </h2>
              <p className="text-sm text-zinc-500">Fill in the form below and our team will get back to you within 1–2 business days.</p>
            </div>
          </IntersectionReveal>

          <IntersectionReveal delay={100}>
            <div className="card-base p-8 sm:p-10">
              <ContactForm />
            </div>
          </IntersectionReveal>
        </div>
      </section>
    </main>
  );
}
