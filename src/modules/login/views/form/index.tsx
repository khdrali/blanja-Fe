import ButtonComponent from "@/shared/components/button-component";
import InputComponent from "@/shared/components/input-component";
import { useRouter } from "next/router";
import { useState } from "react";

const FormLogin = () => {
  const [role, setRole] = useState<"customer" | "seller">("customer");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full rounded-lg mb-7">
        <button
          className={`w-[150px] py-4 text-[14px] font-medium font-metropolisReguler ${
            role == "customer"
              ? "bg-[#273AC7] border border-[#273AC7] text-white rounded-l-[7px]"
              : "text-[#9B9B9B] border border-[#9B9B9B] rounded-l-[7px]"
          }`}
          onClick={() => setRole("customer")}
        >
          Customer
        </button>
        <button
          className={`w-[150px] py-4 text-[14px] font-medium font-metropolisReguler ${
            role == "seller"
              ? "bg-[#273AC7] border border-[#273AC7] text-white rounded-r-[7px]"
              : "text-[#9B9B9B] border border-[#9B9B9B] rounded-r-[7px]"
          }`}
          onClick={() => setRole("seller")}
        >
          Seller
        </button>
      </div>
      <InputComponent
        onChange={(e) => setName(e)}
        value={name}
        type=""
        errorMessage=""
        placeHolder="Name"
        name="Name"
      />
      <InputComponent
        onChange={(e) => setPassword(e)}
        value={password}
        type="password"
        errorMessage=""
        placeHolder="Password"
        name="Password"
      />
      <p
        className="text-[14px] font-metropolisReguler font-normal text-[#273AC7] text-right cursor-pointer mb-5"
        onClick={() => router.push("/forgot-password")}
      >
        Forgot password?
      </p>
      <ButtonComponent
        name="Login"
        onClick={() => {
          router.push("/home");
        }}
      />
      <p className="mt-5 text-center text-[14px] font-normal font-metropolisReguler">
        Don't have a Blanja account?{" "}
        <span
          className="text-[#273AC7] cursor-pointer"
          onClick={() => router.push("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
};

export default FormLogin;
