import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Carousal } from "../../components";
import { CREDIT_SCORE_LIST, GOOGLE_REVIEWS } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const BusinessLineCredits = () => {
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
          <h2 className="heading2 mb-4">Get Access To A Business Line Of Credit Today</h2>
          <p className="paragraph1">
            Business lines of credit are one of the best financing options for businesses that need financing but don’t
            want to take out a traditional loan. If you’re interested but don’t know where to turn, work with Sidwell
            Capital!
            <br />
            <br />
            We’ll combine our financial expertise with our deep connections to secure you financing options that other
            companies can’t. Keep reading to learn more about business lines of credit and the advantages of partnering
            with Sidwell Capital.
          </p>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <img src={"/assets/images/Accredit-A-Rating.png"} className="w-[120px]" alt="accredit"/>
            <img src={"/assets/images/certified_sbft.webp"} className="w-[120px]" alt="ceritfy"/>
            <img src={"/assets/images/trustpilot_rating.png"} className="w-[120px]" alt="trustpilot"/>
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
          { title: "LINE OF CREDIT FROM", description: "$10k - $1m" },
          { title: "TERM AS LONG AS", description: "$10k - $1m" },
          { title: "RATES AS LOW AS", description: "7%" },
          { title: "DECISIONS AS FAST AS", description: "24 hours" },
        ]}
      />

      <div className="marginBody mx-auto py-8 sm:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <h1 className=" heading2">Everything You Need to Know About Business Lines of Credit</h1>
          <p className=" paragraph1 text-justify">
            As one of the most popular financing options for business owners today, credit line lets businesses borrow
            an amount of money up to a specified limit and only charges interest on the actual amount borrowed.
          </p>
        </div>

        <div className="py-10">
          <p className="paragraph1">
            Where a traditional loan requires business owners to pay back their amount in monthly installments, credit
            lines let you pay back your debts on more flexible terms. When looking at a business line of credit vs. a
            loan, credit lines are generally the superior option—especially for businesses with low working capital with
            volatile financing requirements.
            <br />
            <br />
            Benefits of credit lines include:
            <br />
            - Easy Access to Short-Term Funding
            <br />
            - Flexibility in Application
            <br />
            - Credit Building Tool
            <br />
            - Continual Borrowing Capabilities
            <br />
            <br />
            It’s no surprise that business lines of credit are the most popular financing tool for businesses looking to
            grow.
          </p>
        </div>

        <div>
          <h1 className="heading3 !text-primary">Our Credit Line Qualifications</h1>
          <p className="paragraph1 mt-2">
            Have you tried tracking down a business line of credit but find yourself being continually rejected by
            lenders? Work with the experts at Sidwell capital! Our team can collaborate with you to get the financing
            you need. Best of all, the requirements to start working with us are minimal:
          </p>

          <div className="grid grid-cols-2">
            <h1 className="heading3 font-bold py-10">6+ Months in Business</h1>
            <h1 className="heading3 font-bold py-10">$50,000 in Yearly Revenue</h1>
          </div>
          <p className="paragraph1">
            If you meet these basic qualifications and your business is in good standing, prepare the following
            paperwork so we can get started on getting your business the financing it needs:
          </p>
          <div className="grid grid-cols-2">
            <h1 className="heading3 font-bold py-10">Basic Details About You and Your Business</h1>
            <h1 className="heading3 font-bold py-10">Bank Statements Over the Past Three Months</h1>
          </div>
        </div>

        <div className="pt-10 md:pt-20">
          <h1 className="text-center heading2 mb-4">Why Sidwell Capital?</h1>
          <p className="text-center paragraph2">Sidwell Capital already has a variety of advantages over its competitors:</p>
        </div>
        <LoanCard
          data={[
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "No application fee",
            },
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "No prepayment penalties",
            },
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "Funds available on demand",
            },
            {
              icon: <TfiWrite size={40} className={"text-primary"} />,
              text: "Financing that grows with you",
            },
          ]}
        />

        <p className="text-center paragraph1">But we’re more than a generic list of benefits. Work with us and get:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 py-2 md:py-16 gap-2 md:gap-20">
          <div>
            <img src={"/assets/images/Person-01.jpg"} className="rounded-tl-full rounded-bl-full rounded-br-full" alt="person"/>
          </div>
          <div>
            <h1 className="heading2 text-[36px] mb-6">Partners Committed To Your Financial Success</h1>
            <p className="paragraph1 ">
              Compared to other companies in the industry, we aren’t driven exclusively by internal profits. We’re
              ultimately focused on our clients’ organizational success, which is why our team uses a
              relationship-driven approach. We anchor all of our advice and solutions to your goals, so you can rest
              assured you’re getting a solution that matches your needs. We’re more than a faceless intermediary—we’re{" "}
              <span className="text-primary cursor-pointer">committed partners</span>.
            </p>
          </div>
          <div>
            <h1 className="heading2 text-[36px] mb-6">Sprawling Financial Industry Connections</h1>
            <p className="paragraph1 ">
              Business success is predicated upon cultivating the right relationships—especially in the financial
              industry. We recognize the importance of connections at Sidwell Capital, which is why we’ve developed deep bonds
              with the country’s leading lenders and financial institutions. Not only do these connections keep us on
              top of the latest trends in the industry, but they facilitate better transactions. We leverage these
              connections on a daily basis to secure financing that other companies can’t.
            </p>
          </div>
          <div>
            <h1 className="heading2 text-[36px] mb-6">A Security-First Approach</h1>
            <p className="paragraph1">
              Cyberattacks become more sophisticated every day. Compromised financial information could have disastrous
              consequences for your business, including lost funds, operational disruptions, and lost information. Big
              Think recognizes the severity of cyberthreats, which is why we maintain stringent security practices and
              have implemented advanced security platforms like{" "}
              <span className="text-primary cursor-pointer">Decision Logic </span> and{" "}
              <span className="text-primary cursor-pointer">Plaid</span>. Between our trained employees and cutting-edge
              cybersecurity software, you can be confident that private data stays private with us.
            </p>
          </div>
        </div>
      </div>

      <div className="businessLineCreditBGImage flex flex-col justify-center gap-10 items-center">
        <h1 className="heading2 !font-bold !text-white text-center ">Secure Your Business Line of Credit</h1>

        <div className="marginBody grid grid-cols-1 lg:grid-cols-3 gap-10 ">
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Easy Application</h2>
              <p className="text-white text-sm md:text-base">Complete an online funding application</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Receive Offers</h2>
              <p className="text-white text-sm md:text-base">Get best offers from our provider network</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Get Funded FAST</h2>
              <p className="text-white text-sm md:text-base">Receive funds in as little as 24 hours!</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
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

export default BusinessLineCredits;
