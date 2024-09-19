import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Define the Zod schema for validation
const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log(body);

    // Validate request body using Zod
    const { name, email, message } = ContactFormSchema.parse(body);

    // Send email via Resend
    console.log(
      await resend.emails.send({
        from: `${email}`,
        to: 'jwong2542@gmail.com', // This can be your portfolio email
        subject: `New message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      })
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
