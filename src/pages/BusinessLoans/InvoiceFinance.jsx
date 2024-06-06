import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Accordion, Carousal } from "../../components";
import { CREDIT_SCORE_LIST, FAQ_INVOICEFINANCE, GOOGLE_REVIEWS } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { BsCashCoin } from "react-icons/bs";
import { BiDollarCircle, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const InvoiceFinance = () => {
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
          <p className=" mb-4 paragraph1 font-sans">INVOICE FINANCING</p>
          <h2 className="heading2 mb-4">AR Invoice Factoring for Small Business</h2>
          <p className="paragraph1 ">
            Get lightning-fast access to unlimited funds based on the size of your outstanding customer invoices
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <img src={"/assets/images/Accredit-A-Rating.png"} className="w-[120px]" alt="accredit"/>
            <img src={"/assets/images/trustpilot_rating.png"} className="w-[120px]" alt="trust"/>
            <img src={"/assets/images/certified_sbft.webp"} className="w-[120px]" alt="certify"/>
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
          { title: "LOAN AMOUNT UP TO", description: "90% Value" },
          { title: "DECISIONS AS FAST AS", description: "24 hours" },
        ]}
      />

      <div className="marginBody mx-auto py-24">
        <div className="flex flex-col sm:flex-row item-start gap-10">
          <h1 className="w-[100%] sm:w-[45%] heading2 font-medium leading-tight">
            Stop Waiting for Payments and Access Your Working Capital
          </h1>
          <p className="w-[100%] sm:w-[65%] paragraph1">
          Sidwell capital’s invoice funding lets you access working capital that’s tied up in accounts receivable
            due to slow-paying customers.
            <br />
            <br />
            Have full confidence knowing you can unlock the full value of your unpaid customer invoices. Fill larger
            orders and take on bigger customers, on your terms.
            <br />
            <br />
            Apply today and our dedicated support team will help you identify funding opportunities and help your
            business grow.
          </p>
        </div>

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
              text: "Financing that grows with you",
            },
          ]}
        />

        <div className="pt-10 md:pt-20">
          <h1 className="text-center heading2 mb-4">Get started with AR Invoice Financing</h1>
          <p className="text-center paragraph2">
            Provide basic information about your business. If approved, you can request funds and receive them in your
            account in as fast as 48 hours.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-16 gap-10 md:gap-20">
          <div className="flex justify-center">
            <img
              src={"/assets/images/Person-02.jpg"}
              className="rounded-tl-full rounded-bl-full rounded-br-full md:max-w-[450px] object-contain"
              alt="person"
            />
          </div>
          <div>
            <h1 className="heading3 mb-6">Minimum Qualifications</h1>
            <p className="paragraph1 flex items-center">
              <BiChevronRight size={40} className="text-primary" /> <span>3+ months in business</span>
            </p>
            <p className="paragraph1  flex items-center">
              <BiChevronRight size={40} className="text-primary" /> $50,000 in yearly revenue
            </p>
            <p className="paragraph1  flex items-center">
              <BiChevronRight size={40} className="text-primary" /> No Minimum FICO
            </p>

            <h1 className="heading3 my-6">What You Need To Apply</h1>
            <p className="paragraph1  flex items-center">
              <BiChevronRight size={40} className="text-primary" /> Basic details about you and your business
            </p>
            <p className="paragraph1  flex items-center">
              <BiChevronRight size={40} className="text-primary" /> Bank statements for past 3 months
            </p>
            <p className="paragraph1  flex items-center">
              {" "}
              <BiChevronRight size={40} className="text-primary" /> Business is in good standing
            </p>
          </div>
        </div>
      </div>

      <div className="invoiceFinancingBGImage flex flex-col justify-center items-center">
        <h1 className="heading2 !font-bold text-white text-center mb-10">
          Start your application & secure the funds your business needs today
        </h1>

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

      <section className="marginBody mx-auto my-10 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 font-medium">Proven Excellence</h3>

          <p className="paragraph2">Don’t just take our word for it—check out what our clients have to say:</p>
        </div>
        <div className="self-center w-[70%]">
          <Carousal Reviews={GOOGLE_REVIEWS} />
        </div>
      </section>
      <section className="flex flex-col gap-10">
        <div className="bg-secondary w-full py-24">
          <div className="max-w-[1024px] mx-auto ">
            <h1 className="text-center heading2 mb-12">Frequently Asked Questions</h1>
            <Accordion DATA={FAQ_INVOICEFINANCE} />
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

export default InvoiceFinance;
