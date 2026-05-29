export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-400 mb-8">Last Updated: May 2026</p>

        <div className="space-y-6 text-sm text-zinc-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">1. Information We Collect</h2>
            <p>
              When you apply for a job or register an account on HinduSwad, we collect Personal Identifiable Information (PII) to process your candidacy. This includes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Contact details: Name, father's name, email, phone number, and address.</li>
              <li>Verification documents: Uploaded copies of Aadhaar Card, PAN Card, and Professional Resumes.</li>
              <li>Professional history: Highest qualification, prior work experience, and reference certificates.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">2. How We Use Your Information</h2>
            <p>
              Your data is used solely for the following purposes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-2">
              <li>Verifying your identity and background check requirements.</li>
              <li>Scheduling assessment exams and offline/online interviews.</li>
              <li>Setting up your employee record upon successful hiring.</li>
              <li>Sending automated notification alerts regarding status changes (via Resend and MSG91).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">3. Storage & Safety Protocols</h2>
            <p>
              All candidate documents are stored securely using Supabase cloud buckets. Access is strictly restricted to authorized administrative personnel and supervisors on a need-to-know basis. We employ TLS encryption during data transit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">4. Sharing and Disclosure</h2>
            <p>
              We do not sell or lease candidate details to third-party marketing companies. Data is shared only with processing partners (such as Razorpay for application fees) under confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-2">5. Your Consent</h2>
            <p>
              By uploading verification documents and submitting registration details, you explicitly consent to HinduSwad processing your credentials for recruitment-related activities.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
