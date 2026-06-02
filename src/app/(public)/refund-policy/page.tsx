import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Clock, CreditCard, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy - Hindu Swad",
  description:
    "Cancellation and refund policy for Hindu Swad. Covers order status cancellation rules, penalty charges, food safety, and refund processing timelines.",
};

const toc = [
  "General Principles",
  "User-Initiated Cancellations",
  "Platform/Restaurant-Initiated Cancellations",
  "Cancellations Due to User Error",
  "Operational Discrepancies",
  "Refund Eligibility & Process",
  "Coupons, Promos & Wallet Refunds",
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
            Food is perishable. Once a restaurant begins preparing your meal, resources and ingredients are consumed. Therefore, Hindu Swad enforces a structured cancellation policy based on the status of your order to protect our restaurant partners while ensuring fairness to our users. Please review these rules carefully.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <span className="text-xs text-zinc-400 font-medium">Last Updated: June 2026</span>
            <span className="text-xs text-zinc-300">|</span>
            <span className="text-xs text-zinc-400 font-medium">Version 2.0</span>
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
                  <h3 className="text-sm font-black text-red-900 mb-1">Cancellation Rule</h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    Orders may be cancelled without penalty only before restaurant acceptance. Once accepted or preparation has commenced, cancellation may not be possible and refunds may be denied in whole or in part depending on the order stage and circumstances.
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
                  2. User-Initiated Cancellations
                </h2>
                <h3>2.1 Order Status and Penalties</h3>
                <p>
                  Your ability to cancel an order and the resulting refund depends on the current status of the order:
                </p>
                <div className="overflow-x-auto mt-4 mb-6">
                  <table className="w-full text-sm text-left border-collapse border border-zinc-200">
                    <thead className="bg-zinc-50">
                      <tr>
                        <th className="border border-zinc-200 p-3 font-bold text-zinc-700">Order Status</th>
                        <th className="border border-zinc-200 p-3 font-bold text-zinc-700">Refund Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Pending Restaurant Acceptance</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium text-green-600">100% Refund</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Accepted but Not Prepared</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium">Case-by-case evaluation</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Preparation Started</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium text-red-600">Up to 100% Penalty</td>
                      </tr>
                      <tr>
                        <td className="border border-zinc-200 p-3 text-zinc-600">Out for Delivery</td>
                        <td className="border border-zinc-200 p-3 text-zinc-600 font-medium text-red-600">Up to 100% Penalty</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3>2.2 Partial Cancellations</h3>
                <p>
                  Partial cancellations (e.g., removing a single item after the order is placed) are generally not supported once the restaurant has accepted the order. If an item is unavailable, the restaurant may remove it and a partial refund will be automatically processed for that item.
                </p>
              </div>

              <div id="s3">
                <h2>3. Platform / Restaurant-Initiated Cancellations</h2>
                <p>
                  Occasionally, an order may need to be cancelled by Hindu Swad or the restaurant partner. In these scenarios, provided the cancellation is not due to user error, you will receive a <strong>100% refund</strong>. Examples include:
                </p>
                <ul>
                  <li>The restaurant is out of stock of the ordered items.</li>
                  <li>The restaurant is unexpectedly closed or unable to accept orders.</li>
                  <li>Hindu Swad is unable to assign a delivery partner due to extreme weather, rain, flooding, traffic restrictions, or civic restrictions.</li>
                  <li>The restaurant rejects the order immediately upon receipt.</li>
                  <li><strong>Force Majeure:</strong> Delays, cancellations, or platform failures resulting from floods, strikes, riots, internet outages, app failures, government restrictions, or natural disasters.</li>
                </ul>
              </div>

              <div id="s4">
                <h2 className="flex items-center gap-2">
                  <AlertTriangle size={20} className="text-red-500" />
                  4. Cancellations Due to User Error (Penalty May Apply)
                </h2>
                <p>
                  Hindu Swad reserves the right to cancel your order and charge up to a <strong>100% cancellation penalty</strong> (no refund) if the delivery fails due to your actions or omissions:
                </p>
                <ul>
                  <li><strong>Unreachable / Unresponsive:</strong> The delivery partner arrives at the specified address but you are unresponsive to multiple phone calls (at least 3 attempts over a 5-minute period) and cannot be located. Hindu Swad may mark the order as completed if delivery is attempted in accordance with platform procedures.</li>
                  <li><strong>Incorrect Address:</strong> You provided an incorrect, incomplete, or entirely wrong delivery address which prevents successful delivery.</li>
                  <li><strong>Restricted Access:</strong> User is responsible for obtaining permissions and ensuring accessibility. This includes hotel, hostel, hospital, or corporate park deliveries. If the delivery partner is denied entry and you fail to come out to collect the order, it will be considered delivered/cancelled.</li>
                  <li><strong>Contactless Delivery:</strong> If you requested doorstep drop or unattended delivery, Hindu Swad is not liable for orders marked delivered to the specified location. Claims of non-receipt will not be entertained.</li>
                  <li><strong>Refusal of Delivery:</strong> You refuse to accept the delivery upon arrival for any reason other than severe food tampering or completely wrong items. Repeated refusal of Cash on Delivery (COD) orders may result in account restrictions.</li>
                </ul>
              </div>

              <div id="s5">
                <h2>5. Operational Discrepancies</h2>
                <h3>5.1 Delivery Delays</h3>
                <p>
                  Delivery times are estimates only and may vary due to operational circumstances, traffic, weather, or restaurant delays. Delays alone do not automatically entitle a user to a refund.
                </p>
                <h3>5.2 Payment Failures</h3>
                <p>
                  In the event of a payment failure where money is debited from your account but the order is not created, Hindu Swad's automated reconciliation systems will identify the failure and automatically initiate a full refund to the original payment method within 24 hours.
                </p>
                <h3>5.3 Duplicate Orders</h3>
                <p>
                  If you accidentally place a duplicate order (e.g., by double-clicking or due to network issues), you must immediately notify customer support before restaurant acceptance. Failure to do so will result in standard cancellation penalties for the duplicate order once preparation begins.
                </p>
              </div>

              <div id="s6">
                <h2>6. Refund Eligibility &amp; Process</h2>
                <h3>6.1 Missing or Incorrect Items</h3>
                <p>
                  If your order is delivered with missing items or entirely wrong items, you must report the issue via the in-app support chat <strong>within 30 minutes</strong> of the delivery timestamp. You must provide clear photographic evidence. Upon verification with the restaurant, Hindu Swad will issue a partial or full refund appropriately.
                </p>
                <h3>6.2 Food Quality and Safety Issues</h3>
                <p>
                  Because Hindu Swad is a marketplace, we do not prepare the food. Complaints regarding subjective food taste or temperature are the sole responsibility of the restaurant. However, Hindu Swad may, at its discretion, provide refunds, credits, or compensation in cases involving verified food safety concerns (e.g., spoiled food, insects, glass, contamination). Refunds for serious quality issues require photographic proof and are subject to joint investigation with the restaurant.
                </p>
                <h3>6.3 Fraudulent Refund Claims</h3>
                <p>
                  Hindu Swad reserves the right to reject refund requests where fraud, abuse, or misrepresentation is suspected, including fake missing-item claims, digitally altered photos, or repeated patterns of abuse.
                </p>
              </div>

              <div id="s7">
                <h2>7. Coupons, Promos &amp; Wallet Refunds</h2>
                <p>
                  Refunds will be limited to the actual amount paid out-of-pocket after applying discounts, promotions, coupons, credits, wallet adjustments, or referral rewards. Promotional value is strictly non-refundable and cannot be redeemed for cash.
                </p>
                <p>
                  For wallet payments, refunds may be issued to the original payment method, as wallet credit, or a combination thereof, at Hindu Swad's discretion.
                </p>
              </div>

              <div id="s8">
                <h2 className="flex items-center gap-2">
                  <CreditCard size={20} className="text-orange-500" />
                  8. Refund Timelines &amp; Payment Modes (TAT)
                </h2>
                <p>
                  When a refund is approved by Hindu Swad, approved refunds are initiated within 2 business days. The time it takes for the funds to reflect in your account depends strictly on your bank and the original payment method. 
                </p>
                <p>Please note the following Turnaround Times (TAT) once initiated:</p>
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

              <div id="s9">
                <h2>9. Dispute Resolution</h2>
                <p>
                  If you disagree with a cancellation penalty or a refund decision, you may escalate the matter to our Grievance Officer within 7 days of the incident. Please contact us at support@hinduswad.com for Grievance Officer details. This does not limit any rights available to consumers under applicable law.
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
