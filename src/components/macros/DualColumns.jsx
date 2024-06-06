import { motion } from "framer-motion";
import React, { Children } from "react";
import { textVariant } from "../../utils/motions";

const DualColumns = ({
  mediaPlacement = 2,
  mediaImage,
  children,
  imageWidth = "w-[80%]",
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
      <div className="w-full">
        {Children.map(children, (child) => (
          <>{child}</>
        ))}
      </div>
      <div
        className={`flex justify-center items-center ${
          mediaPlacement === 1 ? "order-first" : "order-first md:order-last"
        }`}
      >
        <motion.image
          variants={textVariant(0.1, 50)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <img
            src={mediaImage}
            alt="home-section1"
            className={`${imageWidth} md:w-[600px] h-auto`}
          />
        </motion.image>
      </div>
    </div>
  );
};

export default DualColumns;
