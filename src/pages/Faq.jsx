import React from "react";
import { Accordion } from "../components";
import { FAQS } from "../utils/mock";

const Faq = () => {
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 pt-8 pb-16 text-secondary">
      <div className="marginBody grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col gap-3 lg:gap-10 order-2 lg:order-1 ">
          <div>
            <h2 className="heading1-primary">Got questions?</h2>
            <p className="paragraph2 mt-3">Here's some FAQ's to guide you</p>
          </div>
          <div>
            <Accordion DATA={FAQS} />
          </div>
        </div>
        <img
          src="/assets/images/Faq-Image.png"
          alt="FAQ-sectionimage"
          className="mx-auto order-1 lg:order-2"
        />
      </div>
    </div>
  );
};

export default Faq;
