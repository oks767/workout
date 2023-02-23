import { prisma } from '../prisma.js';
import asyncHandler from 'express-async-handler';
import { calculateMinutes } from './calculate-minutes.js';

//@desc Create workout
//@desc POST /api/workouts
//@acces Private
export const createWorkout = asyncHandler(async (req, res) => {
  const { name, exercisesIds } = req.body;
  const workout = await prisma.workout.create({
    data: {
      name,
      exercise: {
        connect: exercisesIds.map((id) => ({ id: +id })),
      },
    },
  });
  res.json(workout);
});
//@desc get workout
//@desc GET /api/workouts
//@acces Private
export const getWorkouts = asyncHandler(async (req, res) => {
  const workout = await prisma.workout.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      exercise: true,
    },
  });
  res.json(workout);
});

//@desc get workout
//@desc GET /api/workouts/:id
//@acces Private
export const getWorkout = asyncHandler(async (req, res) => {
  const workout = await prisma.workout.findUnique({
    where: { id: +req.params.id },
    include: {
      exercise: true,
    },
  });
  const minutes = calculateMinutes(workout.exercise.length);
  res.json({ ...workout, minutes });
});
//@desc update workout
//@desc PUT /api/workouts/:id
//@acces Private

export const updateWorkout = asyncHandler(async (req, res) => {
  const { name, exercisesIds } = req.body;

  try {
    const workout = await prisma.workout.update({
      where: {
        id: +req.params.id,
      },
      data: {
        name,
        exercise: {
          set: exercisesIds.map((id) => ({ id: +id })),
        },
      },
      include: {
        exercise: true,
      },
    });
    res.json(workout);
  } catch (error) {
    throw new Error('Тренировка не найдена');
  }
});
//@desc del exercise
//@desc DELETE /api/exercises/:id
//@acces Private

export const deleteWorkout = asyncHandler(async (req, res) => {
  try {
    const workout = await prisma.workout.delete({
      where: {
        id: +req.params.id,
      },
    });
    res.json('Тренировка удалена');
  } catch (error) {
    res.status(404);
    throw new Error('Тренировка не найдена');
  }
});
