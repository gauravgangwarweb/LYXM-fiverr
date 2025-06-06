import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { email, isContractor } = await request.json();

    const data = await resend.emails.send({
      from: 'hello@elyxm.com',
      to: "jorge@elyxm.com",
      subject: 'Vestaboard Specification Sheet',
      html: `<p>Thank you for requesting the specification sheet.</p>
            <p>Here's your download link: [Add your spec sheet link here]</p>`
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}