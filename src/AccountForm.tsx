import FromWrapper from "./FromWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <>
      <FromWrapper title="Account Creation">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          required
          autoFocus
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
          required
        />
      </FromWrapper>
    </>
  );
};
export default AccountForm;
