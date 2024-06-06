import React, { useState } from "react";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { FaPhone } from "react-icons/fa";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import SuccessModal from "../../components/macros/SuccessModal";

const HeroSection = () => {
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [desiredAmount, setDesiredAmount] = useState(""); // Initialize with an empty string
  const [businessType, setBusinessType] = useState("Select an option"); // Initialize with the default value
  const [businessStartDate, setBusinessStartDate] = useState("");
  const [creditScore, setCreditScore] = useState("Select");
  const [businessDebt, setBusinessDebt] = useState("Select");
  const [bankAccountType, setBankAccountType] = useState("Select");

  // Function to reset form values
  const resetForm = () => {
    setDesiredAmount("");
    setBusinessType("Select an option");
    setBusinessStartDate("");
    setCreditScore("Select");
    setBusinessDebt("Select");
    setBankAccountType("Select");
  };

  return (
    <div
      className="bg-background flex flex-col items-center justify-center gap-14 py-8 w-full text-secondary"
      style={{
        backgroundImage: "url(/assets/images/bg-hero-section.png)",
        backgroundPosition: " center",
        backgroundRepeat: " no-repeat",
        backgroundSize: " cover",
      }}
    >
      {/* Header */}
      <div className="marginBody flex justify-between items-center w-full">
        <div className="cursor-pointer" onClick={() => navigate("/")}>

        </div>
        <div className="flex items-center gap-3">
          <p className="paragraph2 ">404-920-4946</p>
          <FaPhone size={24} />
        </div>
      </div>

      <div className="marginBody grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <p className="heading2 !text-secondary font-bold">
            Business Loans <br />
            is what we do!
          </p>
          <p className="paragraph2 mb-8 mt-4">Approved and funded the same day.</p>
          <p className="paragraph1"></p>
          <Button
            icon={<FiArrowRight font="white" fontWeight={600} />}
            width={"w-[60]"}
            height={"h-12"}
            className="rounded-3xl"
            title="Trustpilot"
            iconPlacement={2}
            variant={2}
          />
          <div className="flex justify-center items-center mt-4">
            <img
              src="/assets/images/ratings-bbb.png"
              alt="nav-logo"
              className="w-[88px] md:max-w-[88px] h-[70] md: max-h-[70]"
            />
          </div>
        </div>
        <FormLayout>
          <Input
            title="Desired Amount"
            colSpan={2}
            twoInputInOneLine
            placeholder={"Amount $5-500k"}
            type="number"
            value={String(desiredAmount)}
            onChange={(e) => setDesiredAmount(e.currentTarget.value)}
          />
          <Input
            title="What does the business do?"
            colSpan={2}
            twoInputInOneLine
            placeholder={"mail@me.com"}
            type="select"
            options={[
              { label: "Select an option", value: "Select an option" },
              { label: "Construction", value: "Construction" },
              { label: "Education", value: "Education" },
              { label: "Entertainment", value: "Entertainment" },
              { label: "Food Beverage", value: "Food Beverage" },
              { label: "Health Care", value: "Health Care" },
              { label: "Information", value: "Information" },
              { label: "Manufacturing", value: "Manufacturing" },
              { label: "Non Profit Service", value: "Non Profit Service" },
              { label: "Other", value: "Other" },
              { label: "Professional Service", value: "Professional Service" },
              { label: "Real Estate", value: "Real Estate" },
              { label: "Retail Trade", value: "Retail Trade" },
              { label: "Services", value: "Services" },
              { label: "Technology", value: "Technology" },
              { label: "Transportation", value: "Transportation" },
              { label: "Unknown", value: "Unknown" },
              { label: "Wholesale", value: "Wholesale" },
            ]}
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          />
          <Input
            title="Business start date"
            placeholder={"Name of your company"}
            type="date"
            value={businessStartDate}
            onChange={(e) => setBusinessStartDate(e.target.value)}
          />
          <Input
            title="Credit Score"
            placeholder={""}
            colSpan={2}
            type="select"
            options={[
              { label: "Select", value: "Select" },
              { label: "Exellent", value: "Exellent" },
              { label: "Good", value: "Good" },
              { label: "Average", value: "Average" },
              { label: "Poor", value: "Poor" },
            ]}
            twoInputInOneLine
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
          />

          <Input
            title="Business Debt"
            placeholder={""}
            type="select"
            options={[
              { label: "Select", value: "Select" },
              { label: "None", value: "None" },
              { label: "Low", value: "Low" },
              { label: "Medium", value: "Medium" },
              { label: "High", value: "High" },
            ]}
            colSpan={2}
            twoInputInOneLine
            value={businessDebt}
            onChange={(e) => setBusinessDebt(e.target.value)}
          />

          <Input
            title="Bank Account Type"
            type="select"
            options={[
              { label: "Select", value: "Select" },
              { label: "Business", value: "Business" },
              { label: "Personal", value: "Personal" },
            ]}
            placeholder={"Write your message here"}
            colSpan={2}
            twoInputInOneLine
            value={bankAccountType}
            onChange={(e) => setBankAccountType(e.target.value)}
          />

          <div className="col-span-2 w-full">
            <Button
              icon={<GrSend color="white" />}
              width={"w-full"}
              height={"h-12"}
              className="rounded-3xl"
              title="Check Eligibility"
              variant={2}
              onClick={() => setShowSuccessModal(true)}
            />
          </div>
        </FormLayout>
      </div>

      {showSuccessModal && (
        <SuccessModal
          open={showSuccessModal}
          onClose={() => {
            resetForm();
            setShowSuccessModal(false);
          }}
          title="Success"
          description="Your information has been submitted successfully!"
        />
      )}
    </div>
  );
};

export default HeroSection;
