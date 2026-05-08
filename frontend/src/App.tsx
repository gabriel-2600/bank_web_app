import { useState } from "react";
import { Outlet } from "react-router";

import type { AccountInterface } from "./types/AccountInterface";
import NavBar from "./components/NavBar";

function App() {
  const [accounts, setAccounts] = useState<AccountInterface[]>([]);

  return (
    <>
      <NavBar />
      <Outlet context={{ accounts, setAccounts }} />
    </>
  );
}

export default App;
