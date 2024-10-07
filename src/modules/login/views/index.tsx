import Image from "next/image";
import FormLogin from "./form";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-10">
        <Image
          src={"/assets/logo/icon navbar.png"}
          alt="Logo"
          width={150}
          height={150}
          quality={100}
        />
        <p className="font-bold text-[18px] text-[#222222] font-metropolisBold">
          Please login with your account
        </p>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginPage;
