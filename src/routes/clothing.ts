import express, { Request, Response } from 'express';
import prisma from '../services/database';
import { authenticateFirebaseToken } from '../middleware/auth-dev'; // Using dev auth for now

const router = express.Router();

// Apply authentication to all routes
router.use(authenticateFirebaseToken);

// GET /clothing/categories
router.get('/categories', async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { clothingItems: true }
        }
      }
    });

    res.json(categories);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /clothing/tags
router.get('/tags', async (req: Request, res: Response) => {
  try {
    const tags = await prisma.tag.findMany({
      orderBy: { name: 'asc' },
      include: {
        _count: {
          select: { clothingItems: true }
        }
      }
    });

    res.json(tags);
  } catch (error) {
    console.error('Error fetching tags:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /clothing
router.get('/', async (req: Request, res: Response) => {
  try {
    const userId = req.user?.uid;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }

    const clothingItems = await prisma.clothingItem.findMany({
      where: {
        userId: userId as string
      },
      include: {
        category: true,
        tags: true,
        user: {
          select: { id: true, name: true, email: true }
        }
      },
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
        category: true,
        tags: true,
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
      price,
      purchaseDate,
      imageUrl,
      notes,
      categoryId,
      tags = []
    } = req.body;

    const userId = req.user?.uid;

    if (!userId) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }

    if (!name || !categoryId) {
      res.status(400).json({ 
        error: 'name and categoryId are required to proceed' 
      });
      return;
    }
// sync
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

    // Check if category exists
    const category = await prisma.category.findUnique({
      where: { id: categoryId }
    });

    if (!category) {
      res.status(404).json({ error: 'Category not found' });
      return;
    }

    // Create or connect tags
    const tagConnections = [];
    for (const tagName of tags) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName }
      });
      tagConnections.push({ id: tag.id });
    }

    const clothingItem = await prisma.clothingItem.create({
      data: {
        name,
        description,
        brand,
        color,
        size,
        price: price ? parseFloat(price) : null,
        purchaseDate: purchaseDate ? new Date(purchaseDate) : null,
        imageUrl,
        notes,
        userId,
        categoryId,
        tags: {
          connect: tagConnections
        }
      },
      include: {
        category: true,
        tags: true,
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
      price,
      purchaseDate,
      imageUrl,
      notes,
      categoryId,
      tags = []
    } = req.body;

    // Check if clothing item exists
    const existingItem = await prisma.clothingItem.findUnique({
      where: { id },
      include: { tags: true }
    });

    if (!existingItem) {
      res.status(404).json({ error: 'Clothing item not found' });
      return;
    }

    // Handle tag updates
    const tagConnections = [];
    for (const tagName of tags) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName }
      });
      tagConnections.push({ id: tag.id });
    }

    const clothingItem = await prisma.clothingItem.update({
      where: { id },
      data: {
        name: name || existingItem.name,
        description,
        brand,
        color,
        size,
        price: price ? parseFloat(price) : null,
        purchaseDate: purchaseDate ? new Date(purchaseDate) : null,
        imageUrl,
        notes,
        categoryId: categoryId || existingItem.categoryId,
        tags: {
          set: [], // Disconnect all existing tags
          connect: tagConnections // Connect new tags
        }
      },
      include: {
        category: true,
        tags: true,
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    res.json(clothingItem);
  } catch (error) {
    console.error('Error updating clothing item:', error);
    res.status(500).json({ error });
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
