import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ApplyStepper from "@/components/apply/ApplyStepper";
import ProfessionalForm from "@/components/apply/ProfessionalForm";

type Params = Promise<{ jobId: string }>;

export default async function ProfessionalPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;
  const jobId = params.jobId;

  if (!session?.user) {
    redirect(`/login?callbackUrl=/apply/${jobId}/professional`);
  }

  // Fetch application draft
  const application = await prisma.application.findFirst({
    where: {
      userId: session.user.id,
      jobPostId: jobId,
    },
    include: {
      jobPost: true,
      user: {
        include: {
          profile: true,
        },
      },
    },
  });

  if (!application) {
    redirect(`/apply/${jobId}`);
  }

  const profile = application.user.profile;
  const jobRole = application.jobPost.roleType; // e.g. "FIELD_OFFICER"

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <ApplyStepper currentStep={3} />

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
              Step 3 of 5
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Professional Details
            </h1>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Add your highest qualifications, previous work history, and travel accessibility settings.
            </p>
          </div>

          <ProfessionalForm
            jobId={jobId}
            applicationId={application.id}
            jobRole={jobRole}
            initialProfile={profile}
          />
        </div>
      </div>
    </main>
  );
}
