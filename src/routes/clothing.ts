import express, { Request, Response } from 'express';
import prisma from '../services/database';
import { authenticateFirebaseToken } from '../middleware/auth'; 
//router is like blueprint is flask
const router = express.Router();

// Apply authentication to all routes
router.use(authenticateFirebaseToken);

// GET /clothing - Get user's clothing items with optional filtering
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.uid;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }

    // Extract query parameters for filtering
    const { category, tags, color, brand, size } = req.query;

    // Build where clause based on query parameters
    const whereClause: any = {
      userId: userId as string
    };

    // Filter by category
    if (category) {
      whereClause.category = category as string;
    }

    // Filter by tags (can match any of the provided tags)
    if (tags) {
      const tagArray = Array.isArray(tags) ? tags : [tags];
      whereClause.tags = {
        hasSome: tagArray as string[]
      };
    }

    // Filter by other fields
    if (color) {
      whereClause.color = { contains: color as string, mode: 'insensitive' };
    }
    if (brand) {
      whereClause.brand = { contains: brand as string, mode: 'insensitive' };
    }
    if (size) {
      whereClause.size = size as string;
    }

    const clothingItems = await prisma.clothingItem.findMany({
      where: whereClause,
      orderBy: { createdAt: 'desc' }
    });

    res.json(clothingItems);
  } catch (error) {
    console.error('Error fetching clothing items:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /clothing/:id 
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const clothingItem = await prisma.clothingItem.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    if (!clothingItem) {
      res.status(404).json({ error: 'Clothing item not found' });
      return;
    }

    res.json(clothingItem);
  } catch (error) {
    console.error('Error fetching clothing item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /clothing 
router.post('/', async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      brand,
      color,
      size,
      purchaseDate,
      imageUrl,
      category,
      tags = []
    } = req.body;

    const userId = req.user?.uid;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }

    if (!name) {
      res.status(400).json({ 
        error: 'name is required' 
      });
      return;
    }

    // Sync user
    await prisma.user.upsert({
      where: { id: userId },
      update: {
        email: req.user?.email || '',
        name: req.user?.name,
        updatedAt: new Date()
      },
      create: {
        id: userId,
        email: req.user?.email || '',
        name: req.user?.name
      }
    });

    const clothingItem = await prisma.clothingItem.create({
      data: {
        name,
        description,
        brand,
        color,
        size,
        purchaseDate: purchaseDate ? new Date(purchaseDate) : null,
        imageUrl,
        category,
        tags,
        userId
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    res.status(201).json(clothingItem);
  } catch (error) {
    console.error('Error creating clothing item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// PUT /clothing/:id 
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      brand,
      color,
      size,
      purchaseDate,
      imageUrl,
      category,
      tags = []
    } = req.body;

    // Check if clothing item exists
    const existingItem = await prisma.clothingItem.findUnique({
      where: { id }
    });

    if (!existingItem) {
      res.status(404).json({ error: 'Clothing item not found' });
      return;
    }

    const clothingItem = await prisma.clothingItem.update({
      where: { id },
      data: {
        name: name || existingItem.name,
        description,
        brand,
        color,
        size,
        purchaseDate: purchaseDate ? new Date(purchaseDate) : null,
        imageUrl,
        category,
        tags
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    res.json(clothingItem);
  } catch (error) {
    console.error('Error updating clothing item:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE /clothing/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const clothingItem = await prisma.clothingItem.findUnique({
      where: { id }
    });

    if (!clothingItem) {
      res.status(404).json({ error: 'Clothing not found' });
      return;
    }

    await prisma.clothingItem.delete({
      where: { id }
    });

    res.json({ message: 'Clothing item deleted successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error });
  }
});

export default router;
