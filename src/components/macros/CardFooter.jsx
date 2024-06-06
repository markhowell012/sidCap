import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const CardFooter = ({ icon, learnMore, onLearnMorePress, title, description }) => {
  return (
    <div className="w-full bg-secondary rounded-2xl px-[20px] pt-[20px] pb-[30px] md:px-[30px] md:pt-[30px] md:pb-[50px] flex gap-5 ">
      <div className="text-primary text-[48px]">{icon && icon}</div>
      <div className="flex flex-col gap-5">
        <h3 className="text-2xl text-light">{title}</h3>
        <p className="paragraph1 break-all text-lighttext">{description}</p>
        {learnMore && (
          <div onClick={onLearnMorePress} className="flex items-center gap-3 text-primary cursor-pointer">
            <span>Learn more </span>
            <FiArrowRightCircle />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardFooter;
