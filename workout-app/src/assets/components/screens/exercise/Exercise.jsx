import { useMutation } from '@tanstack/react-query';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import ExerciseService from '../../../../services/exercise.service';
import Layout from '../../layout/Layout';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';
import styles from './Exercise.module.scss';
import cn from 'clsx';
import { getIconPath } from './icon-path.utils';
import Alert from '../../ui/alert/Alert';
const Exercise = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
  });
  const { isSuccess, error, mutate } = useMutation(
    ['create exercise'],
    (body) => ExerciseService.create(body),
    {
      onSuccess: () => {
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    console.log(data);
    mutate(data);
  };
  const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back'];
  return (
    <div className={styles.wrapper}>
      <Layout
        heading='Create new exercise'
        bgImage='../../../../../public/images/new-exercise-bg.jpg'
      />
      <>
        {isSuccess && <Alert text='Exercise created' />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.name?.message}
            name='name'
            register={register}
            options={{
              required: 'Name is required',
            }}
            type='text'
            placeholder='Enter name'
          />

          <Field
            error={errors?.times?.message}
            name='times'
            register={register}
            options={{
              valueAsNumber: true,
              validate: (value) => value > 0 || 'Times must be number',
              required: 'Times is required',
            }}
            placeholder='Enter times'
          />

          <Controller
            name='iconPath'
            control={control}
            render={({ field: { value, onChange } }) => (
              <div className={styles.images}>
                {data.map((name) => (
                  <img
                    key={`ex img ${name}`}
                    src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(
                      name
                    )}`}
                    alt={name}
                    className={cn({
                      [styles.active]: value === getIconPath(name),
                    })}
                    onClick={() => onChange(getIconPath(name))}
                    draggable={false}
                    height='45'
                  />
                ))}
              </div>
            )}
          />

          <Button>Create</Button>
        </form>
      </>
    </div>
  );
};

export default Exercise;
