import { useMutation } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import WorkoutService from '../../../../services/workout.service';

export const useNewWorkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const { isSuccess, error, isLoading, mutate } = useMutation(
    ['create workout'],
    (body) => WorkoutService.create(body),
    {
      onSuccess: () => {
        reset({
          name: '',
          exercisesIds: [],
        });
      },
    }
  );

  const onSubmit = (data) => {
    mutate({
      name: data.name,
      exercisesIds: data.exercisesIds.map((ex) => ex.value),
    });
  };

  return useMemo(
    () => ({
      register,
      handleSubmit,
      errors,
      control,
      isSuccess,
      error,
      isLoading,
      onSubmit,
    }),
    [errors, isSuccess, error, isLoading]
  );
};
