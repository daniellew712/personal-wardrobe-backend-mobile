/*
  Warnings:

  - You are about to drop the column `notes` on the `clothing_items` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `clothing_items` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clothing_items" DROP COLUMN "notes",
DROP COLUMN "price";
