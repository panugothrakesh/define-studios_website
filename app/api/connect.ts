import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextApiRequest, NextApiResponse } from 'next';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.DOMAIN || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Data', req.body);

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: 'api', key: API_KEY });

  const { firstname, lastname, email, site, phone, message } = req.body;
 
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
    return res.status(200).json({ submitted: true });
  } catch (err: any) {
    console.error('Error sending email', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}

// Example of another HTTP method handler
export async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  // Handle GET requests here if needed
  return res.status(405).json({ error: 'Method Not Allowed' });
}
