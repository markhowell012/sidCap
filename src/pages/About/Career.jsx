import React from "react";

const Career = () => {
  return (
    <div className="marginBody mx-auto p-[10px]">
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        <div className="flex-1">
          <h1 className="heading1-primary font-bold">Join the Team</h1>
        </div>

        <div className="w-[3px] bg-secondary" />

        <div className="flex-1 py-6">
          <h2 className="heading3 mb-6">
            Helping businesses reach their goal.
          </h2>
          <p className="text-base paragraph1 leading-7">
            At GFN Capital our goal is to help small businesses thrive. By
            allowing businesses to access capital that they may not have been
            able to use otherwise, we help entrepreneurs achieve their goals. We
            do this by building trust with our clients through transparency,
            empathy, and understanding. If you’re interested in being an active
            listener that helps businesses both survive and thrive, then GFN
            Capital is the place for you!
          </p>
        </div>
      </div>

      <div className="flex items-stretch py-14">
        <div className="w-[60%] p-[10px]">
          <img
            src="/assets/images/career-image.png"
            className="rounded-[20px]"
            alt="career"
          />
        </div>

        <div className="flex-1 p-[10px]">
          <h3 className="pt-5 px-5 heading3">Google form goes here!</h3>
        </div>
      </div>
    </div>
  );
};

export default Career;
