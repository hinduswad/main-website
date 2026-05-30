import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth-jwt";
import { prisma } from "@/lib/prisma";
import { logoutAction } from "@/actions/auth-actions";
import { toggleExamEligibilityAction } from "@/actions/admin-actions";
import DashboardClient from "./DashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  // Guard: If not logged in, redirect to login page
  if (!session) {
    redirect("/login");
  }

  // Fetch all candidate applications with profiles, job post details, and exams
  const applications = await prisma.application.findMany({
    include: {
      user: {
        include: {
          profile: true,
        },
      },
      jobPost: true,
      exams: true,
    },
    orderBy: {
      appliedAt: "desc",
    },
  });

  // Serialize Date objects to strings for Client Component compatibility
  const serializedApplications = applications.map((app) => ({
    ...app,
    appliedAt: app.appliedAt.toISOString(),
    updatedAt: app.updatedAt.toISOString(),
    paidAt: app.paidAt ? app.paidAt.toISOString() : null,
    user: {
      id: app.user.id,
      phone: app.user.phone,
      email: app.user.email,
      profile: app.user.profile
        ? {
            ...app.user.profile,
            dob: app.user.profile.dob.toISOString(),
            photoUrl: app.user.profile.photoUrl,
            aadhaarUrl: app.user.profile.aadhaarUrl,
            resumeUrl: app.user.profile.resumeUrl,
            experienceCertUrl: app.user.profile.experienceCertUrl,
          }
        : null,
    },
    jobPost: {
      title: app.jobPost.title,
      roleType: app.jobPost.roleType,
      employmentType: app.jobPost.employmentType,
      district: app.jobPost.district,
      applicationFee: app.jobPost.applicationFee,
    },
    exams: app.exams.map((exam) => ({
      id: exam.id,
      status: exam.status,
      score: exam.score,
    })),
  }));

  return (
    <DashboardClient
      initialApplications={serializedApplications}
      adminPhone={session.phone}
      logoutAction={logoutAction}
      toggleExamEligibilityAction={toggleExamEligibilityAction}
    />
  );
}
