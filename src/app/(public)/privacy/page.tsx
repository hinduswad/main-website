export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl mb-6">
          Privacy Policy
        </h1>
        <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600 uppercase tracking-wider mb-8">
          Hindu Swad Pvt. Ltd.
        </span>
        <p className="text-xs text-zinc-400 mb-8">Effective Date: 31 May 2026</p>

        <div className="space-y-8 text-sm text-zinc-600 leading-relaxed">
          <p className="text-zinc-700">
            Hindu Swad Pvt. Ltd. operates a premium food delivery job recruitment and onboarding portal for operational
            roles such as Field Officer, Sales Executive, and TeleCaller across Karnataka and India. We are committed
            to protecting the privacy and security of all individuals who interact with our Platform, including
            candidates, delivery partners, job applicants, and visitors.
          </p>
          <p className="text-zinc-700 font-medium">
            By accessing or using the Platform, registering for any role, or submitting any information to us, you
            agree to the terms of this Privacy Policy and our Terms of Service.
          </p>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">1. Scope and Applicability</h2>
            <p className="mb-3">This Privacy Policy applies to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mb-4">
              <li>
                All information collected through the Platform, including registration forms, job applications,
                assessments, and contact forms.
              </li>
              <li>
                Information collected through our regional offices, telecalling teams, or support channels, to the
                extent such information is entered or stored in systems controlled by Hindu Swad.
              </li>
            </ul>
            <p className="mb-3">This Policy does not apply to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                Third-party websites, apps, or services that may be linked from the Platform (such as social media,
                payment gateways, or employer systems).
              </li>
              <li>
                Data processing performed independently by partner logistics companies, merchants, restaurants, or other
                organizations that may ultimately engage you.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-400">Such third parties are responsible for their own privacy practices.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">2. Legal Basis and Governing Law</h2>
            <p className="mb-3">We process personal information in accordance with:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mb-3">
              <li>
                The Information Technology Act, 2000 (India) and the Information Technology (Reasonable Security
                Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
              </li>
              <li>
                Applicable Indian data protection and employment laws, and, as relevant, the principles of emerging data
                protection frameworks such as the Digital Personal Data Protection (DPDP) regime.
              </li>
            </ul>
            <p>
              Wherever consent is the legal basis for processing, we obtain it in a clear, informed, and specific
              manner (for example, via checkboxes on registration or job application forms).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">3. Information We Collect</h2>
            <p className="mb-4">
              Depending on how you use the Platform, we may collect the following categories of information:
            </p>

            <div className="space-y-4 pl-2">
              <div>
                <h3 className="text-md font-bold text-zinc-900 mb-2">3.1 Information You Provide Directly</h3>
                <ul className="space-y-3 pl-2">
                  <li>
                    <strong className="text-zinc-950 block">Identity Information</strong>
                    Full name, date of birth, photograph, gender, and any other identifiers you provide.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Contact Details</strong>
                    Mobile number, email address, residential address, emergency contact details.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Government and KYC Documents</strong>
                    Aadhaar details, PAN (if provided), driving license (especially for Field Officers), voter ID or
                    other proof of identity and address, subject to applicable law.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Employment and Qualification Information</strong>
                    Educational qualifications, previous employment history, experience with logistics/field
                    work/sales/customer support, language proficiency, and references.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Application Details</strong>
                    Role applied for (Field Officer, Sales Executive, TeleCaller), district preference, contract track
                    (Permanent or Temporary), shift preferences, salary expectations.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Assessment and Interview Data</strong>
                    Aptitude test responses, scores, interview evaluations, notes from verification and regional office
                    interactions.
                  </li>
                  <li>
                    <strong className="text-zinc-950 block">Communication Content</strong>
                    Queries, complaints, feedback, and other information you send via our Contact page, email, phone,
                    or WhatsApp (if used).
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <h3 className="text-md font-bold text-zinc-900 mb-2">3.2 Information Collected Automatically</h3>
                <p className="mb-2">When you use the Platform, we may automatically collect:</p>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong className="text-zinc-950">Technical Data:</strong> IP address, browser type, operating
                    system, device identifiers, language settings, dates and times of access, pages visited, and
                    referring URLs.
                  </li>
                  <li>
                    <strong className="text-zinc-950">Usage Data:</strong> Clickstream data, time spent on pages,
                    navigation patterns, and interactions with forms, buttons, and job listings.
                  </li>
                  <li>
                    <strong className="text-zinc-950">Cookies and Similar Technologies:</strong> Session cookies,
                    preference cookies, and analytics tools that help us improve performance, security, and user
                    experience.
                  </li>
                </ul>
                <p className="mt-2 text-xs text-zinc-400">
                  You may configure your browser to block cookies, but this may impact certain features of the Platform.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-md font-bold text-zinc-900 mb-2">3.3 Information from Third Parties</h3>
                <p className="mb-2">We may receive information about you from:</p>
                <ul className="space-y-2 pl-2">
                  <li>
                    <strong className="text-zinc-950">Payment Gateway Providers:</strong> Limited transaction details
                    such as payment status, transaction ID, and masked card/bank identifiers (we do not store full card
                    or UPI credentials).
                  </li>
                  <li>
                    <strong className="text-zinc-950">Background Verification Partners:</strong> Verification results
                    related to identity, address, criminal background (if used), and employment history, subject to
                    your consent and applicable law.
                  </li>
                  <li>
                    <strong className="text-zinc-950">Partner Organizations and Employers:</strong> Feedback on your
                    performance, attendance, and job status where we coordinate with them for onboarding or candidate
                    management.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">4. Purposes of Processing</h2>
            <p className="mb-3">We process your information for the following purposes:</p>
            <ul className="space-y-3 pl-2">
              <li>
                <strong className="text-zinc-950 block">Registration and Onboarding</strong>
                Creating your candidate profile, verifying identity documents, and assessing eligibility for
                operational roles.
              </li>
              <li>
                <strong className="text-zinc-950 block">Assessment, Selection, and Allocation</strong>
                Conducting aptitude tests, interviews, and evaluations. Allocating you to a suitable role (Field
                Officer, Sales Executive, TeleCaller) and district/region based on your preferences and operational
                requirements.
              </li>
              <li>
                <strong className="text-zinc-950 block">Communication and Support</strong>
                Responding to your queries, providing updates on application status, and sending reminders for
                assessments or onboarding slots. Telecalling support to guide you through registration, documentation,
                and use of any associated apps.
              </li>
              <li>
                <strong className="text-zinc-950 block">Contracting and Operational Management</strong>
                Facilitating your engagement with partner logistics networks, merchants, restaurants, or allied
                entities. Coordinating training, probation, performance reviews, incentives, and security cover as part
                of structured roles.
              </li>
              <li>
                <strong className="text-zinc-950 block">Legal and Compliance Obligations</strong>
                Complying with applicable labor, tax, and regulatory requirements. Preventing fraud, misuse, or abuse of
                the Platform and ensuring security and integrity.
              </li>
              <li>
                <strong className="text-zinc-950 block">Analytics, Improvement, and Business Operations</strong>
                Analyzing Platform usage patterns to improve usability, content, and recruitment processes. Generating
                aggregate, de-identified statistics for internal reporting, planning, and expansion into new districts or
                roles.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-400">
              We will not use your personal information for purposes that are materially different from those described
              here without providing you with appropriate notice or obtaining your consent where legally required.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">5. Legal Bases for Processing</h2>
            <p className="mb-3">Depending on the context, our legal bases include:</p>
            <ul className="space-y-2 pl-2">
              <li>
                <strong className="text-zinc-950">Consent:</strong> When you voluntarily submit your information, agree
                to assessments, or tick consent boxes on the Platform.
              </li>
              <li>
                <strong className="text-zinc-950">Contractual Necessity:</strong> Where processing is required to process
                your application, conduct assessments, or facilitate onboarding for roles you apply for.
              </li>
              <li>
                <strong className="text-zinc-950">Legal Obligation:</strong> Where we must retain or share data to meet
                statutory or regulatory requirements.
              </li>
              <li>
                <strong className="text-zinc-950">Legitimate Interests:</strong> Securing our systems, preventing fraud,
                improving our services, and managing our business, provided such interests are balanced against your
                rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">6. Sharing and Disclosure of Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share it only in the following situations:</p>
            <ul className="space-y-3 pl-2">
              <li>
                <strong className="text-zinc-950 block">Partner Organizations and Employers</strong>
                With logistics operators, delivery networks, merchants, restaurants, or related entities that may
                engage you for roles facilitated through Hindu Swad. They may use such data for hiring decisions,
                onboarding, and ongoing management, under their own policies.
              </li>
              <li>
                <strong className="text-zinc-950 block">Service Providers and Vendors</strong>
                Payment gateway providers, background verification agencies, cloud hosting providers, analytics services,
                and communication tools who process data on our instructions and under appropriate confidentiality obligations.
              </li>
              <li>
                <strong className="text-zinc-950 block">Legal, Regulatory, and Safety Requirements</strong>
                With government authorities, law enforcement, or regulators where required by law, court order, or to
                protect our legal rights, the rights of our users, or public safety.
              </li>
              <li>
                <strong className="text-zinc-950 block">Corporate Transactions</strong>
                In case of a merger, acquisition, reorganization, or sale of assets related to Hindu Swad Pvt. Ltd.,
                your data may be transferred as part of that transaction, subject to continued protection consistent with
                this Policy.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-400">
              Where possible, we share information in anonymized or aggregated form that does not directly identify you.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">7. International Transfers</h2>
            <p className="mb-3">
              At present, Hindu Swad’s primary operations and data processing activities are located in India. However,
              certain cloud or service providers we use may store or process data on servers located outside India.
            </p>
            <p>
              Where data is transferred outside India, we take reasonable steps to ensure that such transfers are subject
              to appropriate safeguards and contractual protections, consistent with applicable law. Your information
              will continue to receive protection substantially similar to that described in this Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">8. Data Retention</h2>
            <p className="mb-3">We retain your personal information for as long as necessary to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>Fulfil the purposes described in this Policy;</li>
              <li>Comply with legal, accounting, tax, and regulatory obligations;</li>
              <li>Resolve disputes and enforce our agreements.</li>
            </ul>
            <p className="mb-3">Illustratively:</p>
            <ul className="space-y-2 pl-2">
              <li>
                <strong className="text-zinc-950">Candidate records and application data</strong> may be retained for the
                duration of your engagement plus a reasonable period thereafter (for example, as required for legal
                limitation periods).
              </li>
              <li>
                <strong className="text-zinc-950">Transaction records and invoices</strong> may be retained for the period
                mandated under tax or financial regulations.
              </li>
              <li>
                <strong className="text-zinc-950">Technical logs (such as IP and usage logs)</strong> may be retained for
                shorter periods, except when required for security, investigation, or legal purposes.
              </li>
            </ul>
            <p className="mt-3 text-xs text-zinc-400">
              Where information is no longer required, we will delete, anonymize, or securely store it in archival form
              in accordance with our data retention practices and applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">9. Your Rights and Choices</h2>
            <p className="mb-3">Subject to applicable law, you may have the following rights:</p>
            <ul className="space-y-3 pl-2 mb-4">
              <li>
                <strong className="text-zinc-950 block">Access</strong>
                To request confirmation of whether we hold personal information about you and to obtain a copy of such
                information.
              </li>
              <li>
                <strong className="text-zinc-950 block">Correction (Rectification)</strong>
                To request correction of inaccurate or incomplete personal information (for example, updated contact
                details or corrected spellings).
              </li>
              <li>
                <strong className="text-zinc-950 block">Withdrawal of Consent</strong>
                Where processing is based on consent, you may withdraw consent at any time, provided that such withdrawal
                does not affect prior lawful processing. Withdrawal may impact our ability to process your application
                or continue your engagement.
              </li>
              <li>
                <strong className="text-zinc-950 block">Object or Restrict</strong>
                To object to or request restriction of certain processing activities, particularly where we rely on
                legitimate interests and your rights outweigh such interests.
              </li>
              <li>
                <strong className="text-zinc-950 block">Deletion (Erasure)</strong>
                To request deletion of your personal information, subject to our legal, contractual, and legitimate
                business requirements to retain certain data.
              </li>
            </ul>
            <p>
              To exercise these rights, you can contact us using the details provided in Section 14 (Contact Us). We may
              require reasonable verification of your identity before acting on such requests.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">10. Security Measures</h2>
            <p className="mb-3">We implement reasonable security practices and procedures as required under Indian IT law, including:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>Technical measures such as encryption, access controls, firewalls, and secure servers.</li>
              <li>
                Organizational measures such as role-based access, staff training, and confidentiality obligations for
                employees and service providers.
              </li>
            </ul>
            <p className="mb-3">While we strive to protect your information, no system can be completely secure. You are also responsible for:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Maintaining the confidentiality of any login credentials used on the Platform.</li>
              <li>Not sharing one-time passwords (OTPs) or verification links with others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">11. Cookies and Tracking Technologies</h2>
            <p className="mb-3">We may use cookies, pixels, and similar technologies to:</p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>Maintain session continuity and login states;</li>
              <li>Remember your preferences (such as language or district preference);</li>
              <li>Measure Platform performance and usage patterns.</li>
            </ul>
            <p>
              You may manage cookies through your browser settings. Disabling certain cookies may impact the proper
              functioning of the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">12. Children’s Privacy</h2>
            <p>
              The Platform is not intended for children under 18 years of age. We do not knowingly collect personal
              information from individuals below the minimum legal working age in the relevant jurisdiction. If you believe
              that a child has provided personal information to us in violation of applicable law, please contact us so
              that we can take appropriate steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">13. Changes to This Privacy Policy</h2>
            <p>
              We may update or modify this Privacy Policy from time to time to reflect changes in legal or regulatory
              requirements, our business operations, roles, or technology, or user feedback. The updated Privacy Policy
              will be posted on the Platform with an updated “Effective Date”. Your continued use of the Platform after
              such changes constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-zinc-950 mb-3">14. Contact Us / Grievance Officer</h2>
            <p className="mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy, or if you wish to exercise
              your rights, you may contact us at:
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 mb-4">
              <p className="font-bold text-zinc-950">Hindu Swad Pvt. Ltd.</p>
              <p className="text-zinc-500 text-xs">Karnataka Regional Office</p>
              <p className="text-zinc-500 text-xs">Bangalore, Karnataka, India</p>
            </div>
            <p className="mb-3">
              For matters under Indian IT rules, you may also write to our designated Grievance Officer:
            </p>
            <div className="bg-orange-50/40 border border-orange-100 rounded-xl p-4 space-y-2">
              <p>
                <strong className="text-zinc-950">Name:</strong> Hanumanth
              </p>
              <p>
                <strong className="text-zinc-950">Email:</strong>{" "}
                <a href="mailto:support@hinduswad.com" className="text-orange-500 hover:underline">
                  support@hinduswad.com
                </a>
              </p>
              <p>
                <strong className="text-zinc-950">Phone:</strong>{" "}
                <a href="tel:9900754588" className="text-orange-500 hover:underline">
                  9900754588
                </a>
              </p>
              <p>
                <strong className="text-zinc-950">Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office,
                Bangalore, Karnataka, India
              </p>
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              We will endeavor to respond to all legitimate requests within the time frames prescribed by applicable law.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
