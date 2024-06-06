import React from "react";
import { Button, Card1, DualColumns } from "../../components";
import {
  BUSINESS_LOANS_TYPES,
  BUSINESS_REVIEWS,
} from "../../utils/mock";
import { useNavigate } from "react-router-dom";

const BusinessLoans = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background">
      <div
        className=""
        style={{
          background: `url('/assets/images/BusinessLoans-Hero.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="grid grid-cols-3 ">
          <div className="col-span-3 md:col-span-2 flex flex-col gap-2  w-full self-sart bg-gradient-to-r from-secondary py-20 px-10 md:px-20">
            <p className="paragraph2 !text-white">Small Business Lending</p>
            <h2 className="heading1 !text-white">
              Find The Best Loan For Your Business.
            </h2>
            <div>
              <Button
                onClick={() => {
                  navigate("/onboarding");
                }}
                title="Apply Now"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-10">
        <div className="marginBody mx-auto flex flex-wrap xl:flex-nowrap gap-12 items-center justify-center">
          {BUSINESS_REVIEWS.map((image, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={image.imageSrc}
                alt={image.imageSrc}
                className="object-cover max-w-[160px] max-h-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="marginBody mx-auto my-20 flex flex-col gap-6">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 font-medium">
            Find The Right Loan To Grow Your Small Business
          </h3>

          <p className="paragraph2">At Sidwell Capital</p>
        </div>
        <Card1 data={BUSINESS_LOANS_TYPES} />
        <div className="mx-auto">
          <Button
            onClick={() => {
              navigate("/onboarding");
            }}
            title="Apply Now"
          />
        </div>
      </div>
      <div className="marginBody mx-auto my-20 flex flex-col gap-20">
        <DualColumns
          imageWidth="w-full"
          mediaImage="/assets/images/BusinessLoan-Section3.svg"
        >
          <div className="flex flex-col gap-6 my-auto">
            <div>
              <div className="flex items-center gap-2">
                <p>BUILD YOUR BUSINESS</p>
              </div>
              <h2 className="heading2">SBA Loans</h2>
            </div>
            <p className="paragraph1">
              Long term, low interest loans for the purchase of fixed assets
              such as real estate, equipment or machinery…
            </p>
            <div className="self-start">
              <Button
                onClick={() => navigate("/sba-loans")}
                title="Learn more"
              />
            </div>
          </div>
        </DualColumns>
        <DualColumns
          imageWidth="w-full"
          mediaPlacement={1}
          mediaImage="/assets/images/BusinessLoan-Section4.jpeg"
        >
          <div className="flex flex-col gap-6 my-auto">
            <div>
              <div className="flex items-center gap-2">
                <p>FAST FUNDING</p>
              </div>
              <h2 className="heading2">Term Loans</h2>
            </div>
            <p className="paragraph1">
              Long term, low interest loans for the purchase of fixed assets
              such as real estate, equipment or machinery…
            </p>
            <div className="self-start">
              <Button
                onClick={() => navigate("/term-loan")}
                title="Learn more"
              />
            </div>
          </div>
        </DualColumns>
      </div>
    </div>
  );
};

export default BusinessLoans;
