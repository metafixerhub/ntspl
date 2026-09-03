import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running successfully.' });
});

app.get('/', (req: Request, res: Response) => {
  res.send('Nurmasters API Server');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
