import React from "react";

const FormLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="shadow-secondary rounded-2xl py-8 px-6 md:px-10 bg-secondary">
        <div className="grid grid-cols-2 gap-8">{children}</div>
      </div>
    </div>
  );
};

export default FormLayout;
