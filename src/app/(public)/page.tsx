import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import IntersectionReveal from "@/components/ui/IntersectionReveal";
import {
  Search, Star, BookOpen, Zap, Sparkles, MapPin,
  ArrowRight, Clock, CheckCircle2, Mail, ChevronRight,
  Globe, Heart, Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hindu Swad - India's Next Food Delivery & Discovery Platform | Coming Soon",
  description:
    "Hindu Swad Private Limited is building India's next food delivery and restaurant exploration platform. Taste with Trust. Launching soon.",
};

/* ─── Data ─────────────────────────────────── */

const features = [
  {
    icon: Search,
    title: "Smart Restaurant Discovery",
    description:
      "Find the best dining spots near you with intelligent, personalised search. Filter by cuisine, ratings, distance, and ambience.",
    color: "bg-orange-50 text-orange-500",
  },
  {
    icon: BookOpen,
    title: "Full Menu Browsing",
    description:
      "Explore complete menus with photos, descriptions, dietary tags, and pricing - before you even step out the door.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Star,
    title: "Trusted Dining Reviews",
    description:
      "Real reviews from verified diners. No fake ratings - only authentic feedback to help you make confident choices.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Sparkles,
    title: "Personalised Recommendations",
    description:
      "Our algorithm learns your taste preferences and serves up dining recommendations tailored uniquely to you.",
    color: "bg-rose-50 text-rose-500",
  },
  {
    icon: MapPin,
    title: "Local Food Exploration",
    description:
      "Discover hidden gems and neighbourhood favourites you never knew existed. Celebrate the richness of local Indian cuisine.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Get your favorite meals delivered hot and fresh to your doorstep with our real-time GPS tracked delivery partners.",
    color: "bg-purple-50 text-purple-600",
  },
];

const benefits = [
  {
    icon: Globe,
    title: "Discover New Places",
    description: "Step beyond your usual spots and uncover remarkable dining experiences across your city.",
  },
  {
    icon: Star,
    title: "Trusted Reviews",
    description: "Make informed choices based on verified, honest reviews from real diners - not bots.",
  },
  {
    icon: Zap,
    title: "Effortless Exploration",
    description: "A beautifully simple experience that makes finding great food intuitive and delightful.",
  },
  {
    icon: Heart,
    title: "Built for India",
    description: "Designed from the ground up for Indian food culture - regional cuisines, local gems, authentic flavours.",
  },
];

const timeline = [
  {
    phase: "Phase 01",
    title: "Platform Development",
    desc: "Building the core technology, design system, and infrastructure that powers Hindu Swad.",
    status: "active",
    progress: 75,
  },
  {
    phase: "Phase 02",
    title: "Restaurant Onboarding",
    desc: "Partnering with outstanding restaurants across Karnataka to build our curated discovery network.",
    status: "upcoming",
    progress: 0,
  },
  {
    phase: "Phase 03",
    title: "Beta Launch",
    desc: "Invite-only launch with select cities. Early access for food enthusiasts and restaurant partners.",
    status: "upcoming",
    progress: 0,
  },
  {
    phase: "Phase 04",
    title: "Public Launch",
    desc: "Hindu Swad goes live for all users. Taste with Trust - available nationwide.",
    status: "upcoming",
    progress: 0,
  },
];

/* ─── Page ─────────────────────────────────── */

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center py-16"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover object-center opacity-30"
            priority
          />
          {/* Gradient overlay - keeps text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/30" />
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-24 right-12 w-64 h-64 bg-orange-500/8 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-24 left-8 w-80 h-80 bg-amber-400/6 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 w-full">
          <div className="max-w-3xl">

            {/* Coming soon badge */}
            <div className="mb-7 animate-fade-up" style={{ animationDelay: "0ms" }}>
              <span className="badge-coming">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-soft" />
                Coming Soon
              </span>
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.04] mb-6"
              style={{ animation: "fadeUp 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}
            >
              India&apos;s Next{" "}
              <span className="brand-gradient-text">Food Discovery</span>{" "}
              Platform.
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg sm:text-xl text-zinc-500 leading-relaxed max-w-xl mb-8"
              style={{ animation: "fadeUp 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}
            >
              Connecting food lovers with great dining experiences across India.
              Taste with Trust - launching soon.
            </p>

            {/* CTA */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: "fadeUp 0.8s 0.3s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}
            >
              <a href="#notify" className="btn-primary">
                <Mail size={16} />
                Notify Me at Launch
              </a>
              <Link href="/about" className="btn-ghost">
                Our Story <ChevronRight size={15} />
              </Link>
            </div>

            {/* Micro-stats */}
            <div
              className="mt-10 flex flex-wrap gap-6"
              style={{ animation: "fadeUp 0.8s 0.4s cubic-bezier(0.16,1,0.3,1) forwards", opacity: 0 }}
            >
              {[
                { label: "Cities at launch", value: "Karnataka" },
                { label: "Platform status", value: "In Development" },
                { label: "Est. launch", value: "2026" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="text-xs text-zinc-400 font-medium">{item.label}</span>
                  <span className="text-sm font-bold text-zinc-800">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ABOUT / BRAND STORY
      ══════════════════════════════════════ */}
      <section className="section-pad warm-bg border-y border-zinc-100" id="about" aria-labelledby="about-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <IntersectionReveal>
              <span className="badge-soon mb-4 block w-fit">About Us</span>
              <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-6 leading-[1.1]">
                We&apos;re building something{" "}
                <span className="brand-gradient-text">great for India.</span>
              </h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-4">
                <strong className="text-zinc-800">Hindu Swad Private Limited</strong> is a Bangalore-based food-tech company on a mission to transform the way India discovers and explores great food. We believe every city in India has extraordinary dining experiences waiting to be found.
              </p>
              <p className="text-base text-zinc-500 leading-relaxed mb-4">
                Our platform will make restaurant discovery effortless, authentic, and deeply personalised - celebrating the rich diversity of Indian cuisine, from iconic street food stalls to fine dining destinations.
              </p>
              <p className="text-base text-zinc-500 leading-relaxed">
                We are currently in active development, building the technology and partnerships that will bring <em className="not-italic font-semibold text-zinc-700">&ldquo;Taste with Trust&rdquo;</em> to food lovers across the country.
              </p>

              <div className="mt-8">
                <Link href="/about" className="btn-ghost">
                  Read our full story <ArrowRight size={14} />
                </Link>
              </div>
            </IntersectionReveal>

            {/* Vision card */}
            <IntersectionReveal delay={180}>
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-orange-500/6 rounded-full blur-2xl pointer-events-none" />
                <div className="relative bg-zinc-950 rounded-3xl p-8 sm:p-10 overflow-hidden group">
                  <div className="absolute -top-16 -right-16 w-56 h-56 bg-orange-500/15 rounded-full blur-3xl group-hover:opacity-100 opacity-70 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 space-y-8">
                    {/* Vision */}
                    <div>
                      <span className="badge-soon mb-3 block w-fit" style={{ background: "hsl(16 85% 50% / 0.15)", borderColor: "hsl(16 85% 50% / 0.3)", color: "hsl(16 85% 65%)" }}>Our Vision</span>
                      <h3 className="text-xl font-black text-white mb-2">To be India&apos;s most loved food delivery platform.</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        A platform where every Indian can discover great food, every restaurant gets discovered, and every dining experience is an adventure.
                      </p>
                    </div>

                    <div className="border-t border-white/8 pt-6">
                      <span className="badge-soon mb-3 block w-fit" style={{ background: "hsl(16 85% 50% / 0.15)", borderColor: "hsl(16 85% 50% / 0.3)", color: "hsl(16 85% 65%)" }}>Our Mission</span>
                      <h3 className="text-xl font-black text-white mb-2">Connecting food lovers with authentic experiences.</h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        We make finding great food simple, trustworthy, and joyful - celebrating India&apos;s rich and diverse culinary culture.
                      </p>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-soft" />
                      <span className="text-xs font-semibold text-zinc-400">Platform in active development</span>
                    </div>
                  </div>
                </div>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHAT WE ARE BUILDING
      ══════════════════════════════════════ */}
      <section className="section-pad bg-white" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-soon mb-4 block mx-auto w-fit">Features</span>
              <h2 id="features-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-4">
                What we&apos;re building
              </h2>
              <p className="text-base text-zinc-500">
                A thoughtfully designed platform where every feature is built around making food discovery joyful for Indian diners.
              </p>
            </div>
          </IntersectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <IntersectionReveal key={f.title} delay={i * 70}>
                <div className="card-base p-7 group relative overflow-hidden">
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/4 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className={`w-11 h-11 ${f.color} rounded-xl flex items-center justify-center mb-5`}>
                    <f.icon size={19} />
                  </div>
                  <h3 className="text-[0.95rem] font-bold text-zinc-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">{f.description}</p>
                  <span className="badge-soon">Available Soon</span>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY HINDU SWAD
      ══════════════════════════════════════ */}
      <section className="section-pad warm-bg border-y border-zinc-100" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-soon mb-4 block mx-auto w-fit">Why Hindu Swad</span>
              <h2 id="why-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-4">
                A different kind of food platform.
              </h2>
              <p className="text-base text-zinc-500">
                Built with love for India, for Indian food, and for the people who live for great meals.
              </p>
            </div>
          </IntersectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <IntersectionReveal key={b.title} delay={i * 80}>
                <div className="card-base p-6 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                    <b.icon size={20} className="text-orange-500" />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2">{b.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{b.description}</p>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LAUNCH TIMELINE
      ══════════════════════════════════════ */}
      <section className="section-pad bg-zinc-950" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-xl mx-auto mb-14">
              <span
                className="badge-soon mb-4 block mx-auto w-fit"
                style={{ background: "hsl(16 85% 50% / 0.15)", borderColor: "hsl(16 85% 50% / 0.3)", color: "hsl(16 85% 65%)" }}
              >
                Roadmap
              </span>
              <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
                Our launch roadmap
              </h2>
              <p className="text-sm text-zinc-400">
                We&apos;re building methodically and transparently - here&apos;s where we are.
              </p>
            </div>
          </IntersectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {timeline.map((item, i) => (
              <IntersectionReveal key={item.phase} delay={i * 90}>
                <div
                  className={`relative rounded-2xl p-6 border transition-all duration-300 ${
                    item.status === "active"
                      ? "bg-orange-500/10 border-orange-500/30"
                      : "bg-white/4 border-white/8"
                  }`}
                >
                  {/* Phase label */}
                  <p
                    className={`text-[0.65rem] font-bold uppercase tracking-widest mb-3 ${
                      item.status === "active" ? "text-orange-400" : "text-zinc-600"
                    }`}
                  >
                    {item.phase}
                  </p>

                  {/* Status indicator */}
                  <div className="flex items-center gap-2 mb-3">
                    {item.status === "active" ? (
                      <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse-soft" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-zinc-700 flex-shrink-0" />
                    )}
                    <h3 className={`text-sm font-bold leading-tight ${
                      item.status === "active" ? "text-white" : "text-zinc-400"
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs text-zinc-500 leading-relaxed mb-4">{item.desc}</p>

                  {/* Progress bar (active only) */}
                  {item.status === "active" && (
                    <div>
                      <div className="flex justify-between text-[10px] font-bold mb-1.5">
                        <span className="text-orange-400">In Progress</span>
                        <span className="text-orange-400">{item.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full brand-gradient rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {item.status !== "active" && (
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Upcoming</span>
                  )}
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          NOTIFY ME / CONTACT
      ══════════════════════════════════════ */}
      <section className="section-pad warm-bg border-t border-zinc-100" id="notify" aria-labelledby="notify-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: Info */}
            <IntersectionReveal>
              <span className="badge-soon mb-4 block w-fit">Stay Updated</span>
              <h2 id="notify-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-5 leading-[1.1]">
                Be the first to know<br />when we launch.
              </h2>
              <p className="text-base text-zinc-500 leading-relaxed mb-8">
                We&apos;re working hard to bring Hindu Swad to life. Leave us your details and we&apos;ll notify you the moment we go live.
              </p>

              {/* Contact info */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={15} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-sm font-semibold text-zinc-800">support@hinduswad.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={15} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Registered Office</p>
                    <p className="text-sm font-semibold text-zinc-800">Hindu Swad Private Limited</p>
                    <p className="text-xs text-zinc-500">Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka</p>
                  </div>
                </div>
              </div>
            </IntersectionReveal>

            {/* Right: Notify form */}
            <IntersectionReveal delay={160}>
              <div className="card-base p-8">
                <h3 className="text-lg font-black text-zinc-950 mb-1">Get notified at launch</h3>
                <p className="text-xs text-zinc-400 mb-6">We&apos;ll send you one email when we go live. No spam.</p>

                <form
                  action="#"
                  className="space-y-4"
                  aria-label="Launch notification form"
                >
                  <div>
                    <label htmlFor="notify-name" className="block text-xs font-bold text-zinc-600 mb-1.5 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      id="notify-name"
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="notify-email" className="block text-xs font-bold text-zinc-600 mb-1.5 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      id="notify-email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="notify-message" className="block text-xs font-bold text-zinc-600 mb-1.5 uppercase tracking-wider">
                      Message (optional)
                    </label>
                    <textarea
                      id="notify-message"
                      rows={3}
                      placeholder="Any questions or feedback for the team?"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-400 transition-all duration-200 placeholder:text-zinc-400 resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    <Mail size={15} />
                    Notify Me at Launch
                  </button>
                </form>

                <p className="text-[10px] text-zinc-400 mt-4 text-center">
                  By submitting, you agree to our{" "}
                  <Link href="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BOTTOM CTA STRIP
      ══════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 py-14" aria-label="Closing call to action">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <div className="flex justify-center mb-3">
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Hindu Swad</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Taste with Trust.
          </h2>
          <p className="text-orange-100 text-sm max-w-md mx-auto mb-8">
            Great food deserves to be found. We&apos;re building the platform that will make that possible for every food lover in India.
          </p>
          <a href="#notify" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors duration-200 text-sm shadow-xl">
            <Clock size={15} /> Notify Me - It&apos;s Free
          </a>
        </div>
      </section>
    </main>
  );
}
