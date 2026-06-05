import type { Metadata } from "next";
import IntersectionReveal from "@/components/ui/IntersectionReveal";
import ContactForm, { ContactInfo } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hindu Swad Private Limited. Whether you're a potential restaurant partner, delivery professional, investor, or food lover — we'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="section-pad warm-bg border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <span className="badge-soon mb-5 block w-fit">Get in Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.04] max-w-3xl mb-6">
              We&apos;d love to{" "}
              <span className="brand-gradient-text">hear from you.</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">
              Restaurant partner, delivery professional, investor, or just curious?
              Drop us a message and our team will get back to you within 1–2 business days.
            </p>
          </IntersectionReveal>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact info sidebar */}
            <IntersectionReveal className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-lg font-black text-zinc-900 mb-2">Contact Information</h2>
                <p className="text-sm text-zinc-500 mb-6 leading-relaxed">
                  Reach us directly or use the form. We respond to every message.
                </p>
                <ContactInfo />
              </div>
            </IntersectionReveal>

            {/* Form */}
            <IntersectionReveal className="lg:col-span-2" delay={100}>
              <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 sm:p-10">
                <h2 className="text-xl font-black text-zinc-900 mb-1">Send us a message</h2>
                <p className="text-sm text-zinc-500 mb-7">
                  Fill in the form below and we&apos;ll respond as quickly as we can.
                </p>
                <ContactForm />
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

    </main>
  );
}
