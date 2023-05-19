import { Suspense, lazy } from 'react';
import type { RouteObject } from 'react-router';
import LoadingScreen from './components/RoutesInfrastructure/components/LoadingScreen';
import MainLayout from './layout/MainLayout';
import AuthGuard from './components/RoutesInfrastructure/components/AuthGuard';
import GuestGuard from './components/RoutesInfrastructure/components/GuestGuard';

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
const Todo = Loadable(lazy(() => import('./pages/Todo')));
const ExpoPlatformInterview = Loadable(lazy(() => import('./pages/ExpoPlatformInterview')));

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
      },
      {
        path: 'todo',
        element: (
          <GuestGuard>
            <Todo />
          </GuestGuard>
        ),
      },
      {
        path: 'expoPlatformInterview',
        element: (
          <GuestGuard>
            <ExpoPlatformInterview />
          </GuestGuard>
        ),
      }
    ],
  },
];

export default routes;
