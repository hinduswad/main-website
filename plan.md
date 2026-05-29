# AI IDE Build Specification: Food Delivery Job Recruitment Portal

> **Context for AI IDE:** This document is a complete technical blueprint. Build the project phase-by-phase as outlined. Prioritize Phase 1 and Phase 2 first. Ask clarifying questions only if blockers prevent progress.

---

## 0. Project Identity

```yaml
name: "HinduSwa"
#domain: "jobs.fooddelivery.in"  # placeholder not yet decided 
company_type: "Food Delivery Logistics & Operations"
target_users: "Job seekers (Field Officers, Sales Executives, TeleCallers) across India"
primary_market: "India (Karnataka priority, pan-India support)"
competitor_reference: "Zomato Delivery Partner onboarding, Swiggy Hiring, Blinkit Ops"
quality_target: "Premium, SEO/GEO-optimized, mobile-first, production-ready"
```

---

## 1. Tech Stack (Strict — Do Not Change Without Approval)

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Database | PostgreSQL via Supabase |
| ORM | Prisma |
| Auth | NextAuth.js v5 (Beta) with Credentials + JWT |
| Payments | Razorpay (Test key first) |
| File Storage | Supabase Storage (or AWS S3 with R2 fallback) |
| Search | In-database + Algolia only if needed later |
| SMS | MSG91 (Indian routes) |
| Email | Resend |
| Deployment | Vercel |

**Package Manager:** pnpm
**Node Version:** >= 20

---

## 2. Database Schema (Prisma)

Implement this Prisma schema exactly. Use `npx prisma migrate dev` after each model addition.

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  CANDIDATE
  ADMIN
  SUPERADMIN
}

enum EmploymentType {
  PERMANENT
  TEMPORARY
}

enum JobRole {
  FIELD_OFFICER
  SALES_EXECUTIVE
  TELECALLER
}

enum ApplicationStatus {
  DRAFT
  APPLIED
  PAYMENT_PENDING
  PAID
  EXAM_SCHEDULED
  EXAM_COMPLETED
  INTERVIEW_SCHEDULED
  INTERVIEW_COMPLETED
  DOCUMENT_VERIFICATION
  TRAINING
  PROBATION
  CONFIRMED
  REJECTED
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}

enum DocType {
  PHOTO
  AADHAAR
  RESUME
  EXPERIENCE_CERT
  PAYMENT_RECEIPT
}

enum DocVerificationStatus {
  PENDING
  VERIFIED
  REJECTED
}

model User {
  id            String    @id @default(cuid())
  email         String?   @unique
  phone         String    @unique
  password      String
  role          UserRole  @default(CANDIDATE)
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  profile       Profile?
  applications  Application[]

  @@map("users")
}

model Profile {
  id                          String   @id @default(cuid())
  userId                      String   @unique @map("user_id")

  // Personal
  fullName                    String   @map("full_name")
  fatherName                  String   @map("father_name")
  dob                         DateTime
  gender                      String
  mobile                      String
  email                       String?
  panNumber                   String   @map("pan_number")
  currentAddress              String   @map("current_address")
  currentPin                  String   @map("current_pin")
  permanentAddress            String   @map("permanent_address")
  permanentPin                String   @map("permanent_pin")
  languagesKnown              String[] @map("languages_known")

  // Professional
  highestQualification        String   @map("highest_qualification")
  isFresher                   Boolean  @map("is_fresher")
  previousCompany             String?  @map("previous_company")
  totalExperienceYears        Int?     @map("total_experience_years")
  districtPreference          String   @map("district_preference")
  willingToRelocate           Boolean  @map("willing_to_relocate")

  // Supervisor / Leadership
  managementSkillLevel        String   @map("management_skill_level")
  hasSupervisoryExperience    Boolean  @map("has_supervisory_experience")
  supervisoryExperienceYears  Int?     @map("supervisory_experience_years")
  comfortableLeading          Boolean  @map("comfortable_leading")
  willingToTravel             Boolean  @map("willing_to_travel")
  hasTwoWheeler               Boolean  @map("has_two_wheeler")

  // Documents
  photoUrl                    String?  @map("photo_url")
  aadhaarUrl                  String?  @map("aadhaar_url")
  resumeUrl                   String?  @map("resume_url")
  experienceCertUrl           String?  @map("experience_cert_url")

  user                        User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("profiles")
}

model JobPost {
  id                String         @id @default(cuid())
  title             String
  slug              String         @unique
  roleType          JobRole        @map("role_type")
  employmentType    EmploymentType @map("employment_type")
  description       String         @db.Text
  responsibilities  String[]
  salaryMin         Int            @map("salary_min")
  salaryMax         Int            @map("salary_max")
  totalPosts        Int            @map("total_posts")
  filledPosts       Int            @default(0) @map("filled_posts")
  status            String         @default("open")
  district          String
  state             String         @default("Karnataka")
  workMode          String         @default("field") @map("work_mode")
  applicationFee    Int            @map("application_fee")
  postedAt          DateTime       @default(now()) @map("posted_at")
  closesAt          DateTime?      @map("closes_at")

  applications      Application[]

  @@index([status])
  @@index([district])
  @@index([roleType])
  @@index([employmentType])
  @@map("job_posts")
}

model Application {
  id              String            @id @default(cuid())
  userId          String            @map("user_id")
  jobPostId       String            @map("job_post_id")
  applicationType   EmploymentType    @map("application_type")
  status          ApplicationStatus @default(APPLIED)

  // Payment
  paymentStatus   PaymentStatus     @default(PENDING) @map("payment_status")
  paymentAmount   Int               @map("payment_amount")
  paidAt          DateTime?         @map("paid_at")

  // Assessment
  examScore       Int?              @map("exam_score")
  interviewScore  Int?              @map("interview_score")

  appliedAt       DateTime          @default(now()) @map("applied_at")
  updatedAt       DateTime          @updatedAt @map("updated_at")

  user            User              @relation(fields: [userId], references: [id], onDelete: Cascade)
  jobPost         JobPost           @relation(fields: [jobPostId], references: [id], onDelete: Cascade)

  documents       Document[]
  exams           Exam[]
  interviews      Interview[]
  transactions    Transaction[]

  @@index([userId])
  @@index([jobPostId])
  @@index([status])
  @@index([paymentStatus])
  @@map("applications")
}

model Document {
  id                String                @id @default(cuid())
  applicationId     String                @map("application_id")
  docType           DocType               @map("doc_type")
  fileUrl           String                @map("file_url")
  verificationStatus DocVerificationStatus @default(PENDING) @map("verification_status")
  verifiedBy        String?               @map("verified_by")
  verifiedAt        DateTime?             @map("verified_at")
  rejectionReason   String?               @map("rejection_reason")

  application       Application           @relation(fields: [applicationId], references: [id], onDelete: Cascade)

  @@map("documents")
}

model Exam {
  id              String    @id @default(cuid())
  applicationId   String    @map("application_id")
  scheduledAt     DateTime? @map("scheduled_at")
  completedAt     DateTime? @map("completed_at")
  score           Int?
  maxScore        Int       @default(100) @map("max_score")
  status          String    @default("scheduled")

  application     Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)

  @@map("exams")
}

model Interview {
  id            String    @id @default(cuid())
  applicationId String    @map("application_id")
  scheduledAt   DateTime? @map("scheduled_at")
  completedAt   DateTime? @map("completed_at")
  mode          String    @default("offline")
  location      String?
  meetingLink   String?   @map("meeting_link")
  feedback      String?   @db.Text
  rating        Int?
  status        String    @default("scheduled")

  application   Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)

  @@map("interviews")
}

model Transaction {
  id                String    @id @default(cuid())
  applicationId     String    @map("application_id")
  userId            String    @map("user_id")
  razorpayOrderId   String    @map("razorpay_order_id")
  razorpayPaymentId String?   @map("razorpay_payment_id")
  razorpaySignature String?   @map("razorpay_signature")
  amount            Int
  currency          String    @default("INR")
  status            PaymentStatus @default(PENDING)
  metadata          Json?
  createdAt         DateTime  @default(now()) @map("created_at")

  application       Application @relation(fields: [applicationId], references: [id], onDelete: Cascade)

  @@map("transactions")
}

// Seed data helper — populate this via seed.ts
// 3 roles x 2 employment types = 6 base job posts minimum
```

---

## 3. Environment Variables Template

Create `.env.local` and `.env.example` with these exact keys:

```env
# Database
DATABASE_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"
DIRECT_URL="postgresql://postgres:[password]@db.[project].supabase.co:5432/postgres"

# Auth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-with-openssl-rand-base64-32"

# Razorpay
RAZORPAY_KEY_ID="rzp_test_..."
RAZORPAY_KEY_SECRET="..."

# Supabase Storage
SUPABASE_URL="https://[project].supabase.co"
SUPABASE_SERVICE_ROLE_KEY="..."

# Email
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@yourdomain.in"

# SMS
MSG91_AUTH_KEY="..."
MSG91_SENDER_ID="FOODDL"

# App
APP_URL="http://localhost:3000"
```

---

## 4. Directory Structure (Build This Exactly)

```
fooddelivery-jobs-portal/
├── app/
│   ├── (public)/
│   │   ├── page.tsx                          # Homepage
│   │   ├── layout.tsx                        # Public root layout (SEO, nav, footer)
│   │   ├── jobs/
│   │   │   ├── page.tsx                      # Job listing with filters
│   │   │   └── [slug]/
│   │   │       └── page.tsx                  # Dynamic job detail (ISR)
│   │   ├── about/page.tsx
│   │   ├── faqs/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── terms/page.tsx
│   │   └── privacy/page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   └── register/page.tsx
│   ├── (apply)/
│   │   └── apply/
│   │       └── [jobId]/
│   │           ├── page.tsx                  # Step 1: Job type + role confirm
│   │           ├── personal/page.tsx         # Step 2: Personal info
│   │           ├── professional/page.tsx     # Step 3: Professional + supervisor
│   │           ├── review/page.tsx           # Step 4: Summary
│   │           ├── payment/page.tsx          # Step 5: Razorpay checkout
│   │           └── confirmation/page.tsx     # Success + reference ID
│   ├── (dashboard)/
│   │   ├── layout.tsx                        # Protected candidate layout
│   │   ├── dashboard/page.tsx                # Application status tracker
│   │   ├── profile/page.tsx                  # Edit profile / re-upload docs
│   │   └── exam/
│   │       └── [examId]/
│   │           └── page.tsx                  # Timed assessment UI
│   └── (admin)/
│       ├── layout.tsx                        # Protected admin layout
│       ├── admin/page.tsx                    # Admin dashboard
│       ├── admin/applications/page.tsx
│       ├── admin/applications/[id]/page.tsx  # Candidate 360 view
│       ├── admin/exams/page.tsx
│       ├── admin/interviews/page.tsx
│       ├── admin/payments/page.tsx
│       └── admin/reports/page.tsx
├── components/
│   ├── ui/                                   # shadcn/ui components (use CLI)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MobileNav.tsx
│   │   └── AdminSidebar.tsx
│   ├── jobs/
│   │   ├── JobCard.tsx
│   │   ├── JobFilter.tsx
│   │   └── JobDetailHeader.tsx
│   ├── apply/
│   │   ├── ApplyStepper.tsx
│   │   ├── PersonalForm.tsx
│   │   ├── ProfessionalForm.tsx
│   │   ├── DocumentUploader.tsx
│   │   ├── PaymentButton.tsx
│   │   └── ReviewSummary.tsx
│   ├── dashboard/
│   │   ├── StatusTracker.tsx
│   │   └── NotificationList.tsx
│   ├── admin/
│   │   ├── ApplicationsTable.tsx
│   │   ├── CandidateProfileView.tsx
│   │   ├── DocumentVerifier.tsx
│   │   ├── StatusUpdateModal.tsx
│   │   └── InterviewScheduler.tsx
│   └── seo/
│       ├── JobPostingJsonLd.tsx              # JSON-LD JobPosting schema
│       ├── OrganizationJsonLd.tsx
│       ├── BreadcrumbJsonLd.tsx
│       └── FAQPageJsonLd.tsx
├── lib/
│   ├── prisma.ts                             # Singleton Prisma client
│   ├── auth.ts                               # NextAuth config
│   ├── razorpay.ts                           # Payment utilities
│   ├── sms.ts                                # MSG91 wrapper
│   ├── email.ts                              # Resend wrapper
│   ├── storage.ts                            # Supabase upload helper
│   └── utils.ts                              # cn(), formatters
├── hooks/
│   ├── useAuth.ts
│   └── useApplication.ts
├── types/
│   └── index.ts                              # Shared TS interfaces
├── actions/                                  # Server Actions
│   ├── auth-actions.ts
│   ├── application-actions.ts
│   ├── payment-actions.ts
│   └── admin-actions.ts
├── prisma/
│   └── schema.prisma
├── seed.ts
├── public/
│   └── images/
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 5. Phase-by-Phase Build Instructions

### PHASE 1: Foundation (Do This First)

**Goal:** Project scaffold, database, auth, and file upload working.

1. Initialize Next.js project:
   ```bash
   npx shadcn@latest init --yes --template next --base-color zinc
   ```

2. Install dependencies:
   ```bash
   pnpm add prisma @prisma/client next-auth@beta bcryptjs jsonwebtoken
   pnpm add -D @types/bcryptjs @types/jsonwebtoken
   pnpm add razorpay resend
   pnpm add @supabase/supabase-js
   pnpm add @radix-ui/react-*  # via shadcn add
   ```

3. Set up Prisma schema (copy from Section 2 above). Run:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

4. Create `seed.ts` with 6 job posts:
   - Field Officer (Permanent, 50 posts, ₹1000 fee, ₹20000-40000)
   - Field Officer (Temporary, "TBD" posts, ₹300 fee, ₹20000-40000)
   - Sales Executive (Permanent, 50 posts, ₹1000 fee, ₹23000-50000)
   - Sales Executive (Temporary, "TBD" posts, ₹300 fee, ₹23000-50000)
   - TeleCaller (Permanent, 10 posts, ₹1000 fee, ₹20000-40000)
   - TeleCaller (Temporary, "TBD" posts, ₹300 fee, ₹20000-40000)

5. Implement NextAuth in `lib/auth.ts`:
   - Credentials provider: phone + password
   - JWT strategy
   - Role-based session (CANDIDATE / ADMIN)
   - Registration server action creates User + Profile

6. Create `lib/prisma.ts` singleton:
   ```typescript
   import { PrismaClient } from '@prisma/client'
   const globalForPrisma = global as unknown as { prisma: PrismaClient }
   export const prisma = globalForPrisma.prisma || new PrismaClient()
   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
   ```

7. Build `lib/storage.ts` for Supabase presigned uploads:
   - Accept file + userId + docType
   - Return public URL after upload
   - Validate: max 2MB, mime types: image/*, application/pdf

8. Build public layout in `app/(public)/layout.tsx`:
   - Sticky Navbar with logo, Jobs link, Login/Register
   - Footer with company links, socials
   - Use Inter font via next/font

9. Build Homepage `app/(public)/page.tsx`:
   - Hero: "Join India's Leading Food Delivery Network"
   - Stats: "100+ Openings | 30+ Districts | Immediate Hiring"
   - 3 Role category cards (Field Officer, Sales Executive, TeleCaller) with icons
   - CTA: "View All Jobs" → /jobs
   - Trust badges: "6-Month Probation | Performance Incentives | Career Growth"

**Stop condition:** Homepage renders, auth login/register works, file upload creates DB record.

---

### PHASE 2: Public SEO Pages (High Priority)

**Goal:** All public pages with ISR, JSON-LD, and Core Web Vitals optimization.

1. **Jobs Listing Page** (`/jobs`):
   - SSR with Prisma query: filter by `status="open"`
   - Filters: Employment Type (Permanent/Temp), Role, District, State
   - Job cards show: Role badge, salary range, district, employment type badge, apply button
   - Empty state with "No openings — check back soon"
   - Search bar (client-side filter on title/district)

2. **Dynamic Job Detail** (`/jobs/[slug]`):
   - `generateStaticParams` + `revalidate = 3600` (ISR 1 hour)
   - Page sections:
     - Header: Title, role badge, employment type chip
     - Quick Info: Salary, Posts Available, District, Fee, Last Date
     - Description
     - Responsibilities (bulleted list from array)
     - Eligibility Criteria card
     - Selection Process card (conditional: show exam step only for Permanent)
   - Primary CTA: "Apply Now" → redirects to /apply/[jobId] (or /login if guest)

3. **JSON-LD Schemas** (every page must have these):
   - `JobPosting` schema on every `/jobs/[slug]`:
     ```json
     {
       "@context": "https://schema.org",
       "@type": "JobPosting",
       "title": "Field Officer — Permanent",
       "description": "...",
       "datePosted": "2026-05-29",
       "validThrough": "2026-12-31",
       "employmentType": "FULL_TIME",
       "jobLocation": {
         "@type": "Place",
         "address": {
           "@type": "PostalAddress",
           "addressLocality": "Bangalore",
           "addressRegion": "Karnataka",
           "addressCountry": "IN"
         }
       },
       "baseSalary": {
         "@type": "MonetaryAmount",
         "currency": "INR",
         "value": {
           "@type": "QuantitativeValue",
           "minValue": 20000,
           "maxValue": 40000,
           "unitText": "MONTH"
         }
       },
       "hiringOrganization": {
         "@type": "Organization",
         "name": "FoodDelivery Company",
         "sameAs": "https://yourdomain.in"
       }
     }
     ```
   - `Organization` schema on homepage
   - `BreadcrumbList` on all pages
   - `FAQPage` schema on /faqs

4. **Static Pages:**
   - `/about` — Company story, team, culture
   - `/faqs` — 12+ questions using `<details>` or accordion; each Q&A pair must be in the FAQPage JSON-LD
   - `/contact` — District office locator (static list for now), contact form (Resend email)
   - `/terms` — Service agreement, refund policy for application fees
   - `/privacy` — PII handling, consent, data retention

5. **SEO Technical Setup:**
   - `app/sitemap.ts` — dynamic sitemap with all job posts + static pages
   - `app/robots.ts` — allow public, disallow /admin, /dashboard, /apply
   - `metadata` object in every page layout with exact titles/descriptions
   - Canonical URLs via `metadata.alternates.canonical`
   - Open Graph images: 1200x630, brand logo + role name

**Stop condition:** Lighthouse score > 90 on Performance, SEO, Accessibility. Job detail pages render with valid JSON-LD in Google Rich Results Test.

---

### PHASE 3: Application Flow (Critical Path)

**Goal:** 5-step application wizard with payment integration.

1. **Route Guard:** `/apply/*` and `/dashboard/*` require authentication. Redirect unauthenticated to /login with `callbackUrl`.

2. **Step 1** (`/apply/[jobId]`):
   - Fetch job post by ID
   - Display job summary card
   - Candidate selects: "Permanent" or "Temporary"
   - Validation: If permanent selected but user already has permanent application pending → block with message
   - CTA: "Continue to Application"

3. **Step 2** (`/apply/[jobId]/personal`):
   - Form fields: Full Name, Father's Name, DOB, Gender, Mobile, Email (optional), PAN
   - Address block: Current (Address + PIN), Permanent (Address + PIN)
   - Languages Known: Multi-select chips (Kannada, Hindi, English, Other)
   - File uploads:
     - Passport Photo (JPG/PNG, max 500KB)
     - Aadhaar Card (PDF/JPG/PNG, max 2MB)
   - Real-time validation with react-hook-form + zod schema
   - Save as DRAFT application if user leaves

4. **Step 3** (`/apply/[jobId]/professional`):
   - Highest Qualification (select)
   - Fresher / Experienced radio
   - Conditional: Previous Company, Total Experience (if experienced)
   - District Preference (dropdown: Karnataka districts + "Other")
   - Willing to Relocate (Yes/No toggle)
   - Supervisor fields:
     - Management Skill Level: Basic / Good / Excellent (segmented control)
     - Prior Supervisory Experience: Yes/No
     - Conditional: Years of supervisory experience
     - Comfortable Leading Team: Yes/No
     - Willing to Travel Within District: Yes/No
     - Two-Wheeler Available: Yes/No (mandatory field)
   - Optional: Resume upload (PDF, max 2MB)
   - Conditional: Experience Certificate (if experienced)

5. **Step 4** (`/apply/[jobId]/review`):
   - Read-only summary of all entered data
   - Document thumbnails
   - Checkbox: "I confirm all details are true"
   - CTA: "Proceed to Payment"

6. **Step 5** (`/apply/[jobId]/payment`):
   - Display fee: ₹1,000 (Permanent) or ₹300 (Temporary)
   - Razorpay Checkout integration:
     - Server Action: Create Razorpay Order → return order_id
     - Client: Open Razorpay modal with candidate name, email, phone
     - On success: Server Action verifies signature, marks payment PAID
   - If payment fails: Allow 3 retry attempts, show support contact

7. **Confirmation** (`/apply/[jobId]/confirmation`):
   - Success animation (confetti via canvas-confetti)
   - Display: Application Reference ID (format: FD-2026-XXXXXX)
   - Job details, paid amount, date
   - Download Receipt button (PDF generation via @react-pdf/renderer or simple print-friendly page)
   - CTA: "Go to Dashboard"

8. **Server Actions** (`actions/application-actions.ts`):
   - `createDraftApplication(jobId, type)`
   - `updatePersonalInfo(applicationId, data)`
   - `updateProfessionalInfo(applicationId, data)`
   - `submitApplication(applicationId)`
   - `createRazorpayOrder(applicationId)`
   - `verifyRazorpayPayment(orderId, paymentId, signature)`

**Stop condition:** Full end-to-end: register → login → apply → pay → confirmation → dashboard shows application.

---

### PHASE 4: Candidate Dashboard

1. **Dashboard Home** (`/dashboard`):
   - Welcome card with candidate name + photo
   - Active Applications list: job title, status badge, progress bar
   - Status stages visualized as stepper:
     Applied → Payment → Exam → Interview → Documents → Training → Probation → Confirmed
   - Current stage highlighted; future stages grayed
   - Notifications panel: exam scheduled, interview invite, document rejected (with action)

2. **Profile Page** (`/dashboard/profile`):
   - Edit personal details (except name, dob, pan — lock these)
   - Re-upload documents if rejected
   - Change district preference (if no active application)

3. **Exam Portal** (`/dashboard/exam/[examId]`):
   - Full-screen mode on load
   - Timer (60 minutes default)
   - MCQ interface: single select, flag for review, navigation panel
   - Anti-cheating: `visibilitychange` event — warn on tab switch; auto-submit on 3rd switch
   - Auto-save answers every 30 seconds
   - Submit confirmation modal
   - Post-exam: score display (if auto-graded) or "Results will be announced via SMS"

**Stop condition:** Candidate can view real-time status, take exam, edit profile.

---

### PHASE 5: Admin Dashboard

1. **Admin Auth:** Middleware check `session.user.role === "ADMIN"` or `"SUPERADMIN"`. Redirect non-admin to /.

2. **Admin Homepage** (`/admin`):
   - KPI cards: Total Applications, Paid Today, Pending Verification, Exams Scheduled, Interviews Today
   - Chart: Applications trend (last 30 days) — use recharts
   - District heatmap: Table view of applications by district
   - Recent activity feed

3. **Applications Manager** (`/admin/applications`):
   - Data table with filters: Role, Employment Type, Status, District, Payment Status, Date Range
   - Columns: Name, Role, District, Status, Payment, Applied Date, Actions
   - Bulk actions: Send SMS, Update Status, Schedule Exam
   - Export to CSV/Excel

4. **Candidate 360° View** (`/admin/applications/[id]`):
   - Left sidebar: Profile photo, name, contact, reference ID, status history timeline
   - Main area tabs:
     - Profile: All personal/professional data
     - Documents: Photo, Aadhaar, Resume, Experience Cert — with preview, verify/reject buttons, rejection reason textarea
     - Exam: Score, answers review
     - Interview: Schedule picker, feedback form, rating
     - Communication: SMS/Email log, send custom message
   - Status Update dropdown: Move to any valid next state

5. **Payment Verification** (`/admin/payments`):
   - Reconcile Razorpay transactions with applications
   - Mark manual refunds if needed
   - Filter by status: Paid, Failed, Pending, Refunded

6. **Interview Scheduler** (`/admin/interviews`):
   - Calendar view (weekly)
   - Create slot: Select candidate, date/time, mode (online/offline), location/link
   - Send automated SMS/Email notification
   - Mark attendance + feedback post-interview

7. **Status Workflow Engine:**
   - Valid transitions only:
     - APPLIED → PAYMENT_PENDING (if fee unpaid)
     - PAID → EXAM_SCHEDULED (permanent only)
     - EXAM_COMPLETED → INTERVIEW_SCHEDULED
     - INTERVIEW_COMPLETED → DOCUMENT_VERIFICATION
     - DOCUMENT_VERIFICATION → TRAINING / REJECTED
     - TRAINING → PROBATION (permanent only)
     - PROBATION → CONFIRMED / REJECTED
   - Log every status change with timestamp + admin ID

**Stop condition:** Admin can process a candidate end-to-end: verify payment → verify docs → schedule exam → enter score → schedule interview → confirm hire.

---

### PHASE 6: Advanced SEO / GEO

1. **Programmatic SEO Pages:**
   - Generate static pages for top 50 districts:
     - Route: `/jobs-in-[district]` (e.g., `/jobs-in-bangalore`, `/jobs-in-davangere`)
     - Content: All open jobs in that district, company intro, why work here, how to apply
     - Auto-generate via `generateStaticParams` from district list
     - Each page has unique meta title: `"Delivery Jobs in [District] — Apply Now | [Company]"`

2. **Blog / Content Hub** (`/blog`):
   - MDX-based articles:
     - "How to Become a Field Officer in Food Delivery"
     - "Sales Executive Salary Guide India 2026"
     - "TeleCaller Career Path: Fresher to Team Lead"
     - "Interview Tips for Food Delivery Operations Roles"
   - Each article targets long-tail keywords for AI citation
   - Author schema, publish date, FAQ schema per article

3. **Job Aggregator Feed**:
   - `/api/jobs.xml` — RSS/XML feed in RSS or Indeed XML format
   - Auto-updates when job posts change
   - Submit to Indeed, Naukri, LinkedIn

4. **Performance Optimization:**
   - `next/image` with WebP/AVIF, sizes attribute
   - Route prefetching for `/jobs/*`
   - `loading="lazy"` for below-fold images
   - Font subsetting with `next/font`
   - Database query optimization: use `select` (not `include` where unnecessary)

5. **GEO Optimization (AI Search):**
   - Every page must answer "Who, What, Where, Why" explicitly
   - Use clear entity definitions: "FoodDelivery Company is a [type] hiring [roles] in [location]"
   - FAQ content formatted as Q&A with direct answers (not essays)
   - Include salary numbers, district names, qualification requirements in plain text (not images/tables only)
   - Structured data enables AI models to cite directly

**Stop condition:** Google Search Console shows indexed job pages; site appears in Perplexity/ChatGPT for "food delivery jobs in bangalore".

---

## 6. UI/UX Design Rules (Mandatory)

1. **Color System:**
   ```css
   :root {
     --primary: #FF6B35;      /* Brand Orange */
     --primary-dark: #E55A2B;
     --secondary: #004E89;    /* Trust Blue */
     --success: #2ECC71;
     --warning: #F1C40F;
     --danger: #E74C3C;
     --bg: #FAFAFA;
     --surface: #FFFFFF;
     --text: #1A1A1A;
     --text-muted: #6B7280;
   }
   ```

2. **Typography:** Use `next/font/google` with Inter. Scale: 48px hero, 32px H1, 24px H2, 18px H3, 16px body, 14px small.

3. **Spacing:** 8px base unit. Sections: 80px vertical padding. Cards: 24px padding. Gap: 16px standard, 24px large.

4. **Components:**
   - All forms use shadcn `Form` + `react-hook-form` + `zod`
   - Buttons: `rounded-lg`, `font-semibold`, `transition-all duration-200`
   - Cards: `rounded-xl`, `border`, `shadow-sm`, hover `shadow-md`
   - Inputs: `rounded-lg`, focus ring `ring-2 ring-primary/20`

5. **Mobile-First:**
   - Navbar collapses to hamburger below 768px
   - Apply form is single-column on mobile
   - Touch targets minimum 44px
   - Tables become card lists on mobile

6. **Motion:**
   - Page transitions: fade-in 200ms
   - Button hover: scale(1.02) + shadow increase
   - Form step transitions: slide-left 300ms
   - Loading states: skeleton screens (never generic spinners)

---

## 7. API Routes (Minimal — Prefer Server Actions)

Only create API routes for external callbacks:

```
app/api/
├── auth/[...nextauth]/route.ts       # NextAuth handler
├── razorpay/webhook/route.ts          # Razorpay webhook (backup verification)
├── jobs/feed.xml/route.ts             # Job aggregator XML
└── upload/presigned/route.ts          # Supabase presigned URL (if needed)
```

Everything else: Use Next.js Server Actions in `actions/` folder.

---

## 8. Validation & Error Handling

1. **Zod Schemas** (create `lib/validators.ts`):
   - Personal form: name min 3 chars, PAN regex `^[A-Z]{5}[0-9]{4}[A-Z]{1}$`, mobile `^[6-9]\d{9}$`
   - Professional: experience years 0–40
   - File: size max 2MB, mime type in allowed list

2. **Error Patterns:**
   - Server Actions return `{ success: boolean, data?: T, error?: string }`
   - Client displays toast via sonner (shadcn toast)
   - Never expose database errors to client — log internally, return generic message

3. **Rate Limiting:**
   - Apply `rate-limiter-flexible` on:
     - Login: 5 attempts per 15 min per IP
     - Register: 3 per hour per IP
     - Payment: 10 per hour per user

---

## 9. Security Checklist

- [ ] All env vars prefixed with `NEXT_PUBLIC_` ONLY for truly public vars (none for secrets)
- [ ] Prisma queries use parameterized inputs (automatic)
- [ ] File uploads scanned via ClamAV or use Supabase virus scanner
- [ ] Admin routes protected by middleware (`middleware.ts`)
- [ ] Razorpay webhook signature verification
- [ ] CORS configured only for app domain
- [ ] Content Security Policy headers via `next.config.js`
- [ ] DB row-level security enabled in Supabase (if using Supabase Auth directly)

---

## 10. Testing Checklist Before Launch

- [ ] Register new candidate → apply → pay (Razorpay test mode) → confirmation
- [ ] Admin verifies payment → schedules exam → candidate takes exam → admin enters score
- [ ] Admin schedules interview → updates status to CONFIRMED
- [ ] JSON-LD validates in Google Rich Results Test for `/jobs/[slug]`
- [ ] Lighthouse: Performance > 85, Accessibility > 95, SEO > 95
- [ ] Mobile responsive: iPhone SE, iPhone 14, Android (Chrome DevTools)
- [ ] Form validation: submit empty forms, verify error messages
- [ ] File upload: oversized file, wrong type → proper error
- [ ] Payment failure: card decline → error message, retry allowed
- [ ] Concurrent applications: same user applies twice → block or warn

---

## 11. Post-Launch Enhancements (Backlog)

- WhatsApp OTP integration (MSG91)
- AI chatbot for FAQs (reuse your Heloavy VRAI concept)
- Video interview integration (Jitsi embed)
- Geo-location based district auto-detect
- Multi-language support (Kannada, Hindi)
- PWA support for mobile dashboard
- Admin mobile app (Capacitor / PWA)

---

*Build Version: 1.0*
*AI IDE Instruction Set*
*Date: May 2026*
*Start with Phase 1. Do not skip phases.*
