export const addPrevValuesWorkout = (log, prevLog = null) => {
  return log.exerciseLog.map((item, index) => ({
    ...item,
    prevWeight: prevLog ? prevLog.times[index].weight : 0,
    prevRepeat: prevLog ? prevLog.times[index].repeat : 0,
  }));
};
