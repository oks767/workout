import { useMutation } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth';
import AuthService from '../../../../services/auth.service';

export const useAuthPage = () => {
  const [type, setType] = useState('login');
  const { isAuth, setIsAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onChange',
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth]);
  const { mutate } = useMutation(
    ['auth'],
    ({ email, password }) => AuthService.main(email, password, type),
    {
      onSuccess: () => {
        setIsAuth(true);
        reset();
      },
    }
  );

  const onSubmit = (data) => {
    mutate(data);
  };
  return useMemo(
    () => ({
      setType,
      register,
      handleSubmit,
      errors,
      onSubmit,
    }),
    [errors]
  );
};
