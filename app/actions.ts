"use server"

import { Resend } from "resend"

// Initialize Resend with the provided API key
const resend = new Resend("f99eeb8c-8aaf-4ab2-b3f0-d7c98c0897db")

type EmailData = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail(data: EmailData) {
  try {
    const { name, email, subject, message } = data

    // Send the email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "divyathapa9999@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      reply_to: email,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
    })

    if (error) {
      console.error("Error sending email:", error)
      throw new Error("Failed to send email")
    }

    console.log("Email sent successfully:", emailData)
    return { success: true, data: emailData }
  } catch (error) {
    console.error("Error in sendEmail:", error)
    throw new Error("Failed to send email")
  }
}
