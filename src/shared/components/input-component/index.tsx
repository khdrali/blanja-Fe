import { useState } from "react";
import { InputType } from "./props";

const InputComponent = (props: InputType) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <div className="relative w-full my-3">
      <p className=" bg-white text-gray-600 text-sm transition-all mb-1">
        {props?.name}
      </p>
      <input
        id={props?.name}
        onChange={(e) => props?.onChange(e.target.value)}
        value={props?.value}
        disabled={props?.disable}
        type={showPassword ? props?.type : "text"}
        placeholder={props?.placeHolder}
        className={`peer w-[500px] px-5 py-2  ${
          !props?.errorMessage
            ? "border border-[#9B9B9B] rounded-[4px]  focus:ring-1 focus:ring-[#9B9B9B] focus:outline-none"
            : "border border-red-500 rounded-[4px]  focus:ring-1 focus:ring-red-300 focus:outline-none"
        }`}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {props?.type === "password" ? (
        <>
          <label
            className={`${props.name} absolute right-5 top-8 ${
              props?.disable ? "" : "bg-white"
            }  transition-all transform `}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {!showPassword ? (
              <img src="/assets/icons/hide pass.svg" alt="" />
            ) : (
              <img src="/assets/icons/Show.svg" alt="" />
            )}
          </label>
        </>
      ) : null}
      <p className="text-red-500 font-metropolisReguler font-semibold">
        {props?.errorMessage ?? ""}
      </p>
    </div>
  );
};

export default InputComponent;
