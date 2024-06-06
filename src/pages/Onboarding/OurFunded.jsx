import React from "react";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";
const OnboardingFunded = () => {
  const navigate = useNavigate();
  return (
    <div className="marginBody grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="">
        <div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button
            onClick={() => {
              navigate("/onboarding");
            }}
            variant={2}
            title="APPLY NOW"
          />
        </div>
      </div>
      <div className="mt-24">
        <div className="flex justify-end">
          <div className="w-[400px] text-end">
            <h2 className="heading1-primary">Over $300M Funded</h2>
            <p className="paragraph2 mt-6">to over 4,500 business</p>
          </div>
        </div>
        <div className="mt-12">
          <div className="flex gap-6 mb-12">
            <div className="min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]">
              <img
                src="/assets/images/OurFunded-1.png"
                className="w-full object-contain"
                alt="funded"
              />
            </div>
            <div>
              <h1 className="heading3">Easy Sign Up </h1>
              <p className="paragraph1 mt-6">
                Simple online application completed within minutes.
              </p>
            </div>
          </div>
          <div className="flex gap-6 mb-12">
            <div className="min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]">
              <img
                src="/assets/images/OurFunded-2.png"
                className="w-full object-contain"
                alt="funded3"
              />
            </div>
            <div>
              <h1 className="heading3">Same-Day Decision </h1>
              <p className="paragraph1 mt-6">
                Easy and fast so you can focus on running your business. No need
                to compromise today; grab our proposal and explore your options,
                completely free of charge.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="min-w-[48px] min-h-[48px] max-w-[48px] max-h-[48px]">
              <img
                src="/assets/images/OurFunded-3.png"
                className="w-full object-contain"
                alt="funded4"
              />
            </div>
            <div>
              <h1 className="heading3">Fast Funding </h1>
              <p className="paragraph1 mt-6">
                Funds automatically deposited into your business account the
                moment you decide to move forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingFunded;
