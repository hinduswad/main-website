"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  image: string;
  badge: string;
  alt: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/delivery-partner.jpeg",
    badge: "Field Officer slots active in 30+ districts",
    alt: "HinduSwad Field Officer Delivery Partner",
  },
  {
    id: 2,
    image: "/images/sales-executive-person.png",
    badge: "Sales Executive positions open for immediate hire",
    alt: "HinduSwad Sales Executive Expansion Partner",
  },
  {
    id: 3,
    image: "/images/telecaller-agent.png",
    badge: "Office-based TeleCaller roles with flexible shifts",
    alt: "HinduSwad TeleCaller Support Agent",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-zinc-900/5 bg-zinc-100">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-cover"
            priority={idx === 0}
          />
          {/* Floating badge details */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg z-20 transition-all transform duration-500 translate-y-0">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-semibold text-zinc-900">{slide.badge}</span>
            </div>
          </div>
        </div>
      ))}
      {/* Slide indicators */}
      <div className="absolute top-4 right-4 z-30 flex gap-1.5 bg-black/25 backdrop-blur-md px-2.5 py-1.5 rounded-full">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === current ? "w-4 bg-orange-500" : "w-1.5 bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
