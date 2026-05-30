"use server";

import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function registerUser(formData: any) {
  try {
    const { phone, password } = formData;
    
    if (!phone || !password) {
      return { success: false, error: "Phone and password are required." };
    }

    // Validate phone number format (simple Indian phone validation: 10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return { success: false, error: "Please enter a valid 10-digit mobile number." };
    }

    if (password.length < 6) {
      return { success: false, error: "Password must be at least 6 characters long." };
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { phone },
    });

    if (existingUser) {
      return { success: false, error: "A user with this phone number already exists." };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        phone,
        password: hashedPassword,
        role: "CANDIDATE",
      },
    });

    return { success: true, userId: user.id };
  } catch (error: any) {
    console.error("Registration error:", error);
    return { success: false, error: "An unexpected error occurred during registration." };
  }
}
