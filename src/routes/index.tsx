import Loading from '@/components/Loading';
import { ROUTE_PATH } from '@/constants/routes';
import AppLayout from '@/layout/AppLayout/AppLayout';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import MainLayout from '@/layout/MainLayout/MainLayout';
import HomePage from '@/pages/Home';
import LoginPage from '@/pages/Login';
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTE_PATH.SIGN_IN,
            element: (
              <Suspense fallback={<Loading/>}>
                <LoginPage />
              </Suspense>
            ),
          },
          // {
          //   path: ROUTE_PATH.FORGOT_PASSWORD,
          //   element: (
          //     <Suspense fallback={<Loading/>}>
          //       <ForgotPassword />
          //     </Suspense>
          //   ),
          // },
        ],
      },
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTE_PATH.INDEX,
            element: (
              <Suspense fallback={<Loading/>}>
                <HomePage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  }
]);