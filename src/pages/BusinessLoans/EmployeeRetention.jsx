import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { Accordion, Carousal } from "../../components";
import { ERC_ADVANCED, FAQ_ERC, FILED_FOR_ERC, GOOGLE_REVIEWS, INDUSTRY_LIST } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { BsCashCoin } from "react-icons/bs";
import { BiDollarCircle, BiChevronRight } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const EmployeeRetention = () => {
  const navigate = useNavigate();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [legalBusinessName, setLegalBusinessName] = useState("");
  const [w2Employees, setW2Employees] = useState("");
  const [industry, setIndustry] = useState("");
  const [filedForERC, setFiledForERC] = useState("");
  const [ercAdvance, setErcAdvance] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setLegalBusinessName("");
    setW2Employees("");
    setIndustry("");
    setFiledForERC("");
    setErcAdvance("");
  };

  return (
    <div className="mx-auto">
      <div className="marginBody mx-auto grid grid-cols-1 md:grid-cols-2 items-start py-8 md:py-16 gap-8">
        <div className="mt-10">
          <p className="paragraph1">Employee Retention Credit</p>
          <h2 className="heading2 mb-4">Secure Employee Retention Credits At No Risk and No Cost</h2>
          <p className="paragraph1">
            ERC is a federal program that we help you file to secure refunds from your 2020 and 2021 payroll which
            includes money you paid as an employer in wages, salaries, taxes, pensions, healthcare taxes, tipped wages,
            etc. Cidwell capital BBB A+ Rating
          </p>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <img src={"/assets/images/Accredit-A-Rating.png"} className="w-[120px]" alt="accredit"/>
            <img src={"/assets/images/certified_sbft.webp"} className="w-[120px]" alt="certify"/>
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
            title="Phone"
            required
            colSpan={2}
            placeholder={"555-555-5555"}
            twoInputInOneLine
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            title="Legal Business Name"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"Business Name"}
            value={legalBusinessName}
            onChange={(e) => setLegalBusinessName(e.target.value)}
          />
          <Input
            title="W-2 Employees"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"No. of W-2"}
            value={w2Employees}
            onChange={(e) => setW2Employees(e.target.value)}
          />
          <Select
            title="Choose your Industry"
            options={INDUSTRY_LIST}
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
          />
          <Select
            title="Did you already file for ERC?"
            options={FILED_FOR_ERC}
            value={filedForERC}
            onChange={(e) => setFiledForERC(e.target.value)}
          />
          <Select
            title="Are you interested in an ERC Advance?"
            options={ERC_ADVANCED}
            value={ercAdvance}
            onChange={(e) => setErcAdvance(e.target.value)}
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
          { title: "Receive Up To", description: "$26k/employee" },
          { title: "Repayment", description: "None" },
          { title: "Filing Time", description: "2-3 Weeks" },
        ]}
      />

      <div className="marginBody mx-auto py-8 md:py-16 lg:py-24">
        <div className="flex items-start flex-wrap md:flex-nowrap md:gap-10 lg:gap-20">
          <h1 className=" heading3 !text-primary font-semibold">
            ERC has been very lucrative to many small and mid-sized businesses across the country
          </h1>
          <p className=" paragraph1 text-justify">
            The Employee Retention Credit (ERC) Program is a program that allows businesses to secure payroll refunds
            from their 2020 and 2021 payrolls. The ERC could help employers recover money paid on wages, taxes,
            pensions, healthcare taxes, and more. Interested in the employee retention credit program but don’t know
            where to start? Cidwell capital is here to help!
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
              text: "No Repayment Required",
            },
            {
              icon: <BiDollarCircle size={40} className={"text-primary"} />,
              text: "We Do The Heavy Lifting",
            },
            {
              icon: <FaMoneyBillTrendUp size={40} className={"text-primary"} />,
              text: "Recover Covid Losses",
            },
          ]}
        />

        <div className="px-[20px] flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 leading-12 font-medium">
            Get Started With Your Employee Retention Credit Application
          </h3>

          <p className="paragraph1">
            The employee retention credit program is an extremely lucrative opportunity for many business owners.
            Provide us with basic information about your business and we can find out if you meet the employee retention
            credit qualifications.
          </p>
        </div>
        <div className="marginBody mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 py-8 md:py-16 gap-10 md:gap-20">
            <div className="flex items-center justify-start">
              <img
                src={"/assets/images/EmployeeRetention-section4.jpg"}
                className="rounded-tl-full rounded-bl-full rounded-br-full"
                alt="employee"
              />
            </div>
            <div>
              <h3 className=" mb-4 heading3  font-bold">Minimum Qualifications</h3>

              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">Minimum 5 W-2 employees</p>
              </div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary  w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  Business was subject to a disruption in daily operations due to a partial or full government shutdown
                  order during 2020/2021 and/or
                </p>
              </div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary  w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  Business saw a decrease in gross revenue due to government Covid restriction above
                </p>
              </div>

              {/*  */}
              <h3 className="mt-8 mb-4 heading3  font-bold">What you need to apply</h3>

              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  All you’ll need to get started is to submit an inquiry with the basic information requested at the top
                  of this page to connect with one of our dedicated agents over an introduction call. Our agents will be
                  able to answer any questions about the ERC program and walk you through our process to get you
                  started!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="businessLineCreditBGImage flex flex-col justify-center items-center">
        <h1 className="heading2 !font-bold !text-white text-center mb-10">
          Start your application & secure your <br />
          Employee Retention Credit
        </h1>

        <div className="marginBody grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="flex flex-row items-center">
            <div className="bg-primary  min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Easy Application</h2>
              <p className="text-white text-sm md:text-base">Complete an online funding application</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary  min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Minimal Work on Your End</h2>
              <p className="text-white text-sm md:text-base">We will handle the heavy lifting</p>
            </div>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-primary  min-w-[70px] min-h-[70px] md:min-w-[92px] md:min-h-[92px] rounded-full flex justify-center items-center">
              <TfiWrite size={40} className={"text-white"} />
            </div>
            <div className="text-white ml-5 sm:ml-10">
              <h2 className="mb-4 font-bold text-xl md:text-2xl">Receive Your Refund!</h2>
              <p className="text-white text-sm md:text-base">Up to $26,000 per employee</p>
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
      <section className="pt-10 md:pt-20">
        <div className="marginBody mx-auto px-[20px] flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 leading-12 font-medium">Why Cidwell Capital?</h3>

          <p className="paragraph1">
            Want to take advantage of the employee retention credit program but not sure if you should work with Cidwell
            Capital? We could briefly break down the advantages you get when you work with us:
          </p>
        </div>
        <div className="marginBody mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 py-16 gap-10 lg:gap-20">
            <div className="flex items-center justify-center">
              <img
                src={"/assets/images/men-disscussing-financial-statements-600x600.webp"}
                className="rounded-tl-full rounded-bl-full rounded-br-full"
                alt="discuss"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  <span className="font-semibold">Fast Financing:</span> Once you send over your
                  information, our expert agents are immediately on the case! We’re able to get your business funds
                  fast.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  <span className="font-semibold">A Committed Partner:</span> Our agents are committed to
                  your business’s ongoing success. We’re happy to provide continuous financing solutions that advance
                  your organization.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  <span className="font-semibold ">Sprawling Connections:</span> Cidwell capital is an
                  internationally recognized organization with global connections. Work with us and tap into our network
                  of financial expertise.
                </p>
              </div>
              <div className="flex items-center mb-4">
                <BiChevronRight className="text-primary w-[20px] min-w-[20px]" />
                <p className="paragraph1 ml-6">
                  <span className="font-semibold ">Security-First Practices and Strategies:</span> We use
                  advanced cybersecurity practices that ensure your private data stays safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="marginBody mx-auto my-10 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center gap-3 text-center">
          <h3 className="heading2 font-medium">Proven Excellence</h3>

          <p className="paragraph2">Don’t just take our word for it—check out what our clients have to say:</p>
        </div>
        <div className="self-center w-[70%]">
          <Carousal Reviews={GOOGLE_REVIEWS} />
        </div>
      </section>
      {/*  */}
      <section className="flex flex-col gap-10">
        <div className="bg-secondary w-full py-24">
          <div className="max-w-[1024px] mx-auto ">
            <h1 className="text-center heading2 mb-12">Frequently Asked Questions</h1>

            <Accordion DATA={FAQ_ERC} />
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

export default EmployeeRetention;
