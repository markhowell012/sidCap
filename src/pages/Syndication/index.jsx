import React from "react";
import { Button } from "../../components";
import HeroSection from "./HeroSection";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Syndication = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 pb-12 text-secondary">
      <HeroSection />
      <div className="marginBody grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="mt-6">
          <h2 className="heading1-primary">What we could do together</h2>
          <p className="paragraph2 mb-8 mt-4">We’ve got your back!</p>
          <p className="paragraph1">
          Cidwell Capital proprietary syndication platform is now available to
            anyone who needs to fund deals. Either participate on files
            generated and funded by us or fund deals 100% yourself.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => navigate("/contact")}
              icon={<FiArrowRight font="white" fontWeight={600} />}
              width={"w-[60]"}
              height={"h-12"}
              className="rounded-3xl"
              title="Request Demo"
              iconPlacement={1}
              variant={2}
            />
          </div>
        </div>
        <div>
          <img src="/assets/images/syndication-human.png" alt="sydnication"/>
        </div>
      </div>
    </div>
  );
};

export default Syndication;
