const { execSync } = require('child_process');

try {
  // Load environment variables from .env file
  require('dotenv').config();
  
  console.log('Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  console.log('Compiling TypeScript...');
  execSync('npx tsc', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
