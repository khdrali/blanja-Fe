import InputComponent from "@/shared/components/input-component";

const FormInputCustomer = () => {
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

export default FormInputCustomer;
