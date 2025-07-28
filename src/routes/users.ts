// this file used to manage user profile and authentification
import express, { Request, Response } from 'express';
import { authenticateFirebaseToken } from '../middleware/auth';

const router = express.Router();

router.get('/me', authenticateFirebaseToken, async (req: Request, res: Response) => {
  try {
    const firebaseUser = req.user;
    
    if (!firebaseUser) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }
    // Return Firebase user info
    res.json({
      uid: firebaseUser.uid,
      email: firebaseUser.email,
      name: firebaseUser.name || firebaseUser.email?.split('@')[0]
    });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching user info' });
  }
});

export default router;