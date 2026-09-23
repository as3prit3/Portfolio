"use server";

import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(50, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(500, "Message is too long."),

  website: z.string().optional(),
});

type ContactActionState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: {
    name?: string;
    email?: string;
    message?: string;
  };
};

export async function sendContactMessage(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  // Honeypot spam protection
  if (typeof rawData.website === "string" && rawData.website.trim() !== "") {
    return {
      status: "success",
      message: "Message sent successfully.",
    };
  }

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors;

    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors: {
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
    };
  }

  const { name, email, message } = result.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactEmail || !fromEmail) {
    console.error("Missing contact form environment variables.");

    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return {
        status: "error",
        message: "Unable to send your message. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Message sent! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Contact form error:", error);

    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
