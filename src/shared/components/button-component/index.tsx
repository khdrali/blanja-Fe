import { buttonType } from "./props";

const ButtonComponent = (props: buttonType) => {
  return (
    <button
      onClick={() => props?.onClick()}
      className={`w-full rounded-[25px] ${
        props?.className
          ? props?.className
          : "bg-[#273AC7] text-white py-2 px-7"
      }  h-[40px] text-[14px] font-medium font-metropolisReguler`}
    >
      {props?.name}
    </button>
  );
};

export default ButtonComponent;
