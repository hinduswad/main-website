import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home",            href: "/" },
  { label: "About Us",        href: "/about" },
  { label: "Privacy Policy",  href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Cancellation & Refund", href: "/refund-policy" },
  { label: "Disclaimer",      href: "/disclaimer" },
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400" role="contentinfo">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/6">

          {/* Brand column */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Hindu Swad">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden ring-1 ring-white/10 flex-shrink-0">
                <Image src="/images/logo.jpeg" alt="Hindu Swad" fill className="object-cover" />
              </div>
              <div className="leading-none">
                <p className="text-[1rem] font-extrabold text-white tracking-tight font-display leading-tight">
                  Hindu<span className="text-orange-400">Swad</span>
                </p>
                <p className="text-[0.55rem] font-semibold text-orange-400/70 tracking-widest uppercase">
                  Taste with Trust
                </p>
              </div>
            </Link>

            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              India&apos;s next food discovery platform — connecting food lovers with great dining experiences. Launching soon.
            </p>

          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-[0.65rem] font-bold text-zinc-400 uppercase tracking-widest mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:support@hinduswad.com"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-orange-400 transition-colors duration-200"
              >
                <Mail size={13} className="text-orange-500/60 flex-shrink-0" />
                support@hinduswad.com
              </a>
              <div className="flex items-start gap-2 text-sm text-zinc-500">
                <MapPin size={13} className="text-orange-500/60 flex-shrink-0 mt-0.5" />
                <span>Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India</span>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 bg-white/4 border border-white/8 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse-soft flex-shrink-0" />
              <span className="text-xs font-semibold text-zinc-300">Platform launching soon</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-600">
          <p>&copy; {year} Hindu Swad Private Limited. All rights reserved.</p>
          <div className="flex flex-col sm:items-end gap-1">
            <p>CIN: U63120KA2025PTC206410 &nbsp;|&nbsp; Bangalore, Karnataka, India</p>
            <p>Developed by <a href="https://heloavy.com" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">HELOAVY PRIVATE LIMITED (heloavy.com)</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
