-- AlterTable
ALTER TABLE "BookRoom" ADD COLUMN     "roomId" INTEGER;

-- AddForeignKey
ALTER TABLE "BookRoom" ADD CONSTRAINT "BookRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE SET NULL ON UPDATE CASCADE;
