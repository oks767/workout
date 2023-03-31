import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';

//@desc Get workoutLog
//@desc GET /api/workouts/log/:id
//@acces Private
export const getWorkoutLog = asyncHandler(async (req, res) => {
  const workoutLog = await prisma.workoutLog.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      workout: {
        include: {
          exercise: true,
        },
      },
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
    throw new Error('Тренировка не найдено');
  }

  res.json({ ...workoutLog });
});
