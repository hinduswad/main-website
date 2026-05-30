import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import ApplyStepper from "@/components/apply/ApplyStepper";
import PaymentView from "@/components/apply/PaymentView";

type Params = Promise<{ jobId: string }>;

export default async function PaymentPage(props: { params: Params }) {
  const session = await auth();
  const params = await props.params;
  const jobId = params.jobId;

  if (!session?.user) {
    redirect(`/login?callbackUrl=/apply/${jobId}/payment`);
  }

  // Fetch application draft
  const application = await prisma.application.findFirst({
    where: {
      userId: session.user.id,
      jobPostId: jobId,
    },
    include: {
      user: true,
    },
  });

  if (!application) {
    redirect(`/apply/${jobId}`);
  }

  // If application is already paid, redirect to confirmation
  if (application.paymentStatus === "PAID") {
    redirect(`/apply/${jobId}/confirmation`);
  }

  const razorpayKey = process.env.RAZORPAY_KEY_ID || "";
  const phone = (session.user as any).phone || "";

  return (
    <main className="min-h-screen bg-zinc-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <ApplyStepper currentStep={5} />

        <div className="bg-white rounded-3xl border border-zinc-200 p-8 sm:p-10 shadow-sm">
          <div className="mb-8">
            <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">
              Step 5 of 5
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950">
              Fee Checkout
            </h1>
            <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
              Complete your verification fee to submit your application.
            </p>
          </div>

          <PaymentView
            jobId={jobId}
            applicationId={application.id}
            amount={application.paymentAmount}
            razorpayKey={razorpayKey}
            phone={phone}
          />
        </div>
      </div>
    </main>
  );
}
