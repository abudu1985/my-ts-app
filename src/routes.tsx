import { Suspense, lazy } from "react";
import type { RouteObject } from "react-router";
import LoadingScreen from "./components/RoutesInfrastructure/components/LoadingScreen";
import MainLayout from "./layout/MainLayout";
import AuthGuard from "./components/RoutesInfrastructure/components/AuthGuard";
import GuestGuard from "./components/RoutesInfrastructure/components/GuestGuard";

const Loadable = (Component: any) => (props: JSX.IntrinsicAttributes) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// *  AUTHENTICATION PAGES
const Login = Loadable(lazy(() => import("./pages/authentication/Login")));
const Register = Loadable(
  lazy(() => import("./pages/authentication/Register"))
);

//  * HOME PAGE
const Home = Loadable(lazy(() => import("./pages/home/Home")));

//  * OTHER PAGES
const RickAndMorty = Loadable(lazy(() => import("./pages/RickAndMorty")));
const Todo = Loadable(lazy(() => import("./pages/Todo")));
const ExpoPlatformInterview = Loadable(
  lazy(() => import("./pages/ExpoPlatformInterview"))
);
const TypingChildren = Loadable(lazy(() => import("./pages/TypingChildren")));
const AvangersQuiz = Loadable(lazy(() => import("./pages/AvangersQuiz")));
const CharacterCard = Loadable(lazy(() => import("./pages/CharacterCard")));
const Counter = Loadable(lazy(() => import("./pages/Counter")));
const CounterWithHooks = Loadable(
  lazy(() => import("./pages/CounterWithHooks"))
);
const DogFacts = Loadable(lazy(() => import("./pages/DogFacts")));
const PizzaCalculator = Loadable(lazy(() => import("./pages/PizzaCalculator")));
const ColorSwatch = Loadable(lazy(() => import("./pages/ColorSwatch")));
const CurrentUser = Loadable(lazy(() => import("./pages/CurrentUser")));
const NameTagHoc = Loadable(lazy(() => import("./pages/NameTagHoc")));
const Burritos = Loadable(lazy(() => import("./pages/Burritos")));
const FormWithValidation = Loadable(
  lazy(() => import("./pages/FormWithValidation"))
);
const SimpleModal = Loadable(lazy(() => import("./pages/SimpleModal")));

const routes: RouteObject[] = [
  {
    path: "authentication",
    children: [
      {
        path: "login",
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        ),
      },
      {
        path: "register",
        element: (
          <GuestGuard>
            <Register />{" "}
          </GuestGuard>
        ),
      },
    ],
  },
  {
    path: "*",
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
        path: "rickAndMorty",
        element: (
          <GuestGuard>
            <RickAndMorty />
          </GuestGuard>
        ),
      },
      {
        path: "todo",
        element: (
          <GuestGuard>
            <Todo />
          </GuestGuard>
        ),
      },
      {
        path: "expoPlatformInterview",
        element: (
          <GuestGuard>
            <ExpoPlatformInterview />
          </GuestGuard>
        ),
      },
      {
        path: "typingChildren",
        element: (
          <GuestGuard>
            <TypingChildren />
          </GuestGuard>
        ),
      },
      {
        path: "avangersQuiz",
        element: (
          <GuestGuard>
            <AvangersQuiz />
          </GuestGuard>
        ),
      },
      {
        path: "characterCard",
        element: (
          <GuestGuard>
            <CharacterCard />
          </GuestGuard>
        ),
      },
      {
        path: "counter",
        element: (
          <GuestGuard>
            <Counter />
          </GuestGuard>
        ),
      },
      {
        path: "counterWithHooks",
        element: (
          <GuestGuard>
            <CounterWithHooks />
          </GuestGuard>
        ),
      },
      {
        path: "dogFacts",
        element: (
          <GuestGuard>
            <DogFacts />
          </GuestGuard>
        ),
      },
      {
        path: "pizzaCalculator",
        element: (
          <GuestGuard>
            <PizzaCalculator />
          </GuestGuard>
        ),
      },
      {
        path: "colorSwatch",
        element: (
          <GuestGuard>
            <ColorSwatch />
          </GuestGuard>
        ),
      },
      {
        path: "currentUser",
        element: (
          <GuestGuard>
            <CurrentUser />
          </GuestGuard>
        ),
      },
      {
        path: "nameTagHoc",
        element: (
          <GuestGuard>
            <NameTagHoc />
          </GuestGuard>
        ),
      },
      {
        path: "burritos",
        element: (
          <GuestGuard>
            <Burritos />
          </GuestGuard>
        ),
      },
      {
        path: "formWithValidation",
        element: (
          <GuestGuard>
            <FormWithValidation />
          </GuestGuard>
        ),
      },
      {
        path: "simpleModal",
        element: (
          <GuestGuard>
            <SimpleModal />
          </GuestGuard>
        ),
      },
    ],
  },
];

export default routes;
