import React from "react";
const Button = ({
  title,
  onClick,
  icon,
  iconPlacement = 1,
  loading,
  backgroundColor,
  width,
  height,
  disabled,
  btnType = "button",
  variant = 1,
  className,
}) => {
  return (
    <>
      {variant === 1 ? (
        <button
          type={btnType}
          disabled={disabled}
          onClick={onClick}
          className={`${width} ${className} ${
            height ? height : "h-full"
          }  bg-primary font-medium hover:bg-secondary hover:text-primary text-secondary text-center text-base py-2 px-5 rounded-md`}
        >
          {title}
        </button>
      ) : (
        <button
          type={btnType}
          disabled={disabled}
          onClick={onClick}
          className={`${width} ${className} ${height ? height : "h-full"} ${
            backgroundColor ? backgroundColor : "bg-primary"
          }  font-medium hover:bg-secondary  hover:text-primary text-secondary text-center text-base py-4 px-5 rounded-full flex ${
            iconPlacement === 2 ? "flex-row-reverse" : "flex-row"
          } items-center justify-center gap-2`}
        >
          {icon && icon}
          {title}
        </button>
      )}
    </>
  );
};

export default Button;
