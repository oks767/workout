/*
  Warnings:

  - You are about to drop the column `nane` on the `Workout` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Workout` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Workout_nane_key";

-- AlterTable
ALTER TABLE "Workout" DROP COLUMN "nane",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Workout_name_key" ON "Workout"("name");
