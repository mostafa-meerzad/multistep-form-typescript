import FromWrapper from "./FromWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

type AddressFormProps = AddressData & {
  updateFields: (field: Partial<AddressData>) => void;
};

const AddressForm = ({
  street,
  city,
  state,
  zip,
  updateFields: updateFields,
}: AddressFormProps) => {
  return (
    <>
      <FromWrapper title="User Address">
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          id="street"
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
          required
          autoFocus
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
          required
        />
        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
          required
        />
        <label htmlFor="zip">ZIP</label>
        <input
          type="text"
          name="zip"
          id="zip"
          value={zip}
          onChange={(e) => updateFields({ zip: e.target.value })}
          required
        />
      </FromWrapper>
    </>
  );
};
export default AddressForm;
