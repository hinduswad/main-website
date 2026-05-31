import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-lg font-bold tracking-tight text-zinc-900 leading-tight">
                Hindu<span className="text-orange-500">Swad</span>
              </span>
              <span className="text-xs font-semibold text-orange-500 tracking-wide italic">
                Taste with Trust
              </span>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs leading-relaxed mt-2">
              Empowering local communities with a state-of-the-art recruitment and delivery network built on respect, fair compensation, and safety.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  Careers / Jobs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/faqs" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-sm text-zinc-500 hover:text-orange-500 transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-900 uppercase tracking-wider mb-4">Office</h4>
            <p className="text-sm text-zinc-500 mb-2">
              Karnataka Regional Office
            </p>
            <p className="text-sm text-zinc-500">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400">
            &copy; {currentYear} HinduSwad. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
