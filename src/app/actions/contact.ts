"use server";

import { supabasePublic } from "@/lib/supabase";

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
} | null;

const SUBJECTS = [
  "General Inquiry",
  "Restaurant Partnership",
  "Delivery Partner",
  "Investor Relations",
  "Media & Press",
  "Support",
  "Other",
];

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name    = (formData.get("name")    as string)?.trim();
  const email   = (formData.get("email")   as string)?.trim();
  const phone   = (formData.get("phone")   as string)?.trim() || null;
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  // Basic validation
  const fieldErrors: NonNullable<ContactFormState>["fieldErrors"] = {};
  if (!name || name.length < 2)      fieldErrors.name    = "Please enter your full name.";
  if (!email || !email.includes("@")) fieldErrors.email   = "Please enter a valid email address.";
  if (!subject || !SUBJECTS.includes(subject))
                                      fieldErrors.subject = "Please select a subject.";
  if (!message || message.length < 10)
                                      fieldErrors.message = "Message must be at least 10 characters.";

  if (Object.keys(fieldErrors).length > 0) return { fieldErrors };

  const { error } = await supabasePublic.from("contact_submissions").insert({
    name,
    email,
    phone,
    subject,
    message,
  });

  if (error) {
    console.error("[contact] Supabase insert error:", error.message);
    return { error: "Something went wrong. Please try again or email us directly." };
  }

  return { success: true };
}
