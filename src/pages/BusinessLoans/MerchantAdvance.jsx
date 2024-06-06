import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Accordion, Carousal } from "../../components";
import { CREDIT_SCORE_LIST, FAQ_MERCHANTADVANCE, GOOGLE_REVIEWS } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { BiDollarCircle } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const MerchantAdvance = () => {
  const navigate = useNavigate();

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [creditScore, setCreditScore] = useState("Select");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCreditScore("Select");
  };

  return (
    <div className="mx-auto">
      <div className="marginBody mx-auto grid grid-cols-1 md:grid-cols-2 items-start py-8 md:py-16 gap-8">
        <div className="mt-10">
          <h3 className="paragraph1 mb-2">MERCHANT CASH ADVANCE</h3>
          <h2 className="heading2 mb-4">Grow Your Business Fast With a Merchant Cash Advance</h2>
          <p className="paragraph1">
            A quicker alternative to more traditional funding methods. Payments are a percentage of each sale so
            repayment is not a burden when business is slow.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <img src={"/assets/images/Accredit-A-Rating.png"} alt="Accredit-A-Rating" className="w-[120px]" />
            <img src={"/assets/images/certified_sbft.webp"} alt="certified_sbft" className="w-[120px]" />
            <img src={"/assets/images/trustpilot_rating.png"} alt="trustpilot_rating" className="w-[120px]" />
          </div>
        </div>

        <FormLayout>
          <Input
            title="First name"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"Firstname"}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            title="Last name"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"Lastname"}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            title="Email"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"mail@me.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Phone"
            required
            colSpan={2}
            placeholder={"555-555-5555"}
            twoInputInOneLine
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Select
            title="Your Credit Score"
            colSpan={4}
            options={CREDIT_SCORE_LIST}
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
          />

          <div className="col-span-2 w-full">
            <Button
              icon={<GrSend font="white" />}
              width={"w-full"}
              height={"h-12"}
              className="rounded-3xl"
              title="Submit"
              variant={2}
              onClick={() => setShowSuccessModal(true)}
            />
          </div>
        </FormLayout>
      </div>
      <LoanFeatures
        features={[
          { title: "LOAN AMOUNT UP TO", description: "$2 million" },
          { title: "RATES AS LOW AS", description: "12%" },
          { title: "DECISIONS AS FAST AS", description: "1-3 hours" },
        ]}
      />

      <div className="marginBody mx-auto flex items-start gap-20 py-24">
        <div className="flex flex-col sm:flex-row item-start gap-10">
          <h1 className=" heading3 !text-primary font-medium">
            Get Fast Access to the Working Capital You Need to Grow Your Business
          </h1>
          <p className=" paragraph1">
            Businesses that accept credit card payments and need fast access to capital funds are ideal candidates.
            Aside from having a simpler application process, cash advances are designed to help businesses get flexible
            access to the working capital they need quickly.
          </p>
        </div>
      </div>
      <div className="marginBody mx-auto">
        <LoanCard
          data={[
            {
              icon: <BsSpeedometer2 size={40} className={"text-primary"} />,
              text: "Moderate Credit OK",
            },
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "Easy Application Process",
            },

            {
              icon: <BiDollarCircle size={40} className={"text-primary"} />,
              text: "Quick Access to Cash",
            },
            {
              icon: <FaMoneyBillTrendUp size={40} className={"text-primary"} />,
              text: "Financing That Grows With You",
            },
          ]}
        />
      </div>
      <div className="marginBody mx-auto">
        <div className="py-10">
          <h1 className="heading2 font-bold text-center">Get Started With a Merchant Cash Advance</h1>
          <p className="mx-auto max-w-[80%] md:max-w-[55%] text-[20px] text-center mb-8">
            Provide basic information about your business. If approved, you can request funds and receive them in your
            account in as fast as 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-16 gap-10 md:gap-">
          <div>
            <img
              src={"/assets/images/Design-27-600x600.jpg"}
              alt="Design-27-600x600"
              className="rounded-tl-full rounded-bl-full rounded-br-full"
            />
          </div>
          <div>
            <h1 className="heading2 text-[36px] mb-10">Our Equipment Loan Qualifications</h1>
            <h3 className="mt-12 mb-4 heading3">Minimum Qualifications</h3>

            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">400+ credit score</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">5+ months in business</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">$75,000 in yearly revenue</p>
            </div>
            <p className="heading3 my-8">What You Need To Apply</p>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">Basic details about you and your business</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">Bank statements for past 3 months</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">Business is in good standing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="merchantCashAdvanceBGImage py-20 lg:py-0 flex flex-col justify-center items-center">
        <h1 className="marginBody mx-auto text-[38px] font-bold text-white text-center mb-10">
          Start your application & secure the
          <br />
          funds your business needs today
        </h1>

        <div className="marginBody grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[92px] min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-10">
              <h2 className="mb-4 font-bold text-2xl">Easy Application</h2>
              <p className="text-white text-base">Complete an online funding application</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[92px] min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-10">
              <h2 className="mb-4 font-bold text-2xl">Receive Offers</h2>
              <p className="text-white text-base">Get best offers from our provider network</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[92px] min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-10">
              <h2 className="mb-4 font-bold text-2xl">Get Funded FAST</h2>
              <p className="text-white text-base">Receive funds in as little as 24 hours!</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-14">
          <Button
            className="mt-8"
            onClick={() => {
              navigate("/onboarding");
            }}
            variant={2}
            title=" Apply and get funded"
          />
        </div>
      </div>

      <section className="marginBody mx-auto my-10 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 font-medium">Proven Excellence</h3>
          <p className="paragraph1">Don’t just take our word for it—check out what our clients have to say:</p>
        </div>
        <div className="self-center w-[70%]">
          <Carousal Reviews={GOOGLE_REVIEWS} />
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <div className="bg-secondary w-full py-24">
          <div className="max-w-[1024px] mx-auto ">
            <h1 className="text-center heading2 mb-12">Frequently Asked Questions</h1>
            <Accordion DATA={FAQ_MERCHANTADVANCE} />
          </div>
        </div>
      </section>

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

export default MerchantAdvance;
