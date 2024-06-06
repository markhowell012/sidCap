import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Accordion, Carousal } from "../../components";
import { CREDIT_SCORE_LIST, FAQ_EQUIPMENTFINANCE, GOOGLE_REVIEWS } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { BsCashCoin } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const EquipmentFinance = () => {
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
      <div className="marginBody mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-4 py-8 md:py-16">
        <div className="mt-10">
          <h2 className="heading2 mb-4">Business Equipment Financing</h2>
          <p className="paragraph1">
            Has your growing business developed additional equipment needs? One of the best ways to get funding for your
            equipment is by working with a business equipment financing company.
            <br />
            <br />
            If you’re ready to start but still don’t know who to work with, turn to GFN capital! We use our sprawling
            network of vendors and relationship-driven approach to get your business the funding it needs when you need
            it.
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-10">
            <img src={"/assets/images/Accredit-A-Rating.png"} className="w-[120px]" alt="accredit"/>
            <img src={"/assets/images/certified_sbft.webp"} className="w-[120px]" alt="certify"/>
            <img src={"/assets/images/trustpilot_rating.png"} className="w-[120px]" alt="trust"/>
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
          {/* <Input title="Company Name" required colSpan={2} placeholder={"Name of your company"} twoInputInOneLine /> */}
          <Select
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
          { title: "LOAN AMOUNT UP TO", description: "100% value" },
          { title: "TERM", description: "Up to 10y" },
          { title: "RATES AS LOW AS", description: "8%" },
          { title: "DECISIONS AS FAST AS", description: "24 hours" },
        ]}
      />

      <div className="marginBody mx-auto flex items-start gap-20 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col sm:flex-row item-start gap-10">
          <h1 className="w-[100%] sm:w-[45%] heading2 font-medium leading-tight">
            Increase Productivity With GFN Capital’s Business Equipment Financing
          </h1>
          <p className="w-[100%] sm:w-[65%] paragraph1">
            Has your business reached a point where you need additional equipment but lack the working capital to
            purchase it? Business equipment financing loans may be the ideal solution for you. Business equipment
            financing can keep your business functioning at its best, making expanding to meet increasing demand simple.
            Best of all, when you get equipment financing from GFN Capital, you can count on:
          </p>
        </div>
      </div>

      <div className="marginBody mx-auto">
        <LoanCard
          data={[
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "No application fee",
            },
            {
              icon: <BsCashCoin size={40} className={"text-primary"} />,
              text: "No prepayment penalties",
            },
            {
              icon: <BiDollarCircle size={40} className={"text-primary"} />,
              text: "Funds available on demand",
            },
            {
              icon: <FaMoneyBillTrendUp size={40} className={"text-primary"} />,
              text: "Financing that grows with you",
            },
          ]}
        />
      </div>

      <div className="marginBody mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-16 gap-10 md:gap-20">
          <div>
            <img
              src={"/assets/images/Construction-Worker-Driving-Equipment-600x600.webp"}
              className="rounded-tl-full rounded-bl-full rounded-br-full"
              alt="worker"
            />
          </div>
          <div>
            <h1 className="heading2  mb-10">Our Equipment Loan Qualifications</h1>
            <h3 className="mt-12 mb-4 heading3">Minimum Qualifications</h3>

            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">600 Minimum Credit Score</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">600 Minimum Credit Score</p>
            </div>
            <div className="flex items-center mb-4">
              <BiChevronRight className="text-primary" size={24} />
              <p className="paragraph1 ml-6">600 Minimum Credit Score</p>
            </div>
            <p className="paragraph2 my-8">
              Meet the requirements above? You only need to put together a few simple documents to get fast financing
              from GFN Capital:
            </p>
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

      <div className="equipmentFinanceBGImage py-20 lg:py-0 flex flex-col justify-center items-center">
        <h1 className="marginBody mx-auto heading2 !font-bold text-white text-center mb-10">
          Get Started on Your Business Equipment Financing
          <br />
          Application Today
        </h1>

        <p className="max-w-[80%] md:max-w-[50%] mx-auto paragraph2 !text-white text-center mb-8">
          Whether you need substantial financial support for extensive construction equipment financing or are looking
          for a little bit of help with light restaurant equipment financing, GFN capital is the one-stop shop for all
          of your professional financing needs.
        </p>

        <div className="marginBody grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-10">
              <h2 className="mb-4 font-bold text-2xl">Easy Application</h2>
              <p className="text-white text-base">Complete an online funding application</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-10">
              <h2 className="mb-4 font-bold text-2xl">Receive Offers</h2>
              <p className="text-white text-base">Get best offers from our provider network</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
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

      <div className="marginBody mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 py-16 gap-10 md:gap-20">
          <div>
            <img
              src={"/assets/images/Meeting-Celebrating-Success-800x800.webp"}
              className="rounded-tl-full rounded-bl-full rounded-br-full"
              alt="meeting"
            />
          </div>
          <div>
            <h1 className="heading2 text-[36px] mb-10">Why Work With GFN Capital?</h1>
            <p className="paragraph1 ">
              When you work with GFN Capital, you gain a financial partner committed to your organizational success.
              We’ll structure the best loan for your needs at interest rates you can afford. We won’t just get you the
              equipment you need to grow your business, we’ll work with you to find a financing solution that fits your
              situation. We’ll never recommend a solution that isn’t in your best interest, so you can always be
              confident that you’re getting answers tailored toward your business’s long-term success.
              <br />
              <br />
              Between our commitment to your success, deep connections in the financial industry, and security-first
              approach that incorporates cutting-edge security platforms, GFN Capital is the ultimate solution to your
              business’s financial needs.
            </p>
          </div>
        </div>
      </div>

      <section className="marginBody mx-auto my-0 sm:my-10 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 font-medium text-black">See What Our Clients Have To Say</h3>
          <p className="paragraph2">
            You don’t have to take our word for it. With thousands of 5-Star TrustPilot reviews and hundreds of
            testimonials, GFN Capital has a track record of excellent service. Check out some of our reviews below:
          </p>
        </div>
        <div className="self-center w-[70%]">
          <Carousal Reviews={GOOGLE_REVIEWS} />
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <div className="bg-secondary w-full py-24">
          <div className="max-w-[1024px] mx-auto ">
            <h1 className="text-center heading2 mb-12">Frequently Asked Questions</h1>

            <Accordion DATA={FAQ_EQUIPMENTFINANCE} />
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

export default EquipmentFinance;
