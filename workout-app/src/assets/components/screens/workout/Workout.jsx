import { useMutation, useQuery } from '@tanstack/react-query';
import React, { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import WorkoutLogService from '../../../../services/workout-log.service';
import styles from './Workout.module.scss';

import ListExercise from './ListExercise';
import HeaderWorkout from './HeaderWorkout';
import Button from '../../ui/button/Button';

const Workout = () => {
  const { id } = useParams();

  const { data: workoutLog, isSuccess } = useQuery(
    ['get workout log', id],
    () => WorkoutLogService.getById(id),
    {
      select: ({ data }) => data,
    }
  );
  const navigate = useNavigate();
  const { mutate } = useMutation(
    ['complete workout'],
    () => WorkoutLogService.complete(id),
    {
      onSuccess() {
        navigate('/workouts');
      },
    }
  );
  return (
    <>
      <HeaderWorkout isSuccess={isSuccess} workoutLog={workoutLog} />
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <div style={{ width: '90%', margin: '0 auto' }}>
          {/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
        </div>

        <div className={styles.wrapper}>
          {workoutLog?.exerciseLog?.map((exerciseLog, index) => (
            <Fragment key={exerciseLog.id}>
              <ListExercise exerciseLog={exerciseLog} />
              {index % 2 !== 0 &&
                index !== workoutLog.exerciseLog?.length - 1 && (
                  <div className={styles.line} />
                )}
            </Fragment>
          ))}
        </div>
        <Button clickHandler={() => mutate()}>Complete workout</Button>
      </div>
    </>
  );
};

export default Workout;
