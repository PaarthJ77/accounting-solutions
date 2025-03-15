import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:3000', 'https://www.accountingsolutionz.org'],
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.mail.yahoo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring transporter:', error);
  } else {
    console.log('✅ Email service is ready');
  }
});

app.options('/send-email', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(200);
});

app.post('/send-email', (req, res) => {
  const { name, company, email, phone, message, preferredContact } = req.body;

  if (!name || !message || !preferredContact) {
    return res.status(400).json({ msg: 'Please fill in all required fields.' });
  }
  if (preferredContact === 'phone' && !phone) {
    return res.status(400).json({ msg: 'Please provide your phone number.' });
  }
  if (preferredContact === 'email' && !email) {
    return res.status(400).json({ msg: 'Please provide your email address.' });
  }

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: 'accountingsolutionz@yahoo.com',
    subject: `New Contact Inquiry from ${name}`,
    text: `
You have received a new message from your website contact form.

Name: ${name}
Company: ${company || 'N/A'}
Email: ${email || 'N/A'}
Phone Number: ${phone || 'N/A'}
Preferred Contact Method: ${preferredContact}
Message:
${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ msg: `Failed to send email: ${error.message}` });
    } else {
      console.log('📩 Email sent:', info.response);
      return res.status(200).json({ msg: 'Email sent successfully!' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
