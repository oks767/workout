import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import WorkoutLogService from '../../../../../services/workout-log.service';
import WorkoutService from '../../../../../services/workout.service';

export const useWorkouts = () => {
  const { data, isSuccess } = useQuery(
    ['get workouts'],
    () => WorkoutService.getAll(),
    {
      select: ({ data }) => data,
    }
  );
  const navigate = useNavigate();
  const {
    mutate,
    isSuccess: isSuccessMutate,
    error,
  } = useMutation(
    ['create workout log'],
    (workoutId) => WorkoutLogService.create(workoutId),
    {
      onSuccess({ data }) {
        navigate(`/workout/${data.id}`);
      },
    }
  );
  return {
    data,
    isSuccessMutate,
    mutate,
    isSuccess,
    error,
  };
};
