import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "What job roles are currently available at HinduSwad?",
    a: "We currently offer three core operational positions: Field Officer (managing delivery riders and regional compliance), Sales Executive (onboarding local restaurant and retail merchants), and TeleCaller (handling candidate onboarding and support telephonically). All roles have both Permanent and Temporary contract options."
  },
  {
    q: "What are the primary selection criteria?",
    a: "All candidates must be at least 18 years old and under 35 years old. A minimum educational qualification of 12th pass (or equivalent) is required. You must possess a valid Aadhaar card and PAN card. Field Officers must also have a valid Driving License and access to a two-wheeled motor vehicle."
  },
  {
    q: "Is a two-wheeler vehicle mandatory for all positions?",
    a: "A two-wheeler vehicle and a valid driving license are mandatory only for the Field Officer role. It is highly recommended for Sales Executives to facilitate regional travel, but not required. It is not required for TeleCallers as this is an office-based role."
  },
  {
    q: "What is the application fee for registration?",
    a: "To process background checks, verify documents, and schedule assessments, there is an application fee of ₹1,000 for Permanent roles and ₹300 for Temporary contract roles. All payments are processed securely via Razorpay."
  },
  {
    q: "Is the application fee refundable?",
    a: "No, the application registration fee is non-refundable. Please make sure you meet the eligibility criteria (educational qualification, age limits, document requirements) before submitting your payment."
  },
  {
    q: "How will I receive updates about my exam and interview?",
    a: "All schedules and updates will be posted in real-time on your Candidate Dashboard. In addition, automated SMS alerts (via MSG91) and email updates will be sent directly to your registered contact details."
  },
  {
    q: "What is the format and duration of the assessment exam?",
    a: "The online assessment exam is required only for Permanent positions. It consists of multiple-choice questions (MCQs) covering general aptitude, basic mathematics, local geography, and situational judgment. The test is timed at 60 minutes and must be completed in a single session."
  },
  {
    q: "Where will the interviews be conducted?",
    a: "Interviews may be conducted online (via video meeting links) or offline at our local district offices in Karnataka, depending on the role and location. Your exact interview slot and details will be shared on your Candidate Dashboard."
  },
  {
    q: "What is the probation period for permanent roles?",
    a: "Permanent positions have a structured 6-month probation period. During this time, candidates receive full target-based incentives, and upon successful review of performance metrics, their roles are confirmed."
  },
  {
    q: "Do you provide onboarding training for new hires?",
    a: "Yes. All selected candidates undergo a fully guided onboarding training program. This covers delivery logistics tracking tools, soft skills, navigation applications, and regional standard operating procedures."
  },
  {
    q: "Can I apply for multiple job openings simultaneously?",
    a: "A candidate can only have one active application for a Permanent position at any given time. If you wish to switch roles, you can apply for a new position once your existing application is either confirmed, rejected, or withdrawn."
  },
  {
    q: "How do I track my active application status?",
    a: "You can track your real-time recruitment progress by logging into the Candidate Dashboard. The stepper will guide you through all stages: Applied, Payment, Exam, Interview, Document Verification, and Training."
  }
];

export default function FAQsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold text-orange-500 uppercase tracking-widest block mb-4">FAQ Support</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950">
              General Inquiries
            </h1>
            <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Find answers to the most common questions about our recruitment process, application fees, exams, and career paths.
            </p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 divide-y divide-zinc-100 shadow-sm">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group py-6 first:pt-0 last:pb-0 cursor-pointer">
                <summary className="flex items-center justify-between font-bold text-zinc-950 list-none text-base sm:text-lg select-none outline-none">
                  <span className="flex items-start gap-4 pr-4">
                    <HelpCircle className="h-5.5 w-5.5 text-orange-500 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-zinc-400 group-open:rotate-180 transition-transform duration-200 text-xs">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 pl-9.5 text-xs sm:text-sm text-zinc-500 leading-relaxed">
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
