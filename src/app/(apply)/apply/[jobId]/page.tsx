import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getOrCreateApplication } from "@/actions/application-actions";
import { Button } from "@/components/ui/button";
import ApplyStepper from "@/components/apply/ApplyStepper";
import { Briefcase, ArrowRight, ShieldCheck, Clock, CheckCircle } from "lucide-react";

type Params = Promise<{ jobId: string }>;

export default async function ApplyPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;
  const jobId = params.jobId;

  if (!session?.user) {
    redirect(`/login?callbackUrl=/apply/${jobId}`);
  }

  // Fetch job details
  const job = await prisma.jobPost.findUnique({
    where: { id: jobId },
  });

  if (!job) {
    notFound();
  }

  // Initialize draft application in database
  const res = await getOrCreateApplication(jobId);
  if (!res.success || !res.application) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6 bg-zinc-50/50">
        <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm max-w-md text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-zinc-500 text-sm mb-4">
            {res.error || "Failed to initialize application. Please try again."}
          </p>
          <Button asChild className="bg-orange-500 text-white rounded-full">
            <Link href="/jobs">Back to Jobs</Link>
          </Button>
        </div>
      </main>
    );
  }

  const application = res.application;

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <ApplyStepper currentStep={1} />

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="mb-6">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
              Step 1 of 5
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Confirm Role & Type
            </h1>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Confirm you want to apply for this job post. An application draft has been saved.
            </p>
          </div>

          <div className="border border-zinc-200/80 rounded-2xl p-6 bg-zinc-50/30 mb-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-orange-50 text-orange-500 flex items-center justify-center rounded-xl shrink-0">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-950">{job.title}</h3>
                <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider block">
                  {job.workMode} / {job.employmentType}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-zinc-200/50 pt-4 text-xs">
              <div>
                <span className="text-zinc-400 font-medium block">Job Location</span>
                <span className="font-bold text-zinc-900 mt-0.5 block">{job.district}, Karnataka</span>
              </div>
              <div>
                <span className="text-zinc-400 font-medium block">Application Fee</span>
                <span className="font-bold text-orange-500 mt-0.5 block">₹{job.applicationFee}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <h3 className="text-xs font-bold text-zinc-950 uppercase tracking-wider">
              Terms & Key Notes:
            </h3>
            <div className="space-y-3">
              <div className="flex gap-2.5 text-xs text-zinc-500 items-start">
                <ShieldCheck size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>
                  The application fee of **₹{job.applicationFee}** is non-refundable and pays for background checks, document validation, and online testing.
                </span>
              </div>
              <div className="flex gap-2.5 text-xs text-zinc-500 items-start">
                <Clock size={16} className="text-orange-500 shrink-0 mt-0.5" />
                <span>
                  {job.employmentType === "PERMANENT"
                    ? "Permanent positions undergo a 6-month probation period and require passing the online MCQ assessment."
                    : "Temporary positions are contract-based and do not require taking the online assessment exam."}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-zinc-100">
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center gap-2"
            >
              <Link href={`/apply/${jobId}/personal`}>
                Continue to Personal Details <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
