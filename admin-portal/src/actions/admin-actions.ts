"use server";

import { prisma } from "@/lib/prisma";
import { getAdminSession } from "@/lib/auth-jwt";
import { revalidatePath } from "next/cache";

// Action to fetch all applicants
export async function getApplicantsAction() {
  try {
    const session = await getAdminSession();
    if (!session) {
      return { success: false, error: "Unauthorized." };
    }

    const applications = await prisma.application.findMany({
      include: {
        user: {
          include: {
            profile: true,
          },
        },
        jobPost: true,
        exams: true,
        interviews: true,
      },
      orderBy: {
        appliedAt: "desc",
      },
    });

    return { success: true, applications };
  } catch (error) {
    console.error("getApplicantsAction error:", error);
    const msg = error instanceof Error ? error.message : "Failed to fetch applicants.";
    return { success: false, error: msg };
  }
}

// Action to toggle exam eligibility
export async function toggleExamEligibilityAction(applicationId: string, allow: boolean) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return { success: false, error: "Unauthorized." };
    }

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: { jobPost: true },
    });

    if (!application) {
      return { success: false, error: "Application not found." };
    }

    if (allow) {
      // Transition status to EXAM_SCHEDULED
      await prisma.application.update({
        where: { id: applicationId },
        data: {
          status: "EXAM_SCHEDULED",
        },
      });

      // Find or create Exam record
      const existingExam = await prisma.exam.findFirst({
        where: { applicationId },
      });

      if (!existingExam) {
        await prisma.exam.create({
          data: {
            applicationId,
            status: "scheduled",
            scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
          },
        });
      } else {
        await prisma.exam.update({
          where: { id: existingExam.id },
          data: {
            status: "scheduled",
            scheduledAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
          },
        });
      }
    } else {
      // Revoke eligibility: revert status to PAID
      await prisma.application.update({
        where: { id: applicationId },
        data: {
          status: "PAID",
        },
      });

      // Delete or cancel the exam record
      await prisma.exam.deleteMany({
        where: { applicationId },
      });
    }

    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("toggleExamEligibilityAction error:", error);
    const msg = error instanceof Error ? error.message : "Failed to update exam eligibility.";
    return { success: false, error: msg };
  }
}
