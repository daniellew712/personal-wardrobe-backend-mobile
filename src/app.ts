//define express app
import createError from 'http-errors';
import express, { Request, Response, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import admin from 'firebase-admin';

import './types/auth'; // Import auth types

import indexRouter from './routes/index';
import usersRouter from './routes/users';
import clothingRouter from './routes/clothing';

const app = express();

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/clothing', clothingRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// API error handler - return JSON instead of HTML
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const isDevelopment = req.app.get('env') === 'development';
  
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      ...(isDevelopment && { stack: err.stack })
    }
  });
});

export default app;
