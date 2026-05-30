import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Calendar, FileText, ArrowRight } from "lucide-react";

type Params = Promise<{ jobId: string }>;

export default async function ConfirmationPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;
  const jobId = params.jobId;

  if (!session?.user) {
    redirect("/login");
  }

  // Fetch application
  const application = await prisma.application.findFirst({
    where: {
      userId: session.user.id,
      jobPostId: jobId,
    },
    include: {
      jobPost: true,
    },
  });

  if (!application || application.paymentStatus !== "PAID") {
    redirect(`/apply/${jobId}`);
  }

  // Format reference ID
  const refId = `FD-2026-${application.id.slice(-6).toUpperCase()}`;

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20 flex items-center justify-center">
      <div className="mx-auto max-w-xl px-4 w-full">
        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm text-center space-y-6">
          
          <div className="mx-auto h-16 w-16 bg-emerald-50 text-emerald-500 flex items-center justify-center rounded-full animate-bounce">
            <CheckCircle2 size={36} />
          </div>

          <div>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              Application Submitted
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Payment Successful!
            </h1>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed max-w-sm mx-auto">
              Your application has been logged on the HinduSwad logistics network database. Your profile verification is underway.
            </p>
          </div>

          <div className="border border-zinc-200/80 rounded-2xl p-5 bg-zinc-50/50 text-left space-y-3.5">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-medium">Reference ID</span>
              <span className="font-bold text-zinc-900">{refId}</span>
            </div>
            <div className="h-px bg-zinc-200/60" />
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-medium">Position Applied</span>
              <span className="font-semibold text-zinc-800">{application.jobPost.title}</span>
            </div>
            <div className="h-px bg-zinc-200/60" />
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400 font-medium">Payment Amount</span>
              <span className="font-bold text-orange-500">₹{application.paymentAmount} (PAID)</span>
            </div>
          </div>

          {application.applicationType === "PERMANENT" && (
            <div className="bg-orange-50 border border-orange-200/50 p-4 rounded-2xl text-left flex items-start gap-2.5 text-xs text-orange-700 leading-relaxed font-medium">
              <Calendar size={16} className="shrink-0 mt-0.5" />
              <div>
                **Next Step: Assessment Exam Scheduled**
                <span className="block text-[11px] text-orange-600/90 mt-0.5">
                  Your MCQ onboarding exam has been scheduled. You can take this 60-minute timed exam from your Candidate Dashboard.
                </span>
              </div>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              variant="outline"
              className="flex-1 rounded-full px-6 py-6 text-sm font-semibold flex items-center justify-center gap-2 text-zinc-700"
            >
              <Link href="/jobs">
                <FileText size={16} /> Browse More Jobs
              </Link>
            </Button>
            <Button
              asChild
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-6 text-sm font-semibold flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
            >
              <Link href="/dashboard">
                Go to Dashboard <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
