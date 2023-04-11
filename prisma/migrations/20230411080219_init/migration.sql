/*
  Warnings:

  - You are about to drop the column `coWorkId` on the `BookRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_coWorkId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" DROP COLUMN "coWorkId";
