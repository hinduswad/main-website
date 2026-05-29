export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl mb-6">
          Terms of Service & Registration Agreement
        </h1>
        <p className="text-xs text-zinc-400 mb-8">Last Updated: May 2026</p>

        <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">1. Agreement to Terms</h2>
            <p>
              By registering and creating an account on the HinduSwad recruitment portal, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">2. Candidate Eligibility</h2>
            <p>
              Candidates registering on our platform must be citizens of India, aged between 18 and 35 years, and possess a minimum educational qualification of 12th pass (or equivalent). It is your responsibility to ensure you possess authentic government identifiers (Aadhaar Card and PAN Card) before registering.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">3. Background Check & Application Fees</h2>
            <p>
              To cover document verification, background checks, and assessment scheduling:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Permanent roles require an application fee of ₹1,000.</li>
              <li>Temporary contract roles require an application fee of ₹300.</li>
            </ul>
            <p className="mt-2 font-semibold text-orange-600">
              Refund Policy: All application fees are strictly non-refundable once paid. Background verification fees cover operational costs incurred immediately upon submission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">4. Accuracy of Information</h2>
            <p>
              You agree to provide true, accurate, and current information during registration. Any profile found containing fraudulent documents or false details (such as falsifying experience, certificates, or identity details) will result in immediate disqualification and permanent ban from the HinduSwad network.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">5. Termination</h2>
            <p>
              We reserve the right to suspend or terminate candidate accounts at our discretion without prior notice if these terms are violated or in the event of suspicious activity.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
