import { ROUTE_PATH } from '@/constants/routes';
import AppLayout from '@/layout/AppLayout';
import HomePage from '@/pages/Home';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: ROUTE_PATH.INDEX,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  }
]);