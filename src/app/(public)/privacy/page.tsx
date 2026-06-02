import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Hindu Swad Private Limited",
  description:
    "Comprehensive Privacy Policy of Hindu Swad Private Limited. Covers GPS location tracking, financial data, order history, third-party data sharing, and DPDP Act rights.",
};

const toc = [
  "Introduction & Scope",
  "Data Controller & DPO Information",
  "Data We Collect",
  "Legal Basis for Processing",
  "How We Use Your Data",
  "Third-Party Data Sharing",
  "Location Data & Partner Monitoring",
  "Financial & Payment Data",
  "Data Retention & Fraud Databases",
  "Data Security",
  "Your Rights",
  "Data Principal Rights (DPDP Act, 2023)",
  "Children's Privacy",
  "Cookies & Tracking",
  "Automated Decision-Making",
  "Account Suspension",
  "Platform & Healthcare Disclaimers",
  "Cross-Border Transfers",
  "Changes to This Policy",
  "Grievance Officer & Contact",
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="warm-bg border-b border-zinc-100 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="badge-soon mb-4 block w-fit">Legal</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-3 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">
            Hindu Swad Private Limited collects and processes personal data to deliver seamless food ordering and delivery experiences. This policy explains what we collect, why we collect it, who we share it with, and how you can exercise your rights.
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
                  <a href="mailto:privacy@hinduswad.com" className="text-[0.65rem] text-orange-600 underline">privacy@hinduswad.com</a>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 legal-content">

              <div id="s1">
                <h2>1. Introduction &amp; Scope</h2>
                <p>
                  This Privacy Policy (&ldquo;Policy&rdquo;) is published by <strong>Hindu Swad Private Limited</strong> (&ldquo;Hindu Swad&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company incorporated under the Companies Act, 2013.
                </p>
                <p>
                  This Policy applies to all personal data processed in connection with our mobile applications, websites, Restaurant Partner Portal, Delivery Partner Application, and customer support.
                </p>
                <p>
                  Hindu Swad processes personal data in accordance with the <strong>Digital Personal Data Protection Act, 2023</strong>, <strong>Information Technology Act, 2000</strong>, <strong>Consumer Protection Act, 2019</strong>, and other applicable laws.
                </p>
                <p>
                  Consent is obtained through clear affirmative action, including account registration, permission grants, and acceptance of applicable terms. Hindu Swad maintains timestamped records of consent and privacy preference changes.
                </p>
              </div>

              <div id="s2">
                <h2>2. Data Controller &amp; DPO Information</h2>
                <p>For the purposes of applicable Indian data protection law, the data controller/fiduciary is:</p>
                <ul>
                  <li><strong>Entity:</strong> Hindu Swad Private Limited</li>
                  <li><strong>Registered Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka - 560001</li>
                  <li><strong>Data Protection Officer:</strong> privacy@hinduswad.com</li>
                  <li><strong>Grievance Officer Email:</strong> support@hinduswad.com</li>
                </ul>
              </div>

              <div id="s3">
                <h2>3. Data We Collect</h2>
                <p>We collect various categories of data depending on your interaction with the Platform:</p>
                <ul>
                  <li><strong>Account Data:</strong> Name, mobile number, email address, profile photo.</li>
                  <li><strong>Location Data:</strong> Precise GPS location, saved addresses, delivery coordinates.</li>
                  <li><strong>Transaction Data:</strong> Order history, refunds, ratings.</li>
                  <li><strong>Device Data:</strong> Device model, OS, IP address, advertising identifiers.</li>
                </ul>
                <p>
                  <strong>Business Contact Data:</strong> For restaurant and delivery partners, we collect business registration, FSSAI licenses, GST details, and banking information. We maintain a clear distinction between personal data and such business-to-business operational information.
                </p>
              </div>

              <div id="s4">
                <h2>4. Legal Basis for Processing</h2>
                <p>We process your personal data based on your consent, contractual necessity, legal obligations, and legitimate interests such as fraud prevention and platform security.</p>
              </div>

              <div id="s5">
                <h2>5. How We Use Your Data</h2>
                <p>We use your data for account creation, order fulfillment, delivery routing, payment processing, fraud prevention, and platform improvement.</p>
              </div>

              <div id="s6">
                <h2>6. Third-Party Data Sharing</h2>
                <p>
                  We share your data with:
                </p>
                <ul>
                  <li><strong>Restaurant Partners:</strong> Your first name, masked mobile number (except where legally required or necessary to resolve delivery issues), order details, and necessary location data such as area, locality, or delivery zone required for food preparation and dispatch planning.</li>
                  <li><strong>Delivery Partners:</strong> Delivery address and instructions.</li>
                  <li><strong>Infrastructure & Analytics:</strong> Cloud hosts and analytics providers.</li>
                </ul>
              </div>

              <div id="s7">
                <h2>7. Location Data &amp; Partner Monitoring</h2>
                <p>
                  We collect precise location data for users when the app is active to facilitate order tracking.
                  <br /><strong>Delivery Partner Monitoring:</strong> For delivery partners, continuous GPS tracking and monitoring occurs solely during active availability or order fulfilment periods to optimize routing and ensure safety.
                </p>
              </div>

              <div id="s8">
                <h2>8. Financial &amp; Payment Data</h2>
                <p>
                  Payments are processed through RBI-compliant third-party payment service providers. Hindu Swad does not independently store, transmit, or process full cardholder data. We store only tokens and necessary transaction reference records.
                </p>
              </div>

              <div id="s9">
                <h2>9. Data Retention &amp; Fraud Databases</h2>
                <p>
                  Data is retained for as long as necessary to fulfill the purposes outlined or as required by law.
                  <br /><strong>Law Enforcement Hold:</strong> Hindu Swad may retain information beyond stated periods where necessary for investigations, disputes, litigation, or legal holds.
                  <br /><strong>Fraud Databases:</strong> We retain the authority to maintain records of blocked users, blacklisted devices, and fraud markers indefinitely after account deletion to prevent future abuse.
                </p>
              </div>

              <div id="s10">
                <h2>10. Data Security</h2>
                <p>
                  We employ robust encryption and access controls. In the event of a breach, Hindu Swad may notify affected users and competent authorities where required by applicable law.
                </p>
              </div>

              <div id="s11">
                <h2>11. Your Rights</h2>
                <p>Under applicable law, you may request access, correction, deletion, or restriction of your data.</p>
                <ul>
                  <li><strong>Right to Portability:</strong> Subject to applicable law and technical feasibility, you may request a portable copy of your data.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent at any time via settings.</li>
                </ul>
              </div>

              <div id="s12">
                <h2>12. Data Principal Rights (DPDP Act, 2023)</h2>
                <p>In accordance with the DPDP Act, 2023, you as a Data Principal have the right to:</p>
                <ul>
                  <li><strong>Grievance Redressal:</strong> Register grievances regarding data processing via our Grievance Officer.</li>
                  <li><strong>Nomination:</strong> Nominate an individual to exercise your rights in the event of death or incapacity.</li>
                  <li><strong>Consent Withdrawal Process:</strong> Easily withdraw consent with the same ease with which it was given.</li>
                </ul>
              </div>

              <div id="s13">
                <h2>13. Children&apos;s Privacy</h2>
                <p>
                  Our Platform is strictly intended for users who are 18 years of age or older. We do not knowingly collect personal data from minors.
                </p>
              </div>

              <div id="s14">
                <h2>14. Cookies &amp; Tracking</h2>
                <p>
                  We use cookies and tracking technologies (such as Meta Pixel and Google Analytics) for essential functionality, analytics, and remarketing. By continuing to use our platform, you consent to our Cookie Consent Banner and the use of these technologies. You may opt out of targeted advertising via device or browser settings.
                </p>
              </div>

              <div id="s15">
                <h2>15. Automated Decision-Making</h2>
                <p>
                  Hindu Swad utilizes automated systems for fraud scoring, order assignment, and delivery optimization. These automated processes may influence outcomes, such as account flagging or delivery partner routing.
                </p>
              </div>

              <div id="s16">
                <h2>16. Account Suspension</h2>
                <p>
                  Hindu Swad reserves the explicit authority to suspend, restrict, or terminate user accounts during investigations of fraud, platform abuse, chargeback fraud, or violations of our Terms of Service.
                </p>
              </div>

              <div id="s17">
                <h2>17. Platform &amp; Healthcare Disclaimers</h2>
                <ul>
                  <li><strong>FSSAI & Platform Status:</strong> Hindu Swad acts as an intermediary technology platform and does not prepare, package, store, manufacture, or sell food. Food preparation, ingredients, hygiene, and FSSAI compliance remain the sole responsibility of restaurant partners.</li>
                  <li><strong>Allergy Data Disclaimer:</strong> Dietary preferences provided by users are preferences only and should not be relied upon for medical, allergy, religious, or health-related requirements.</li>
                  <li><strong>Emergency Contact Disclaimer:</strong> Hindu Swad does not guarantee the monitoring or fulfillment of medical information, diabetic instructions, allergy warnings, or emergency conditions entered in order notes.</li>
                </ul>
              </div>

              <div id="s18">
                <h2>18. Cross-Border Transfers</h2>
                <p>
                  Some data processors may store data outside India. We ensure equivalent data protection standards are maintained through contractual safeguards.
                </p>
              </div>

              <div id="s19">
                <h2>19. Changes to This Policy</h2>
                <p>
                  We may modify this Policy at any time. Material changes will be communicated via the app or email.
                </p>
              </div>

              <div id="s20">
                <h2>20. Grievance Officer &amp; Contact</h2>
                <p>
                  <strong>Data Protection Officer:</strong> privacy@hinduswad.com
                  <br /><strong>Grievance Officer:</strong> support@hinduswad.com
                  <br /><strong>Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India
                </p>
                <p className="mt-4 text-sm text-zinc-600 bg-zinc-50 p-4 rounded-xl border border-zinc-200">
                  <strong>Grievance Redressal Protocol:</strong> We are committed to acknowledging all grievances within <strong>24 hours</strong> of receipt and resolving them within <strong>30 days</strong>, as mandated by applicable law.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
