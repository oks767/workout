import express from 'express';
import {
  createExercise,
  getExercise,
  updateExercise,
  deleteExercise,
} from './exercise.controller.js';
import { protect } from '../middleware/auth.middleware.js';
import { createNewExerciseLog } from './log/exercise-log.controller.js';
import { getExerciseLog } from './log/get-exercise-log.controller.js';
import {
  updateCompletedExerciseLog,
  updateExerciseLog,
} from './log/update-exercise-log.controller.js';
const router = express.Router();
router.route('/').post(protect, createExercise);
router.route('/').get(protect, getExercise);
router.route('/:id').put(protect, updateExercise);
router.route('/:id').delete(protect, deleteExercise);

router.route('/log/:id').post(protect, createNewExerciseLog);
router.route('/log/completed/:id').patch(protect, updateCompletedExerciseLog);
router.route('/log/:id').get(protect, getExerciseLog);
router.route('/log/time/:id').put(protect, updateExerciseLog);
export default router;
