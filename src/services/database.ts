//create a shared prisma client for my entire app
//translate code to sql
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
