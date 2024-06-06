import { motion } from "framer-motion";
import React from "react";
import { HOWTOSTEPS } from "../../../utils/mock";
import { textVariant } from "../../../utils/motions";
const Stepper = () => {
  return (
    <motion.div
      variants={textVariant(0, 20)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex flex-col gap-16 md:gap-28"
    >
      {HOWTOSTEPS.map((step, index) => (
        <div className="flex gap-5 md:gap-16" key={index}>
          <div className="relative min-w-[45px] min-h-[45px] w-[45px] h-[45px] bg-primary outline outline-primary text-white rounded-full flex items-center justify-center ">
            {step.icon}
            {index + 1 === HOWTOSTEPS.length ? (
              ""
            ) : (
              <div className="absolute top-[46px] h-36 md:h-48 lg:h-44 w-[1px] bg-primary" />
            )}
          </div>
          <div className="space-y-5">
            <h3 className="paragraph2">{step.title}</h3>
            <p className="paragraph1">{step.description}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Stepper;
