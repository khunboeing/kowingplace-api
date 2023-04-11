/*
  Warnings:

  - You are about to drop the column `branchToRoomId` on the `BookRoom` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookRoom" DROP CONSTRAINT "BookRoom_branchToRoomId_fkey";

-- AlterTable
ALTER TABLE "BookRoom" DROP COLUMN "branchToRoomId";
