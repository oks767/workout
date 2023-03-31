import { prisma } from '../prisma.js';
import { userFields } from '../utils/user.utils.js';
import asyncHandler from 'express-async-handler';
//@desc Get user profile
//@desc GET /api/users/profile
//@acces Private
export const getUserProfile = asyncHandler(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    select: userFields,
  });

  const minutes = await prisma.exerciseLog.count({
    where: {
      userId: req.user.id,
      isCompleted: true,
    },
  });
  const kgs = await prisma.exerciseTime.aggregate({
    where: {
      ExerciseLog: {
        userId: req.user.id,
      },
      isCompleted: true,
    },
    _sum: {
      weight: true,
    },
  });
  const workouts = await prisma.workoutLog.count({
    where: {
      userId: user.id,
      isCompleted: true,
    },
  });
  res.json({
    ...user,
    statistics: [
      {
        label: 'Minutes',
        value: Math.ceil(minutes * 2.3) || 0,
      },
      {
        label: 'Workouts',
        value: workouts || 0,
      },
      {
        label: 'Kgs',
        value: kgs._sum.weight || 0,
      },
    ],
  });
});
