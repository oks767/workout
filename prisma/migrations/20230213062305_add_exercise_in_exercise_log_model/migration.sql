-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "exerciseLogId" INTEGER;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseLogId_fkey" FOREIGN KEY ("exerciseLogId") REFERENCES "Exercise_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
