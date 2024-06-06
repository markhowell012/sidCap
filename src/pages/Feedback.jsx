import React from "react";
import { Button, DualColumns } from "../components";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Feedback = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 py-10 lg:py-20 text-secondary">
      <div className="marginBody mx-auto">
        <DualColumns mediaImage="/assets/images/Feedback-Image.png">
          <div className="flex flex-col gap-3 md:gap-6 m-auto">
            <h2 className="heading1 !font-medium">
              We'd love <br />
              <span className="text-primary">to hear from you.</span>
            </h2>
            <p className="paragraph2">
              Your feedback will be greatly appreciated
            </p>

            <div className="mt-4">
              <Button
                onClick={() => navigate("/onboarding")}
                variant={2}
                title="Review Us on Trustpilot"
                icon={<BsArrowRightShort className="text-xl" />}
              />
            </div>
          </div>
        </DualColumns>
      </div>
    </div>
  );
};

export default Feedback;
