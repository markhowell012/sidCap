import React, { useEffect } from "react";
import { Button } from "../../components";
import OnboardingFunded from "./OurFunded";
import OnboardingLoans from "./Loans";
import OnboardingSSl from "./SslSecure";
import OnBoardingCard from "./Cards";
import HeroSection from "./HeroSection";
import { useLocation, useNavigate } from "react-router-dom";

const Onboarding = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathnameWithoutLeadingSlash = location.pathname.replace(/^\/+/, "");
    document.title = `Sidwell Capital ${pathnameWithoutLeadingSlash}`;
    
    // Scrolling to Top
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 pb-8 text-secondary">
      <HeroSection />
      <div className="marginBody grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="mt-6">
          <h2 className="heading1-primary !font-medium">
            Sidwell Capital
          </h2>
          <h2 className="heading1-primary ">Short Term Business Loans</h2>
          <p className="paragraph2 mb-8 mt-4">Powerful Partnerships.</p>
          <p className="paragraph1">
            If Sidwell Capital's direct programs aren’t the best fit for you, our
            Marketplace gotcha covered! Sidwell Capital has created its own unique
            Marketplace, with over a decade of vetted partnerships.
          </p>
          <div className="mt-6">
            <Button
              onClick={() => {
                navigate("/onboarding");
              }}
              variant={2}
              title="APPLY NOW"
            />
          </div>
        </div>
        <div className="hidden md:block lg:block xl:block">
        </div>
      </div>
      {/* cards section.............. */}
      <OnBoardingCard />
      {/* Our Funded.............. */}
      <OnboardingFunded />
      {/* Select Option.................... */}
      <div className="marginBody grid grid-cols-1 md:grid-cols-2">
        <div className="mt-6 flex flex-col justify-center">
          {/* Added classes */}
          <h2 className="heading1-primary">
            Select the option that is best for your business
          </h2>
          <p className="paragraph2 font-bold mb-8 mt-4">
            $300m to over 4,500 business
          </p>
        </div>
        <div>
        </div>
      </div>
      {/* loans............... */}
      <OnboardingLoans />
      {/* SSl secure............... */}
      <OnboardingSSl />
    </div>
  );
};

export default Onboarding;
