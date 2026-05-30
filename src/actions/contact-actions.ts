"use server";

import { prisma } from "@/lib/prisma";

export async function submitContactInquiry(formData: {
  name: string;
  phone: string;
  email?: string;
  message: string;
}) {
  try {
    const inquiry = await prisma.contactInquiry.create({
      data: {
        fullName: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        message: formData.message,
      },
    });
    return { success: true, id: inquiry.id };
  } catch (error: any) {
    console.error("Error submitting contact inquiry:", error);
    return { success: false, error: "Failed to submit inquiry. Please try again." };
  }
}
