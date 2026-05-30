import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { getUserApplications } from "@/actions/application-actions";
import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, CheckCircle2, Clock, XCircle, ChevronRight, BookOpen } from "lucide-react";

// Status helpers to convert DB state to tracker step indices
const STAGE_STEPS = [
  { label: "Applied", statuses: ["APPLIED", "PAYMENT_PENDING", "PAID"] },
  { label: "Exam", statuses: ["EXAM_SCHEDULED", "EXAM_COMPLETED"] },
  { label: "Interview", statuses: ["INTERVIEW_SCHEDULED", "INTERVIEW_COMPLETED"] },
  { label: "Verification", statuses: ["DOCUMENT_VERIFICATION"] },
  { label: "Training", statuses: ["TRAINING", "PROBATION"] },
  { label: "Confirmed", statuses: ["CONFIRMED"] },
];

function getActiveStageIndex(status: string): number {
  if (status === "REJECTED") return -1;
  return STAGE_STEPS.findIndex((stage) => stage.statuses.includes(status));
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const res = await getUserApplications();
  const applications = res.success ? res.applications : [];

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Welcome Section */}
        <div className="bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 shadow-sm mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
              Candidate Workspace
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
              Welcome Back
            </h1>
            <span className="text-xs text-zinc-500 font-medium block mt-1">
              Registered Mobile: +91 { (session.user as any).phone }
            </span>
          </div>
          <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
            <Link href="/jobs">View Open Positions</Link>
          </Button>
        </div>

        {/* Applications List */}
        <div className="space-y-6">
          <h2 className="text-base font-bold text-zinc-950 uppercase tracking-wider">
            Your Applications ({applications?.length || 0})
          </h2>

          {!applications || applications.length === 0 ? (
            <div className="bg-white border border-zinc-200 rounded-3xl p-12 text-center space-y-4 shadow-sm">
              <div className="mx-auto h-12 w-12 bg-zinc-50 text-zinc-400 flex items-center justify-center rounded-2xl">
                <Briefcase size={22} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900">No active applications</h3>
                <p className="text-xs text-zinc-500 max-w-xs mx-auto mt-1 leading-relaxed">
                  You haven&apos;t applied to any job postings yet. View available roles to start your career with HinduSwad.
                </p>
              </div>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-5">
                <Link href="/jobs">Browse Careers</Link>
              </Button>
            </div>
          ) : (
            applications.map((app) => {
              const activeStage = getActiveStageIndex(app.status);
              const isRejected = app.status === "REJECTED";
              const refId = `FD-2026-${app.id.slice(-6).toUpperCase()}`;

              return (
                <div key={app.id} className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  {/* Job Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-zinc-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                          {app.jobPost.employmentType}
                        </span>
                        <span className="h-1 w-1 bg-zinc-300 rounded-full" />
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                          Ref: {refId}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950 mt-1">{app.jobPost.title}</h3>
                      <p className="text-xs text-zinc-500 mt-0.5">{app.jobPost.district}, Karnataka</p>
                    </div>

                    <div className="text-right flex flex-col items-start sm:items-end gap-1">
                      <span className="text-xs text-zinc-400">
                        Applied: {new Date(app.appliedAt).toLocaleDateString("en-IN")}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        app.paymentStatus === "PAID"
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          : "bg-amber-50 text-amber-600 border border-amber-100"
                      }`}>
                        {app.paymentStatus === "PAID" ? "Fee Paid" : "Fee Pending"}
                      </span>
                    </div>
                  </div>

                  {/* Status Stepper */}
                  {isRejected ? (
                    <div className="bg-red-50 border border-red-100 p-4 rounded-2xl flex items-center gap-2.5 text-xs text-red-700 font-semibold">
                      <XCircle size={16} />
                      <span>Application Rejected. Please contact recruitment support for details.</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        Recruitment Progression
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                        {STAGE_STEPS.map((stage, idx) => {
                          const isDone = activeStage > idx;
                          const isCurrent = activeStage === idx;
                          return (
                            <div key={stage.label} className="flex flex-col items-center">
                              <div className={`h-7 w-7 rounded-full flex items-center justify-center border-2 text-[10px] font-bold mb-1.5 ${
                                isDone
                                  ? "bg-emerald-500 border-emerald-500 text-white shadow-sm shadow-emerald-500/10"
                                  : isCurrent
                                  ? "bg-white border-orange-500 text-orange-500 shadow-md"
                                  : "bg-zinc-50 border-zinc-200 text-zinc-400"
                              }`}>
                                {isDone ? "✓" : idx + 1}
                              </div>
                              <span className={`text-[10px] font-bold uppercase tracking-wider ${
                                isCurrent ? "text-orange-500" : isDone ? "text-zinc-800" : "text-zinc-400"
                              }`}>
                                {stage.label}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action Callouts */}
                  {app.status === "PAYMENT_PENDING" && (
                    <div className="bg-amber-50 border border-amber-250 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-800">
                      <div className="flex items-center gap-2.5">
                        <Clock size={16} className="text-amber-500 shrink-0" />
                        <span>**Payment Needed**: Submit application fee to confirm assessment schedule.</span>
                      </div>
                      <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                        <Link href={`/apply/${app.jobPost.id}/payment`}>
                          Pay Fee Now <ChevronRight size={14} />
                        </Link>
                      </Button>
                    </div>
                  )}

                  {app.status === "EXAM_SCHEDULED" && app.exams?.[0] && (
                    <div className="bg-orange-50 border border-orange-250 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-orange-800">
                      <div className="flex items-start gap-2.5">
                        <BookOpen size={16} className="text-orange-500 shrink-0 mt-0.5" />
                        <div>
                          **Onboarding Assessment Available**
                          <span className="block text-[11px] text-orange-600/90 mt-0.5">
                            You have a 60-minute MCQ test scheduled. Complete it to progress to the interview phase.
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                        Start Assessment
                      </Button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </main>
  );
}
