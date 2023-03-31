import React from 'react';

import styles from '../Workout.module.scss';

const WorkoutItem = ({ workout, mutate }) => {
  return (
    <div onClick={() => mutate(workout.id)} className={styles.item}>
      <span>{workout.name}</span>
      {/* <img
          src={import.meta.env.VITE_SERVER_URL + exerciseLog.exercise.iconPath}
        /> */}
    </div>
  );
};

export default WorkoutItem;
