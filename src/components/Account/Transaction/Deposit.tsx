import { useForm, type SubmitHandler } from "react-hook-form";

import type { AccountInterface } from "../../../types/AccountInterface";

type DepositProps = {
  accountId: string;
  setAccounts: React.Dispatch<React.SetStateAction<AccountInterface[]>>;
};

interface DepositFormInterface {
  amount: number;
}

function Deposit({ accountId, setAccounts }: DepositProps) {
  const { register, handleSubmit, reset } = useForm<DepositFormInterface>();

  const onSubmit: SubmitHandler<DepositFormInterface> = ({ amount }) => {
    setAccounts((prevAccounts) =>
      prevAccounts.map((account) =>
        account.accountID === accountId
          ? { ...account, balance: account.balance + amount }
          : account,
      ),
    );
    reset();
  };

  return (
    <div>
      <h1>Deposit</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            {...register("amount", {
              required: true,
              min: 0,
              valueAsNumber: true,
            })}
          />
        </div>

        <button type="submit">Deposit</button>
      </form>
    </div>
  );
}

export default Deposit;
