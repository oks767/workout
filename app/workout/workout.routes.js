import express from 'express';
import {
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
  getWorkouts,
} from './workout.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { createNewWorkoutLog } from './log/workout-log.controller.js';
import { getWorkoutLog } from './log/get-workout-log.controller.js';
import { updateCompletedWorkoutLog } from './log/update-workout-log.controller.js';
const router = express.Router();
router.route('/').post(protect, createWorkout);
router.route('/').get(protect, getWorkouts);
router.route('/:id').get(protect, getWorkout);
router.route('/:id').put(protect, updateWorkout);
router.route('/:id').delete(protect, deleteWorkout);
router.route('/log/:id').post(protect, createNewWorkoutLog);
router.route('/log/:id').get(protect, getWorkoutLog);
router.route('/log/completed/:id').patch(protect, updateCompletedWorkoutLog);
export default router;
