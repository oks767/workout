import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';

export const updateExerciseLog = asyncHandler(async (req, res) => {
  const { weight, repeat, isCompleted } = req.body;
  try {
    const exerciseLogTime = await prisma.exerciseTime.update({
      where: {
        id: +req.params.id,
      },
      data: {
        weight,
        repeat,
        isCompleted,
      },
    });
    res.json(exerciseLogTime);
  } catch (error) {
    res.status(404);
    throw new Error('Упражнение не найдено');
  }
});
//@desc update status completed
//@desc patch /api/exercises/log/completed/:id
//@acces Private
export const updateCompletedExerciseLog = asyncHandler(async (req, res) => {
  const { isCompleted } = req.body;

  const exerciseLogCompleted = await prisma.exerciseLog.update({
    where: {
      id: +req.params.id,
    },
    data: {
      isCompleted,
    },
    include: {
      exercise: true,
    },
  });
  res.json(exerciseLogCompleted);
});
