"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormSubmitted(true);
  };

  const offices = [
    {
      city: "Bangalore (HQ)",
      address: "4th Floor, Prestige Tower, MG Road, Bangalore, KA - 560001",
      phone: "+91 80 4991 2200",
      email: "blr.ops@hinduswad.in",
    },
    {
      city: "Davangere Regional",
      address: "12th Cross, Siddaveerappa Layout, Davangere, KA - 577004",
      phone: "+91 81 9225 3344",
      email: "dvg.ops@hinduswad.in",
    },
    {
      city: "Mysore Office",
      address: "Devaraj Urs Road, Subbarayanakere, Mysore, KA - 570001",
      phone: "+91 82 1244 5566",
      email: "mys.ops@hinduswad.in",
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4">Support Channels</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
            Contact Support
          </h1>
          <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
            Have questions about your recruitment process, exams, or onboarding? Get in touch with our district support centers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Office Directory column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm">
              <h2 className="text-sm font-bold text-zinc-950 mb-4">Support Hotline</h2>
              <div className="space-y-2">
                <span className="block text-xs text-zinc-400">Regional Hotline</span>
                <span className="block text-sm font-bold text-zinc-900">+91 9008 123 456</span>
                <span className="block text-[10px] text-zinc-400">Available 9 AM - 6 PM</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200 p-6 shadow-sm space-y-6">
              <h2 className="text-sm font-bold text-zinc-950">District Offices</h2>
              {offices.map((office, idx) => (
                <div key={idx} className="border-t border-zinc-100 first:border-0 pt-4 first:pt-0 space-y-1">
                  <h3 className="text-xs font-bold text-orange-500 uppercase tracking-wider">{office.city}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{office.address}</p>
                  <p className="text-[10px] text-zinc-400">Phone: {office.phone}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-zinc-200 p-8 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500 animate-pulse" />
                  <h2 className="text-xl font-bold text-zinc-950">Inquiry Sent Successfully</h2>
                  <p className="text-xs text-zinc-500 max-w-xs mx-auto">
                    A regional recruitment officer will review your request and get back to you via SMS shortly.
                  </p>
                  <Button onClick={() => setFormSubmitted(false)} className="bg-orange-500 text-white hover:bg-orange-600 rounded-full">
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-lg font-bold text-zinc-950">Submit Online Ticket</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Mobile Number</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        pattern="^[6-9]\d{9}$"
                        placeholder="9876543210"
                        className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">Inquiry Message</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      placeholder="Detail your inquiry or reference ID here..."
                      className="w-full px-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-orange-500/30 resize-none"
                    ></textarea>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2">
                    {isSubmitting ? "Sending..." : <><Send size={14} /> Send Ticket</>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
