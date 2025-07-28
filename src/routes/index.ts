import express, { Request, Response } from 'express';

const router = express.Router();

//home page
router.get('/', (req: Request, res: Response) => {
  res.send('Welcome To Waves!!! Your Personal Wardrobe');
});

export default router;
