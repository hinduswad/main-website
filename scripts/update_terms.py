import sys

with open('/Users/amoghakoulapure/main-hinduswad/main-website/src/app/(public)/terms/page.tsx', 'r') as f:
    content = f.read()

# 1. Contradictory Age Clause
content = content.replace(
    '<li><strong>Age Requirement:</strong> You must be at least 18 years of age to create an account and use the Platform. By registering, you represent and warrant that you meet this age requirement. If you are a minor, you may only use the Platform with the consent and supervision of a parent or legal guardian.</li>',
    '<li><strong>Age Requirement:</strong> Users must be 18 years or older to create an account, place orders, make payments, or enter into transactions on the Platform. By registering, you represent and warrant that you meet this age requirement.</li>'
)

# 2. "Absolutely Not Responsible" Is Dangerous
content = content.replace(
    '<li><strong>Allergy &amp; Health Disclaimer:</strong> Hindu Swad is absolutely not responsible for allergic reactions, food poisoning, dietary issues, or any health complications arising from food ordered via the platform. You must consult the Merchant directly regarding ingredients. See our <Link href="/disclaimer" className="text-orange-500 underline">full Disclaimer</Link> for details.</li>',
    '<li><strong>Allergy &amp; Health Disclaimer:</strong> To the maximum extent permitted by applicable law, Hindu Swad shall not be responsible for food preparation, ingredients, allergen disclosures, food quality, or food safety compliance, which remain the sole responsibility of the Merchant. You must consult the Merchant directly regarding ingredients. See our <Link href="/disclaimer" className="text-orange-500 underline">full Disclaimer</Link> for details.</li>'
)

# 3. Missing Force Majeure Clause
# I will append this to the end sections

# 4. No Chargeback Protection
# Add to Pricing & Payments
content = content.replace(
    '<li><strong>Payment Methods:</strong> We accept various payment methods (credit/debit cards, UPI, net banking) processed through secure third-party payment gateways. You agree to pay all charges associated with your orders.</li>',
    '<li><strong>Payment Methods:</strong> We accept various payment methods (credit/debit cards, UPI, net banking) processed through secure third-party payment gateways. You agree to pay all charges associated with your orders.</li>\n                  <li><strong>Chargebacks:</strong> Hindu Swad reserves the right to recover amounts arising from fraudulent, abusive, or unjustified chargebacks and may suspend associated accounts.</li>'
)

# 5. No Fraud Investigation Clause
# Add to Prohibited Activities
content = content.replace(
    '<p>\n                  <strong>Termination:</strong> Hindu Swad reserves the right, in its sole discretion and without prior notice, to suspend or terminate your account and refuse any and all current or future use of the Platform if we suspect you have violated these Terms.\n                </p>',
    '<p>\n                  <strong>Investigation & Termination:</strong> Hindu Swad reserves the right, in its sole discretion and without prior notice, to suspend or terminate your account and refuse any and all current or future use of the Platform if we suspect you have violated these Terms. Hindu Swad may investigate suspicious transactions, freeze wallet balances, suspend withdrawals, delay refunds, and request additional verification.\n                </p>'
)

# 6. No Electronic Records Clause
# Add at the end sections

# 7. Missing FSSAI License Disclaimer
# Add to Platform vs. Merchant Liability
content = content.replace(
    '<li><strong>No Endorsement:</strong> The listing of a Merchant on the Platform does not constitute an endorsement or warranty of their food quality or safety by Hindu Swad.</li>',
    '<li><strong>No Endorsement:</strong> The listing of a Merchant on the Platform does not constitute an endorsement or warranty of their food quality or safety by Hindu Swad. Hindu Swad relies on representations made by Merchants regarding FSSAI registration, licenses, permits, and food compliance.</li>'
)

# 8. No Restaurant Availability Clause
# Add to Order Placement & Fulfillment
content = content.replace(
    '<li><strong>Order Acceptance:</strong> All orders are subject to acceptance by the Merchant and the availability of a Delivery Executive. Hindu Swad or the Merchant reserves the right to decline or cancel any order.</li>',
    '<li><strong>Order Acceptance:</strong> All orders are subject to acceptance by the Merchant and the availability of a Delivery Executive. Hindu Swad or the Merchant reserves the right to decline or cancel any order, including situations where the restaurant is closed, an item is unavailable, or the restaurant rejects the order.</li>'
)

# 9. No Delivery Failure Clause
# 10. No Contactless Delivery Clause
# 11. No Address Accuracy Clause
# Add to Order Placement
content = content.replace(
    '<li><strong>Delivery Times:</strong> Estimated delivery times are indicative and not guaranteed. Delays may occur due to weather, traffic, restaurant preparation times, or other unforeseen circumstances. Hindu Swad is not liable for delayed deliveries.</li>',
    '<li><strong>Delivery Times:</strong> Estimated delivery times are indicative and not guaranteed. Delays may occur due to weather, traffic, restaurant preparation times, or other unforeseen circumstances. Hindu Swad is not liable for delayed deliveries.</li>\n                  <li><strong>Delivery Information:</strong> User is solely responsible for ensuring delivery information (including address and contact number) is accurate and complete.</li>\n                  <li><strong>Delivery Failure:</strong> Orders may be treated as completed if delivery cannot be completed due to inaccurate information or customer unavailability.</li>\n                  <li><strong>Contactless Delivery:</strong> Users may opt for contactless delivery (e.g., doorstep, unattended delivery); in such cases, Hindu Swad and the Delivery Executive bear no liability for the order once delivered to the specified location.</li>'
)

# 12. No User Generated Content License
# Add to Intellectual Property
content = content.replace(
    'without our express written consent.\n                </p>',
    'without our express written consent.\n                </p>\n                <p>\n                  <strong>User Generated Content:</strong> By submitting reviews, ratings, photos, or feedback, the User grants Hindu Swad a worldwide, royalty-free, perpetual license to use, display, reproduce, and distribute such content on the Platform and for marketing purposes.\n                </p>'
)

# 13. No Promotional Offer Rules
# 14. No Wallet Terms
# Add a new section for this.

# 15. No Communication Consent
# Add to Account Registration
content = content.replace(
    '<li><strong>Single Account:</strong> You may only hold one active user account. Creating multiple accounts to exploit promotional offers is strictly prohibited and will result in immediate termination of all associated accounts.</li>',
    '<li><strong>Single Account:</strong> You may only hold one active user account. Creating multiple accounts to exploit promotional offers is strictly prohibited and will result in immediate termination of all associated accounts.</li>\n                  <li><strong>Communication Consent:</strong> By registering, you explicitly consent to receive communications from Hindu Swad, Merchants, and Delivery Executives via SMS, email, push notifications, OTPs, and phone calls regarding your orders, platform updates, and promotional offers.</li>'
)

# 16. Biggest Marketplace Liability Gap
content = content.replace(
    '<li><strong>Platform Responsibility:</strong> Hindu Swad is responsible solely for operating the technology interface, facilitating payment collection, and coordinating the logistics of delivery via independent Delivery Executives.</li>',
    '<li><strong>Platform Responsibility:</strong> Hindu Swad acts solely as a technology intermediary platform facilitating discovery, ordering, payment facilitation, and delivery coordination between Users, Merchants, and independent Delivery Executives.</li>'
)

# 17. Grievance Officer & Customer Support
content = content.replace(
    '<div id="s15">\n                <h2>15. Grievance Redressal</h2>\n                <p>\n                  If you have any grievances or complaints, please refer to the Grievance Officer details provided in our <Link href="/privacy">Privacy Policy</Link> page.\n                </p>\n              </div>',
    '<div id="s15">\n                <h2>15. Customer Support &amp; Grievance Redressal</h2>\n                <p>\n                  For customer support, please contact us at:\n                  <br/><strong>Email:</strong> support@hinduswad.com\n                  <br/><strong>Phone:</strong> +91 9900754588\n                  <br/><strong>Support Hours:</strong> Monday to Sunday, 8:00 AM – 11:00 PM IST\n                </p>\n                <p className="mt-4">\n                  In accordance with the Consumer Protection (E-Commerce) Rules, 2020, and the Information Technology Act, 2000, our Grievance Officer is:\n                  <br/><strong>Name:</strong> Hanumanth\n                  <br/><strong>Email:</strong> support@hinduswad.com\n                  <br/><strong>Address:</strong> Hindu Swad Pvt. Ltd., Karnataka Regional Office, Bangalore, Karnataka, India\n                </p>\n              </div>'
)

# 19. Missing Arbitration Clause
content = content.replace(
    '<p>\n                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or relating to these Terms or the Platform shall be subject to the exclusive jurisdiction of the competent courts located in Bangalore, Karnataka.\n                </p>',
    '<p>\n                  These Terms shall be governed by and construed in accordance with the laws of the Republic of India. In the event of any dispute, the parties shall first attempt informal resolution or mediation. If unresolved, the dispute shall be referred to binding arbitration in Bengaluru in accordance with the Arbitration and Conciliation Act, 1996. Courts in Bengaluru shall have exclusive jurisdiction only for the enforcement of arbitration awards or interim relief.\n                </p>'
)

# 20. Missing Delivery Executive Protection
content = content.replace(
    '<li><strong>Platform Responsibility:</strong> Hindu Swad acts solely as a technology intermediary platform facilitating discovery, ordering, payment facilitation, and delivery coordination between Users, Merchants, and independent Delivery Executives.</li>',
    '<li><strong>Platform Responsibility:</strong> Hindu Swad acts solely as a technology intermediary platform facilitating discovery, ordering, payment facilitation, and delivery coordination between Users, Merchants, and independent Delivery Executives. Delivery Executives are independent service providers and not employees, agents, representatives, or partners of Hindu Swad.</li>'
)

# 21. Platform Availability Protection
content = content.replace(
    '<p>\n                  The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Hindu Swad disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Platform will be error-free, uninterrupted, or free of viruses.\n                </p>',
    '<p>\n                  The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. Hindu Swad disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Hindu Swad does not guarantee uninterrupted access to the Platform and may suspend services for maintenance, upgrades, security incidents, or operational reasons.\n                </p>'
)

# 22. Limitation on Claims Period
content = content.replace(
    '<p>\n                  In no event shall Hindu Swad\'s aggregate liability for all claims related to the Platform exceed the total amount paid by you for the specific order giving rise to the liability.\n                </p>',
    '<p>\n                  In no event shall Hindu Swad\'s aggregate liability for all claims related to the Platform exceed the total amount paid by you for the specific order giving rise to the liability.\n                </p>\n                <p>\n                  <strong>Claims Period:</strong> Any claim arising out of use of the Platform must be brought within one (1) year from the date the cause of action arose, to the extent permitted by law.\n                </p>'
)

# 23. Merchant Indemnity Reference
# Add to Platform vs. Merchant Liability
content = content.replace(
    '<li><strong>Merchant Responsibility:</strong> The Merchant is exclusively responsible for:',
    '<li><strong>Merchant Responsibility:</strong> The Merchant is exclusively responsible for food preparation, ingredients, packaging, hygiene standards, statutory compliance, and food safety obligations. Hindu Swad does not independently inspect or verify each food item prior to delivery. Specifically, the Merchant is responsible for:'
)

# Now, dealing with the large missing sections: Force Majeure, Electronic Records, Wallet Terms, Promotional Offers.
# Let's insert them before Governing Law (s13) which becomes s17, modifying the TOC.

# We will just do a complete rewrite of the terms using a better approach.

with open('/Users/amoghakoulapure/main-hinduswad/main-website/src/app/(public)/terms/page.tsx', 'w') as f:
    f.write(content)
