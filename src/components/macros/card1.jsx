import React from "react";

const Card1 = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-10 ">
      {data.map((item) => (
        <div className="flex-1 m-2 p-10 bg-light rounded-2xl">
          <div className="flex justify-center mb-2">{item.icon}</div>
          <h3 className="text-secondary text-lg text-center mb-4">
            {item.title}
          </h3>
          <p className="text-sm text-gray text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card1;
