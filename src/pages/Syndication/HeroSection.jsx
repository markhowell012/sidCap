import React from "react";
import Button from "../../components/macros/Button";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const HeroSection = () => {
  const navigate = useNavigate();

  return (
    
    <div
      className="bg-background flex flex-col items-center justify-center gap-14 py-8 w-full text-secondary"
      style={{
        backgroundPosition: " center",
        backgroundRepeat: " no-repeat",
        backgroundSize: " cover",
      }}
    >
      <div className="marginBody grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <p className="heading2 !text-secondary font-bold">
            Hello there, <br />
            Looking to Get <br /> involved?
          </p>
          <p className="paragraph2 mb-8 mt-4">Syndication made simple</p>

          <Button
            onClick={() => navigate("/onboarding")}
            icon={<FiArrowRight font="white" fontWeight={600} />}
            width={"w-[60]"}
            height={"h-12"}
            className="rounded-3xl"
            title="Review Us on Trustpilot"
            iconPlacement={1}
            variant={2}
          />
        </div>
        <div className="flex flex-col p-8">
          <div className="shadow-secondary rounded-2xl  bg-white">
            <img src="/assets/images/syndication-chart.png" width="100%" alt="chart" />
          </div>
        </div>
      </div>
    </div>

  );
};

export default HeroSection;
