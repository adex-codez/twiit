import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css';
import Root from './routes/root';

import SignUp from './routes/signUp';
import { ErrorBoundary } from './routes/error';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    // loader: rootLoader(queryClient),
    // action: rootAction,
    errorElement: <ErrorBoundary />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorBoundary />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools  initialIsOpen={false}/> */}
    </QueryClientProvider>
  </React.StrictMode>,
);
