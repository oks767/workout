import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';
import { addPrevValues } from './add-prev-values.js';
//@desc Get exerciseLog
//@desc GET /api/exercises/log/:id
//@acces Private
export const getExerciseLog = asyncHandler(async (req, res) => {
  const exerciseLog = await prisma.exerciseLog.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      exercise: true,
      times: {
        orderBy: {
          id: 'asc',
        },
      },
    },
  });

  if (!exerciseLog) {
    res.status(404);
    throw new Error('Упражнение не найдено');
  }

  const prevExerciseLog = await prisma.exerciseLog.findFirst({
    where: {
      exerciseId: exerciseLog.exerciseId,
      userId: req.user.id,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      times: true,
    },
  });

  let newTimes = addPrevValues(exerciseLog, prevExerciseLog);
  res.json({ ...exerciseLog, times: newTimes });
});
