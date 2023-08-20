"use server";

import { Resend } from "resend";
import { validateString } from "../lib/utils";
import { getErrorMessage } from "../lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.REDEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const message = formData.get("message");
  const senderEmail = formData.get("senderEmail");

  // Server side validation
  if (!validateString(senderEmail, 5000)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ywang623@my.bcit.ca",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
}
