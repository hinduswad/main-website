import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - Hindu Swad Private Limited",
  description:
    "Terms of Service and User Agreement for Hindu Swad. Covers eligibility, account security, platform liability, merchant liability, and prohibited activities.",
};

const toc = [
  "Acceptance of Terms",
  "Eligibility & Account Registration",
  "Account Security & User Responsibility",
  "Platform vs. Merchant Liability",
  "Order Placement & Fulfillment",
  "Pricing & Payments",
  "Promotional Offers & Wallet Terms",
  "Cancellations & Refunds",
  "Prohibited Activities & Account Termination",
  "Intellectual Property",
  "Disclaimer of Warranties",
  "Limitation of Liability",
  "Indemnification",
  "Force Majeure",
  "Electronic Records",
  "Governing Law & Jurisdiction",
  "Modifications to Terms",
  "Grievance Redressal & Support",
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="warm-bg border-b border-zinc-100 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="badge-soon mb-4 block w-fit">Legal</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-3 leading-tight">
            Terms of Service (User Agreement)
          </h1>
          <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">
            This User Agreement governs your access to and use of the Hindu Swad platform. It establishes a legally binding contract between you and Hindu Swad Private Limited. Please read these terms carefully, paying special attention to the Platform vs. Merchant Liability clause.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <span className="text-xs text-zinc-400 font-medium">Last Updated: June 2026</span>
            <span className="text-xs text-zinc-300">|</span>
            <span className="text-xs text-zinc-400 font-medium">Version 2.0</span>
            <span className="text-xs text-zinc-300">|</span>
            <span className="text-xs text-zinc-400 font-medium">Applicable Law: India</span>
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
                  <p className="text-[0.65rem] font-bold text-orange-700 mb-1">Questions?</p>
                  <a href="mailto:support@hinduswad.com" className="text-[0.65rem] text-orange-600 underline">support@hinduswad.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 legal-content">

              <div id="s1">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) and <strong>Hindu Swad Private Limited</strong> (&ldquo;Hindu Swad&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operating under the brand name &ldquo;Hindu Swad&rdquo;.
                </p>
                <p>
                  By downloading, installing, accessing, or using the Hindu Swad mobile application, website (hinduswad.com), or any associated services (collectively, the &ldquo;Platform&rdquo;), you expressly acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our <Link href="/privacy">Privacy Policy</Link>, <Link href="/refund-policy">Cancellation &amp; Refund Policy</Link>, and our <Link href="/disclaimer" className="text-orange-600 font-semibold underline">Liability &amp; Health Disclaimer</Link>.
                </p>
                <p>
                  If you do not agree to these Terms, you must not use the Platform and must delete your account immediately.
                </p>
              </div>

              <div id="s2">
                <h2>2. Eligibility &amp; Account Registration</h2>
                <ul>
                  <li><strong>Age Requirement:</strong> Users must be 18 years or older to create an account, place orders, make payments, or enter into transactions on the Platform. By registering, you represent and warrant that you meet this age requirement.</li>
                  <li><strong>Accurate Information:</strong> You agree to provide true, accurate, current, and complete information during registration and to update such information to keep it accurate.</li>
                  <li><strong>Single Account:</strong> You may only hold one active user account. Creating multiple accounts to exploit promotional offers is strictly prohibited and will result in immediate termination of all associated accounts.</li>
                  <li><strong>Communication Consent:</strong> By creating an account, you explicitly consent to receive communications from Hindu Swad, Merchants, and Delivery Executives via SMS, email, push notifications, OTPs, and phone calls regarding your orders, platform updates, and promotional offers.</li>
                </ul>
              </div>

              <div id="s3">
                <h2>3. Account Security &amp; User Responsibility</h2>
                <ul>
                  <li><strong>Confidentiality:</strong> You are solely responsible for maintaining the confidentiality of your account credentials (including OTPs) and for all activities that occur under your account.</li>
                  <li><strong>Unauthorized Access:</strong> You agree to immediately notify Hindu Swad of any unauthorized use of your account or any other breach of security. Hindu Swad will not be liable for any loss or damage arising from your failure to protect your account credentials.</li>
                  <li><strong>Account Liability:</strong> You accept full responsibility for all orders placed and financial transactions executed through your account, whether authorized by you or not.</li>
                </ul>
              </div>

              <div id="s4">
                <h2 className="text-orange-600 bg-orange-50 p-2 rounded-md inline-block">4. Platform vs. Merchant Liability (Critical Clause)</h2>
                <p>
                  Hindu Swad acts solely as a technology intermediary platform facilitating discovery, ordering, payment facilitation, and delivery coordination between Users, Merchants, and independent Delivery Executives.
                </p>
                <ul>
                  <li><strong>Intermediary Status:</strong> Hindu Swad is a marketplace intermediary. We do not prepare, cook, package, or sell food. The Merchant is the sole seller of the food and beverages.</li>
                  <li><strong>Merchant Responsibility:</strong> Merchants are independently responsible for food preparation, ingredients, packaging, hygiene standards, statutory compliance, and food safety obligations. Hindu Swad does not independently inspect or verify each food item prior to delivery. The Merchant is exclusively responsible for compliance with all applicable food safety regulations (FSSAI), accuracy of the menu, and any harm resulting from the consumption of the food.</li>
                  <li><strong>Platform Responsibility:</strong> Hindu Swad operates the technology interface, facilitates payment collection, and coordinates the logistics. Delivery Executives are independent service providers and not employees, agents, representatives, or partners of Hindu Swad.</li>
                  <li><strong>No Endorsement:</strong> The listing of a Merchant on the Platform does not constitute an endorsement or warranty of their food quality or safety by Hindu Swad. Hindu Swad relies on representations made by Merchants regarding FSSAI registration, licenses, permits, and food compliance.</li>
                  <li><strong>Allergy &amp; Health Disclaimer:</strong> To the maximum extent permitted by applicable law, Hindu Swad shall not be responsible for food preparation, ingredients, allergen disclosures, food quality, or food safety compliance, which remain the sole responsibility of the Merchant. You must consult the Merchant directly regarding ingredients. See our <Link href="/disclaimer" className="text-orange-500 underline">full Disclaimer</Link> for details.</li>
                </ul>
              </div>

              <div id="s5">
                <h2>5. Order Placement &amp; Fulfillment</h2>
                <ul>
                  <li><strong>Contract of Sale:</strong> When you place an order on the Platform, you enter into a direct contract of sale with the Merchant. Hindu Swad facilitates the transaction but is not a party to the contract of sale for the food.</li>
                  <li><strong>Order Acceptance:</strong> All orders are subject to acceptance by the Merchant and the availability of a Delivery Executive. Hindu Swad or the Merchant reserves the right to decline or cancel any order, including when a restaurant is closed, an item is unavailable, or a restaurant rejects the order.</li>
                  <li><strong>Delivery Times:</strong> Estimated delivery times are indicative and not guaranteed. Delays may occur due to weather, traffic, restaurant preparation times, or other unforeseen circumstances. Hindu Swad is not liable for delayed deliveries.</li>
                  <li><strong>Address Accuracy:</strong> User is solely responsible for ensuring delivery information is accurate and complete.</li>
                  <li><strong>Delivery Failure:</strong> Orders may be treated as completed if delivery cannot be completed due to inaccurate information or customer unavailability.</li>
                  <li><strong>Contactless Delivery:</strong> Users may opt for contactless delivery (e.g., doorstep drop, unattended delivery). In such cases, Hindu Swad and the Delivery Executive bear no liability for the order once delivered to the specified location.</li>
                </ul>
              </div>

              <div id="s6">
                <h2>6. Pricing &amp; Payments</h2>
                <ul>
                  <li><strong>Pricing:</strong> Prices displayed on the Platform are determined by the Merchants. Hindu Swad may charge a separate delivery fee, platform fee, or surge fee, which will be clearly displayed before checkout.</li>
                  <li><strong>Taxes:</strong> All prices are subject to applicable taxes (GST), which will be calculated and added at checkout.</li>
                  <li><strong>Payment Methods:</strong> We accept various payment methods (credit/debit cards, UPI, net banking) processed through secure third-party payment gateways. You agree to pay all charges associated with your orders.</li>
                  <li><strong>Chargeback Protection:</strong> Hindu Swad reserves the right to recover amounts arising from fraudulent, abusive, or unjustified chargebacks and may suspend associated accounts.</li>
                </ul>
              </div>

              <div id="s7">
                <h2>7. Promotional Offers &amp; Wallet Terms</h2>
                <ul>
                  <li><strong>Promotional Offers:</strong> Hindu Swad may occasionally run promotional offers, referral programs, or issue discount coupons. We reserve the right to modify, cancel, or restrict any promotional offer at any time. Abuse of promotional offers, including the creation of fake accounts, will result in account termination and reversal of any credits.</li>
                  <li><strong>Hindu Swad Wallet:</strong> The Hindu Swad Wallet is a closed-system prepaid payment instrument intended solely for use on the Platform. Wallet balances are non-transferable, cannot be redeemed for cash, and may expire if unused for an extended period, subject to RBI regulations.</li>
                </ul>
              </div>

              <div id="s8">
                <h2>8. Cancellations &amp; Refunds</h2>
                <p>
                  All cancellations and refunds are governed strictly by our <Link href="/refund-policy">Cancellation & Refund Policy</Link>. By placing an order, you explicitly agree to the terms outlined in that policy.
                </p>
              </div>

              <div id="s9">
                <h2>9. Prohibited Activities &amp; Account Termination</h2>
                <p>You agree NOT to engage in any of the following activities:</p>
                <ul>
                  <li><strong>Fraud & Abuse:</strong> Placing fake or prank orders, exploiting promotional codes, or initiating fraudulent chargebacks.</li>
                  <li><strong>Harassment:</strong> Using abusive language, threatening, or harassing Merchants, Delivery Executives, or Hindu Swad support staff.</li>
                  <li><strong>Platform Misuse:</strong> Attempting to reverse engineer, hack, or disrupt the Platform's functionality.</li>
                  <li><strong>Illegal Activity:</strong> Using the Platform for any unlawful purpose.</li>
                </ul>
                <p>
                  <strong>Investigation &amp; Termination:</strong> Hindu Swad reserves the right, in its sole discretion and without prior notice, to suspend or terminate your account and refuse any and all current or future use of the Platform if we suspect you have violated these Terms. Hindu Swad may investigate suspicious transactions, freeze wallet balances, suspend withdrawals, delay refunds, and request additional verification.
                </p>
              </div>

              <div id="s10">
                <h2>10. Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, design, and software associated with the Platform are the exclusive property of Hindu Swad or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended purpose. You may not copy, modify, distribute, or create derivative works without our express written consent.
                </p>
                <p>
                  <strong>User Generated Content:</strong> User grants Hindu Swad a worldwide, royalty-free license to use submitted reviews, ratings, photos, and feedback.
                </p>
              </div>

              <div id="s11">
                <h2>11. Disclaimer of Warranties</h2>
                <p>
                  The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Hindu Swad disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Hindu Swad does not guarantee uninterrupted access to the Platform and may suspend services for maintenance, upgrades, security incidents, or operational reasons. We do not guarantee that the Platform will be error-free or free of viruses.
                </p>
              </div>

              <div id="s12">
                <h2>12. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Hindu Swad, its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Platform or the food purchased through it.
                </p>
                <p>
                  In no event shall Hindu Swad's aggregate liability for all claims related to the Platform exceed the total amount paid by you for the specific order giving rise to the liability.
                </p>
                <p>
                  <strong>Claims Period:</strong> Any claim arising out of use of the Platform must be brought within one (1) year from the date the cause of action arose, to the extent permitted by law.
                </p>
              </div>

              <div id="s13">
                <h2>13. Indemnification</h2>
                <p>
                  You agree to indemnify and hold Hindu Swad, its affiliates, and their respective officers, directors, and employees harmless from any claim, demand, damages, or losses (including reasonable legal fees) arising out of your breach of these Terms, your violation of any law, or your interactions with Merchants or Delivery Executives.
                </p>
              </div>

              <div id="s14">
                <h2>14. Force Majeure</h2>
                <p>
                  Hindu Swad shall not be liable for any delay, interruption, suspension, or failure to perform resulting from causes beyond its reasonable control, including but not limited to floods, riots, strikes, internet outages, cyber attacks, pandemics, government restrictions, or natural disasters.
                </p>
              </div>

              <div id="s15">
                <h2>15. Electronic Records</h2>
                <p>
                  Electronic records, order logs, delivery records, GPS logs, OTP verification records, and system-generated records maintained by Hindu Swad shall be deemed valid evidence during disputes.
                </p>
              </div>

              <div id="s16">
                <h2>16. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Attempt informal resolution, Mediation, Arbitration in Bengaluru, Courts only for enforcement. In the event of a dispute, the parties shall first attempt informal resolution. If unresolved, the dispute shall be referred to binding arbitration in Bengaluru. The competent courts in Bengaluru shall have exclusive jurisdiction only for the enforcement of arbitration awards or interim relief.
                </p>
              </div>

              <div id="s17">
                <h2>17. Modifications to Terms</h2>
                <p>
                  Hindu Swad reserves the right to update or modify these Terms at any time. We will notify you of material changes. Your continued use of the Platform after such modifications constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div id="s18">
                <h2>18. Grievance Redressal &amp; Support</h2>
                <p>
                  <strong>Customer Support</strong>
                  <br />Email: support@hinduswad.com
                  <br />Phone: +91 9900754588
                  <br />Support Hours: Monday to Sunday, 8:00 AM – 11:00 PM IST
                </p>
                <p className="mt-4">
                  <strong>Grievance Officer</strong>
                  <br />In accordance with the Consumer Protection (E-Commerce) Rules, 2020, our Grievance Officer is:
                  <br />Name: Hanumanth
                  <br />Email: support@hinduswad.com
                  <br />Address: Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India
                </p>
              </div>

              <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  These Terms of Service constitute the entire agreement between you and Hindu Swad Private Limited regarding your use of the Platform.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
