import Image from "next/image";
import FormRegister from "./form";
import { useState } from "react";

const RegisterPage = () => {
  const [role, setRole] = useState<"customer" | "seller">("customer");
  return (
    <div
      className={`flex justify-center items-center w-full ${
        role == "customer" ? "h-screen" : "pt-7 pb-2"
      } `}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <Image
          src={"/assets/logo/icon navbar.png"}
          alt="Logo"
          width={150}
          height={150}
          quality={100}
        />
        <p className="font-bold text-[18px] text-[#222222] font-metropolisBold">
          Please sign up with your account
        </p>
        <FormRegister role={role} setRole={setRole} />
      </div>
    </div>
  );
};

export default RegisterPage;
