"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home",    href: "/" },
  { name: "About",   href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm shadow-zinc-900/5 border-b border-zinc-200/70"
          : "bg-white/70 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 sm:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Hindu Swad Home">
          <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300 flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Hindu Swad"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[1.05rem] font-extrabold tracking-tight text-zinc-900 font-display leading-tight">
              Hindu<span className="text-orange-500">Swad</span>
            </span>
            <span className="text-[0.55rem] font-semibold text-orange-400/90 tracking-widest uppercase leading-none">
              Taste with Trust
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-200 group ${
                  active ? "text-orange-500" : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full brand-gradient transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right: Coming Soon badge */}
        <div className="hidden md:block">
          <span className="badge-coming">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse-soft" />
            Coming Soon
          </span>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors duration-200"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[4.25rem] bg-white z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-5 pt-6 pb-10 space-y-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3.5 rounded-xl text-base font-semibold transition-colors ${
                  active
                    ? "bg-orange-50 text-orange-600"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-6 px-4">
            <span className="badge-coming text-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-soft" />
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
