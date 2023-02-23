import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';

//@desc Get exerciseLog
//@desc GET /api/exercises/log/:id
//@acces Private
export const getWorkoutLog = asyncHandler(async (req, res) => {
  const workoutLog = await prisma.workoutLog.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      workout: true,
      exerciseLog: {
        orderBy: {
          id: 'asc',
        },
        include: {
          exercise: true,
        },
      },
    },
  });

  if (!workoutLog) {
    res.status(404);
    throw new Error('Упражнение не найдено');
  }

  res.json({ ...workoutLog });
});
