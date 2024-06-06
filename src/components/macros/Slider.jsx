import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { textVariant } from "../../utils/motions";

const Slider = ({ children, controls, scrollSize, className, title }) => {
  const ref = useRef(null);

  // const [showLeftButton, setShowLeftButton] = useState(false);
  // const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = ref.current;
      if (divElement) {
        // setShowLeftButton(divElement?.scrollLeft > 0);
        // setShowRightButton(
        //   divElement?.scrollLeft + divElement?.clientWidth <
        //     divElement?.scrollWidth - 5
        // );
      }
    };

    const divElement = ref.current;
    divElement?.addEventListener("scroll", handleScroll);

    return () => {
      divElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    ref.current?.scrollBy({
      left: scrollSize ? -scrollSize : -150,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    ref.current?.scrollBy({ left: scrollSize ?? 150, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-2">
      {controls ? (
        <div className="flex items-center justify-between">
          <motion.p
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="heading2">{title}</h3>
          </motion.p>
          <div className=" flex items-center justify-center gap-3 h-full text-primary">
            <BsFillArrowLeftCircleFill
              name="sliderLeft"
              onClick={scrollLeft}
              className="hover:text-light cursor-pointer text-[40px]"
            />
            <BsFillArrowRightCircleFill
              name="sliderRight"
              onClick={scrollRight}
              className="hover:text-light cursor-pointer text-[40px]"
            />
          </div>
        </div>
      ) : null}
      <div className="w-full flex flex-row justify-between">
        <motion.div
          variants={textVariant(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          ref={ref}
          className={`w-full flex hideScrollbar overflow-x-auto gap-4 ${className}`}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export { Slider };
