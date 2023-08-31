import React from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../layout/Layout';
import Alert from '../../ui/alert/Alert';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';

import styles from './NewWorkout.module.scss';
import SelectExercises from './SelectExercises';
import { useNewWorkout } from './useNewWorkout';

const NewWorkout = () => {
  const { handleSubmit, onSubmit, register, isSuccess, errors, control } =
    useNewWorkout();
  return (
    <div className={styles.wrapper}>
      <Layout
        heading='Create new workout'
        bgImage='../../../../../public/images/new-workout-bg.jpg'
      />
      <>
        {isSuccess && <Alert text='Workout created successfully' />}
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
          <div className={styles.newExercise}>
            <Link to='/new-exercise' className={styles['dark-link']}>
              Add new exercise
            </Link>
          </div>

          <SelectExercises control={control} />
          {/* <Field
            error={errors?.exercises?.message}
            name='times'
            register={register}
            options={{
              required: 'exercises is required',
            }}
            placeholder='Enter name exercises'
          /> */}

          <Button>Create</Button>
        </form>
      </>
    </div>
  );
};

export default NewWorkout;
