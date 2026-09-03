import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = ['https://ntspl.vercel.app', 'http://localhost:3000'];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running successfully.' });
});

app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  // TODO: Send email, save to database, etc.
  console.log(`Received contact form submission from ${name} (${email}): ${message}`);
  res.json({ success: true, message: 'Message received successfully. We will get back to you shortly!' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Nurmasters API Server');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
