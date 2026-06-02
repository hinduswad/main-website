import { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: ReactNode;
}

export default function LegalPage({ title, subtitle, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-white" role="main">
      {/* Hero */}
      <section className="bg-gradient-to-b from-zinc-50 to-white border-b border-zinc-100 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="badge-brand">Legal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          <p className="text-xs text-zinc-400 mt-4 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Sidebar TOC placeholder */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">
                  On This Page
                </p>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-zinc-100 rounded-full animate-pulse" />
                  <div className="w-4/5 h-2 bg-zinc-100 rounded-full animate-pulse" />
                  <div className="w-full h-2 bg-zinc-100 rounded-full animate-pulse" />
                  <div className="w-3/4 h-2 bg-zinc-100 rounded-full animate-pulse" />
                  <div className="w-full h-2 bg-zinc-100 rounded-full animate-pulse" />
                </div>
                <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-xs font-semibold text-orange-700 mb-1">Need Help?</p>
                  <p className="text-xs text-orange-600">
                    Contact us at{" "}
                    <a href="mailto:legal@hinduswad.com" className="underline font-medium">
                      legal@hinduswad.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="prose prose-zinc max-w-none legal-content">
                {children}
              </div>

              {/* Bottom disclaimer */}
              <div className="mt-12 p-5 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  This document is governed by the laws of India. For any queries regarding this policy, 
                  please contact Hindu Swad Private Limited at{" "}
                  <a href="mailto:legal@hinduswad.com" className="text-orange-500 hover:underline font-medium">
                    legal@hinduswad.com
                  </a>
                  {" "}or write to our registered office at [REGISTERED_ADDRESS], Bangalore, Karnataka, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
