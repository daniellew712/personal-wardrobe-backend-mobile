// Extend Express Request interface to include user authentication info
declare global {
  namespace Express {
    interface Request {
      user?: {
        uid: string;
        email?: string;
        name?: string;
        picture?: string;
      };
    }
  }
}

// Export empty object to make this a module
export {};