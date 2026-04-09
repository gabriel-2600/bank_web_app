import { useOutletContext, useParams } from "react-router";
import type { AccountInterface } from "../../types/AccountInterface";

type AppOutletContext = {
  accounts: AccountInterface[];
  setAccount: React.Dispatch<React.SetStateAction<AccountInterface[]>>;
};

function AccountPage() {
  const { accounts } = useOutletContext<AppOutletContext>();
  const { accountId } = useParams<{ accountId: string }>();
  const account = accounts.find((a) => a.accountID === accountId);

  if (!accountId || !account) {
    throw new Response("Account not found", { status: 404 });
  }

  return (
    <section>
      <p>Account Details</p>
      <p>Account ID: {account.accountID}</p>
      <p>Account Name: {account.accountName}</p>
      <p>Account Balance: {account.balance}</p>
    </section>
  );
}

export default AccountPage;
