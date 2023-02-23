import asyncHandler from 'express-async-handler';
import { prisma } from '../../prisma.js';
//@desc Create workoutLog
//@desc POST /api/workouts/log/:workoutId
//@acces Private
export const createNewWorkoutLog = asyncHandler(async (req, res) => {
  const workout = await prisma.workout.findUnique({
    where: {
      id: +req.params.id,
    },
    include: {
      exercise: true,
    },
  });

  const workoutLog = await prisma.workoutLog.create({
    data: {
      user: {
        connect: {
          id: req.user.id,
        },
      },

      workout: {
        connect: {
          id: +req.params.id,
        },
      },
      exerciseLog: {
        create: workout.exercise.map((exercise) => ({
          user: {
            connect: {
              id: req.user.id,
            },
          },
          exercise: {
            connect: {
              id: exercise.id,
            },
          },
          times: {
            create: Array.from({ length: exercise.times }, () => ({
              weight: 0,
              repeat: 0,
            })),
          },
        })),
      },
    },
    include: {
      exerciseLog: {
        include: {
          times: true,
        },
      },
    },
  });

  res.json(workoutLog);
});
