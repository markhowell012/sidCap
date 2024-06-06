import React from "react";

const Input = ({
  title,
  required,
  placeholder,
  className,
  twoInputInOneLine,
  textarea,
  type = "text",
  rows,
  options,
  name,
  ...rest
}) => {
  return (
    <div
      className={`col-span-2 ${
        twoInputInOneLine && "lg:col-span-1"
      } flex flex-col items-start justify-center`}
    >
      <div>
        <p className="text-primary font-bold mb-2">
          {title}
          {required && (
            <>
              &nbsp;<span className="text-red">*</span>
            </>
          )}
        </p>
      </div>
      {textarea ? (
        <textarea
          rows={rows}
          className={"border rounded-2xl h-10 py-1 px-4 w-full text-textinput"}
          placeholder={placeholder || title}
          {...rest}
        />
      ) : type === "select" ? (
        <select
          placeholder={placeholder || title}
          name={name}
          className={"border rounded-2xl h-10 py-1 px-4 w-full text-textinput"}
          {...rest}
        >
          {options?.map(({ label, value }) => {
            return <option value={value}>{label}</option>;
          })}
        </select>
      ) : (
        <input
          type={type}
          className={"border rounded-2xl h-10 py-1 px-4 w-full text-textinput"}
          placeholder={placeholder || title}
          {...rest}
        />
      )}
    </div>
  );
};

export default Input;
