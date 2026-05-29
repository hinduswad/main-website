import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Mock baseline jobs for fallback
const MOCK_JOBS = [
  {
    id: "mock-1",
    title: "Field Officer (Permanent)",
    slug: "field-officer-permanent",
    roleType: "FIELD_OFFICER",
    employmentType: "PERMANENT",
    description: "Manage local delivery networks, oversee field operations, and support delivery partners.",
    responsibilities: [
      "Coordinate and supervise delivery riders",
      "Monitor delivery efficiency and resolve routes issues",
      "Conduct training sessions for new onboarding partners",
      "Ensure compliance with service level agreements"
    ],
    salaryMin: 20000,
    salaryMax: 40000,
    totalPosts: 50,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "field",
  },
  {
    id: "mock-2",
    title: "Field Officer (Temporary)",
    slug: "field-officer-temporary",
    roleType: "FIELD_OFFICER",
    employmentType: "TEMPORARY",
    description: "Manage local delivery networks, oversee field operations, and support delivery partners on a temporary contract basis.",
    responsibilities: [
      "Coordinate and supervise delivery riders",
      "Monitor delivery efficiency and resolve routes issues",
      "Conduct training sessions for new onboarding partners"
    ],
    salaryMin: 20000,
    salaryMax: 40000,
    totalPosts: 999,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "field",
  },
  {
    id: "mock-3",
    title: "Sales Executive (Permanent)",
    slug: "sales-executive-permanent",
    roleType: "SALES_EXECUTIVE",
    employmentType: "PERMANENT",
    description: "Acquire merchant partnerships, expand delivery coverage, and drive revenue growth.",
    responsibilities: [
      "Onboard local restaurants and retail merchants",
      "Negotiate pricing and partnership agreements",
      "Achieve monthly onboarding targets",
      "Maintain relationship with merchant partners"
    ],
    salaryMin: 23000,
    salaryMax: 50000,
    totalPosts: 50,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "field",
  },
  {
    id: "mock-4",
    title: "Sales Executive (Temporary)",
    slug: "sales-executive-temporary",
    roleType: "SALES_EXECUTIVE",
    employmentType: "TEMPORARY",
    description: "Acquire merchant partnerships, expand delivery coverage, and drive revenue growth on a contract basis.",
    responsibilities: [
      "Onboard local restaurants and retail merchants",
      "Achieve weekly merchant onboarding targets",
      "Maintain relationship with merchant partners"
    ],
    salaryMin: 23000,
    salaryMax: 50000,
    totalPosts: 999,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "field",
  },
  {
    id: "mock-5",
    title: "TeleCaller (Permanent)",
    slug: "telecaller-permanent",
    roleType: "TELECALLER",
    employmentType: "PERMANENT",
    description: "Handle incoming customer inquiries, support candidate onboarding telephonically, and resolve issues.",
    responsibilities: [
      "Make outbound calls to registered candidates",
      "Guide candidates through the recruitment steps",
      "Address queries and resolve candidate tickets",
      "Maintain calling logs and CRM records"
    ],
    salaryMin: 20000,
    salaryMax: 40000,
    totalPosts: 10,
    applicationFee: 1000,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "office",
  },
  {
    id: "mock-6",
    title: "TeleCaller (Temporary)",
    slug: "telecaller-temporary",
    roleType: "TELECALLER",
    employmentType: "TEMPORARY",
    description: "Handle incoming customer inquiries, support candidate onboarding telephonically on a contract basis.",
    responsibilities: [
      "Make outbound calls to registered candidates",
      "Guide candidates through the recruitment steps",
      "Address queries and resolve candidate tickets"
    ],
    salaryMin: 20000,
    salaryMax: 40000,
    totalPosts: 999,
    applicationFee: 300,
    district: "Bangalore",
    state: "Karnataka",
    workMode: "office",
  }
];

export const revalidate = 3600;

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  try {
    const posts = await prisma.jobPost.findMany({
      where: { status: "open" },
      select: { slug: true }
    });
    return posts.map(p => ({ slug: p.slug }));
  } catch (e) {
    return MOCK_JOBS.map(j => ({ slug: j.slug }));
  }
}

export default async function JobDetailPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  let job = null;
  let isFallback = false;

  try {
    job = await prisma.jobPost.findUnique({
      where: { slug }
    });
  } catch (error) {
    isFallback = true;
  }

  if (!job) {
    job = MOCK_JOBS.find(j => j.slug === slug);
  }

  if (!job) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": new Date().toISOString().split("T")[0],
    "employmentType": job.employmentType === "PERMANENT" ? "FULL_TIME" : "PART_TIME",
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.district,
        "addressRegion": job.state,
        "addressCountry": "IN"
      }
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": job.salaryMin,
        "maxValue": job.salaryMax,
        "unitText": "MONTH"
      }
    },
    "hiringOrganization": {
      "@type": "Organization",
      "name": "HinduSwad",
      "sameAs": "http://localhost:3003"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-orange-500 transition-colors mb-8 uppercase tracking-widest">
            <ArrowLeft size={16} /> Back to Careers
          </Link>

          {/* Clean Spec Header Block */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">{job.workMode} / {job.employmentType}</span>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-zinc-950">{job.title}</h1>
              </div>
              <Button asChild className="bg-orange-500 text-white hover:bg-orange-600 rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-orange-500/10 self-start sm:self-center">
                <Link href={`/apply/${job.id}`}>Apply for Position</Link>
              </Button>
            </div>

            {/* Apple Product Spec Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-150 pt-5 text-left">
              <div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Compensation</span>
                <span className="text-sm sm:text-base font-bold text-zinc-950 mt-0.5 block">
                  ₹{(job.salaryMin / 1000).toFixed(0)}k - {(job.salaryMax / 1000).toFixed(0)}k <span className="text-xs font-medium text-zinc-400">/ mo</span>
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Hub District</span>
                <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-0.5 block">{job.district}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Total Posts</span>
                <span className="text-sm sm:text-base font-semibold text-zinc-900 mt-0.5 block">{job.totalPosts === 999 ? "TBD" : job.totalPosts} positions</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider block">Application Fee</span>
                <span className="text-sm sm:text-base font-bold text-orange-500 mt-0.5 block">₹{job.applicationFee}</span>
              </div>
            </div>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
                <h2 className="text-base font-bold text-zinc-950 mb-3">Job Description</h2>
                <p className="text-sm text-zinc-550 leading-relaxed">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
                <h2 className="text-base font-bold text-zinc-950 mb-3">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-zinc-550 items-start">
                      <CheckCircle2 size={16} className="text-orange-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar info widgets */}
            <div className="space-y-6">
              {/* Requirements */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Eligibility</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-550 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="font-bold text-zinc-900">•</span>
                    <span>12th Pass or equivalent educational credentials</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-zinc-900">•</span>
                    <span>Candidate age profile must be between 18 and 35 years</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-zinc-900">•</span>
                    <span>Valid Aadhaar card and PAN card are required</span>
                  </li>
                  {job.roleType === "FIELD_OFFICER" && (
                    <li className="flex gap-2 border-t border-zinc-100 pt-2.5 mt-2.5 text-orange-600 font-semibold text-xs sm:text-sm">
                      <span className="font-bold">•</span>
                      <span>Requires own two-wheeled vehicle & driving license</span>
                    </li>
                  )}
                </ul>
              </div>

              {/* Recruitment Steps */}
              <div className="bg-white rounded-3xl border border-zinc-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-3">Selection Process</h3>
                <ol className="space-y-3.5 text-xs sm:text-sm text-zinc-550 relative border-l border-zinc-150 pl-4 ml-2">
                  <li className="relative">
                    <span className="absolute -left-6 top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-orange-500 text-white text-[9px] font-bold shadow-sm shadow-orange-500/25">1</span>
                    <span className="font-semibold text-zinc-950 block leading-tight">Registration</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-450 block mt-0.5">Submit details & verification fee.</span>
                  </li>
                  {job.employmentType === "PERMANENT" && (
                    <li className="relative">
                      <span className="absolute -left-6 top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-orange-500 text-white text-[9px] font-bold shadow-sm shadow-orange-500/25">2</span>
                      <span className="font-semibold text-zinc-950 block leading-tight">Assessment</span>
                      <span className="text-[10px] sm:text-[11px] text-zinc-450 block mt-0.5">60-min online MCQ test.</span>
                    </li>
                  )}
                  <li className="relative">
                    <span className="absolute -left-6 top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-orange-500 text-white text-[9px] font-bold shadow-sm shadow-orange-500/25">
                      {job.employmentType === "PERMANENT" ? 3 : 2}
                    </span>
                    <span className="font-semibold text-zinc-950 block leading-tight">Interview</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-450 block mt-0.5">Candidate soft skill evaluations.</span>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-orange-500 text-white text-[9px] font-bold shadow-sm shadow-orange-500/25">
                      {job.employmentType === "PERMANENT" ? 4 : 3}
                    </span>
                    <span className="font-semibold text-zinc-950 block leading-tight">Onboarding</span>
                    <span className="text-[10px] sm:text-[11px] text-zinc-450 block mt-0.5">Receive training, fuel card & start.</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
