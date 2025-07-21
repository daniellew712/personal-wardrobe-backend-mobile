# Personal Wardrobe Backend

A TypeScript Express.js backend application for managing personal wardrobe data.

## Prerequisites

- Node.js (v14 or higher)
- npm

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the TypeScript project:
   ```bash
   npm run build
   ```

## Development

### Scripts

- `npm run dev` - Start the development server with hot reload using nodemon and ts-node
- `npm run build` - Compile TypeScript to JavaScript in the `dist/` folder
- `npm run watch` - Watch for TypeScript changes and recompile automatically
- `npm start` - Start the production server (runs the compiled JavaScript)

### Development Workflow

1. Start the development server:
   ```bash
   npm run dev
   ```

2. The server will automatically restart when you make changes to TypeScript files in the `src/` directory.

3. The application will be available at `http://localhost:3000`

## Project Structure

```
├── src/                    # TypeScript source files
│   ├── app.ts             # Main Express application
│   ├── bin/
│   │   └── www.ts         # Server startup script
│   └── routes/            # Route definitions
│       ├── index.ts       # Home route
│       └── users.ts       # Users route
├── dist/                  # Compiled JavaScript (generated)
├── views/                 # Jade/Pug templates
├── public/                # Static assets
├── tsconfig.json          # TypeScript configuration
├── nodemon.json           # Nodemon configuration
└── package.json           # Node.js dependencies and scripts
```

## TypeScript Configuration

The project uses strict TypeScript settings with:
- ES2020 target
- CommonJS modules
- Strict type checking
- Source maps for debugging
- Declaration files generation

## API Endpoints

- `GET /` - Returns "Hello World!"
- `GET /users` - Returns "respond with a resource"

## Production Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

The compiled JavaScript files will be in the `dist/` directory and the server will start from there.
