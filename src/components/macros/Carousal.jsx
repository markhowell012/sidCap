import React from "react";
import { Carousel } from "antd";
import { AiFillStar } from "react-icons/ai";

const Carousal = ({ Reviews }) => (
  <Carousel autoplay autoplaySpeed={2000}>
    {Reviews?.map((item, index) => (
      <div key={index} className="flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="paragraph2 font-bold">{item?.name}</h3>
          <div className="flex items-center gap-0">
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
            <AiFillStar className="text-yellow-500 text-xl" />
          </div>
        </div>
        <p className="paragraph1 font-semibold mt-5">"{item.review}"</p>
      </div>
    ))}
  </Carousel>
);
export default Carousal;
