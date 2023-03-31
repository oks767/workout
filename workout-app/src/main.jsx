import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/scss/index.scss';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Routes';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import AuthProvider from './providers/AuthProvider';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
