import React from "react";
import { Button } from "../../components";
import { INDUSTRIES } from "../../utils/mock";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Industries = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 pt-8 pb-16 text-secondary">
      <div className="marginBody grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <h2 className="heading1-primary my-auto">Industries We Serve</h2>
        <div className="flex flex-col gap-2 md:gap-5 p-4 md:p-8 border-l-4 border-secondary">
          <p className="heading3">Helping businesses reach their goal</p>
          <p className="paragraph1">
            No matter which space you operate in, you can get up to $500,000 in
            funding in just 24 hours.
          </p>
          <div className="self-start">
            <Button
              onClick={() => {
                navigate("/onboarding");
              }}
              title="Apply Now"
              variant={2}
            />
          </div>
        </div>
      </div>
      <div className="marginBody grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {INDUSTRIES.map((blog, index) => (
          <div
            key={index}
            className="rounded-[2rem] border border-lighttext overflow-hidden"
          >
            <img
              src={blog?.imageSrc}
              alt="Blog"
              className=" w-full h-[226px] object-cover"
            />
            <div className="p-6 flex flex-col gap-5 ">
              <h5 className="text-lg text-primary font-semibold">
                {blog?.title}
              </h5>
              <p className="text-light font-medium">{blog?.description}</p>
              <div>
                <Button
                  onClick={() => {
                    navigate("/onboarding");
                  }}
                  title="Apply Now"
                  variant={2}
                  icon={<FaUserEdit />}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
