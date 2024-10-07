import { BarUrlPage } from "@/shared/config/useBar";
import Navbar from "../navbar";
import { GlobalLayoutProps } from "./props";
import { useRouter } from "next/router";

const filterNavbar = (path: string) => {
  const checkPath = BarUrlPage.find((v) => v === path);

  if (checkPath) {
    return true;
  }

  return false;
};

const MainLayout = ({ children }: GlobalLayoutProps) => {
  const router = useRouter();
  return (
    <div className="w-full">
      {filterNavbar(router.pathname) && <Navbar />}
      <div
        className={`${
          filterNavbar(router.pathname)
            ? "px-[150px] mt-[50px] w-full"
            : "w-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
