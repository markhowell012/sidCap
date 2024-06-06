import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Accordion, Carousal } from "../../components";
import { CREDIT_SCORE_LIST, GOOGLE_REVIEWS, SBA_1, SBA_2, SBA_3, SBA_4, SBA_5, SBA_6 } from "../../utils/mock";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import SuccessModal from "../../components/macros/SuccessModal";

const SBALoan = () => {
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
      <div className="marginBody mx-auto grid grid-cols-1 md:grid-cols-2 items-start py-16 gap-8">
        <div className="mt-10">
          <h2 className="heading2 mb-3">Secure Any Type Of SBA Loan With GFN Capital</h2>
          <p className="paragraph1">
            With low interest rates, long repayment periods, and favorable terms, there’s no shortage of reasons why a
            business owner would be interested in an SBA loan. Unfortunately, the process of securing any type of SBA
            loan can be complicated. This loan has strict lending standards, making it extremely difficult to acquire
            one and take advantage of its benefits.
            <br />
            <br />
            Luckily, GFN Capital is here to help. Whether you need an SBA real estate loan or are interested in an SBA
            CAPline, we make the process easier than ever by providing professional assistance. From SBA loan
            calculation to loan term and payment breakdown, we’ll guide you through the entire process.
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
          { title: "LOAN AMOUNT UP TO", description: "$5.5M" },
          { title: "TERM AS LONG AS", description: "25 years" },
          { title: "RATES AS LOW AS", description: "6%" },
          { title: "FUNDED AS FAST AS", description: "30 days" },
        ]}
      />

      <div className="marginBody mx-auto">
        <h1 className="heading2 font-bold text-center py-20">Find Your Type of SBA Loan</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">SBA 7(A) Loan</h1>
            <p className="paragraph1 leading-8">
              SBA 7(a) Loans are incredibly flexible and can finance a wide variety of business needs. Whether you’re
              interested in expanding your business, funding an equipment purchase, purchasing additional inventory, or
              acquiring new real estate, an SBA 7(a) loan can help you.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_1} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-01.svg" alt="sba-loan-01" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">CDC/504 Fixed Asset</h1>
            <p className="paragraph1 leading-8">
              A CDC/504 is another popular type of SBA loan. CDC/504 loans are most often used to purchase major assets
              with long life spans. Examples of things commonly funded with CDC/504 loans include real estate, heavy
              equipment, and machinery. CDC/504 loans require a low down payment and have fixed interest rates with
              terms up to 25 years.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_2} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-02.svg" alt="sba-loan-02" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">SBA CAPLines</h1>
            <p className="paragraph1 leading-8">
              SBA CAPLines (Lines of Credit) are a working line of credit program designed to assist small businesses
              with short-term and cyclical capital needs. In most cases, these products are only available to companies
              that already have a traditional SBA 7(a) or CDC/SBA 504 loan.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_3} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-03.svg" alt="sba-loan-03" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">SBA Export Loans</h1>
            <p className="paragraph1 leading-8">
              SBA Export Loans are designed to help small businesses expand into foreign markets. There are three types
              of SBA export loans, including Export Working Capital Loans, Export Express Loans, and International Trade
              Loans.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_4} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-04.svg" alt="sba-loan-04" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">MicroLoan Program</h1>
            <p className="paragraph1 leading-8">
              The SBA MicroLoan Program provides smaller loan amounts with the goal of assisting small businesses with
              their working capital. This capital may be used for a wide variety of purposes, including but not limited
              to inventory, machinery, raw materials and supplies, labor costs, and marketing.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_5} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-05.svg" alt="sba-loan-05" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="order-2 md:order-1">
            <h1 className="heading3 font-bold  pb-6">Disaster Loans</h1>
            <p className="paragraph1 leading-8">
              The SBA provides disaster loans for small business owners whose premises have been damaged or destroyed by
              natural disasters. There are three types of SBA Disaster Loans available, depending on the type of damage
              your business has sustained.
            </p>
            <div className="bg-secondary">
              <Accordion DATA={SBA_6} />
            </div>
            <button
              onClick={() => navigate("/onboarding")}
              className="bg-primary text-white rounded-sm py-[16px] px-[30px] mt-8 flex items-center gap-4"
            >
              Learn More
              <AiOutlineArrowRight size={20} />
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/assets/images/sba-loan-06.svg" alt="sba-loan-06" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#DCDCDC] my-10 sm:my-20"></div>
      </div>

      <div className="marginBody mx-auto">
        <div className="pt-10">
          <h1 className="heading2 !font-bold text-center mb-4">Secure Your Type of SBA Loan</h1>
          <p className="mx-auto max-w-[80%] lg:max-w-[55%] text-[20px] text-center">
            Provide basic information about your business. If approved, you can request funds and receive them in your
            account in as fast as 48 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-16 gap-10 md:gap-20">
          <div className="flex justify-center">
            <img
              src={"/assets/images/sba-loan-lady.jpg"}
              alt="Design-27-600x600"
              className="rounded-tl-full rounded-bl-full rounded-br-full md:max-w-[400px] object-contain"
            />
          </div>
          <div>
            <h3 className="mb-4 heading3">Minimum Qualifications</h3>

            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">600+ credit score</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">2 years in business</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">$100,000 in yearly revenue</p>
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

      <div className="SBALoanBGImage py-20 lg:py-0 flex flex-col justify-center items-center">
        <h1 className="marginBody mx-auto text-[38px] font-bold text-white text-center mb-10">
          Secure the Funds Your Business Needs Today
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
          <h3 className="heading2 font-medium text-black">GFN Capital: Proven Excellence</h3>
          <p className="paragraph2">Don’t just take our word for it—check out what our clients have to say:</p>
        </div>
        <div className="self-center w-[70%]">
          <Carousal Reviews={GOOGLE_REVIEWS} />
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

export default SBALoan;
