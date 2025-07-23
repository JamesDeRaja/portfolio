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
    const { email, gameSuggestion, preferences } = req.body;
    
    if (!email || !gameSuggestion || !preferences) {
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

    // Email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #000; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .preferences { background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0; }
          .suggestion { background: white; padding: 20px; border-left: 4px solid #000; }
          .footer { background: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🎮 Your Personalized Game Suggestion</h1>
          <p>From AlphaDen Game Development Studio</p>
        </div>
        
        <div class="content">
          <h2>Hello!</h2>
          <p>Thank you for using our AI-powered game suggestion tool. Based on your preferences, we've created a detailed game concept just for you.</p>
          
          <div class="preferences">
            <h3>Your Preferences:</h3>
            <ul>
              <li><strong>Game Type:</strong> ${preferences.gameType}</li>
              <li><strong>Character/Toy:</strong> ${preferences.character}</li>
              <li><strong>Control Method:</strong> ${preferences.control}</li>
              ${preferences.additionalInfo ? `<li><strong>Additional Info:</strong> ${preferences.additionalInfo}</li>` : ''}
            </ul>
          </div>
          
          <div class="suggestion">
            <h3>🚀 Your Game Suggestion:</h3>
            <div style="white-space: pre-wrap;">${gameSuggestion}</div>
          </div>
          
          <p>We hope you find this game concept exciting! If you'd like to discuss developing this game or have any questions, feel free to reach out to us.</p>
        </div>
        
        <div class="footer">
          <p><strong>AlphaDen Game Development Studio</strong></p>
          <p>13+ Years of Experience | 1M+ Downloads | Trusted by Top Publishers</p>
          <p>Email: alphadenthj@gmail.com | Phone: +91 7708140455</p>
          <p>Visit our portfolio: <a href="https://james.alphaden.club">james.alphaden.club</a></p>
        </div>
      </body>
      </html>
    `;

    // Send email
    const mailOptions = {
      from: process.env.VITE_EMAIL_USER,
      to: email,
      subject: '🎮 Your Personalized Game Suggestion from AlphaDen',
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Game suggestion sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send game suggestion email' });
  }
}