import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Workout.module.scss';
import cn from 'clsx';

const ListExercise = ({ exerciseLog }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/exercise/${exerciseLog?.id}`)}
      className={cn(styles.item, {
        [styles.completed]: exerciseLog?.isCompleted,
      })}
    >
      <span>{exerciseLog?.exercise?.name}</span>
      <img
        src={import.meta.env.VITE_SERVER_URL + exerciseLog?.exercise?.iconPath}
      />
    </div>
  );
};

export default ListExercise;
