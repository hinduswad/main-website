"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { signOut } from "next-auth/react";

interface NavbarProps {
  session?: any;
}

export default function Navbar({ session }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const baseLinks = [
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "About Us", href: "/about" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ];

  const links = session
    ? [...baseLinks, { name: "Dashboard", href: "/dashboard" }]
    : baseLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
          <Image
            src="/images/WhatsApp Image 2026-05-29 at 14.04.08.jpeg"
            alt="HinduSwad Logo"
            width={40}
            height={40}
            className="rounded-lg object-cover shadow-sm ring-1 ring-orange-500/20"
          />
          <span className="text-xl font-bold tracking-tight text-zinc-900">
            Hindu<span className="text-orange-500">Swad</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex md:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-zinc-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex md:items-center gap-4">
          {session ? (
            <>
              <span className="text-xs text-zinc-500 font-medium">
                +91 {session.user.phone}
              </span>
              <Button
                onClick={() => signOut({ callbackUrl: "/" })}
                variant="outline"
                className="rounded-full px-4 border-zinc-200 hover:bg-zinc-50 text-zinc-700 font-medium text-xs flex items-center gap-1.5"
              >
                <LogOut size={12} /> Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-xs font-semibold text-zinc-600 hover:text-orange-500 transition-colors"
              >
                Sign In
              </Link>
              <Button
                asChild
                className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-5 py-2 text-sm font-medium"
              >
                <Link href="/register">Apply Now</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-zinc-600 hover:text-orange-500"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-zinc-200" />
            {session ? (
              <div className="flex flex-col gap-2">
                <span className="text-xs text-zinc-500 font-medium px-1">
                  Logged in: +91 {session.user.phone}
                </span>
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    signOut({ callbackUrl: "/" });
                  }}
                  variant="outline"
                  className="rounded-full w-full justify-center"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center text-sm font-semibold text-zinc-600 hover:text-orange-500 py-1"
                >
                  Sign In
                </Link>
                <Button
                  asChild
                  className="bg-orange-500 text-white hover:bg-orange-600 w-full rounded-full"
                >
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
