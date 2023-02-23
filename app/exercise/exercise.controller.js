import { prisma } from '../prisma.js';
import asyncHandler from 'express-async-handler';

//@desc Create exercise
//@desc POST /api/exercises
//@acces Private
export const createExercise = asyncHandler(async (req, res) => {
  const { name, times, iconPath } = req.body;
  const exercise = await prisma.exercise.create({
    data: {
      name,
      times,
      iconPath,
    },
  });
  res.json(exercise);
});
export const getExercise = asyncHandler(async (req, res) => {
  const exercise = await prisma.exercise.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  res.json(exercise);
});
//@desc update exercise
//@desc PUT /api/exercises/:id
//@acces Private

export const updateExercise = asyncHandler(async (req, res) => {
  const { name, times, iconPath } = req.body;

  try {
    const exercise = await prisma.exercise.update({
      where: {
        id: +req.params.id,
      },
      data: {
        name,
        times,
        iconPath,
      },
    });
    res.json(exercise);
  } catch (error) {
    res.status(404);
    throw new Error('Упражнение не найдено');
  }
});
//@desc del exercise
//@desc DELETE /api/exercises/:id
//@acces Private

export const deleteExercise = asyncHandler(async (req, res) => {
  try {
    const exercise = await prisma.exercise.delete({
      where: {
        id: +req.params.id,
      },
    });
    res.json('Упражнение удалено');
  } catch (error) {
    res.status(404);
    throw new Error('Упражнение не найдено');
  }
});
