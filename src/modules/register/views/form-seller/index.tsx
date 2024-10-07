import InputComponent from "@/shared/components/input-component";

const FormInputSeller = () => {
  return (
    <>
      <InputComponent
        name="Name"
        value=""
        onChange={() => {}}
        placeHolder="Name"
        type=""
        errorMessage=""
      />
      <InputComponent
        name="Email"
        value=""
        onChange={() => {}}
        placeHolder="Email"
        type=""
        errorMessage=""
      />
      <InputComponent
        name="Phone Number"
        value=""
        onChange={() => {}}
        placeHolder="Phone number"
        type=""
        errorMessage=""
      />
      <InputComponent
        name="Store Name"
        value=""
        onChange={() => {}}
        placeHolder="Store name"
        type=""
        errorMessage=""
      />
      <InputComponent
        name="Password"
        value=""
        onChange={() => {}}
        placeHolder="Password"
        type="password"
        errorMessage=""
      />
    </>
  );
};

export default FormInputSeller;
