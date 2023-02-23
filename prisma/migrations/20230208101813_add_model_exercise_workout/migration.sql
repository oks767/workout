-- CreateTable
CREATE TABLE "Exersice" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "icon_path" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "times" INTEGER NOT NULL,

    CONSTRAINT "Exersice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ExersiceToWorkout" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Exersice_name_key" ON "Exersice"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ExersiceToWorkout_AB_unique" ON "_ExersiceToWorkout"("A", "B");

-- CreateIndex
CREATE INDEX "_ExersiceToWorkout_B_index" ON "_ExersiceToWorkout"("B");

-- AddForeignKey
ALTER TABLE "_ExersiceToWorkout" ADD CONSTRAINT "_ExersiceToWorkout_A_fkey" FOREIGN KEY ("A") REFERENCES "Exersice"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExersiceToWorkout" ADD CONSTRAINT "_ExersiceToWorkout_B_fkey" FOREIGN KEY ("B") REFERENCES "Workout"("id") ON DELETE CASCADE ON UPDATE CASCADE;
