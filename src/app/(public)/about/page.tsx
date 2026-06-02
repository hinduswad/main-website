import type { Metadata } from "next";
import IntersectionReveal from "@/components/ui/IntersectionReveal";
import { Target, Eye, Heart, Leaf, Zap, Globe, Award, Users, Store, Bike, ShoppingBag, ArrowRight, CheckCircle2, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Hindu Swad Private Limited",
  description:
    "Learn about Hindu Swad Private Limited — our company identity, mission, the three-pillar ecosystem we serve (Customers, Restaurant Partners, Delivery Fleet), and our operational footprint across India.",
};

/* ─── Data ─────────────────────────────────── */

const pillars = [
  {
    icon: ShoppingBag,
    title: "Customers",
    headline: "For food lovers everywhere.",
    description:
      "We serve end consumers seeking a premium, trustworthy, and effortless food discovery and ordering experience. From discovering new restaurants to tracking deliveries in real time, the Hindu Swad app is built to delight at every touchpoint — offering personalised recommendations, verified reviews, transparent pricing, and a seamless checkout flow.",
    points: [
      "Personalised restaurant & cuisine discovery",
      "Verified, tamper-proof diner reviews",
      "Real-time GPS order tracking",
      "Transparent pricing with no hidden markups",
      "24/7 customer support for order issues",
    ],
    accent: "from-orange-50 to-amber-50 border-orange-100",
    iconBg: "bg-orange-500",
  },
  {
    icon: Store,
    title: "Restaurant Partners",
    headline: "Empowering India's restaurants to grow.",
    description:
      "We serve restaurant businesses — from small neighbourhood eateries to established chains — by providing them with a powerful digital storefront, a massive customer acquisition channel, and intelligent operational tools. Our partner dashboard gives restaurants real-time order management, revenue analytics, menu control, and promotional tooling.",
    points: [
      "Digital storefront with photo menus and hours",
      "Real-time order management dashboard",
      "Revenue analytics and customer insights",
      "Promotional tools: discounts, featured placement",
      "Dedicated partner onboarding and support",
    ],
    accent: "from-blue-50 to-indigo-50 border-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    icon: Bike,
    title: "Delivery Fleet",
    headline: "Building dignified livelihoods for delivery professionals.",
    description:
      "Our delivery partner network forms the backbone of our last-mile logistics. Hindu Swad treats delivery executives as valued professional partners — not just contractors. We provide earnings transparency, route optimisation, free insurance coverage, and a fair incentive structure that rewards reliable, high-quality performance.",
    points: [
      "Competitive per-delivery earnings + surge bonuses",
      "AI-optimised route assignments",
      "Free personal accident insurance (₹5 lakh cover)",
      "Weekly bank payouts with zero delays",
      "Partner app with in-app support and earnings tracker",
    ],
    accent: "from-green-50 to-emerald-50 border-green-100",
    iconBg: "bg-green-600",
  },
];

const values = [
  {
    icon: Heart,
    title: "Food First",
    description: "Every feature and decision begins with one question: does this make the food experience better? We exist to serve great food discovery, nothing else.",
    color: "bg-rose-50 text-rose-500",
  },
  {
    icon: Globe,
    title: "Built for India",
    description: "India's food culture is unmatched in its diversity. We build specifically for Indian consumers, Indian restaurant businesses, and Indian delivery professionals.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: Leaf,
    title: "Authentic & Trustworthy",
    description: "No fake reviews, no manipulated ratings, no hidden fees. We enforce strict quality controls across our entire ecosystem to earn and keep your trust.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "Speed isn't just a feature — it's the foundation. From app load time to delivery ETA, every millisecond and every minute matters to us.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Award,
    title: "Partner Success",
    description: "Restaurant partners and delivery partners succeed when we succeed. We tie our growth directly to theirs through fair commissions and generous incentives.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We create real economic opportunity — for restaurant owners, delivery professionals, and local food businesses that deserve a bigger stage.",
    color: "bg-blue-50 text-blue-600",
  },
];

const operationalFacts = [
  { value: "25+", label: "Cities at launch", sub: "Across Karnataka" },
  { value: "1,200+", label: "Restaurant Partners", sub: "Onboarded at launch" },
  { value: "₹0", label: "Setup fee", sub: "For restaurant partners" },
  { value: "₹5L", label: "Accident coverage", sub: "Per delivery partner" },
];

const team = [
  {
    name: "[Founder Name]",
    title: "Founder & Chief Executive Officer",
    bio: "Visionary entrepreneur with deep conviction in the potential of India's food economy and the technology to transform it.",
    avatar: "F",
    bg: "bg-orange-500",
  },
  {
    name: "[Co-Founder Name]",
    title: "Co-Founder & Chief Operations Officer",
    bio: "Operations leader specialising in last-mile logistics, supply chain strategy, and building scalable ground-level operations.",
    avatar: "C",
    bg: "bg-blue-600",
  },
  {
    name: "[Tech Lead Name]",
    title: "Chief Technology Officer",
    bio: "Full-stack technologist with deep experience building consumer platforms for India's mobile-first digital economy.",
    avatar: "T",
    bg: "bg-green-600",
  },
  {
    name: "[Growth Lead Name]",
    title: "Head of Growth & Partnerships",
    bio: "Growth strategist driving restaurant onboarding, city expansion, and commercial partnerships across Karnataka and beyond.",
    avatar: "G",
    bg: "bg-purple-600",
  },
];

/* ─── Page ─────────────────────────────────── */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="section-pad warm-bg border-b border-zinc-100 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-25 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <span className="badge-soon mb-5 block w-fit">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.04] max-w-4xl mb-6">
              Connecting India to great food — one{" "}
              <span className="brand-gradient-text">discovery at a time.</span>
            </h1>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl">
              Hindu Swad Private Limited is a Bangalore-based food-technology company building India&apos;s most trusted end-to-end food discovery, ordering, and delivery platform.
            </p>
          </IntersectionReveal>
        </div>
      </section>

      {/* ── Company Identity ── */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Mission */}
            <IntersectionReveal className="lg:col-span-7 flex">
              <div className="bg-zinc-950 rounded-3xl p-9 sm:p-12 w-full relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-500/12 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-orange-500/15 rounded-xl flex items-center justify-center mb-6">
                    <Target size={18} className="text-orange-400" />
                  </div>
                  <p className="text-[0.6rem] font-black text-orange-400 uppercase tracking-[0.15em] mb-2">Mission Statement</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mb-5 leading-tight">Our Mission</h2>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    To build India&apos;s most trusted food discovery and delivery ecosystem — a platform that empowers consumers to effortlessly find and experience extraordinary food, enables restaurants of every size to grow their business through technology, and creates fair, dignified, and well-compensated livelihoods for India&apos;s delivery workforce.
                  </p>
                  <div className="mt-7 pt-7 border-t border-white/8">
                    <p className="text-[0.6rem] font-black text-orange-400 uppercase tracking-[0.15em] mb-2">Core Value Proposition</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      We connect food lovers with the best restaurants in their city — delivering meals that are <em className="not-italic text-white font-semibold">fresh, fast, and reliable</em> — while building a technology layer that transforms how India&apos;s restaurant industry operates and grows.
                    </p>
                  </div>
                </div>
              </div>
            </IntersectionReveal>

            {/* Vision */}
            <IntersectionReveal className="lg:col-span-5 flex" delay={150}>
              <div className="border border-zinc-200/80 rounded-3xl p-9 sm:p-12 w-full relative overflow-hidden group hover:border-orange-200 transition-colors duration-300 warm-bg">
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6">
                    <Eye size={18} className="text-orange-500" />
                  </div>
                  <p className="text-[0.6rem] font-black text-orange-500 uppercase tracking-[0.15em] mb-2">Vision Statement</p>
                  <h2 className="text-2xl sm:text-3xl font-black text-zinc-950 mb-5 leading-tight">Our Vision</h2>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    To be the definitive infrastructure layer for India&apos;s food economy — a platform where every great restaurant is discoverable, every delivery is reliable, every diner is satisfied, and every stakeholder in the food supply chain prospers.
                  </p>
                  <div className="mt-7 pt-7 border-t border-zinc-200">
                    <p className="text-xs font-bold text-zinc-800 mb-1">Tagline</p>
                    <p className="text-orange-500 font-black text-xl tracking-tight">&ldquo;Taste with Trust&rdquo;</p>
                    <p className="text-xs text-zinc-400 mt-1">Every interaction on our platform is built on this promise.</p>
                  </div>
                </div>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* ── Operational Facts ── */}
      <section className="bg-orange-500 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {operationalFacts.map((f) => (
              <div key={f.label}>
                <p className="text-3xl sm:text-4xl font-black text-white">{f.value}</p>
                <p className="text-sm font-bold text-orange-100 mt-0.5">{f.label}</p>
                <p className="text-xs text-orange-200 mt-0.5">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Three-Pillar Ecosystem ── */}
      <section className="section-pad bg-white" aria-labelledby="ecosystem-heading">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="badge-soon mb-4 block mx-auto w-fit">The Ecosystem</span>
              <h2 id="ecosystem-heading" className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-4">
                We serve three distinct pillars
              </h2>
              <p className="text-base text-zinc-500 leading-relaxed">
                Hindu Swad is not a single-sided platform. Our ecosystem is built to serve three interconnected groups — and the value we create for each amplifies the value for all.
              </p>
            </div>
          </IntersectionReveal>

          <div className="space-y-6">
            {pillars.map((pillar, i) => (
              <IntersectionReveal key={pillar.title} delay={i * 100}>
                <div className={`rounded-3xl border bg-gradient-to-br ${pillar.accent} p-8 sm:p-10 flex flex-col lg:flex-row gap-8 items-start`}>
                  {/* Icon + Title */}
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 ${pillar.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <pillar.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-black text-zinc-950">{pillar.title}</h3>
                    <p className="text-sm font-semibold text-zinc-500 mt-1 max-w-[180px]">{pillar.headline}</p>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <p className="text-sm text-zinc-600 leading-relaxed mb-6">{pillar.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-2.5 text-xs font-medium text-zinc-700">
                          <CheckCircle2 size={13} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="section-pad warm-bg border-y border-zinc-100">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center mb-12">
              <span className="badge-soon mb-4 block mx-auto w-fit">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">Why we built Hindu Swad</h2>
            </div>
            <div className="space-y-5 text-[0.93rem] text-zinc-600 leading-[1.85]">
              <p>
                India is home to one of the world&apos;s most extraordinary food cultures. From the slow-cooked biryanis of Hyderabad and the coconut-rich curries of Kerala to the robust thalis of Punjab and the delicate coastal seafood of Mangalore — every region, every city, every street tells a culinary story unlike any other.
              </p>
              <p>
                Yet for all this abundance, discovering great food remains harder than it should be. Outstanding local restaurants remain invisible outside their neighbourhoods. Hidden gems go unnoticed. Diners make uninformed choices based on unreliable, outdated, or manipulated information. Restaurant owners lack the digital tools to grow. Delivery professionals lack fair compensation structures and basic protections.
              </p>
              <p>
                We founded <strong className="text-zinc-900">Hindu Swad Private Limited</strong> in Bangalore with the conviction that India&apos;s food economy deserves modern, trustworthy digital infrastructure — not an afterthought, but a purpose-built system that works for everyone in the ecosystem.
              </p>
              <p>
                <strong className="text-zinc-900">&ldquo;Taste with Trust&rdquo;</strong> is not a marketing slogan. It is our operating principle. Every feature we build, every policy we enforce, every partner we onboard is evaluated against one standard: does it earn and keep the trust of the people we serve?
              </p>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="badge-soon mb-4 block mx-auto w-fit">Our Values</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-950 mb-4">What we stand for</h2>
              <p className="text-sm text-zinc-500">These aren&apos;t wall posters. They are the standards to which we hold every decision, every hire, and every feature.</p>
            </div>
          </IntersectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <IntersectionReveal key={v.title} delay={i * 70}>
                <div className="card-base p-7 group">
                  <div className={`w-10 h-10 ${v.color} rounded-xl flex items-center justify-center mb-5`}>
                    <v.icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-2 group-hover:text-orange-500 transition-colors duration-200">{v.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">{v.description}</p>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="section-pad warm-bg border-y border-zinc-100">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="badge-soon mb-4 block mx-auto w-fit">Leadership Team</span>
              <h2 className="text-3xl font-black tracking-tight text-zinc-950 mb-3">The people behind Hindu Swad</h2>
              <p className="text-sm text-zinc-500">Experienced operators, technologists, and strategists united by a shared passion for India&apos;s food ecosystem.</p>
            </div>
          </IntersectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <IntersectionReveal key={m.name} delay={i * 80}>
                <div className="card-base p-7 text-center hover-lift-premium">
                  <div className={`w-14 h-14 ${m.bg} rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                    <span className="text-xl font-black text-white">{m.avatar}</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1">{m.name}</h3>
                  <p className="text-xs text-orange-500 font-semibold mb-3 leading-tight">{m.title}</p>
                  <p className="text-xs text-zinc-500 leading-relaxed">{m.bio}</p>
                </div>
              </IntersectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Scope ── */}
      <section className="section-pad bg-zinc-950">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-black text-white mb-4">Operational Footprint</h2>
              <p className="text-sm text-zinc-400">Our initial launch covers Karnataka, India — with a phased expansion roadmap across South India and beyond.</p>
            </div>
          </IntersectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cities */}
            <IntersectionReveal>
              <div className="bg-white/4 border border-white/8 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <MapPin size={16} className="text-orange-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Launch Cities — Karnataka</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Bangalore","Mysore","Hubli","Dharwad","Mangalore","Davangere","Bellary","Shimoga","Tumkur","Bidar","Hassan","Udupi"].map((city) => (
                    <span key={city} className="px-3 py-1.5 bg-white/8 border border-white/10 rounded-full text-xs text-zinc-300 font-medium">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </IntersectionReveal>
            {/* Services */}
            <IntersectionReveal delay={120}>
              <div className="bg-white/4 border border-white/8 rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 size={16} className="text-orange-400" />
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Platform Services</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Restaurant discovery with smart search",
                    "Food ordering with real-time tracking",
                    "Diner reviews and ratings",
                    "Restaurant partner management dashboard",
                    "Delivery partner mobile application",
                    "Corporate catering inquiry portal",
                    "24/7 customer support system",
                  ].map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-xs text-zinc-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Ready to connect with us?</h2>
          <p className="text-orange-100 text-sm mb-8 max-w-lg mx-auto">
            Whether you&apos;re a potential restaurant partner, a future delivery professional, or simply excited about our platform — reach out. We&apos;d love to hear from you.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:bg-orange-50 transition-colors text-sm shadow-xl">
            Get in Touch <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
