import React from "react";

const OnboardingLoans = () => {
  return (
    <div className="marginBody flex flex-col lg:flex-row gap-8 justify-between">
      <div className="rounded-2xl shadow-main max-w-sm py-4 px-16">
        <div className="flex items-center gap-6">
          <div>
            <img src="/assets/images/businessloans.png" className="w-[130px]" alt="loans"/>
          </div>
          <div>
            <h1 className="heading4">Business Loans </h1>
            <p className="paragraph1 mt-4">
              Get the money you need to keep the business running and growing.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl shadow-main max-w-sm py-4 px-16">
        <div className="flex items-center gap-6">
          <div>
            <img src="/assets/images/personaloans.png" className="w-[130px]" alt="loans"/>
          </div>
          <div>
            <h1 className="heading4">Personal Loans</h1>
            <p className="paragraph1 mt-4">
              Get approved for a personal loan and take control of your
              finances.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-2xl shadow-main max-w-sm py-4 px-16">
        <div className="flex items-center gap-6">
          <div>
            <img src="/assets/images/credits.png" className="w-[130px]" alt="credits"/>
          </div>
          <div>
            <h1 className="heading4">Line of credit </h1>
            <p className="paragraph1 mt-4">
              Receive a revolving line of credit. Pay it off and use it again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLoans;
