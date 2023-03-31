import Cookies from 'js-cookie';
import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(!!Cookies.get('token'));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
