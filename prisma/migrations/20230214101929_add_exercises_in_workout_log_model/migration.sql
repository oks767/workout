-- AlterTable
ALTER TABLE "Exercise" ADD COLUMN     "workoutLogId" INTEGER;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutLogId_fkey" FOREIGN KEY ("workoutLogId") REFERENCES "Workout_log"("id") ON DELETE SET NULL ON UPDATE CASCADE;
