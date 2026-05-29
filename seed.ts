import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean existing
  await prisma.jobPost.deleteMany();

  const jobs = [
    {
      title: "Field Officer (Permanent)",
      slug: "field-officer-permanent",
      roleType: "FIELD_OFFICER",
      employmentType: "PERMANENT",
      description: "Manage local delivery networks, oversee field operations, and support delivery partners.",
      responsibilities: [
        "Coordinate and supervise delivery riders",
        "Monitor delivery efficiency and resolve routes issues",
        "Conduct training sessions for new onboarding partners",
        "Ensure compliance with service level agreements"
      ],
      salaryMin: 20000,
      salaryMax: 40000,
      totalPosts: 50,
      applicationFee: 1000,
      district: "Bangalore",
    },
    {
      title: "Field Officer (Temporary)",
      slug: "field-officer-temporary",
      roleType: "FIELD_OFFICER",
      employmentType: "TEMPORARY",
      description: "Manage local delivery networks, oversee field operations, and support delivery partners on a temporary contract basis.",
      responsibilities: [
        "Coordinate and supervise delivery riders",
        "Monitor delivery efficiency and resolve routes issues",
        "Conduct training sessions for new onboarding partners"
      ],
      salaryMin: 20000,
      salaryMax: 40000,
      totalPosts: 999,
      applicationFee: 300,
      district: "Bangalore",
    },
    {
      title: "Sales Executive (Permanent)",
      slug: "sales-executive-permanent",
      roleType: "SALES_EXECUTIVE",
      employmentType: "PERMANENT",
      description: "Acquire merchant partnerships, expand delivery coverage, and drive revenue growth.",
      responsibilities: [
        "Onboard local restaurants and retail merchants",
        "Negotiate pricing and partnership agreements",
        "Achieve monthly onboarding targets",
        "Maintain relationship with merchant partners"
      ],
      salaryMin: 23000,
      salaryMax: 50000,
      totalPosts: 50,
      applicationFee: 1000,
      district: "Bangalore",
    },
    {
      title: "Sales Executive (Temporary)",
      slug: "sales-executive-temporary",
      roleType: "SALES_EXECUTIVE",
      employmentType: "TEMPORARY",
      description: "Acquire merchant partnerships, expand delivery coverage, and drive revenue growth on a contract basis.",
      responsibilities: [
        "Onboard local restaurants and retail merchants",
        "Achieve weekly merchant onboarding targets",
        "Maintain relationship with merchant partners"
      ],
      salaryMin: 23000,
      salaryMax: 50000,
      totalPosts: 999,
      applicationFee: 300,
      district: "Bangalore",
    },
    {
      title: "TeleCaller (Permanent)",
      slug: "telecaller-permanent",
      roleType: "TELECALLER",
      employmentType: "PERMANENT",
      description: "Handle incoming customer inquiries, support candidate onboarding telephonically, and resolve issues.",
      responsibilities: [
        "Make outbound calls to registered candidates",
        "Guide candidates through the recruitment steps",
        "Address queries and resolve candidate tickets",
        "Maintain calling logs and CRM records"
      ],
      salaryMin: 20000,
      salaryMax: 40000,
      totalPosts: 10,
      applicationFee: 1000,
      district: "Bangalore",
    },
    {
      title: "TeleCaller (Temporary)",
      slug: "telecaller-temporary",
      roleType: "TELECALLER",
      employmentType: "TEMPORARY",
      description: "Handle incoming customer inquiries, support candidate onboarding telephonically on a contract basis.",
      responsibilities: [
        "Make outbound calls to registered candidates",
        "Guide candidates through the recruitment steps",
        "Address queries and resolve candidate tickets"
      ],
      salaryMin: 20000,
      salaryMax: 40000,
      totalPosts: 999,
      applicationFee: 300,
      district: "Bangalore",
    }
  ];

  for (const job of jobs) {
    await prisma.jobPost.create({
      data: job as any
    });
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
