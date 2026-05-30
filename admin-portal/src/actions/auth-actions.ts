"use server";

import { prisma } from "@/lib/prisma";
import { verifyPassword, setAdminSession, clearAdminSession } from "@/lib/auth-jwt";

export async function loginAction(prevState: unknown, formData: FormData) {
  try {
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;

    if (!phone || !password) {
      return { success: false, error: "Please enter both mobile number and password." };
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return { success: false, error: "Please enter a valid 10-digit mobile number." };
    }

    // Find the user by phone
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user) {
      return { success: false, error: "Invalid credentials." };
    }

    // Verify role
    if (user.role !== "ADMIN" && user.role !== "SUPERADMIN") {
      return { success: false, error: "Access Denied: Admin privileges required." };
    }

    // Verify password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return { success: false, error: "Invalid credentials." };
    }

    // Create session
    await setAdminSession({
      userId: user.id,
      phone: user.phone,
      role: user.role,
    });

    return { success: true };
  } catch (error) {
    console.error("Login action error:", error);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}

export async function logoutAction() {
  await clearAdminSession();
}
