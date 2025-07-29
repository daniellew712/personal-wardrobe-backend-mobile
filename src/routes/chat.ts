import express, { Request, Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { authenticateFirebaseToken } from '../middleware/auth';

const router = express.Router();

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// Apply authentication
router.use(authenticateFirebaseToken);
router.post('/', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    // Create a simple prompt for fashion/wardrobe assistance
    const prompt = `You are a helpful fashion stylist and wardrobe assistant. 
    User question: ${message}
    Please provide concise, helpful, friendly advice about fashion, clothing, styling, or wardrobe management.`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      message: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

export default router;
