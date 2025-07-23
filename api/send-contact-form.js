import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: process.env.VITE_EMAIL_SERVICE || 'gmail',
      auth: {
        user: process.env.VITE_EMAIL_USER,
        pass: process.env.VITE_EMAIL_PASS,
      },
    });

    // Email content for you (AlphaDen)
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #000; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .contact-info { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .message-content { background: white; padding: 20px; border-left: 4px solid #000; }
          .footer { background: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📧 New Contact from Website</h1>
          <p>AlphaDen Game Development Studio</p>
        </div>
        
        <div class="content">
          <h2>Contact Details:</h2>
          
          <div class="contact-info">
            <h3>Contact Information:</h3>
            <ul>
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Company:</strong> ${company || 'Not provided'}</li>
            </ul>
          </div>
          
          <div class="message-content">
            <h3>📝 Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p><strong>Reply to:</strong> ${email}</p>
        </div>
        
        <div class="footer">
          <p>This message was sent from the AlphaDen website contact form.</p>
          <p>Timestamp: ${new Date().toLocaleString()}</p>
        </div>
      </body>
      </html>
    `;

    // Send email to you
    const mailOptions = {
      from: process.env.VITE_EMAIL_USER,
      to: 'alphadenthj@gmail.com',
      subject: 'New contact from website',
      html: htmlContent,
      replyTo: email, // This allows you to reply directly to the sender
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Contact form sent successfully!' });
  } catch (error) {
    console.error('Error sending contact form:', error);
    res.status(500).json({ error: 'Failed to send contact form email' });
  }
}