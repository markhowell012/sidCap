import React from "react";

const Input = ({ placeholder, disabled, height, onChange, ...rest }) => {
  return (
    <input
      disabled={disabled}
      type="text"
      placeholder={placeholder}
      className={`w-full px-4 py-2 ${
        height ? height : "h-full"
      } bg-white rounded-md focus:outline-none text-sm text-secondary placeholder:text-slate-400 font-semibold placeholder:font-semibold`}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
