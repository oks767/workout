// import HeaderExerciseLog from './HeaderExerciseLog';
import { useExerciseLog } from './hooks/useExerciseLog';
import TableHeader from './table/TableHeader';
import styles from './ExerciseLog.module.scss';
import TableRow from './table/TableRow';
import Alert from '../../ui/alert/Alert';
import cn from 'clsx';
import stylesLayout from '../../layout/Layout.module.scss';
import Header from '../../layout/Header/Header';
import { useUpdateLogTime } from './hooks/useUpdateLogTime';
import { useCompleteLog } from './hooks/useCompleteLog';
const ExerciseLog = () => {
  const {
    exerciseLog,
    isSuccess,
    times,
    setTimes,
    onChangeTime,
    getTimeValue,
    getState,
    toggleTime,
  } = useExerciseLog();

  const { completeLog } = useCompleteLog();
  return (
    <>
      {/* <HeaderExerciseLog exerciseLog={exerciseLog} isSuccess={isSuccess} /> */}
      <div
        className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
        style={{
          backgroundImage: `url('/images/ex-bg-1.jpg')`,
          height: 300,
        }}
      >
        <Header
          backLink={
            isSuccess ? `/workout/${exerciseLog?.workoutLogId}` : '/workouts'
          }
        />

        {isSuccess && (
          <div className={styles.heading}>
            <img
              src={
                import.meta.env.VITE_SERVER_URL + exerciseLog.exercise?.iconPath
              }
              height='34'
              alt=''
              draggable={false}
            />
            <h1 className={stylesLayout.heading}>
              {exerciseLog.exercise?.name}
            </h1>
          </div>
        )}
      </div>
      <div
        className='wrapper-inner-page'
        style={{ paddingLeft: 0, paddingRight: 0 }}
      >
        {/* <ExerciseError errors={[errorChange,
errorCompleted]} /> */}

        <div className={styles.wrapper}>
          <TableHeader />
          {exerciseLog?.times.map((item, index) => (
            <TableRow
              onChangeTime={onChangeTime}
              toggleTime={toggleTime}
              item={item}
              key={item.id}
              getState={getState}
            />
          ))}
        </div>

        {isSuccess && exerciseLog?.times?.length === 0 && (
          <Alert type='warning' text='Times not found' />
        )}
      </div>
    </>
  );
};

export default ExerciseLog;
