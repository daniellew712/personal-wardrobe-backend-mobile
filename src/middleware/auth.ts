import admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

// Basic middleware to verify Firebase authentication token
export async function authenticateFirebaseToken(
  req: Request, 
  res: Response, 
  next: NextFunction
): Promise<void> {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'No authentication token provided' });
    return;
  }

  const token = authHeader.substring(7); // Remove 'Bearer ' prefix

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Add user info to request object
    req.user = {
      uid: decodedToken.uid,
      email: decodedToken.email,
      name: decodedToken.name,
    };

    next();
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    res.status(401).json({ error: 'Invalid authentication token' });
    return;
  }
}
