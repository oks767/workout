import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import { useListExercises } from './useListExercises';

const SelectExercises = ({ control }) => {
  const { data } = useListExercises();

  return (
    <Controller
      name='exercisesIds'
      control={control}
      render={({ field: { value, onChange } }) => {
        return (
          <ReactSelect
            classNamePrefix='select2-selection'
            placeholder='Exercises...'
            title='Exercises'
            options={data?.map((exercise) => ({
              value: exercise.id,
              label: exercise.name,
            }))}
            value={value}
            onChange={onChange}
            isMulti
          />
        );
      }}
    />
  );
};

export default SelectExercises;
