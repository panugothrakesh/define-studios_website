import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.DOMAIN || '';

export async function POST(request: Request) {
  const body = await request.json();
  console.log('Data', body);

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const { firstname, lastname, email, site, phone, message } = body;

  const messageData = {
    from: 'Contact Form <support@gleedesignstudio.com>',
    to: ['rakeshpanugoth2003@gmail.com'],
    subject: 'New Contact Response!',
    text: `Hello,
    
    You have a new message from ${firstname} ${lastname}
    
    Email id: ${email}
    Phone Number: ${phone}
    Website: https://${site}

    Message: ${message}`,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
    return NextResponse.json({ submitted: true });
  } catch (err: any) {
    console.error('Error sending email', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
