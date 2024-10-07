import Image from "next/image";
import React from "react";

const SplashScreen = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#273AC7]">
      <div className="flex items-center justify-center mx-auto">
        <Image
          src={"/logo/logo-shopping.png"}
          alt={"logo"}
          width={250}
          height={250}
          quality={100}
          className="animate-pulse"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
