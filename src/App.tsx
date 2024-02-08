import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultiStepForm } from "./useMultiStepForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};
const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const App = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };
  const { currentStepIndex, step, steps, next, back, isFirstStep, isLastStep } =
    useMultiStepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!isLastStep) return next()

    alert("Successful Account Creation")
  };
  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="index">
          {currentStepIndex + 1}/{steps.length}
        </div>

        {step}

        <div className="btn-wrapper">
          {!isFirstStep && (
            <button type="button" onClick={back}>
              back
            </button>
          )}

          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};
export default App;
