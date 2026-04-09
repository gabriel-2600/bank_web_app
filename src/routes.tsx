import App from "./App";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import AccountPage from "./pages/AccountPage/AccountPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "create-account",
        element: <CreateAccountPage />,
      },
      {
        path: "account/:accountId",
        element: <AccountPage />,
      },
    ],
  },
];

export default routes;
