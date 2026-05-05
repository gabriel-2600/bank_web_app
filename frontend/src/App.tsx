import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

import type { AccountInterface } from "./types/AccountInterface";

function App() {
  const [accounts, setAccounts] = useState<AccountInterface[]>([]);

  return (
    <>
      <Outlet context={{ accounts, setAccounts }} />
      <Toaster />
    </>
  );
}

export default App;
