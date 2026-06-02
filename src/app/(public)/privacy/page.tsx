import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Hindu Swad Private Limited",
  description:
    "Comprehensive Privacy Policy of Hindu Swad Private Limited. Covers GPS location tracking, financial data, order history, third-party data sharing with restaurants and delivery partners, and your rights under Indian law.",
};

const toc = [
  "Introduction & Scope",
  "Data Controller Information",
  "Data We Collect",
  "Legal Basis for Processing",
  "How We Use Your Data",
  "Third-Party Data Sharing",
  "Location Data",
  "Financial & Payment Data",
  "Data Retention",
  "Data Security",
  "Your Rights",
  "Children's Privacy",
  "Cookies & Tracking",
  "Cross-Border Transfers",
  "Changes to This Policy",
  "Grievance Officer",
  "Contact",
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
            Hindu Swad Private Limited collects and processes sensitive personal data including real-time GPS location, financial information, and order history. This policy explains precisely what we collect, why we collect it, who we share it with, and how you can exercise your rights.
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
                <h2>1. Introduction &amp; Scope</h2>
                <p>
                  This Privacy Policy (&ldquo;Policy&rdquo;) is published by <strong>Hindu Swad Private Limited</strong> (&ldquo;Hindu Swad&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company incorporated under the Companies Act, 2013 (CIN: U63120KA2025PTC206410), with its registered office at Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka — 560001, India.
                </p>
                <p>
                  This Policy applies to all personal data processed in connection with:
                </p>
                <ul>
                  <li>The Hindu Swad mobile application (iOS and Android)</li>
                  <li>The website at hinduswad.com and all subdomains</li>
                  <li>The Hindu Swad Restaurant Partner Portal</li>
                  <li>The Hindu Swad Delivery Partner Application</li>
                  <li>Any APIs, web services, or third-party integrations operated by Hindu Swad</li>
                  <li>Interactions with our customer support, partner support, or grievance teams</li>
                </ul>
                <p>
                  This Policy is governed by the <strong>Information Technology Act, 2000</strong>, the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong> (&ldquo;SPDI Rules&rdquo;), the <strong>Consumer Protection Act, 2019</strong>, the <strong>Consumer Protection (E-Commerce) Rules, 2020</strong>, and all other applicable Indian laws and regulations.
                </p>
                <p>
                  By accessing or using any part of our Platform, you acknowledge that you have read, understood, and freely and expressly consent to the collection, use, processing, storage, and disclosure of your personal information as described in this Policy. If you do not agree with any part of this Policy, you must immediately cease using our Platform and request deletion of your account and data.
                </p>
              </div>

              <div id="s2">
                <h2>2. Data Controller Information</h2>
                <p>For the purposes of applicable Indian data protection law, the data controller and data fiduciary is:</p>
                <ul>
                  <li><strong>Entity:</strong> Hindu Swad Private Limited</li>
                  <li><strong>CIN:</strong> U63120KA2025PTC206410</li>
                  <li><strong>GSTIN:</strong> 29AAICH1082Q1ZY</li>
                  <li><strong>Registered Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka — 560001</li>
                  <li><strong>Privacy Email:</strong> support@hinduswad.com</li>
                  <li><strong>Grievance Officer Email:</strong> support@hinduswad.com</li>
                </ul>
              </div>

              <div id="s3">
                <h2>3. Data We Collect</h2>
                <p>We collect the following categories of personal data, including &ldquo;Sensitive Personal Data or Information&rdquo; (SPDI) as defined under the SPDI Rules:</p>

                <h3>3.1 Account &amp; Identity Data</h3>
                <ul>
                  <li>Full name, display name, and profile photograph</li>
                  <li>Mobile phone number (used as primary identifier and for OTP authentication)</li>
                  <li>Email address</li>
                  <li>Date of birth (for age verification)</li>
                  <li>Gender (optional)</li>
                  <li>Profile preferences and dietary requirements (optional)</li>
                </ul>

                <h3>3.2 Location Data (Sensitive)</h3>
                <ul>
                  <li><strong>Precise GPS location</strong> when the app is open and actively used — for restaurant discovery, delivery address auto-fill, and ETA calculations</li>
                  <li><strong>Background location data</strong> while an order is active — for real-time delivery tracking visible to both the customer and the assigned delivery partner</li>
                  <li><strong>Delivery partner location</strong>: continuous, precise GPS tracking while a delivery partner is logged in and active on the app — for route optimisation, order assignment, and ETA accuracy</li>
                  <li>Saved addresses (home, work, and other custom labels), including GPS coordinates and street-level address data</li>
                  <li>Location history associated with past orders (retained as per Section 9)</li>
                </ul>

                <h3>3.3 Order &amp; Transaction Data</h3>
                <ul>
                  <li>Complete order history including items ordered, quantities, customisations, restaurant name, order timestamps, and order values</li>
                  <li>Cancellation history and reasons for cancellation</li>
                  <li>Refund history and dispute records</li>
                  <li>Delivery addresses associated with each order</li>
                  <li>Ratings and reviews submitted for restaurants and delivery partners</li>
                </ul>

                <h3>3.4 Financial &amp; Payment Data (Sensitive)</h3>
                <ul>
                  <li>Payment method type (credit card, debit card, UPI, net banking, digital wallet)</li>
                  <li>Last 4 digits of payment card numbers (we do <strong>not</strong> store full card numbers)</li>
                  <li>UPI Virtual Payment Address (VPA / UPI ID)</li>
                  <li>Transaction reference numbers and payment gateway tokens</li>
                  <li>Hindu Swad Wallet balance and transaction history</li>
                  <li>Refund processing records</li>
                </ul>
                <p>
                  <strong>Important:</strong> Full payment card details are processed exclusively by our PCI-DSS certified payment gateway partners. Hindu Swad does not store, transmit, or process complete card numbers or CVV/CVC codes.
                </p>

                <h3>3.5 Device &amp; Technical Data</h3>
                <ul>
                  <li>Device type, manufacturer, and model (e.g., Samsung Galaxy S24)</li>
                  <li>Operating system name and version (iOS, Android)</li>
                  <li>Unique device identifiers (IMEI, advertising ID, Android ID, IDFA)</li>
                  <li>Mobile network operator, carrier information, and connectivity type (Wi-Fi, 4G, 5G)</li>
                  <li>App version number and session data</li>
                  <li>IP address and approximate IP-based location</li>
                  <li>Crash logs, error reports, and diagnostic data</li>
                  <li>Browser type and version (for web users)</li>
                  <li>Push notification token</li>
                </ul>

                <h3>3.6 Behavioural &amp; Usage Data</h3>
                <ul>
                  <li>Restaurants viewed, clicked, or bookmarked</li>
                  <li>Search queries entered in the app or website</li>
                  <li>Features used, buttons tapped, and navigation patterns</li>
                  <li>Session duration and frequency of app usage</li>
                  <li>A/B test group assignments and feature flag states</li>
                  <li>Response to push notifications and in-app messages</li>
                </ul>

                <h3>3.7 Communications Data</h3>
                <ul>
                  <li>Chat transcripts from in-app customer support conversations</li>
                  <li>Email communications with our support, partner, or grievance teams</li>
                  <li>Ratings, reviews, and comments submitted on the platform</li>
                  <li>Voice call recordings (with consent) between customer and delivery partner or support agent</li>
                </ul>

                <h3>3.8 Partner-Specific Data (Restaurant Partners)</h3>
                <ul>
                  <li>Restaurant owner/proprietor full name and contact details</li>
                  <li>FSSAI licence number and expiry date</li>
                  <li>GST registration number</li>
                  <li>Bank account details (account number, IFSC code) for payment settlement</li>
                  <li>Business registration and KYC documents</li>
                  <li>Menu data, pricing, and restaurant operating hours</li>
                </ul>

                <h3>3.9 Partner-Specific Data (Delivery Partners)</h3>
                <ul>
                  <li>Full name, date of birth, and photograph</li>
                  <li>Aadhaar Card number (masked) and copy</li>
                  <li>PAN Card number and copy</li>
                  <li>Driving licence number and copy</li>
                  <li>Vehicle registration number (RC Book) and insurance</li>
                  <li>Bank account details for weekly earnings payouts</li>
                  <li>Continuous GPS location while on active duty (see Section 7)</li>
                  <li>Delivery performance metrics, ratings, and incident history</li>
                </ul>
              </div>

              <div id="s4">
                <h2>4. Legal Basis for Processing</h2>
                <p>We process your personal data under the following legal bases:</p>
                <ul>
                  <li><strong>Your consent:</strong> For sensitive personal data (location, financial data), biometric data processing, and marketing communications. You may withdraw consent at any time (see Section 11).</li>
                  <li><strong>Contractual necessity:</strong> To fulfil our obligations under the User Agreement, Restaurant Partner Agreement, or Delivery Partner Agreement you have entered into with us.</li>
                  <li><strong>Legal obligation:</strong> To comply with applicable Indian laws including the IT Act, GST Act, Consumer Protection Act, and orders of competent courts and regulatory authorities.</li>
                  <li><strong>Legitimate interests:</strong> For fraud prevention, platform security, improving our services, and analytics — provided such interests are not overridden by your fundamental rights.</li>
                </ul>
              </div>

              <div id="s5">
                <h2>5. How We Use Your Data</h2>
                <p>We use the data we collect for the following specific purposes:</p>
                <ul>
                  <li><strong>Account creation and authentication:</strong> Creating and verifying your account, authenticating logins, and managing sessions.</li>
                  <li><strong>Order fulfilment:</strong> Processing food orders, assigning delivery partners, facilitating communication between parties, and tracking delivery status.</li>
                  <li><strong>Delivery route optimisation:</strong> Using GPS data to assign the nearest available delivery partner, calculate real-time ETAs, and optimise delivery routes.</li>
                  <li><strong>Personalised restaurant recommendations:</strong> Analysing your order history, search queries, and browsing behaviour to surface relevant restaurants and cuisines you are likely to enjoy.</li>
                  <li><strong>Payment processing:</strong> Facilitating secure payment collection, refund processing, and settlement payments to restaurant and delivery partners.</li>
                  <li><strong>Fraud detection and prevention:</strong> Monitoring account activity, payment patterns, and device fingerprints to detect and prevent fraudulent transactions, fake orders, and coupon abuse.</li>
                  <li><strong>Customer support:</strong> Investigating and resolving order complaints, refund requests, account issues, and grievances.</li>
                  <li><strong>Platform improvement:</strong> Conducting internal analytics, A/B testing, and user research to improve product features and user experience.</li>
                  <li><strong>Legal compliance:</strong> Maintaining transaction records for statutory periods, responding to law enforcement requests, and complying with court orders.</li>
                  <li><strong>Marketing communications:</strong> Sending promotional offers, personalised discounts, and platform updates via push notifications, SMS, and email (with your consent; opt-out available at any time).</li>
                  <li><strong>Delivery partner performance management:</strong> Monitoring delivery performance, ratings, and compliance with our Partner Code of Conduct.</li>
                </ul>
              </div>

              <div id="s6">
                <h2>6. Third-Party Data Sharing</h2>
                <p>
                  We do not sell your personal data to third parties for their independent commercial use. However, we share specific data with the following third-party categories as necessary for the functioning of our platform. We have entered into data processing agreements with all third-party processors requiring them to maintain equivalent data protection standards.
                </p>

                <h3>6.1 Restaurant Partners</h3>
                <p>When you place an order, we share with the relevant restaurant partner:</p>
                <ul>
                  <li>Your first name (for order identification)</li>
                  <li>A masked version of your mobile number (for order clarifications only — full number is never shared)</li>
                  <li>Complete order details including items, quantities, customisations, and special instructions</li>
                  <li>Order time and requested delivery time (if scheduled)</li>
                </ul>
                <p>We do NOT share your delivery address, last name, email address, or payment details with restaurant partners.</p>

                <h3>6.2 Delivery Partners</h3>
                <p>When a delivery partner is assigned to your order, we share:</p>
                <ul>
                  <li>Your first name</li>
                  <li>Your precise delivery address (required for delivery)</li>
                  <li>A masked/proxied mobile number for in-app calling (actual number is never directly exposed)</li>
                  <li>Delivery instructions (e.g., gate code, flat number, landmark)</li>
                  <li>Your real-time location (only if you enable live tracking sharing for the order)</li>
                </ul>

                <h3>6.3 Payment Gateway Partners</h3>
                <p>We share payment initiation data with PCI-DSS certified payment gateway providers (including but not limited to Razorpay, Cashfree, or equivalent) for secure transaction processing. These partners do not receive your order history, location data, or app usage data.</p>

                <h3>6.4 Cloud Infrastructure &amp; Technology Providers</h3>
                <p>We use leading cloud service providers (including AWS and/or Google Cloud) to host our application and databases. These providers have access to infrastructure level data under strict contractual obligations and are prohibited from using data for their own purposes.</p>

                <h3>6.5 Analytics Providers</h3>
                <p>We use analytics platforms (such as Firebase, Mixpanel, or equivalent) to understand app usage. These tools receive anonymised or pseudonymised usage data. They do not receive your name, contact details, or financial data.</p>

                <h3>6.6 SMS &amp; Push Notification Providers</h3>
                <p>We share your mobile number with SMS gateway providers (e.g., Exotel, Twilio) for OTP delivery and order notifications. We share your device push token with push notification services (e.g., Firebase Cloud Messaging) for in-app alerts.</p>

                <h3>6.7 Legal &amp; Regulatory Authorities</h3>
                <p>We may disclose your personal data to government authorities, law enforcement agencies, courts, or regulatory bodies where legally required, including in response to lawful subpoenas, court orders, or legal process. We will notify you of such disclosures where permitted by law.</p>

                <h3>6.8 Business Transfers</h3>
                <p>In the event of a merger, acquisition, restructuring, sale of assets, or insolvency proceedings, your personal data may be transferred to the relevant successor entity, subject to equivalent privacy protections. We will notify you of any such transfer within 30 days.</p>
              </div>

              <div id="s7">
                <h2>7. Location Data — Detailed Disclosure</h2>
                <p>
                  Given the sensitivity of location data, we provide this dedicated section to explain exactly how location is collected and used.
                </p>
                <ul>
                  <li><strong>When you open the app:</strong> We collect your precise GPS location (latitude and longitude, accurate to approximately 5 metres) to show nearby restaurants and auto-populate delivery addresses.</li>
                  <li><strong>While an order is active:</strong> We collect your device location in the background to allow you to see the delivery partner approaching your location on the live tracking map. This background location collection stops automatically when your order is marked delivered or cancelled.</li>
                  <li><strong>Delivery partner tracking:</strong> While a delivery partner is logged in and set to &ldquo;Available&rdquo; or on an active delivery, their device transmits GPS location to our servers every 5 seconds. This data is used exclusively for order assignment, route optimisation, and ETA calculation. It is not shared with other users or third parties except as described in Section 6.2.</li>
                  <li><strong>Location history:</strong> We retain location data associated with completed orders for 24 months for fraud prevention, dispute resolution, and legal compliance purposes.</li>
                  <li><strong>How to control location permissions:</strong> You may revoke location permissions at any time through your device settings (iOS: Settings → Privacy → Location Services; Android: Settings → Apps → Hindu Swad → Permissions). Revoking location access will prevent restaurant discovery and real-time delivery tracking but will not affect your ability to manually enter a delivery address.</li>
                </ul>
              </div>

              <div id="s8">
                <h2>8. Financial &amp; Payment Data — Detailed Disclosure</h2>
                <ul>
                  <li>All payment transactions are processed by PCI-DSS Level 1 certified payment gateway partners. Hindu Swad operates as a <strong>payment aggregator</strong> under RBI guidelines and does not independently store, transmit, or process cardholder data.</li>
                  <li>Your payment instrument data (card tokens, UPI mandates) may be stored in tokenised form by our payment partners to enable faster future checkouts. This is subject to RBI Tokenisation Guidelines (2022).</li>
                  <li>Financial transaction records (order values, payment methods, refund records) are retained for <strong>7 years</strong> from the date of transaction in compliance with the Companies Act, 2013, the Income Tax Act, 1961, and GST rules.</li>
                  <li>Restaurant and delivery partner bank account details are stored in encrypted form and used exclusively for settlement payments.</li>
                </ul>
              </div>

              <div id="s9">
                <h2>9. Data Retention</h2>
                <p>We retain your personal data for the following periods:</p>
                <ul>
                  <li><strong>Account data:</strong> For the duration of your active account, plus 3 years after account closure or deletion request.</li>
                  <li><strong>Order and transaction history:</strong> 7 years from the date of the transaction (statutory requirement).</li>
                  <li><strong>Location data:</strong> 24 months from the date of the associated transaction.</li>
                  <li><strong>Customer support records:</strong> 3 years from the date of resolution.</li>
                  <li><strong>KYC documents (restaurant and delivery partners):</strong> 5 years from the termination of the partnership agreement.</li>
                  <li><strong>Marketing preference records:</strong> Updated immediately upon opt-out; retained for 2 years thereafter for compliance.</li>
                  <li><strong>Fraud investigation records:</strong> 7 years from the date of the incident.</li>
                  <li><strong>Device and log data:</strong> 90 days on a rolling basis.</li>
                </ul>
                <p>
                  Upon expiry of the applicable retention period, your data will be securely deleted or anonymised in a manner that prevents re-identification.
                </p>
              </div>

              <div id="s10">
                <h2>10. Data Security</h2>
                <p>We implement a comprehensive set of technical, physical, and organisational security measures, including:</p>
                <ul>
                  <li><strong>Encryption in transit:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher (256-bit SSL certificates).</li>
                  <li><strong>Encryption at rest:</strong> Sensitive data stored in our databases is encrypted using AES-256 encryption.</li>
                  <li><strong>Access controls:</strong> Access to personal data is restricted on a strict need-to-know basis using role-based access control (RBAC). All internal access is logged and audited.</li>
                  <li><strong>Multi-factor authentication:</strong> Required for all internal system access and for high-risk user account operations.</li>
                  <li><strong>Penetration testing:</strong> We conduct regular third-party penetration testing and vulnerability assessments.</li>
                  <li><strong>Incident response:</strong> We maintain a documented data breach response plan. In the event of a breach affecting your personal data, we will notify affected users and relevant authorities within the timelines required by applicable law.</li>
                  <li><strong>Vendor security:</strong> All third-party data processors are subject to security due diligence and contractual security obligations.</li>
                  <li><strong>PCI-DSS compliance:</strong> Our payment systems and payment gateway partners are PCI-DSS compliant.</li>
                </ul>
              </div>

              <div id="s11">
                <h2>11. Your Rights</h2>
                <p>Under applicable Indian law, you have the following rights with respect to your personal data. To exercise any right, contact us at <strong>support@hinduswad.com</strong>. We will respond within 30 days.</p>
                <ul>
                  <li><strong>Right of Access:</strong> You may request a copy of all personal data we hold about you. We will provide this in a structured, machine-readable format.</li>
                  <li><strong>Right to Correction:</strong> You may request correction of any inaccurate or incomplete personal data.</li>
                  <li><strong>Right to Deletion:</strong> You may request deletion of your account and associated personal data. Deletion will be completed within 30 days, subject to our legal retention obligations under Section 9. Data that must be retained for statutory periods will be quarantined and used only for compliance purposes.</li>
                  <li><strong>Right to Withdraw Consent:</strong> You may withdraw consent for processing at any time by: (a) revoking app permissions through device settings; (b) opting out of marketing through account settings or email unsubscribe links; (c) submitting a data processing objection to support@hinduswad.com. Withdrawal of consent will not affect the lawfulness of processing carried out prior to withdrawal.</li>
                  <li><strong>Right to Portability:</strong> You may request a portable copy of your personal data in a machine-readable format (JSON/CSV) for transfer to another service provider.</li>
                  <li><strong>Right to Object:</strong> You may object to processing of your data for direct marketing at any time. You may also object to other forms of processing based on legitimate interests by demonstrating that your fundamental rights override our legitimate interests.</li>
                  <li><strong>Right to manage Location permissions:</strong> Revoke or modify location permissions at any time through device settings as described in Section 7.</li>
                  <li><strong>Right to lodge a complaint:</strong> If you are unsatisfied with our response, you may file a complaint with the Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, or the Ministry of Electronics and Information Technology (MeitY) under the IT Act, 2000.</li>
                </ul>
              </div>

              <div id="s12">
                <h2>12. Children&apos;s Privacy</h2>
                <p>
                  Our Platform is strictly intended for users who are 18 years of age or older. We do not knowingly collect, store, or process personal data of individuals under 18 years of age. Account registration requires explicit confirmation that the user is 18 or older.
                </p>
                <p>
                  If we become aware that we have inadvertently collected personal data from a minor, we will: (a) immediately suspend the account pending investigation; (b) delete all associated personal data within 72 hours; and (c) notify the parent or guardian if contact information is available.
                </p>
                <p>
                  Parents or guardians who believe their child has created a Hindu Swad account should contact us immediately at <strong>support@hinduswad.com</strong>.
                </p>
              </div>

              <div id="s13">
                <h2>13. Cookies &amp; Tracking Technologies</h2>
                <p>We use the following tracking technologies on our website and app:</p>
                <ul>
                  <li><strong>Session cookies:</strong> Maintain your authenticated session. Expire when you close the browser. Cannot be disabled without breaking platform functionality.</li>
                  <li><strong>Persistent cookies:</strong> Remember your preferences (language, saved addresses, recent searches). Expire after 12 months.</li>
                  <li><strong>Analytics trackers:</strong> Used by analytics partners to measure app and website usage. Collect anonymised or pseudonymised data.</li>
                  <li><strong>Advertising identifiers:</strong> Used for measuring the effectiveness of our paid marketing campaigns. You may opt out by resetting your advertising ID in device settings.</li>
                  <li><strong>Third-party pixels:</strong> Social media platforms (Meta, Google) may set tracking pixels on our website for ad measurement. These are subject to the respective platform&apos;s privacy policies.</li>
                </ul>
                <p>You may manage cookie preferences through your browser settings. Disabling cookies other than strictly necessary cookies may affect website functionality.</p>
              </div>

              <div id="s14">
                <h2>14. Cross-Border Data Transfers</h2>
                <p>
                  Some of our third-party service providers (cloud hosting, analytics, communication tools) may store or process your data on servers located outside India. Where such transfers occur, we ensure that equivalent data protection standards are maintained through contractual safeguards, including Standard Contractual Clauses (SCCs) and data processing agreements.
                </p>
                <p>
                  We comply with all applicable RBI and SEBI data localisation requirements regarding financial data. Payment transaction data is stored on servers located in India.
                </p>
              </div>

              <div id="s15">
                <h2>15. Changes to This Privacy Policy</h2>
                <p>
                  We reserve the right to modify this Privacy Policy at any time. We will provide notice of material changes through one or more of the following: (a) a prominent in-app notification at least 30 days before the change takes effect; (b) an email notification to your registered email address; (c) a notice on the hinduswad.com website. Material changes that expand our data collection or sharing practices will require renewed consent where legally required.
                </p>
                <p>
                  Your continued use of the Platform after the effective date of a revised Policy constitutes your acceptance of the revised Policy.
                </p>
              </div>

              <div id="s16">
                <h2>16. Grievance Officer</h2>
                <p>
                  In accordance with Rule 5(9) of the SPDI Rules, 2011, and the Consumer Protection (E-Commerce) Rules, 2020, we have designated the following Grievance Officer for privacy-related complaints:
                </p>
                <ul>
                  <li><strong>Name:</strong> Hanumanth</li>
                  <li><strong>Designation:</strong> Grievance Officer, Hindu Swad Private Limited</li>
                  <li><strong>Email:</strong> support@hinduswad.com</li>
                  <li><strong>Phone:</strong> +91 9900754588</li>
                  <li><strong>Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India</li>
                  <li><strong>Working Hours:</strong> Monday to Friday, 10:00 AM – 6:00 PM IST</li>
                  <li><strong>Response Timeline:</strong> Acknowledgement within 24 hours; Resolution within 30 days</li>
                </ul>
              </div>

              <div id="s17">
                <h2>17. Contact</h2>
                <p>For any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data:</p>
                <ul>
                  <li><strong>Privacy Enquiries:</strong> support@hinduswad.com</li>
                  <li><strong>General Contact:</strong> support@hinduswad.com</li>
                  <li><strong>Postal Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka — 560001, India</li>
                  <li><strong>Contact Form:</strong> <Link href="/contact">hinduswad.com/contact</Link></li>
                </ul>
              </div>

              <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  This Privacy Policy is governed by the laws of the Republic of India. Hindu Swad Private Limited (CIN: U63120KA2025PTC206410) is registered at Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka — 560001, India. Any disputes arising out of this Policy are subject to the exclusive jurisdiction of the courts at Bangalore, Karnataka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
