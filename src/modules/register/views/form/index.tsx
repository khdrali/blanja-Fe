import ButtonComponent from "@/shared/components/button-component";
import { useRouter } from "next/router";
import { useState } from "react";
import FormInputCustomer from "../form-customer";
import FormInputSeller from "../form-seller";

const FormRegister = (props: RegisterFormProps) => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full rounded-lg mb-7">
        <button
          className={`w-[150px] py-4 text-[14px] font-medium font-metropolisReguler ${
            props?.role == "customer"
              ? "bg-[#273AC7] border border-[#273AC7] text-white rounded-l-[7px]"
              : "text-[#9B9B9B] border border-[#9B9B9B] rounded-l-[7px]"
          }`}
          onClick={() => props?.setRole("customer")}
        >
          Customer
        </button>
        <button
          className={`w-[150px] py-4 text-[14px] font-medium font-metropolisReguler ${
            props.role == "seller"
              ? "bg-[#273AC7] border border-[#273AC7] text-white rounded-r-[7px]"
              : "text-[#9B9B9B] border border-[#9B9B9B] rounded-r-[7px]"
          }`}
          onClick={() => props.setRole("seller")}
        >
          Seller
        </button>
      </div>
      {props.role == "seller" ? <FormInputSeller /> : <FormInputCustomer />}
      <p
        className="text-[14px] font-metropolisReguler font-normal text-[#273AC7] text-right cursor-pointer mb-5"
        onClick={() => router.push("/forgot-password")}
      >
        Forgot password?
      </p>
      <ButtonComponent
        name="Register"
        onClick={() => {
          router.push("");
        }}
      />
      <p className="mt-5 text-center text-[14px] font-normal font-metropolisReguler">
        Already have a Tokopedia account?{" "}
        <span
          className="text-[#273AC7] cursor-pointer"
          onClick={() => router.push("/login")}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default FormRegister;
