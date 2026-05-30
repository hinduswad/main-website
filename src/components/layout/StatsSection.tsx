"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedCounter({ target, suffix = "", duration = 1500, trigger }: { target: number; suffix?: string; duration?: number; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out quad
      const easedProgress = progress * (2 - progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return (
    <span>
      {trigger ? count : 0}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasTriggered(true);
        observer.unobserve(element);
      }
    }, { 
      threshold: 0.05,
      rootMargin: "0px 0px -20px 0px" 
    });

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="border-y border-zinc-100 py-16 sm:py-20 bg-zinc-50/50 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-3 text-center sm:text-left sm:gap-x-12">
          {/* Stat 1 */}
          <div 
            className={`space-y-2 group transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl font-extrabold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-orange-500">
              <AnimatedCounter target={100} suffix="+" trigger={hasTriggered} />
            </span>
            <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider relative inline-block">
              Active regional openings
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </div>

          {/* Stat 2 */}
          <div 
            style={{ transitionDelay: "150ms" }}
            className={`space-y-2 group border-t border-zinc-200/50 pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl font-extrabold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-orange-500">
              <AnimatedCounter target={30} suffix="+" trigger={hasTriggered} />
            </span>
            <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider relative inline-block">
              Karnataka districts covered
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </div>

          {/* Stat 3 */}
          <div 
            style={{ transitionDelay: "300ms" }}
            className={`space-y-2 group border-t border-zinc-200/50 pt-8 sm:border-t-0 sm:pt-0 sm:border-l sm:pl-12 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
              hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="block text-5xl font-extrabold tracking-tight text-zinc-950 transition-colors duration-300 group-hover:text-orange-500">
              <span className={`inline-block transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 transform ${
                hasTriggered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}>
                Immediate
              </span>
            </span>
            <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider relative inline-block">
              Verification & slot allocation
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
