import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';

//@desc update status completed
//@desc patch /api/exercises/log/completed/:id
//@acces Private
export const updateCompletedWorkoutLog = asyncHandler(async (req, res) => {
  const workoutLogCompleted = await prisma.workoutLog.update({
    where: {
      id: +req.params.id,
    },
    data: {
      isCompleted: true,
    },
  });
  res.json(workoutLogCompleted);
});
