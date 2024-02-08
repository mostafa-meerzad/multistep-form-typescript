import FromWrapper from "./FromWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <>
      <FromWrapper title="User Info">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={(e) => updateFields({ firstName: e.target.value })}
          value={firstName}
          required
          autoFocus
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={(e) => updateFields({ lastName: e.target.value })}
          value={lastName}
          required
        />
        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          id="age"
          onChange={(e) => updateFields({ age: e.target.value })}
          value={age}
          required
        />
      </FromWrapper>
    </>
  );
};
export default UserForm;
