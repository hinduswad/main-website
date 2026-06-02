import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Clock, CreditCard, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy — Hindu Swad",
  description:
    "Strict cancellation and refund policy for Hindu Swad. Covers the 60-second cancellation window, penalty charges for user errors, and refund processing timelines.",
};

const toc = [
  "General Principles",
  "User-Initiated Cancellations (The 60-Second Rule)",
  "Platform/Restaurant-Initiated Cancellations",
  "Cancellations Due to User Error (100% Penalty)",
  "Refund Eligibility & Process",
  "Refund Timelines & Payment Modes",
  "Dispute Resolution",
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="warm-bg border-b border-zinc-100 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="badge-soon mb-4 block w-fit">Legal</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-3 leading-tight">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">
            Food is perishable. Once a restaurant begins preparing your meal, resources and ingredients are consumed. Therefore, Hindu Swad enforces a strict cancellation policy to protect our restaurant partners from financial loss while ensuring fairness to our users. Please review these rules carefully before placing an order.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <span className="text-xs text-zinc-400 font-medium">Last Updated: June 2026</span>
            <span className="text-xs text-zinc-300">|</span>
            <span className="text-xs text-zinc-400 font-medium">Version 1.0</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24">
                <p className="text-[0.6rem] font-black text-zinc-400 uppercase tracking-widest mb-3">Contents</p>
                <ol className="space-y-1">
                  {toc.map((item, i) => (
                    <li key={item}>
                      <a href={`#s${i+1}`} className="text-[0.7rem] text-zinc-500 hover:text-orange-500 transition-colors flex gap-2">
                        <span className="text-zinc-300 flex-shrink-0">{String(i+1).padStart(2,"0")}.</span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ol>
                <div className="mt-8 p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <p className="text-[0.65rem] font-bold text-orange-700 mb-1">Support</p>
                  <a href="mailto:support@hinduswad.com" className="text-[0.65rem] text-orange-600 underline">support@hinduswad.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 legal-content">

              <div className="mb-10 p-5 bg-red-50 border border-red-200 rounded-2xl flex gap-4 items-start">
                <ShieldAlert size={24} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-black text-red-900 mb-1">Critical Summary</h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    You may only cancel an order without penalty within exactly <strong>60 seconds</strong> of placing it. Any cancellation initiated by you after this 60-second window, or any cancellation caused by your unavailability at the delivery address, will result in a <strong>100% cancellation penalty</strong> (no refund).
                  </p>
                </div>
              </div>

              <div id="s1">
                <h2>1. General Principles</h2>
                <p>
                  This policy outlines the conditions under which orders placed on the Hindu Swad platform can be cancelled and how refunds are processed. Because Hindu Swad acts as an intermediary facilitating the sale of perishable goods by independent restaurants, a standard &ldquo;return&rdquo; or &ldquo;change of mind&rdquo; policy is not applicable.
                </p>
              </div>

              <div id="s2">
                <h2 className="flex items-center gap-2">
                  <Clock size={20} className="text-orange-500" />
                  2. User-Initiated Cancellations (The 60-Second Rule)
                </h2>
                <h3>2.1 Free Cancellation Window</h3>
                <p>
                  You may cancel your order without incurring any penalty <strong>only within sixty (60) seconds</strong> of placing the order via the Hindu Swad app. If cancelled within this exact timeframe, you will receive a 100% refund.
                </p>

                <h3>2.2 The "Point of No Return" (100% Penalty)</h3>
                <p>
                  If you attempt to cancel your order <strong>after the 60-second window has expired</strong>—meaning the restaurant has received the order and commenced preparation—you will be charged a <strong>100% cancellation penalty</strong>. 
                </p>
                <p>
                  This penalty is necessary to compensate the restaurant partner for the ingredients, time, and resources wasted on a prepared meal that cannot be resold. <strong>You will not receive any refund for cancellations made after 60 seconds.</strong>
                </p>
              </div>

              <div id="s3">
                <h2>3. Platform / Restaurant-Initiated Cancellations</h2>
                <p>
                  Occasionally, an order may need to be cancelled by Hindu Swad or the restaurant partner. In these scenarios, provided the cancellation is not due to user error, you will receive a <strong>100% refund</strong>.
                </p>
                <p>Examples of such scenarios include:</p>
                <ul>
                  <li>The restaurant is out of stock of the ordered items.</li>
                  <li>The restaurant is unexpectedly closed or unable to accept orders.</li>
                  <li>Hindu Swad is unable to assign a delivery partner due to extreme weather or unserviceable areas.</li>
                  <li>The restaurant rejects the order immediately upon receipt.</li>
                </ul>
              </div>

              <div id="s4">
                <h2 className="flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-500" />
                  4. Cancellations Due to User Error (100% Penalty)
                </h2>
                <p>
                  Hindu Swad reserves the right to cancel your order and charge a <strong>100% cancellation penalty</strong> (no refund) if the delivery fails due to your actions or omissions. This includes, but is not limited to, the following scenarios:
                </p>
                <ul>
                  <li><strong>Unreachable / Unresponsive:</strong> The delivery partner arrives at the specified address but you are unresponsive to multiple phone calls (at least 3 attempts over a 5-minute period) and cannot be located.</li>
                  <li><strong>Incorrect Address:</strong> You provided an incorrect, incomplete, or entirely wrong delivery address which prevents successful delivery.</li>
                  <li><strong>Restricted Access:</strong> The delivery partner is denied entry to your premises (e.g., strict society gates, corporate parks without passes) and you fail to come out to collect the order.</li>
                  <li><strong>Refusal of Delivery:</strong> You refuse to accept the delivery upon arrival for any reason other than severe food tampering or completely wrong items (which must be verified by support).</li>
                </ul>
              </div>

              <div id="s5">
                <h2>5. Refund Eligibility &amp; Process</h2>
                <h3>5.1 Missing or Incorrect Items</h3>
                <p>
                  If your order is delivered with missing items or entirely wrong items, you must report the issue via the in-app support chat <strong>within 30 minutes</strong> of the delivery timestamp. You must provide clear photographic evidence. Upon verification with the restaurant, Hindu Swad will issue a partial or full refund appropriately.
                </p>
                <h3>5.2 Food Quality Issues</h3>
                <p>
                  Because Hindu Swad is a marketplace, we do not prepare the food. Complaints regarding food taste, temperature, or quality (e.g., &ldquo;too spicy,&rdquo; &ldquo;cold&rdquo;) are the sole responsibility of the restaurant. Hindu Swad will pass the feedback to the restaurant but <strong>will not issue refunds for subjective quality complaints</strong>. Refunds for serious quality issues (e.g., foreign objects in food) require photographic proof and are subject to joint investigation with the restaurant.
                </p>
              </div>

              <div id="s6">
                <h2 className="flex items-center gap-2">
                  <CreditCard size={20} className="text-orange-500" />
                  6. Refund Timelines &amp; Payment Modes (TAT)
                </h2>
                <p>
                  When a refund is approved by Hindu Swad, it is processed immediately on our end. However, the time it takes for the funds to reflect in your account depends strictly on your bank and the original payment method. 
                </p>
                <p>Please note the following Turnaround Times (TAT):</p>
                <div className="overflow-x-auto mt-4 mb-6">
                  <table className="w-full text-sm text-left border-collapse border border-zinc-200">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="border border-zinc-200 p-3 font-bold text-zinc-700">Original Payment Mode</th>
                        <th className="border border-zinc-200 p-3 font-bold text-zinc-700">Estimated Refund Timeline (TAT)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Hindu Swad Wallet</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium">Instant (within 15 minutes)</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">UPI (Google Pay, PhonePe, Paytm, etc.)</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium">1 to 3 Business Days</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Credit / Debit Cards</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium">5 to 7 Business Days</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Net Banking</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium">5 to 7 Business Days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-zinc-500 italic">
                  *Business days exclude Saturdays, Sundays, and public bank holidays in India. We cannot expedite bank processing times.
                </p>
              </div>

              <div id="s7">
                <h2>7. Dispute Resolution</h2>
                <p>
                  If you disagree with a cancellation penalty or a refund decision, you may escalate the matter to our Grievance Officer within 7 days of the incident. Please contact us at support@hinduswad.com for Grievance Officer details. Hindu Swad's decision post-investigation shall be final and binding.
                </p>
              </div>

              <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  By using the Hindu Swad platform and placing an order, you acknowledge that you have read, understood, and agreed to be bound by this Cancellation & Refund Policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
