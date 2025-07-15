import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const receiverEmail = process.env.RECEIVER_EMAIL || '';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    const data = await resend.emails.send({
      from: 'Abhyudya <onboarding@resend.dev>',
      to: receiverEmail,
      subject: subject || `New Message from ${name}`,
      html: `
        <h3>You’ve got a new message! 📬</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, message: 'Message sent!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    console.error("Email error:", error?.response?.data || error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send message.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
