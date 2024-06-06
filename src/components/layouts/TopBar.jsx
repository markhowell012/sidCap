import React from "react";

const TopBar = () => {
  return (
    <div className="hidden md:flex items-center justify-between gap-8 text-xs h-[36.5px] bg-primary w-full marginNav text-background ">
      <span>
        Welcome to <strong>GFN Capital</strong>. Business funding is what we do.
      </span>
      <div className="flex items-center justify-center gap-10 whitespace-nowrap">
        <span>404-920-4946</span>
        <span>55 Water St, New York, NY 10038</span>
      </div>
    </div>
  );
};

export default TopBar;
