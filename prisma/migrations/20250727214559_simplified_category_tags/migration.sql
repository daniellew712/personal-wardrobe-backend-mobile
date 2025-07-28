/*
  Warnings:

  - You are about to drop the column `categoryId` on the `clothing_items` table. All the data in the column will be lost.
  - You are about to drop the `_ClothingItemTags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClothingItemTags" DROP CONSTRAINT "_ClothingItemTags_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClothingItemTags" DROP CONSTRAINT "_ClothingItemTags_B_fkey";

-- DropForeignKey
ALTER TABLE "clothing_items" DROP CONSTRAINT "clothing_items_categoryId_fkey";

-- AlterTable
ALTER TABLE "clothing_items" DROP COLUMN "categoryId",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "tags" TEXT[];

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "photoURL" TEXT,
ADD COLUMN     "provider" TEXT;

-- DropTable
DROP TABLE "_ClothingItemTags";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "tags";
