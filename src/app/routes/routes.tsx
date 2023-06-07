/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../../lib/layout";

const HomePage = lazy(() =>
  import("../providers/home-provider").then((module) => ({
    default: module.HomePage,
  }))
);

const SignUpPage = lazy(() =>
  import("../providers/auth-provider").then((module) => ({
    default: module.SignUpPage,
  }))
);

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <SignUpPage />,
  },
]);
