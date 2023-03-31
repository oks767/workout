import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ExerciseLogService from '../../../../../services/exercise-log.service';
import { useUpdateLogTime } from './useUpdateLogTime';
export const useExerciseLog = () => {
  const [times, setTimes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: exerciseLog, isSuccess } = useQuery(
    ['get exercise log', id],
    () => ExerciseLogService.getById(id),
    {
      select: ({ data }) => data,
      onSuccess(data) {
        if (data?.times?.length) {
          setTimes(data.times);
        }
      },
    }
  );
  const { updateTime } = useUpdateLogTime(exerciseLog?.times);
  const onChangeTime = (timeId, key, value) => {
    const newTimes = times.map((time) => {
      if (time.id === timeId) {
        return { ...time, [key]: value };
      }

      return time;
    });

    setTimes(newTimes);
  };
  const getTimeValue = (timeId) => {
    return times.find((time) => time.id === timeId);
  };
  const toggleTime = (timeId, isCompleted) => {
    const time = getTimeValue(timeId);
    updateTime({
      timeId,
      body: {
        isCompleted,
        repeat: +time.repeat,
        weight: +time.weight,
      },
    });
  };
  const getState = (timeId, key) => {
    const time = getTimeValue(timeId);
    return time ? time[key] : key === 'isCompleted' ? false : 0;
  };
  return {
    exerciseLog,
    isSuccess,
    times,
    setTimes,
    onChangeTime,
    getTimeValue,
    toggleTime,
    getState,
  };
};
