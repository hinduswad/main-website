"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { uploadDocument } from "@/lib/storage";

// Helper to get current user session
async function getSessionUser() {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized. Please sign in.");
  }
  return session.user;
}

// 1. Get or create draft application for a job post
export async function getOrCreateApplication(jobPostId: string) {
  try {
    const user = await getSessionUser();

    // Check if job exists
    const jobPost = await prisma.jobPost.findUnique({
      where: { id: jobPostId },
    });
    if (!jobPost) {
      return { success: false, error: "Job post not found." };
    }

    // Check if application already exists
    let application = await prisma.application.findFirst({
      where: {
        userId: user.id,
        jobPostId: jobPostId,
      },
      include: {
        user: {
          include: {
            profile: true,
          },
        },
      },
    });

    if (!application) {
      // Create draft application
      application = await prisma.application.create({
        data: {
          userId: user.id as string,
          jobPostId: jobPostId,
          applicationType: jobPost.employmentType,
          status: "DRAFT",
          paymentAmount: jobPost.applicationFee,
          paymentStatus: "PENDING",
        },
        include: {
          user: {
            include: {
              profile: true,
            },
          },
        },
      });
    }

    return { success: true, application };
  } catch (error: any) {
    console.error("getOrCreateApplication error:", error);
    return { success: false, error: error.message || "Failed to retrieve application." };
  }
}

// 2. Save Personal Details (Step 2)
export async function savePersonalDetails(
  applicationId: string,
  data: {
    fullName: string;
    fatherName: string;
    dob: string;
    gender: string;
    mobile: string;
    email?: string;
    panNumber: string;
    currentAddress: string;
    currentPin: string;
    permanentAddress: string;
    permanentPin: string;
    languagesKnown: string[];
    photoUrl?: string;
    aadhaarUrl?: string;
  }
) {
  try {
    const user = await getSessionUser();

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application || application.userId !== user.id) {
      return { success: false, error: "Application not found or unauthorized." };
    }

    // Upsert the Profile record
    await prisma.profile.upsert({
      where: { userId: user.id as string },
      create: {
        userId: user.id as string,
        fullName: data.fullName,
        fatherName: data.fatherName,
        dob: new Date(data.dob),
        gender: data.gender,
        mobile: data.mobile,
        email: data.email || null,
        panNumber: data.panNumber,
        currentAddress: data.currentAddress,
        currentPin: data.currentPin,
        permanentAddress: data.permanentAddress,
        permanentPin: data.permanentPin,
        languagesKnown: data.languagesKnown,
        photoUrl: data.photoUrl || null,
        aadhaarUrl: data.aadhaarUrl || null,
        highestQualification: "",
        isFresher: true,
        willingToRelocate: false,
        districtPreference: "",
        managementSkillLevel: "basic",
        hasSupervisoryExperience: false,
        comfortableLeading: false,
        willingToTravel: false,
        hasTwoWheeler: false,
      },
      update: {
        fullName: data.fullName,
        fatherName: data.fatherName,
        dob: new Date(data.dob),
        gender: data.gender,
        mobile: data.mobile,
        email: data.email || null,
        panNumber: data.panNumber,
        currentAddress: data.currentAddress,
        currentPin: data.currentPin,
        permanentAddress: data.permanentAddress,
        permanentPin: data.permanentPin,
        languagesKnown: data.languagesKnown,
        photoUrl: data.photoUrl || null,
        aadhaarUrl: data.aadhaarUrl || null,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("savePersonalDetails error:", error);
    return { success: false, error: error.message || "Failed to save personal details." };
  }
}

// 3. Save Professional Details (Step 3)
export async function saveProfessionalDetails(
  applicationId: string,
  data: {
    highestQualification: string;
    isFresher: boolean;
    previousCompany?: string;
    totalExperienceYears?: number;
    districtPreference: string;
    willingToRelocate: boolean;
    managementSkillLevel: string;
    hasSupervisoryExperience: boolean;
    supervisoryExperienceYears?: number;
    comfortableLeading: boolean;
    willingToTravel: boolean;
    hasTwoWheeler: boolean;
    resumeUrl?: string;
    experienceCertUrl?: string;
  }
) {
  try {
    const user = await getSessionUser();

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application || application.userId !== user.id) {
      return { success: false, error: "Application not found or unauthorized." };
    }

    // Update Profile
    await prisma.profile.update({
      where: { userId: user.id as string },
      data: {
        highestQualification: data.highestQualification,
        isFresher: data.isFresher,
        previousCompany: data.previousCompany || null,
        totalExperienceYears: data.totalExperienceYears || null,
        districtPreference: data.districtPreference,
        willingToRelocate: data.willingToRelocate,
        managementSkillLevel: data.managementSkillLevel,
        hasSupervisoryExperience: data.hasSupervisoryExperience,
        supervisoryExperienceYears: data.supervisoryExperienceYears || null,
        comfortableLeading: data.comfortableLeading,
        willingToTravel: data.willingToTravel,
        hasTwoWheeler: data.hasTwoWheeler,
        resumeUrl: data.resumeUrl || null,
        experienceCertUrl: data.experienceCertUrl || null,
      },
    });

    return { success: true };
  } catch (error: any) {
    console.error("saveProfessionalDetails error:", error);
    return { success: false, error: error.message || "Failed to save professional details." };
  }
}

// 4. Submit application (transition state to PAYMENT_PENDING)
export async function submitApplicationAction(applicationId: string) {
  try {
    const user = await getSessionUser();

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application || application.userId !== user.id) {
      return { success: false, error: "Application not found or unauthorized." };
    }

    // Mark as PAYMENT_PENDING so the user proceeds to checkout
    const updated = await prisma.application.update({
      where: { id: applicationId },
      data: {
        status: "PAYMENT_PENDING",
      },
    });

    return { success: true, application: updated };
  } catch (error: any) {
    console.error("submitApplicationAction error:", error);
    return { success: false, error: error.message || "Failed to submit application." };
  }
}

// 5. Direct file upload server action (for form uploads)
export async function uploadDocumentToServer(
  base64File: string,
  fileName: string,
  contentType: string,
  docType: string
) {
  try {
    const user = await getSessionUser();
    const buffer = Buffer.from(base64File, "base64");

    const fileUrl = await uploadDocument(
      buffer,
      fileName,
      contentType,
      user.id as string,
      docType
    );

    return { success: true, fileUrl };
  } catch (error: any) {
    console.error("Upload error:", error);
    return { success: false, error: error.message || "File upload failed." };
  }
}

// 6. Complete Payment (either actual Razorpay callback or developer mock checkout)
export async function completePaymentAction(applicationId: string, pStatus: "PAID" | "FAILED" = "PAID") {
  try {
    const user = await getSessionUser();

    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application || application.userId !== user.id) {
      return { success: false, error: "Application not found or unauthorized." };
    }

    if (pStatus === "PAID") {
      // Both PERMANENT and TEMPORARY applications will have 'PAID' status after payment,
      // awaiting manual review and exam approval from the admin portal.
      const nextStatus = "PAID";
      await prisma.application.update({
        where: { id: applicationId },
        data: {
          paymentStatus: "PAID",
          status: nextStatus,
          paidAt: new Date(),
        },
      });
    } else {
      await prisma.application.update({
        where: { id: applicationId },
        data: {
          paymentStatus: "FAILED",
        },
      });
    }

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error: any) {
    console.error("completePaymentAction error:", error);
    return { success: false, error: error.message || "Failed to process payment." };
  }
}

// 7. Get user applications for the dashboard
export async function getUserApplications() {
  try {
    const user = await getSessionUser();

    const applications = await prisma.application.findMany({
      where: { userId: user.id },
      include: {
        jobPost: true,
        exams: true,
        interviews: true,
      },
      orderBy: { appliedAt: "desc" },
    });

    return { success: true, applications };
  } catch (error: any) {
    console.error("getUserApplications error:", error);
    return { success: false, error: error.message || "Failed to fetch dashboard data." };
  }
}
