import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://accountingsolutionz.org',
  'https://www.accountingsolutionz.org',
  'https://accountingsolutionz-email.herokuapp.com'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));

app.use(express.json());

app.options('/send-email', (req, res) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  return res.sendStatus(204);
});

app.get('/send-email', (req, res) => {
  res.status(200).send('This endpoint is for sending emails via POST requests.');
});

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
