import { NextRequest, NextResponse } from 'next/server';
import { z } from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/EmailTemplate";

const contactFormSchema = z.object({
  name: z.string().trim().min(1, { message: "Name field is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().trim().min(1, { message: "Please type in a message" }),
});

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const recipientEmail = process.env.RECIPIENT_EMAIL || "vaibhavtatkare2004@gmail.com";

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { errors: { message: ["Email service not configured. Please contact the administrator."] } },
        { status: 500 }
      );
    }

    // Check if Resend client is initialized
    if (!resend) {
      console.error('Resend client not initialized');
      return NextResponse.json(
        { errors: { message: ["Email service not available. Please try again later."] } },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Received form data:', body);
    
    const validatedContactFormData = contactFormSchema.safeParse(body);

    if (!validatedContactFormData.success) {
      const formFieldErrors = validatedContactFormData.error.flatten().fieldErrors;
      console.log('Validation errors:', formFieldErrors);
      return NextResponse.json({ errors: formFieldErrors }, { status: 400 });
    }

    const { name, email, message } = validatedContactFormData.data;
    console.log('Sending email to:', recipientEmail, 'from:', email);

    const emailResult = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: recipientEmail,
      subject: `New message from ${name}`,
      replyTo: email,
      react: <EmailTemplate name={name} email={email} message={message} />,
    });

    console.log('Email sent successfully:', emailResult);
    
    return NextResponse.json({ success: "Your message was sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log more details about the error
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { errors: { message: ["Failed to send email. Please try again later."] } },
      { status: 500 }
    );
  }
} 