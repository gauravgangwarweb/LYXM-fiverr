import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, country, interests } = body;

    const data = await resend.emails.send({
      from: 'hello@elyxm.com',
      to: 'jorge@elyxm.com',
      subject: 'New Form Submission',
      html: `
        <h2>New Form Submission</h2>
        <p><strong>First Name:</strong> ${firstname}</p>
        <p><strong>Last Name:</strong> ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Interests:</strong> ${interests.join(', ')}</p>
      `
    });

    return Response.json({ message: 'Email sent successfully' });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}