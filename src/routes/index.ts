import express, { Request, Response } from 'express';

const router = express.Router();

//home page
router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!!!!!!');
});

export default router;
