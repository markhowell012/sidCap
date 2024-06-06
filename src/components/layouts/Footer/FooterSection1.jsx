import { motion } from "framer-motion";
import React from "react";
import { SEENITEMS } from "../../../utils/mock";
import { textVariant } from "../../../utils/motions";

const FooterSection1 = () => {
  return (
    <div className="h-[30vh] xl:h-[40vh] bg-primary">
      <div className="marginBody px-12 flex flex-col items-center justify-center gap-5 md:gap-12 m-auto h-full w-full">
        <motion.p
          variants={textVariant(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-2xl text-secondary">As seen on</h3>
        </motion.p>
        <motion.div
          variants={textVariant(0.1, 50)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex items-center justify-center md:justify-between flex-wrap md:flex-nowrap gap-3 w-full"
        >
          {SEENITEMS.map((item, index) => (
            <img
              key={index}
              src={item?.imageSrc}
              alt={item?.name}
              className="w-[80px] sm:w-[100px] lg:w-[139px]"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FooterSection1;
