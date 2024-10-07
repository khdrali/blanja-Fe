import Image from "next/image";
import SearchBar from "../search-bar";
import { useRouter } from "next/router";
import ButtonComponent from "../button-component";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-lg py-3 w-full flex justify-between items-center px-[150px] gap-10">
      <div className=" flex justify-center items-center w-full gap-3 pr-10">
        <Image
          src={"/assets/logo/icon navbar.png"}
          alt="logo"
          width={100}
          height={100}
          quality={100}
        />
        <SearchBar placeholder={"Search"} />
        <div className="border border-[#8E8E93] flex justify-center items-center px-2 py-2 rounded-xl">
          <Image
            src={"/assets/icons/filter.png"}
            alt="Logo Filter"
            width={30}
            height={30}
            quality={100}
          />
        </div>
      </div>
      <div className="flex justify-end items-center gap-10">
        <Image
          src={"/assets/icons/bag.png"}
          alt="Shopping Bag"
          width={30}
          height={30}
          quality={100}
        />
        <div className="flex justify-center items-center gap-5">
          <ButtonComponent name="Login" onClick={() => router.push("/login")} />
          {/* <button className="border-[1px] border-[#9B9B9B] text-[#9B9B9B] text-[14px] font-medium py-2 px-7 rounded-[25px]">
            Signup
          </button> */}
          <ButtonComponent
            name="Signup"
            onClick={() => router.push("")}
            className="border-[1px] border-[#9B9B9B] text-[#9B9B9B] py-2 px-7"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
