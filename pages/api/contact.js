import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return res.status(502).json({ error: 'Email service not configured' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'YAP-BOS Retail Website <no-reply@yapbosretail.com>',
      to: 'welcome@yapbosretail.com',
      replyTo: email,
      subject: `Yeni İletişim Formu — ${company || name}`,
      text: `Ad Soyad: ${name}\nŞirket: ${company || '-'}\nE-posta: ${email}\n\nMesaj:\n${message}`,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend send failed:', err);
    return res.status(502).json({ error: 'Failed to send email' });
  }
}
