import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import HeroSlider from "@/components/layout/HeroSlider";
import StatsSection from "@/components/layout/StatsSection";
import IntersectionReveal from "@/components/ui/IntersectionReveal";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Premium Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white pt-4 pb-20 sm:pt-2 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-tight">
                Join India's leading <br />
                <span className="text-orange-500">food delivery network</span>
              </h1>
              <p className="text-base sm:text-lg text-zinc-500 leading-relaxed max-w-xl">
                Become part of a world-class logistics and operations team. We are hiring Field Officers, Sales Executives, and TeleCallers across Karnataka and India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-8 py-6 text-base font-semibold shadow-md shadow-orange-500/10">
                  <Link href="/jobs">View Openings</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-semibold border-zinc-200 text-zinc-700 hover:bg-zinc-50">
                  <Link href="/about">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right image column */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 relative flex justify-center">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Typographic Stats Section */}
      <StatsSection />

      {/* Roles Section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <IntersectionReveal>
            <div className="max-w-3xl mb-16 sm:mb-24">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                Operational Roles We Offer
              </h2>
              <p className="mt-4 text-base sm:text-lg text-zinc-500 leading-relaxed">
                These three operational roles are currently open for immediate application across all districts. HinduSwad is rapidly expanding, and additional specialized logistics, warehousing, and management positions will be posted shortly.
              </p>
            </div>
          </IntersectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Field Officer */}
            <IntersectionReveal className="h-full flex" delay={0}>
              <div className="group flex flex-col justify-between rounded-3xl border border-zinc-200 p-8 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all bg-white w-full">
                <div>
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest block mb-6">Operations</span>
                  <h3 className="text-2xl font-bold text-zinc-950">Field Officer</h3>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                    Supervise local delivery riders, monitor route efficiency, handle merchant handovers, and ensure local service level agreements are met. Includes travel.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-400">Est. Salary</span>
                    <span className="text-sm font-bold text-zinc-900">₹20,000 - ₹40,000</span>
                  </div>
                  <Link href="/jobs" className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600">
                    Apply <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </IntersectionReveal>

            {/* Sales Executive */}
            <IntersectionReveal className="h-full flex" delay={150}>
              <div className="group flex flex-col justify-between rounded-3xl border border-zinc-200 p-8 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all bg-white w-full">
                <div>
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest block mb-6">Expansion</span>
                  <h3 className="text-2xl font-bold text-zinc-950">Sales Executive</h3>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                    Drive merchant acquisitions and рестораны/retail partnerships. Expand delivery networks and coordinate regional business volumes.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-400">Est. Salary</span>
                    <span className="text-sm font-bold text-zinc-900">₹23,000 - ₹50,000</span>
                  </div>
                  <Link href="/jobs" className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600">
                    Apply <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </IntersectionReveal>

            {/* TeleCaller */}
            <IntersectionReveal className="h-full flex" delay={300}>
              <div className="group flex flex-col justify-between rounded-3xl border border-zinc-200 p-8 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-100 transition-all bg-white w-full">
                <div>
                  <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest block mb-6">Customer Support</span>
                  <h3 className="text-2xl font-bold text-zinc-950">TeleCaller</h3>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                    Support candidate onboarding telephonically, guide delivery partners through mobile application setups, and resolve customer tickets.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-400">Est. Salary</span>
                    <span className="text-sm font-bold text-zinc-900">₹20,000 - ₹40,000</span>
                  </div>
                  <Link href="/jobs" className="inline-flex items-center text-sm font-semibold text-orange-500 hover:text-orange-600">
                    Apply <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* Renovated spacious benefits section - Unique Editorial Design */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            
            {/* Left Column: Typographic Value Propositions */}
            <IntersectionReveal className="lg:col-span-7">
              <div className="space-y-12">
                <div className="space-y-6">
                  <span className="text-sm font-extrabold text-orange-500 uppercase tracking-widest block">Professional Growth</span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-950 leading-[1.15]">
                    A structured path to <span className="text-orange-500">professional growth</span>.
                  </h2>
                  <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed">
                    We believe in providing our logistics operations teams with resources to build a secure career. Every onboarding slot offers stable compensation, fuel incentives, and robust safety cover.
                  </p>
                </div>

                {/* Unique Typographic Grid List */}
                <div className="space-y-4">
                  <div className="group flex gap-6 p-6 rounded-3xl transition-all duration-500 hover:bg-zinc-50/80 cursor-default">
                    <span className="font-mono text-3xl font-light text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none">/01</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-zinc-950">6-Month Structured Probation</h4>
                      <p className="text-sm sm:text-base text-zinc-500 mt-2 leading-relaxed">Get hands-on operational training with steady compensation before permanent role reviews.</p>
                    </div>
                  </div>

                  <div className="group flex gap-6 p-6 rounded-3xl transition-all duration-500 hover:bg-zinc-50/80 cursor-default border-t border-zinc-100/80 pt-8">
                    <span className="font-mono text-3xl font-light text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none">/02</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-zinc-950">Performance <span className="text-orange-500">Incentives</span></h4>
                      <p className="text-sm sm:text-base text-zinc-500 mt-2 leading-relaxed">Earn performance-based fuel allowances, insurance benefits, and monthly operational incentives.</p>
                    </div>
                  </div>

                  <div className="group flex gap-6 p-6 rounded-3xl transition-all duration-500 hover:bg-zinc-50/80 cursor-default border-t border-zinc-100/80 pt-8">
                    <span className="font-mono text-3xl font-light text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none">/03</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-zinc-950">Full <span className="text-orange-500">Security</span> Cover</h4>
                      <p className="text-sm sm:text-base text-zinc-500 mt-2 leading-relaxed">Free personal accident coverage, supportive regional offices, and defensive driving programs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </IntersectionReveal>

            {/* Right Column: Premium Minimal Steps Card - Centered Vertically */}
            <IntersectionReveal className="mt-16 lg:mt-0 lg:col-span-5 flex justify-center" delay={200}>
              <div className="w-full max-w-md bg-zinc-50 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover-lift-premium group border border-zinc-200/60 shadow-sm relative overflow-hidden">
                <div className="space-y-8 text-left">
                  <div>
                    <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">Process Outline</span>
                    <h3 className="text-3xl font-black tracking-tight text-zinc-950 leading-tight">Onboarding Steps</h3>
                  </div>

                  {/* Minimal Steps Indicators */}
                  <div className="space-y-8">
                    <div className="flex gap-5">
                      <span className="font-mono text-xl font-bold text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none mt-0.5">1</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-zinc-900">Choose Role & Region</h4>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">Select your preferred district preference and contract track (Permanent or Temporary).</p>
                      </div>
                    </div>

                    <div className="flex gap-5 border-t border-zinc-200/50 pt-6">
                      <span className="font-mono text-xl font-bold text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none mt-0.5">2</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-zinc-900">Upload Identity Documents</h4>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">Submit your photo, Aadhaar card, and driving license (for Field Officers).</p>
                      </div>
                    </div>

                    <div className="flex gap-5 border-t border-zinc-200/50 pt-6">
                      <span className="font-mono text-xl font-bold text-zinc-300 group-hover:text-orange-500 transition-colors duration-300 select-none mt-0.5">3</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-zinc-900">Assessment & Verification</h4>
                        <p className="text-xs sm:text-sm text-zinc-500 mt-1 leading-relaxed">Complete the 60-minute aptitude test and receive your regional office verify stamp.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 rounded-full w-full py-6 mt-10 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-orange-500/25 flex items-center justify-center gap-1.5 font-bold text-sm">
                  <Link href="/register">
                    Start Registration <ArrowRight size={14} />
                  </Link>
                </Button>
              </div>  
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* Dynamic SEO/GEO Accordion Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <IntersectionReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4">Quick Answers</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                Find instant answers to general questions. For details on refunds, policies, and schedules, view our dedicated FAQ database.
              </p>
            </div>
          </IntersectionReveal>

          <IntersectionReveal delay={150}>
            <div className="divide-y divide-zinc-100 border-y border-zinc-100">
              <details className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-zinc-950 list-none text-base sm:text-lg select-none outline-none">
                  <span>What operational roles are currently open?</span>
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">▼</span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed pl-2">
                  We are actively recruiting for Field Officers (on-field route logistics), Sales Executives (merchant partnerships), and TeleCallers (customer support onboarding).
                </p>
              </details>
              <details className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-zinc-950 list-none text-base sm:text-lg select-none outline-none">
                  <span>Is a two-wheeler vehicle mandatory for all roles?</span>
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">▼</span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed pl-2">
                  A two-wheeler and driving license are mandatory only for Field Officers. It is recommended for Sales Executives, and not required for TeleCallers.
                </p>
              </details>
              <details className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-zinc-950 list-none text-base sm:text-lg select-none outline-none">
                  <span>What is the registration fee structure?</span>
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">▼</span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed pl-2">
                  The application registration fee is ₹1,000 for Permanent tracks and ₹300 for Temporary contract tracks, processed securely via Razorpay.
                </p>
              </details>
              <details className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-zinc-950 list-none text-base sm:text-lg select-none outline-none">
                  <span>Where do interviews and assessments take place?</span>
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">▼</span>
                </summary>
                <p className="mt-4 text-xs sm:text-sm text-zinc-500 leading-relaxed pl-2">
                  MCQ assessments are taken online. Interviews are scheduled either online via video call or offline at our regional offices in Bangalore, Davangere, and Mysore.
                </p>
              </details>
            </div>
          </IntersectionReveal>

          <IntersectionReveal delay={200}>
            <div className="text-center mt-10">
              <Link href="/faqs" className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-600 transition-colors uppercase tracking-wider">
                View complete FAQ database <ArrowRight size={12} />
              </Link>
            </div>
          </IntersectionReveal>
        </div>
      </section>

      {/* Premium Bottom CTA Section with Scooter Illustration */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <IntersectionReveal>
          <div className="relative overflow-hidden bg-black rounded-3xl px-8 py-16 sm:px-16 sm:py-24 shadow-2xl border border-zinc-900">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center relative z-10">
              <div className="lg:col-span-7 space-y-6 text-left">
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Ready to take the wheel? <br />
                  Apply for open slots today.
                </h2>
                <p className="text-sm sm:text-base text-zinc-400 max-w-md">
                  Select your district preference and contract type. Fill out details and schedule your slot in under 2 minutes.
                </p>
                <div className="pt-2">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-orange-500/20">
                    <Link href="/jobs">Apply for Positions</Link>
                  </Button>
                </div>
              </div>

              <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 select-none pointer-events-none">
                  <Image
                    src="/images/delivery-scooter-black.png"
                    alt="HinduSwad Scooter"
                    fill
                    sizes="320px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </IntersectionReveal>
      </section>
    </main>
  );
}
