# Personal Wardrobe Backend

A Node.js with Express backend for a personal wardrobe management app with AI-powered styling assistance.

## Features

- User Authentication: Firebase Admin SDK integration
- Wardrobe Management: Full CRUD operations (Get, Post, PUT, Delete)
- AI Styling Assistant: Google Gemini AI integration (Google's Gemini 1.5 Flash model)
- Database: PostgreSQL with Prisma ORM
- TypeScript: Ensure type safety

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- Firebase project with service account credentials
- Google Gemini API key


### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build the TypeScript project
- `npm start` - Start production server
- `npm prisma migrate` - Run Prisma Migrations
- `npm prisma generate` - Generate Prisma client
- `npm prisma studio` - show the database tables


## API Endpoints

### Clothing Items
- `GET /clothing` - Get all clothing items of the authenticated user
- `GET /clothing/:id` - Get a specific clothing item
- `POST /clothing` - Create a new clothing item
- `PUT /clothing/:id` - Update clothing item
- `DELETE /clothing/:id` - Delete clothing item

### Users
- `GET /users/me` - Get current user profile

### AI Chat
- `POST /chat` - Send message to AI assistant


### ClothingItem Model
- `id` - Unique identifier
- `name` - Item name
- `description` - Item description
- `brand` - Brand name
- `color` - Primary color
- `size` - Size information
- `category` - Category string
- `tags` - Array of tag strings
- `imageUrl` - Image URL
- `purchaseDate` - Purchase date
- `favorite` - Boolean favorite flag
- `userId` - Foreign key to User
- `createdAt` / `updatedAt` - Timestamps

## Project Structure

```
├── src/
│   ├── app.ts              # Express app configuration
│   ├── bin/www.ts          # Server entry point
│   ├── middleware/
│   │   └── auth.ts         # Firebase authentication middleware
│   ├── routes/
│   │   ├── index.ts        # Root routes
│   │   ├── users.ts        # User-related routes
│   │   ├── clothing.ts     # Clothing CRUD routes
│   │   └── chat.ts         # AI chat routes
│   ├── services/
│   │   └── database.ts     # Database service
│   └── types/
│       └── auth.ts         # Authentication type definitions
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── package.json
├── tsconfig.json
└── nodemon.json
```






