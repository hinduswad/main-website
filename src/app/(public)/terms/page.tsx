import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Hindu Swad Private Limited",
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
  "Cancellations & Refunds",
  "Prohibited Activities & Account Termination",
  "Intellectual Property",
  "Disclaimer of Warranties",
  "Limitation of Liability",
  "Indemnification",
  "Governing Law & Jurisdiction",
  "Modifications to Terms",
  "Grievance Redressal",
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
            <span className="text-xs text-zinc-400 font-medium">Version 1.0</span>
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
                  By downloading, installing, accessing, or using the Hindu Swad mobile application, website (hinduswad.com), or any associated services (collectively, the &ldquo;Platform&rdquo;), you expressly acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our <Link href="/privacy">Privacy Policy</Link> and <Link href="/refund-policy">Cancellation & Refund Policy</Link>.
                </p>
                <p>
                  If you do not agree to these Terms, you must not use the Platform and must delete your account immediately.
                </p>
              </div>

              <div id="s2">
                <h2>2. Eligibility &amp; Account Registration</h2>
                <ul>
                  <li><strong>Age Requirement:</strong> You must be at least 18 years of age to create an account and use the Platform. By registering, you represent and warrant that you meet this age requirement. If you are a minor, you may only use the Platform with the consent and supervision of a parent or legal guardian.</li>
                  <li><strong>Accurate Information:</strong> You agree to provide true, accurate, current, and complete information during registration and to update such information to keep it accurate.</li>
                  <li><strong>Single Account:</strong> You may only hold one active user account. Creating multiple accounts to exploit promotional offers is strictly prohibited and will result in immediate termination of all associated accounts.</li>
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
                  Hindu Swad operates solely as a technology platform connecting users with independent restaurant partners (&ldquo;Merchants&rdquo;) and independent delivery partners (&ldquo;Delivery Executives&rdquo;).
                </p>
                <ul>
                  <li><strong>Intermediary Status:</strong> Hindu Swad is a marketplace intermediary. We do not prepare, cook, package, or sell food. The Merchant is the sole seller of the food and beverages.</li>
                  <li><strong>Merchant Responsibility:</strong> The Merchant is exclusively responsible for:
                    <ul>
                      <li>The quality, safety, freshness, and preparation of the food.</li>
                      <li>Compliance with all applicable food safety regulations (FSSAI).</li>
                      <li>The accuracy of the menu, pricing, and allergen information provided on the Platform.</li>
                      <li>Any harm, illness, or injury resulting from the consumption of the food.</li>
                    </ul>
                  </li>
                  <li><strong>Platform Responsibility:</strong> Hindu Swad is responsible solely for operating the technology interface, facilitating payment collection, and coordinating the logistics of delivery via independent Delivery Executives.</li>
                  <li><strong>No Endorsement:</strong> The listing of a Merchant on the Platform does not constitute an endorsement or warranty of their food quality or safety by Hindu Swad.</li>
                </ul>
              </div>

              <div id="s5">
                <h2>5. Order Placement &amp; Fulfillment</h2>
                <ul>
                  <li><strong>Contract of Sale:</strong> When you place an order on the Platform, you enter into a direct contract of sale with the Merchant. Hindu Swad facilitates the transaction but is not a party to the contract of sale for the food.</li>
                  <li><strong>Order Acceptance:</strong> All orders are subject to acceptance by the Merchant and the availability of a Delivery Executive. Hindu Swad or the Merchant reserves the right to decline or cancel any order.</li>
                  <li><strong>Delivery Times:</strong> Estimated delivery times are indicative and not guaranteed. Delays may occur due to weather, traffic, restaurant preparation times, or other unforeseen circumstances. Hindu Swad is not liable for delayed deliveries.</li>
                </ul>
              </div>

              <div id="s6">
                <h2>6. Pricing &amp; Payments</h2>
                <ul>
                  <li><strong>Pricing:</strong> Prices displayed on the Platform are determined by the Merchants. Hindu Swad may charge a separate delivery fee, platform fee, or surge fee, which will be clearly displayed before checkout.</li>
                  <li><strong>Taxes:</strong> All prices are subject to applicable taxes (GST), which will be calculated and added at checkout.</li>
                  <li><strong>Payment Methods:</strong> We accept various payment methods (credit/debit cards, UPI, net banking) processed through secure third-party payment gateways. You agree to pay all charges associated with your orders.</li>
                </ul>
              </div>

              <div id="s7">
                <h2>7. Cancellations &amp; Refunds</h2>
                <p>
                  All cancellations and refunds are governed strictly by our <Link href="/refund-policy">Cancellation & Refund Policy</Link>. By placing an order, you explicitly agree to the terms outlined in that policy, including potential cancellation penalties.
                </p>
              </div>

              <div id="s8">
                <h2>8. Prohibited Activities &amp; Account Termination</h2>
                <p>You agree NOT to engage in any of the following activities:</p>
                <ul>
                  <li><strong>Fraud & Abuse:</strong> Placing fake or prank orders, exploiting promotional codes, or initiating fraudulent chargebacks.</li>
                  <li><strong>Harassment:</strong> Using abusive language, threatening, or harassing Merchants, Delivery Executives, or Hindu Swad support staff.</li>
                  <li><strong>Platform Misuse:</strong> Attempting to reverse engineer, hack, or disrupt the Platform's functionality.</li>
                  <li><strong>Illegal Activity:</strong> Using the Platform for any unlawful purpose.</li>
                </ul>
                <p>
                  <strong>Termination:</strong> Hindu Swad reserves the right, in its sole discretion and without prior notice, to suspend or terminate your account and refuse any and all current or future use of the Platform if we suspect you have violated these Terms.
                </p>
              </div>

              <div id="s9">
                <h2>9. Intellectual Property</h2>
                <p>
                  All content, trademarks, logos, design, and software associated with the Platform are the exclusive property of Hindu Swad or its licensors. You are granted a limited, non-exclusive, non-transferable license to use the Platform for its intended purpose. You may not copy, modify, distribute, or create derivative works without our express written consent.
                </p>
              </div>

              <div id="s10">
                <h2>10. Disclaimer of Warranties</h2>
                <p>
                  The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Hindu Swad disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Platform will be error-free, uninterrupted, or free of viruses.
                </p>
              </div>

              <div id="s11">
                <h2>11. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Hindu Swad, its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Platform or the food purchased through it.
                </p>
                <p>
                  In no event shall Hindu Swad's aggregate liability for all claims related to the Platform exceed the total amount paid by you for the specific order giving rise to the liability.
                </p>
              </div>

              <div id="s12">
                <h2>12. Indemnification</h2>
                <p>
                  You agree to indemnify and hold Hindu Swad, its affiliates, and their respective officers, directors, and employees harmless from any claim, demand, damages, or losses (including reasonable legal fees) arising out of your breach of these Terms, your violation of any law, or your interactions with Merchants or Delivery Executives.
                </p>
              </div>

              <div id="s13">
                <h2>13. Governing Law &amp; Jurisdiction</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or relating to these Terms or the Platform shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore, Karnataka.
                </p>
              </div>

              <div id="s14">
                <h2>14. Modifications to Terms</h2>
                <p>
                  Hindu Swad reserves the right to update or modify these Terms at any time. We will notify you of material changes. Your continued use of the Platform after such modifications constitutes your acceptance of the revised Terms.
                </p>
              </div>

              <div id="s15">
                <h2>15. Grievance Redressal</h2>
                <p>
                  If you have any grievances or complaints, please refer to the Grievance Officer details provided in our <Link href="/contact">Contact</Link> and <Link href="/privacy">Privacy Policy</Link> pages.
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
