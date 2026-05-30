"use client";

import { useEffect, useState, useRef } from "react";

function AnimatedValue({ 
  target, 
  suffix = "", 
  duration = 1500, 
  trigger, 
  isDecimal = false 
}: { 
  target: number; 
  suffix?: string; 
  duration?: number; 
  trigger: boolean;
  isDecimal?: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easedProgress = progress * (2 - progress); // Ease out quad
      setCount(easedProgress * target);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  const displayValue = trigger 
    ? (isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()) 
    : (isDecimal ? "0.0" : "0");

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function AboutStats() {
  const ref = useRef<HTMLElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
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
    <section ref={ref} className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 border-b border-zinc-100 pb-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
          hasTriggered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="space-y-3 group">
            <span className="block text-5xl sm:text-6xl font-light text-orange-500 tracking-tight transition-colors duration-300 group-hover:text-zinc-950">
              <AnimatedValue target={5000} suffix="+" trigger={hasTriggered} />
            </span>
            <div className="h-[1px] w-8 bg-zinc-200 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500" />
            <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Active partners</span>
          </div>

          <div className="space-y-3 group" style={{ transitionDelay: "100ms" }}>
            <span className="block text-5xl sm:text-6xl font-light text-orange-500 tracking-tight transition-colors duration-300 group-hover:text-zinc-950">
              <AnimatedValue target={15} suffix="+" trigger={hasTriggered} />
            </span>
            <div className="h-[1px] w-8 bg-zinc-200 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500" />
            <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Cities covered</span>
          </div>

          <div className="space-y-3 group" style={{ transitionDelay: "200ms" }}>
            <span className="block text-5xl sm:text-6xl font-light text-orange-500 tracking-tight transition-colors duration-300 group-hover:text-zinc-950">
              <AnimatedValue target={3.5} suffix="M+" trigger={hasTriggered} isDecimal={true} />
            </span>
            <div className="h-[1px] w-8 bg-zinc-200 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500" />
            <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Packages delivered</span>
          </div>

          <div className="space-y-3 group" style={{ transitionDelay: "300ms" }}>
            <span className="block text-5xl sm:text-6xl font-light text-orange-500 tracking-tight transition-colors duration-300 group-hover:text-zinc-950">
              <AnimatedValue target={98} suffix="%" trigger={hasTriggered} />
            </span>
            <div className="h-[1px] w-8 bg-zinc-200 transition-all duration-300 group-hover:w-full group-hover:bg-orange-500" />
            <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Satisfaction rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
