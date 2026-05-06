import App from "./App";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import CreateBankAccountForm from "./pages/CreateBankAccountPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "create-bank-account",
        element: <CreateBankAccountForm />,
      },
      {
        path: "account/:accountId",
        element: <AccountPage />,
      },
    ],
  },
  { path: "register", element: <RegisterPage /> },
  { path: "login", element: <LoginPage /> },
];

export default routes;
