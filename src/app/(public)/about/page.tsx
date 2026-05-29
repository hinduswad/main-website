import IntersectionReveal from "@/components/ui/IntersectionReveal";
import AboutStats from "@/components/layout/AboutStats";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pb-24 sm:pb-32">
      {/* Typographic Hero Section */}
      <section className="relative pt-20 pb-16 sm:pt-28 sm:pb-24 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <IntersectionReveal>
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4">Our Background</span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-950 leading-[1.1] max-w-4xl">
              Logistics powered by respect. <br className="hidden sm:inline" />
              About <span className="text-orange-500">HinduSwad</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-zinc-550 leading-relaxed max-w-3xl font-light">
              Empowering regional logistics and local operations through a community-driven hiring framework built on respect, security, and worker dignity. We're reshaping delivery structures across India.
            </p>
          </IntersectionReveal>
        </div>
      </section>

      {/* Asymmetric Bento Grid Section for Mission & Vision */}
      <section className="py-16 sm:py-24 bg-zinc-50/50 border-y border-zinc-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Bento Card 1: Large Mission Card (7/12 wide) */}
            <IntersectionReveal className="lg:col-span-7 flex" delay={0}>
              <div className="bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between hover-lift-premium group w-full shadow-sm relative overflow-hidden">
                {/* Apple-style background radial glow */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none animate-pulse" />
                {/* Faint blueprint vector line art */}
                <svg className="absolute -bottom-16 -right-16 text-zinc-100/50 group-hover:text-orange-100/30 transition-colors duration-700 w-72 h-72 pointer-events-none" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.8" />
                  <path d="M100 10V190M10 100H190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
                </svg>

                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">Purpose</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">Our Mission</h3>
                  <p className="text-sm sm:text-base text-zinc-500 leading-relaxed max-w-xl">
                    To build India's most trusted recruitment and delivery network, ensuring that every worker gains access to competitive wages, a safe operating environment, and flexible work timings that respect their personal commitments. We place our delivery partners first, creating an ecosystem of support, growth, and empowerment.
                  </p>
                </div>
              </div>
            </IntersectionReveal>

            {/* Bento Card 2: Vision Card (5/12 wide) */}
            <IntersectionReveal className="lg:col-span-5 flex" delay={150}>
              <div className="bg-white border border-zinc-200/80 rounded-[2.5rem] p-8 sm:p-12 flex flex-col justify-between hover-lift-premium group w-full shadow-sm relative overflow-hidden">
                {/* Apple-style background radial glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-3xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 pointer-events-none animate-pulse" />
                {/* Faint math geometry grid line art */}
                <svg className="absolute -bottom-16 -right-16 text-zinc-100/50 group-hover:text-orange-100/30 transition-colors duration-700 w-64 h-64 pointer-events-none" fill="none" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 180 L180 20 M20 20 L180 180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.8" />
                  <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.8" />
                </svg>

                <div className="space-y-4 relative z-10">
                  <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block">Future</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">Our Vision</h3>
                  <p className="text-sm sm:text-base text-zinc-500 leading-relaxed">
                    To revolutionize local logistics by shifting the industry focus from transaction-first to people-first. We envision a community where every delivery partner is valued, respected, and equipped with tools for personal and professional growth.
                  </p>
                </div>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>

      {/* Spec Comparison-Style Stats Grid (Animated Client Component) */}
      <AboutStats />

      {/* Core Values Pillars Section */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start mb-16">
            <IntersectionReveal className="lg:col-span-5">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4">Values & Principles</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
                Our Operational Pillars
              </h2>
            </IntersectionReveal>
            <IntersectionReveal className="lg:col-span-7 mt-4 lg:mt-0" delay={150}>
              <p className="text-base sm:text-lg text-zinc-500 leading-relaxed font-light">
                Our logistics framework operates on three foundational principles to guarantee worker security, growth, and community. We call them Rozgaar, Samman, and Suraksha.
              </p>
            </IntersectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Pillar 1 */}
            <IntersectionReveal className="flex" delay={0}>
              <div className="bg-zinc-50/70 border border-zinc-200/60 border-l-4 border-l-orange-500 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover-lift-premium group w-full shadow-sm relative overflow-hidden">
                {/* Micro-glow inside card */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                {/* Numeric Watermark */}
                <span className="font-mono text-8xl font-black text-zinc-950/[0.02] group-hover:text-orange-500/[0.04] absolute right-8 top-4 select-none pointer-events-none transition-all duration-500">01</span>

                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">Pillar 01</span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Rozgaar
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Providing sustainable earning opportunities to thousands of youths. We offer transparent salary structures, flexible slots, and consistent incentives to maximize payouts.
                  </p>
                </div>
              </div>
            </IntersectionReveal>

            {/* Pillar 2 */}
            <IntersectionReveal className="flex" delay={150}>
              <div className="bg-zinc-50/70 border border-zinc-200/60 border-l-4 border-l-orange-500 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover-lift-premium group w-full shadow-sm relative overflow-hidden">
                {/* Micro-glow inside card */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                {/* Numeric Watermark */}
                <span className="font-mono text-8xl font-black text-zinc-950/[0.02] group-hover:text-orange-500/[0.04] absolute right-8 top-4 select-none pointer-events-none transition-all duration-500">02</span>

                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">Pillar 02</span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Samman
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Treating every partner with the utmost respect. We support a zero-tolerance policy against discrimination, host regular community events, and emphasize customer-partner soft skill alignment.
                  </p>
                </div>
              </div>
            </IntersectionReveal>

            {/* Pillar 3 */}
            <IntersectionReveal className="flex" delay={300}>
              <div className="bg-zinc-50/70 border border-zinc-200/60 border-l-4 border-l-orange-500 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between hover-lift-premium group w-full shadow-sm relative overflow-hidden">
                {/* Micro-glow inside card */}
                <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-gradient-to-br from-orange-500/5 to-transparent rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
                {/* Numeric Watermark */}
                <span className="font-mono text-8xl font-black text-zinc-950/[0.02] group-hover:text-orange-500/[0.04] absolute right-8 top-4 select-none pointer-events-none transition-all duration-500">03</span>

                <div className="space-y-4 relative z-10">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block">Pillar 03</span>
                  <h3 className="text-xl font-bold text-zinc-950">
                    Suraksha
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Prioritizing the health and safety of our fleet. We offer free personal accident insurance coverage, defensive driving instruction seminars, and responsive roadside assistance.
                  </p>
                </div>
              </div>
            </IntersectionReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
