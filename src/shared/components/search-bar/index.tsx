import Image from "next/image";
import { searchType } from "./props";

const SearchBar = (props: searchType) => {
  return (
    <div className="border group focus-within:border-[#8E8E93] rounded-[23px] flex items-center w-full h-[40px] px-2">
      <div className="flex items-center justify-center w-full pr-2">
        <input
          className="w-full h-auto pl-2 rounded-lg outline-none text-[#868686]"
          placeholder={props?.placeholder}
        />
        <div className="px-2">
          <img src="/assets/icons/search-icon.png" alt="" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
