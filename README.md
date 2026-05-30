# 🍛 HinduSwad Careers (Currier)

Welcome to **HinduSwad Careers**, a modern, premium, high-performance job application and candidate recruitment portal. This system is designed to streamline job discovery, candidate onboarding, multi-step career applications, secure transaction handling, and internal recruitment operations.

---

## 🚀 Key Features

*   **Job Discovery Directory:** A dynamic interface displaying open job postings (Field Officers, Sales Executives, Telecallers) with full details, compensation brackets, responsibilities, and district preferences.
*   **Multi-Step Application Wizard:**
    *   **Personal Information:** Profile photo and Aadhaar card document uploads.
    *   **Professional Details:** Resume upload, qualifications, work experience, relocatability, supervisor experience, leadership comfort, and district preferences.
    *   **Review Summary:** An interactive, single-pane review summary of all candidate inputs before finalizing.
    *   **Secure Fee Payment:** Complete Razorpay integration for candidate application fee processing.
*   **Real-time Candidate Dashboard:** Candidates can monitor their application status, exam schedules, interview details, and download uploaded verification documents.
*   **Robust Administration (Seeded):** Database contains a high-level admin role to oversee document verification, exam scoring, and final candidate approvals.

---

## 🛠️ Technology Stack

*   **Framework:** Next.js 15 (App Router) + React 19
*   **Database & ORM:** PostgreSQL + Prisma ORM
*   **Authentication:** NextAuth.js v5 (Beta) with Credentials Provider
*   **Payments:** Razorpay Gateway Integration
*   **File Storage:** Supabase Storage (Secure bucket uploads for resumes, photo identity, and official documents)
*   **Email:** Resend API integration for automated transactional mail
*   **SMS:** msg91 Gateway integration for mobile updates
*   **Styling:** Tailwind CSS + Shadcn UI components

---

## 📋 Environment Configuration

Create a `.env.local` file in the root directory and specify the following variables:

```env
# Database Credentials
DATABASE_URL="postgresql://user:password@host:port/dbname?pgbouncer=true"
DIRECT_URL="postgresql://user:password@host:port/dbname"

# NextAuth Authentication
NEXTAUTH_URL="http://localhost:3003"
NEXTAUTH_SECRET="your_nextauth_jwt_secret"

# Razorpay Keys
RAZORPAY_KEY_ID="rzp_test_xxxxxx"
RAZORPAY_KEY_SECRET="your_razorpay_secret"

# Supabase Storage
NEXT_PUBLIC_SUPABASE_URL="https://your-supabase-project.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
SUPABASE_URL="https://your-supabase-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Email Integration (Resend)
RESEND_API_KEY="re_xxxxxx"
RESEND_FROM_EMAIL="noreply@yourdomain.in"

# SMS Integration (msg91)
MSG91_AUTH_KEY="your_msg91_auth_key"
MSG91_SENDER_ID="FOODDL"

# App URL Configuration
APP_URL="http://localhost:3003"
```

---

## ⚙️ Local Setup and Execution

Follow these steps to run the application on your local machine:

### 1. Install Dependencies
Install packages using `npm` (recommending `--legacy-peer-deps` to handle React 19 peer conflict in lucide-react):
```bash
npm install --legacy-peer-deps
```

### 2. Generate Prisma Client
Compile the database schema into the local client binaries:
```bash
npx prisma generate
```

### 3. Run Database Migrations (Optional)
If setting up a fresh database, apply the migrations:
```bash
npx prisma db push
```

### 4. Seed the Database
Seed the job listings and initial mock details:
```bash
npx prisma db seed
```

Then, seed the default Admin credentials in the database:
```bash
node --env-file=.env.local ./node_modules/tsx/dist/cli.mjs seed-admin.ts
```
*   **Admin Phone:**
*   **Admin Password:**

### 5. Launch the Development Server
```bash
npm run dev
```
Open **[http://localhost:3003](http://localhost:3003)** to explore the candidate portal!

---

## ☁️ Deployment Guidelines (npm Migration)

To avoid deployment failures on **Hostinger** and other platforms due to `pnpm v10+`'s default blocking of postinstall native build scripts (`ERR_PNPM_IGNORED_BUILDS`), this project has been fully migrated to use **`npm`**. 

Using `npm` automatically allows required postinstall scripts for native dependencies (`@prisma/client`, `prisma`, `esbuild`, `sharp`, `unrs-resolver`) to compile and execute without extra configuration or restriction, guaranteeing seamless and reliable production builds.
