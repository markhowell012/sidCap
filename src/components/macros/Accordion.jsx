import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
const Accordion = ({ DATA }) => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="flex flex-col lg:gap-4">
      {DATA?.map((item, index) => (
        <div
          key={index}
          className={`mb-1 md:mb-2 p-4 md:p-7 rounded-3xl space-y-9
          ${openAccordion === index ? "bg-secondary" : "bg-transparent"}`}
        >
          <button
            onClick={() => handleAccordionClick(index)}
            className={`flex justify-between items-center w-full rounded gap-4`}
          >
            <span className="text-left flex items-center paragraph2 !font-bold">
              {item.title}
            </span>
            <span className="text-2xl text-light">
              {openAccordion === index ? <AiOutlineMinus /> : <BsPlusLg />}
            </span>
          </button>
          {openAccordion === index && (
            <>
              {item?.content && (
                <div className=" rounded mt-1 md:mt-2 paragraph1 font-medium">
                  {item.content}
                </div>
              )}
              {item?.html && <div className="rounded mt-2 ">{item.html}</div>}
            </>
          )}
        </div>
      ))}
    </div>
  );
};
export { Accordion };
