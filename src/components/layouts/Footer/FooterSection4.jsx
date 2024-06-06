import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FOOTER_LINKS } from "../../../utils/mock";
import { textVariant } from "../../../utils/motions";
import Button from "../../macros/Button";
import Input from "../../macros/Input";
import SuccessModal from "../../macros/SuccessModal";
const FooterSection4 = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleNavigation = (route) => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div className=" pt-12 bg-secondary w-full text-white flex flex-col items-center gap-24">
      <section className="marginBody flex flex-col items-center justify-center gap-5">
        <h3 className="heading2 font-medium">Subscribe to our newsletter</h3>
        <div className="flex flex-col items-center justify-center gap-5 w-full">
          <motion.image
            variants={textVariant(0.3, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src="/assets/images/Footer-Graphic.png"
              alt="newsletter-Graphic-up"
              className="w-[190px]"
            />
          </motion.image>
          <div className="flex flex-wrap md:flex-nowrap items-center gap-4  w-full 1110:w-[90%] whitespace-nowrap">
            <Input
              placeholder="Enter your e-mail address"
              height="h-[56px]"
              onChange={(e) => setEmail(e.currentTarget.value)}
              value={email}
            />
            <Button
              title="Get Started"
              width="w-full md:w-auto"
              height="h-[56px]"
              onClick={() => setShowSuccessModal(true)}
            />
          </div>

          <motion.image
            variants={textVariant(0.3, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src="/assets/images/Footer-Graphic.png"
              alt="newsletter-Graphic-down"
              className="w-[190px] rotate-180"
            />
          </motion.image>
        </div>
      </section>
      <section className="marginBody grid grid-cols-1 md:grid-cols-4 gap-12 1024:gap-32 font-medium w-full">
        <div className="flex flex-col gap-5">
          <p>Supporting businesses financially is our expertise!</p>
          <img
            src="/assets/images/SSL.png"
            alt="footer-logo"
            className="w-[130px]"
          />
          <p className="text-[9px] text-lighttext">Site Secure</p>
          <p className="text-[9px] text-lighttext">
            We use bank-level security to keep your data safe.
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg ">Company</h5>
          {FOOTER_LINKS.filter((item) => item.category === "company").map(
            (item, index) => (
              <p
                onClick={() => handleNavigation(item?.route)}
                key={index}
                className="text-lighttext cursor-pointer"
              >
                {item.name}
              </p>
            )
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg ">Connect</h5>
          {FOOTER_LINKS.filter((item) => item.category === "connect").map(
            (item, index) => (
              <p
                onClick={() => handleNavigation(item?.route)}
                className="flex items-center gap-2"
              >
                <p className="text-sm text-primary">{item.icon}</p>
                <p key={index} className="text-lighttext cursor-pointer">
                  {item.name}
                </p>
              </p>
            )
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h5 className="text-lg ">Resources</h5>
          {FOOTER_LINKS.filter((item) => item.category === "resources").map(
            (item, index) => (
              <p
                onClick={() => handleNavigation(item?.route)}
                key={index}
                className="text-lighttext cursor-pointer"
              >
                {item.name}
              </p>
            )
          )}
        </div>
      </section>
      <section className="marginBody w-full border-t border-[white]/[0.1] h-[72px] font-semibold flex items-center">
        <p>© 2023 Sidwell Capital. All Rights Reserved.</p>
      </section>

      {showSuccessModal && (
        <SuccessModal
          open={showSuccessModal}
          onClose={() => {
            setEmail("");
            setShowSuccessModal(false);
          }}
          title="Success"
          description="You have successfully subscribed!"
        />
      )}
    </div>
  );
};

export default FooterSection4;
