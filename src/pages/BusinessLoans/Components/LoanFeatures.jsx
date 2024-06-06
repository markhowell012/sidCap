import React from "react";

const LoanFeatures = ({ features }) => {
  return (
    <div className="w-full h-auto py-10 md:py-5 lg:h-[192px] bg-secondary flex flex-col justify-center">
      <div className="marginBody m-auto w-full flex items-center flex-wrap justify-around xl:justify-between xl:flex-nowrap gap-10">
        {features?.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-[15px] font-medium">{item?.title}</p>
            <h1 className="heading2 text-center font-bold text-primary">
              {item?.description}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanFeatures;
