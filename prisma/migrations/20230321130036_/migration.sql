/*
  Warnings:

  - You are about to drop the column `exerciseLogId` on the `Exercise` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_exerciseLogId_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "exerciseLogId";

-- AlterTable
ALTER TABLE "Exercise_log" ADD COLUMN     "exercise_id" INTEGER;

-- AddForeignKey
ALTER TABLE "Exercise_log" ADD CONSTRAINT "Exercise_log_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
