import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';
import { useEffect } from 'react';
export const useCheckToken = () => {
  const { setIsAuth, isAuth } = useAuth();
  const { pathname } = useLocation();
  useEffect(() => {
    const token = Cookies.get('token');
    if (!token) {
      setIsAuth(false);
    }
  }, [pathname, isAuth]);
};
