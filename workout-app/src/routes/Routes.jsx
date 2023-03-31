import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { routes } from './routes.data';

const Router = () => {
  const { isAuth, setIfAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.auth && !isAuth) {
            return false;
          }
          return (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
