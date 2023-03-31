import React from 'react';
import Layout from '../../layout/Layout';
import styles from './Auth.module.scss';
import Button from '../../ui/button/Button';
import Field from '../../ui/field/Field';

import { useAuthPage } from './useAuthPage';
const Auth = () => {
  const { errors, handleSubmit, register, onSubmit, setType } = useAuthPage();
  return (
    <div className={styles.wrapper}>
      <Layout heading='Sign in' bgImage='/images/auth-bg.png' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          error={errors?.email?.message}
          name='email'
          register={register}
          options={{
            required: 'Email обязателен',
          }}
          className={styles.input}
          placeholder='enter email'
        />
        <Field
          name='password'
          register={register}
          error={errors?.password?.message}
          options={{
            required: 'Password обязателен',
          }}
          className={styles.input}
          placeholder='enter password'
        />
        <div className={styles.wrapperButtons}>
          <Button clickHandler={() => setType('login')}>Sign in</Button>
          <Button clickHandler={() => setType('register')}>Sign up</Button>
        </div>
      </form>
    </div>
  );
};

export default Auth;
