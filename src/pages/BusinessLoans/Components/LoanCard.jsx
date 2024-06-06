import React from "react";

const LoanCard = ({ data }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${data.length} gap-6 my-14`}
    >
      {data?.map((item, index) => (
        <div key={index} className="bg-secondary rounded-lg p-10">
          {item?.icon}
          <h2 className="heading3 mt-6">{item?.text}</h2>
        </div>
      ))}
    </div>
  );
};

export default LoanCard;
