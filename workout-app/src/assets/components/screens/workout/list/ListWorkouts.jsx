import React from 'react';
import Layout from '../../../layout/Layout';
import Alert from '../../../ui/alert/Alert';
import styles from '../Workout.module.scss';
import { useWorkouts } from './useWorkouts';
import WorkoutItem from './WorkoutItem';

const ListWorkouts = () => {
  const { isSuccessMutate, data, mutate, isSuccess, error } = useWorkouts();
  return (
    <div>
      <Layout
        bgImage='../../../../../../public/images/workout-bg.jpg'
        heading='Workout list'
      />
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {error && <Alert type='error' text={error} />}
        {isSuccessMutate && <Alert text='Workout log created' />}
        {isSuccess && (
          <div className={styles.wrapper}>
            {data.map((workout) => (
              <WorkoutItem key={workout.id} workout={workout} mutate={mutate} />
            ))}
          </div>
        )}

        {isSuccess && data?.length === 0 && (
          <Alert type='warning' text='Workouts not found' />
        )}
      </div>
    </div>
  );
};

export default ListWorkouts;
