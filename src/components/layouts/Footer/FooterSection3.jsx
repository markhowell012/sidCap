import React from "react";
import Button from "../../macros/Button";
import { BiSolidPencil } from "react-icons/bi";
import CardFooter from "../../macros/CardFooter";
import { MdPhoneEnabled } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { RiMailOpenLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { textVariant } from "../../../utils/motions";
import { motion } from "framer-motion";
const FooterSection3 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full pb-20 md:pb-32 mt-20 md:mt-32 flex flex-col items-center justify-evenly gap-24 lg:gap-36"
      style={{
        backgroundSize: "cover",
      }}
    >
      <div className="marginBody flex flex-col md:flex-row gap-5 items-center w-full">
        <div className="flex flex-col gap-6 w-full ">
          <motion.p
            variants={textVariant(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h3 className="heading2">See what you qualified for</h3>
          </motion.p>
          <motion.p
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <span style={{color: 'rgb(0,123,255)'}} className="heading3">
              No really, why wait? Let's do this!
            </span>
          </motion.p>
        </div>
        <div className="w-full flex items-center justify-center">
          <Button
            onClick={() => {
              navigate("/onboarding");
            }}
            icon={<BiSolidPencil className="text-lg" />}
            variant={2}
            title="APPLY NOW"
          />
        </div>
      </div>

      <div className="marginBody grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        <CardFooter
          title="Phone"
          description="929-445-4547"
          icon={<MdPhoneEnabled />}
        />
        <CardFooter
          title="Address"
          description="175 5th Ave, New York, NY 10010"
          icon={<IoLocationOutline />}
        />
        <CardFooter
          title="Email"
          description="info@cidwellcapital.com"
          icon={<RiMailOpenLine />}
        />
      </div>
    </div>
  );
};

export default FooterSection3;
