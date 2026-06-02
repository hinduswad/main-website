import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ShieldAlert, Store, Stethoscope, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer — Hindu Swad Private Limited",
  description:
    "Legal and Liability Disclaimer for Hindu Swad. Covers platform role, food and ingredient liability, allergy and health disclaimers, and restaurant responsibilities.",
};

const toc = [
  "1. Platform Role & Limitations",
  "2. Food, Ingredient & Menu Disclaimer",
  "3. Allergy, Dietary & Health Disclaimer",
  "4. Sole Restaurant Responsibility",
  "5. Limitation of Platform Liability",
  "6. Future-Proofing Clause",
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="warm-bg border-b border-zinc-100 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <span className="badge-soon mb-4 block w-fit">Legal</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-950 mb-3 leading-tight">
            Liability &amp; Health Disclaimer
          </h1>
          <p className="text-sm text-zinc-500 max-w-3xl leading-relaxed">
            Hindu Swad Private Limited is a technology intermediary. This document outlines critical disclaimers regarding food safety, allergens, and our strict limitation of liability concerning any products prepared by independent third-party vendors on our platform.
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

              <div className="mb-10 p-5 bg-red-50 border border-red-200 rounded-2xl flex gap-4 items-start">
                <ShieldAlert size={24} className="text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-black text-red-900 mb-1">Critical Notice</h3>
                  <p className="text-xs text-red-800 leading-relaxed">
                    By using this platform, you expressly acknowledge that Hindu Swad does not prepare, handle, or inspect any food. You must verify all allergy and ingredient information directly with the restaurant before consumption.
                  </p>
                </div>
              </div>

              <div id="s1">
                <h2 className="flex items-center gap-2">
                  <Scale size={20} className="text-zinc-400" />
                  1. Platform Role &amp; Limitations
                </h2>
                <p>
                  Hindu Swad Private Limited (&ldquo;Hindu Swad&rdquo;) acts solely as an independent technology intermediary. Our platform is designed to display, list, discover, promote, and facilitate connections between users and independent restaurants, cloud kitchens, hotels, cafés, and food providers (collectively, &ldquo;Restaurants&rdquo;).
                </p>
                <p><strong>Hindu Swad explicitly DOES NOT:</strong></p>
                <ul>
                  <li>Prepare, cook, handle, or manufacture food products.</li>
                  <li>Own, operate, or control any Restaurant operations or facilities.</li>
                  <li>Verify, test, or audit the ingredients used in food preparation.</li>
                  <li>Guarantee food quality, freshness, hygiene, temperature, or nutritional value.</li>
                  <li>Provide any medical, dietary, nutritional, or health-related advice.</li>
                </ul>
              </div>

              <div id="s2">
                <h2 className="flex items-center gap-2">
                  <Store size={20} className="text-orange-500" />
                  2. Food, Ingredient &amp; Menu Disclaimer
                </h2>
                <p>
                  All food descriptions, ingredients, allergen information, nutritional data, imagery, prices, and menu details displayed on the Hindu Swad platform are provided exclusively by the respective Restaurants.
                </p>
                <ul>
                  <li><strong>No Independent Verification:</strong> Hindu Swad does not independently verify the accuracy, completeness, or truthfulness of any information provided by the Restaurant. Menu items may vary from their photographs.</li>
                  <li><strong>Direct Verification Required:</strong> Users must directly contact the relevant Restaurant for definitive ingredient, allergen, dietary, religious (e.g., Halal, Jain, Kosher), nutritional, or health-related information prior to placing an order.</li>
                </ul>
              </div>

              <div id="s3">
                <h2 className="flex items-center gap-2">
                  <Stethoscope size={20} className="text-red-500" />
                  3. Allergy, Dietary &amp; Health Disclaimer
                </h2>
                <p>
                  Food allergies and intolerances can be severe and life-threatening. Hindu Swad cannot and does not guarantee that any food item is free of allergens (including, but not limited to, peanuts, tree nuts, dairy, soy, gluten, or shellfish). Cross-contamination may occur in any Restaurant kitchen.
                </p>
                <p><strong>You acknowledge and agree that:</strong></p>
                <ul>
                  <li>Hindu Swad is absolutely not responsible or liable for any allergic reactions, food intolerances, dietary issues, health complications, food poisoning, sickness, or adverse effects arising from food or beverages consumed from any listed establishment.</li>
                  <li>Customers are solely and exclusively responsible for confirming ingredient and allergen information before purchasing or consuming any item.</li>
                  <li>Individuals with food allergies, dietary restrictions, or underlying medical conditions must consult the Restaurant directly before ordering or consuming food.</li>
                </ul>
              </div>

              <div id="s4">
                <h2>4. Sole Restaurant Responsibility</h2>
                <p>
                  Every Restaurant, hotel, café, cloud kitchen, food vendor, or merchant listed on the Hindu Swad platform acts as an independent contractor and is solely and legally responsible for:
                </p>
                <ul>
                  <li>All aspects of food preparation and cooking.</li>
                  <li>The sourcing and safety of all ingredients used.</li>
                  <li>Maintaining strict hygiene and sanitation standards in their kitchens.</li>
                  <li>Strict compliance with all food safety laws, including obtaining and maintaining valid FSSAI (Food Safety and Standards Authority of India) licenses.</li>
                  <li>Proper, secure, and tamper-proof packaging.</li>
                  <li>The accuracy of their menu, descriptions, and allergen disclosures.</li>
                  <li>All customer health and safety obligations arising from the consumption of their food.</li>
                </ul>
              </div>

              <div id="s5">
                <h2 className="flex items-center gap-2">
                  <AlertTriangle size={20} className="text-amber-500" />
                  5. Limitation of Platform Liability
                </h2>
                <p>
                  To the maximum extent permitted by applicable Indian law, Hindu Swad Private Limited, its directors, employees, affiliates, and agents shall bear no liability whatsoever, whether in contract, tort (including negligence), statutory duty, or otherwise, for:
                </p>
                <ul>
                  <li>Food quality disputes, taste complaints, or temperature issues.</li>
                  <li>Inaccuracies, omissions, or misrepresentations in ingredient lists or allergen disclosures.</li>
                  <li>Any health-related claims, medical expenses, or personal injury resulting from food consumption.</li>
                  <li>Restaurant misconduct, negligence, or failure to fulfill an order.</li>
                  <li>Food contamination, adulteration, or foodborne illnesses (food poisoning).</li>
                  <li>Regulatory violations, license expirations, or legal breaches by Restaurants.</li>
                  <li>Any losses, damages, or harm arising from a user&apos;s reliance on information provided by a Restaurant on the Hindu Swad platform.</li>
                </ul>
              </div>

              <div id="s6">
                <h2>6. Future-Proofing Clause</h2>
                <p>
                  This Liability &amp; Health Disclaimer applies to the Hindu Swad platform in its current state and shall automatically extend to apply in full force and effect to any future features, services, or operational phases launched by Hindu Swad. This includes, but is not limited to, the introduction of:
                </p>
                <ul>
                  <li>Live restaurant listings and directories.</li>
                  <li>Direct food ordering, checkout, and payment facilitation.</li>
                  <li>Live menu browsing and interactive catalogs.</li>
                  <li>User-generated content, including reviews and ratings.</li>
                  <li>Restaurant partnerships, advertising, and promotional campaigns.</li>
                  <li>Delivery logistics facilitation via third-party delivery personnel.</li>
                </ul>
                <p>
                  The fundamental premise that Hindu Swad acts only as an intermediary, and bears no liability for the food itself, remains immutable regardless of platform feature expansions.
                </p>
              </div>

              <div className="mt-12 p-6 bg-zinc-50 rounded-2xl border border-zinc-200">
                <p className="text-xs text-zinc-500 leading-relaxed">
                  By accessing, browsing, or utilizing any services provided by Hindu Swad Private Limited (CIN: U63120KA2025PTC206410), you signify your explicit consent and agreement to this Disclaimer. If you do not agree with these terms, you are prohibited from using the platform.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
