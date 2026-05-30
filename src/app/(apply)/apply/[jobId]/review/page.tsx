import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ApplyStepper from "@/components/apply/ApplyStepper";
import ReviewSummary from "@/components/apply/ReviewSummary";

type Params = Promise<{ jobId: string }>;

export default async function ReviewPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;
  const jobId = params.jobId;

  if (!session?.user) {
    redirect(`/login?callbackUrl=/apply/${jobId}/review`);
  }

  // Fetch application draft
  const application = await prisma.application.findFirst({
    where: {
      userId: session.user.id,
      jobPostId: jobId,
    },
    include: {
      user: {
        include: {
          profile: true,
        },
      },
    },
  });

  if (!application || !application.user.profile) {
    redirect(`/apply/${jobId}`);
  }

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <ApplyStepper currentStep={4} />

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
              Step 4 of 5
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Review Application
            </h1>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Verify all entered information carefully before submitting.
            </p>
          </div>

          <ReviewSummary
            jobId={jobId}
            applicationId={application.id}
            profile={application.user.profile}
          />
        </div>
      </div>
    </main>
  );
}
