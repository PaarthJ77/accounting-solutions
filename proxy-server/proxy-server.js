import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
  origin: 'https://www.accountingsolutionz.org',
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true
}));

app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const response = await fetch('https://accountingsolutionz-email.herokuapp.com/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy server error:', error);
    res.status(500).json({ msg: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Proxy server is running on port ${PORT}`);
});
