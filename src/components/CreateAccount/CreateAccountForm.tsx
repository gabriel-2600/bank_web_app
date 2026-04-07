import { useForm, type SubmitHandler } from "react-hook-form";

interface AccountFormInterface {
  accountName: string;
  balance: number;
}

function CreateAccountForm() {
  const { register, handleSubmit } = useForm<AccountFormInterface>();
  const onSubmit: SubmitHandler<AccountFormInterface> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="account-name">Account Name</label>
        <input
          id="account-name"
          {...register("accountName", { required: true })}
        />
      </div>

      <div>
        <label htmlFor="balance">Balance</label>
        <input
          id="balance"
          type="number"
          {...register("balance", { required: true, min: 0 })}
        />
      </div>

      <button type="submit">Create Account</button>
    </form>
  );
}
export default CreateAccountForm;
