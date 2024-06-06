import React from "react";
import { RxCross2 } from "react-icons/rx";

function SearchCard({ handleClose, text }) {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-white flex flex-col justify-between p-8 md:p-16">
      <div className="flex w-full justify-end items-end">
        <RxCross2
          color="#212C64"
          size={32}
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <input
          autoFocus
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleClose();
            }
          }}
          placeholder="Type and hit enter"
          type="text"
          className="w-full h-40 border-none px-4 text-2xl md:text-4xl lg:text-5xl  text-secondary placeholder-secondary outline-none mb-8 ml-2"
        />
      </div>
    </div>
  );
}

export default SearchCard;
