// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a Nodemailer transporter using Yahoo's SMTP
const transporter = nodemailer.createTransport({
  service: 'Yahoo',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify the transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error configuring transporter:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

// Define the email sending route
app.post('/send-email', (req, res) => {
  const { name, company, email, phone, message, preferredContact } = req.body;

  // Basic validation
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
    to: 'accountingsolutionz@yahoo.com', // Your personal email
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
      return res.status(500).json({ msg: 'Failed to send email. Please try again later.' });
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).json({ msg: 'Email sent successfully!' });
    }
  });
});

// Start the server with error handling
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle server errors
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use.`);
    console.error('Please terminate the process using the port or use a different port.');
    process.exit(1); // Exit the process with failure
  } else {
    console.error('Server error:', err);
  }
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully...');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
});
