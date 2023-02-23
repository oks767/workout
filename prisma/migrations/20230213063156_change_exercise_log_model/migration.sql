/*
  Warnings:

  - You are about to drop the column `exerciseId` on the `Exercise_log` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise_log" DROP CONSTRAINT "Exercise_log_exerciseId_fkey";

-- AlterTable
ALTER TABLE "Exercise_log" DROP COLUMN "exerciseId";

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_exerciseLogId_fkey" FOREIGN KEY ("exerciseLogId") REFERENCES "Exercise_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
