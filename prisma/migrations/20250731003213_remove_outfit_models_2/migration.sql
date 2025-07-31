/*
  Warnings:

  - You are about to drop the `outfit_items` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `outfits` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "outfit_items" DROP CONSTRAINT "outfit_items_clothingItemId_fkey";

-- DropForeignKey
ALTER TABLE "outfit_items" DROP CONSTRAINT "outfit_items_outfitId_fkey";

-- DropForeignKey
ALTER TABLE "outfits" DROP CONSTRAINT "outfits_userId_fkey";

-- DropTable
DROP TABLE "outfit_items";

-- DropTable
DROP TABLE "outfits";
