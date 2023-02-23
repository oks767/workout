import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';
//@desc Create exerciseLog
//@desc POST /api/exercises/log/:exerciseId
//@acces Private
export const createNewExerciseLog = asyncHandler(async (req, res) => {
  const exerciseId = +req.params.exerciseId;
  const exercise = await prisma.exercise.findUnique({
    where: {
      id: +req.params.id,
    },
  });
  let timesDefault = [];
  for (let i = 0; i < exercise.times; i++) {
    timesDefault.push({
      weight: 0,
      repeat: 0,
    });
  }

  const exerciseLog = await prisma.exerciseLog.create({
    data: {
      user: {
        connect: {
          id: req.user.id,
        },
      },

      exercise: {
        connect: {
          id: +req.params.id,
        },
      },
      times: {
        createMany: {
          data: timesDefault,
        },
      },
    },
    include: {
      times: true,
    },
  });

  res.json(exerciseLog);
});
