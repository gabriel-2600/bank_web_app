import { useOutletContext, Link } from "react-router";
import type { AccountInterface } from "../../types/AccountInterface";

type AccountContextType = {
  accounts: AccountInterface[];
};

function DisplayAccounts() {
  const { accounts } = useOutletContext<AccountContextType>();

  return (
    <section>
      <ul>
        {accounts.map((account) => (
          <li key={account.accountID}>
            <Link to={`account/${account.accountID}`}>
              {account.accountName}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default DisplayAccounts;
