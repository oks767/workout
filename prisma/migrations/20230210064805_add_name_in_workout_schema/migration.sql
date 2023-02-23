/*
  Warnings:

  - A unique constraint covering the columns `[nane]` on the table `Workout` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nane` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workout" ADD COLUMN     "nane" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Workout_nane_key" ON "Workout"("nane");
