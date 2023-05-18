import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from './components/Routes/components/LoadingScreen';
import MainLayout from './layout/MainLayout';
import AuthGuard from './components/Routes/components/AuthGuard';
import GuestGuard from './components/Routes/components/GuestGuard';

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
const Register = Loadable(
  lazy(() => import('./pages/authentication/Register'))
);

//  * HOME PAGE
const Home = Loadable(lazy(() => import('./pages/home/Home')));

//  * OTHER PAGES
const RickAndMorty = Loadable(lazy(() => import('./pages/RickAndMorty')));

const routes: RouteObject[] = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />{' '}
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          // <AuthGuard>
          //   <Home />
          // </AuthGuard>
          <GuestGuard>
             <Home />
          </GuestGuard>
        ),
      },
      {
        path: 'rickAndMorty',
        element: (
          <GuestGuard>
            <RickAndMorty />
          </GuestGuard>
        ),
      }
    ],
  },
];

export default routes;
