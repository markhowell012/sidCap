import React, { useState } from "react";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import Button from "../../components/macros/Button";
import { Carousal } from "../../components";
import { GOOGLE_REVIEWS } from "../../utils/mock";
import { TfiWrite } from "react-icons/tfi";
import { BsCashCoin } from "react-icons/bs";
import {  BiSolidChevronRight } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { TbCalendarDollar, TbDirections } from "react-icons/tb";
import LoanFeatures from "./Components/LoanFeatures";
import LoanCard from "./Components/LoanCard";
import SuccessModal from "../../components/macros/SuccessModal";

const CommercialLoan = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // form 1
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [creditScore, setCreditScore] = useState(""); // Initialize with an empty string

  // form 2
  const [businessName, setBusinessName] = useState("");
  const [timeInBusiness, setTimeInBusiness] = useState("");
  const [annualRevenue, setAnnualRevenue] = useState("");
  const [yourIndustry, setYourIndustry] = useState("");
  const [avgMonthlyRevenue, setAvgMonthlyRevenue] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCreditScore("");

    setBusinessName("")
    setTimeInBusiness("")
    setAnnualRevenue("")
    setYourIndustry("")
    setAvgMonthlyRevenue("")

    setStep(1)
  };

  return (
    <div className="mx-auto">
      <div className="marginBody mx-auto grid grid-cols-1 md:grid-cols-2 items-start py-8 md:py-16 gap-8">
        <div className="mt-10">
          <h2 className="heading2 mb-4">Get Commercial Real Estate Loans Today</h2>
          <p className="paragraph1">
            Need help financing your commercial real estate investment? Sidwell capital can lend a hand. We have a
            wealth of experience helping small businesses secure real estate the financing they need to flourish.
          </p>

          <div className="flex items-center gap-4 mt-10 flex-wrap">
            <img src={"/assets/images/Accredit-A-Rating.png"} className="w-[120px]" alt="accredit"/>
            <img src={"/assets/images/certified_sbft.webp"} className="w-[120px]" alt="certify"/>
            <img src={"/assets/images/trustpilot_rating.png"} className="w-[120px]" alt="trustpilot"/>
          </div>
        </div>

        <FormLayout>
          {step === 1 ? (
            <>
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
              <Input
                title="Your Credit Score"
                type="select"
                required
                options={[
                  { label: "Your Credit Score", value: "" },
                  { label: "720+", value: "720+" },
                  { label: "680-719", value: "680-719" },
                  { label: "650-679", value: "650-679" },
                  { label: "600-649", value: "600-649" },
                  { label: "590 or Below", value: "590 or Below" },
                ]}
                placeholder={"555-555-5555"}
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
              />
              <div className="col-span-2 w-full">
                <Button
                  onClick={() => {
                    setStep(2);
                  }}
                  // icon={<GrSend font="white" />}
                  width={"w-full"}
                  height={"h-12"}
                  className="rounded-3xl"
                  title="Next"
                  variant={2}
                />
              </div>
            </>
          ) : (
            <>
              <Input
                title="Business Name"
                required
                placeholder={"Business Name"}
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
              />
              <Input
                title="Time in business"
                type="select"
                options={[
                  { label: "Time in Business", value: "" },
                  { label: "Less than 6 Months", value: "Less than 6 Months" },
                  { label: "1 Year", value: "1 Year" },
                  { label: "2 Years", value: "2 Years" },
                  { label: "3 Years", value: "3 Years" },
                  { label: "4 Years", value: "4 Years" },
                  { label: "5 Years", value: "5 Years" },
                  { label: "6 Years", value: "6 Years" },
                  { label: "7 Years", value: "7 Years" },
                  { label: "8 Years", value: "8 Years" },
                  { label: "9 Years", value: "9 Years" },
                  { label: "10+ Years", value: "10+ Years" },
                ]}
                required
                colSpan={2}
                twoInputInOneLine
                placeholder={"Time in business"}
                value={timeInBusiness}
                onChange={(e) => setTimeInBusiness(e.target.value)}
              />
              <Input
                title="Annual Revenue"
                type="select"
                options={[
                  { label: "Annual Revenue", value: "" },
                  { label: "Under $50,000", value: "Under $50,000" },
                  { label: "$50,000 - $120,000", value: "$50,000 - $120,000" },
                  {
                    label: "$120,000 - $360,000",
                    value: "$120,000 - $360,000",
                  },
                  {
                    label: "$360,000 - $1,000,000",
                    value: "$360,000 - $1,000,000",
                  },
                  {
                    label: "$1,000,000 - $1,800,000",
                    value: "$1,000,000 - $1,800,000",
                  },
                  {
                    label: "$1,800,000 - $3,000,000",
                    value: "$1,800,000 - $3,000,000",
                  },
                  { label: "$3,000,000 +", value: "$3,000,000 +" },
                ]}
                required
                colSpan={2}
                twoInputInOneLine
                placeholder={"Annual Revenue"}
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(e.target.value)}
              />
              <Input
                title="Your Industry"
                type="select"
                options={[
                  { label: "Your Industry", value: "" },
                  { label: "Advertising", value: "Advertising" },
                  { label: "Aerospace/Defense", value: "Aerospace/Defense" },
                  { label: "Agriculture", value: "Agriculture" },
                  { label: "Apparel", value: "Apparel" },
                  { label: "Auction", value: "Auction" },
                  { label: "Auto", value: "Auto" },
                  { label: "Auto Repair", value: "Auto Repair" },
                  { label: "Auto Sales", value: "Auto Sales" },
                  { label: "Aviation", value: "Aviation" },
                  { label: "Banking", value: "Banking" },
                  { label: "Bar / Nightclub", value: "Bar / Nightclub" },
                  {
                    label: "Beauty / Nail Salon",
                    value: "Beauty / Nail Salon",
                  },
                  { label: "Biotechnology", value: "Biotechnology" },
                  {
                    label: "Broker / Re-sellers - Coin, Ticket, Pawn Shop",
                    value: "Broker / Re-sellers - Coin, Ticket, Pawn Shop",
                  },
                  { label: "Business Services", value: "Business Services" },
                  { label: "Call Center", value: "Call Center" },
                  { label: "Cannabis", value: "Cannabis" },
                  { label: "Car Rental", value: "Car Rental" },
                  {
                    label: "Casino / Gambling / Sports Clubs",
                    value: "Casino / Gambling / Sports Clubs",
                  },
                  { label: "Cell Phone Sales", value: "Cell Phone Sales" },
                  { label: "Chemicals", value: "Chemicals" },
                  { label: "Cleaning", value: "Cleaning" },
                  { label: "Communications", value: "Communications" },
                  { label: "Construction", value: "Construction" },
                  { label: "Consulting", value: "Consulting" },
                  {
                    label: "Contractor - General",
                    value: "Contractor - General",
                  },
                  {
                    label: "Contractor - Painting",
                    value: "Contractor - Painting",
                  },
                  {
                    label: "Contractor - Paving",
                    value: "Contractor - Paving",
                  },
                  {
                    label: "Contractor - Plumbing",
                    value: "Contractor - Plumbing",
                  },
                  {
                    label: "Contractor - Roofing",
                    value: "Contractor - Roofing",
                  },
                  { label: "Convenience Store", value: "Convenience Store" },
                  { label: "Courier Service", value: "Courier Service" },
                  {
                    label: "Day Care / Child Care",
                    value: "Day Care / Child Care",
                  },
                  { label: "Dental", value: "Dental" },
                  { label: "Design", value: "Design" },
                  { label: "Detective", value: "Detective" },
                  { label: "Dry Cleaner", value: "Dry Cleaner" },
                  {
                    label: "Ecommerce - No Inventory / Drop Shipping",
                    value: "Ecommerce - No Inventory / Drop Shipping",
                  },
                  { label: "Education", value: "Education" },
                  { label: "Electrician", value: "Electrician" },
                  { label: "Electronic Sales", value: "Electronic Sales" },
                  { label: "Energy", value: "Energy" },
                  { label: "Engineering", value: "Engineering" },
                  { label: "Entertainment", value: "Entertainment" },
                  { label: "Environmental", value: "Environmental" },
                  {
                    label: "Environmental Services",
                    value: "Environmental Services",
                  },
                  { label: "Equipment Rental", value: "Equipment Rental" },
                  { label: "Equipment Sales", value: "Equipment Sales" },
                  {
                    label: "Equipment Service / Repair",
                    value: "Equipment Service / Repair",
                  },
                  {
                    label: "Farming / Agriculture",
                    value: "Farming / Agriculture",
                  },
                  { label: "Finance", value: "Finance" },
                  {
                    label: "Financial - Collection / Money Services",
                    value: "Financial - Collection / Money Services",
                  },
                  { label: "Financial Services", value: "Financial Services" },
                  {
                    label: "Fire Arms / Ammunition",
                    value: "Fire Arms / Ammunition",
                  },
                  { label: "Fitness Center", value: "Fitness Center" },
                  { label: "Florist", value: "Florist" },
                  { label: "Food / Beverage", value: "Food / Beverage" },
                  { label: "Fuel Delivery", value: "Fuel Delivery" },
                  { label: "Funeral Home", value: "Funeral Home" },
                  { label: "Furniture Store", value: "Furniture Store" },
                  { label: "Gas Station", value: "Gas Station" },
                  { label: "Government", value: "Government" },
                  { label: "Grocery Store", value: "Grocery Store" },
                  { label: "Healthcare", value: "Healthcare" },
                  { label: "Home Healthcare", value: "Home Healthcare" },
                  { label: "Hospitality", value: "Hospitality" },
                  { label: "HVAC", value: "HVAC" },
                  { label: "Import / Export", value: "Import / Export" },
                  { label: "Insurance", value: "Insurance" },
                  { label: "Janitorial", value: "Janitorial" },
                  { label: "Junk Yard", value: "Junk Yard" },
                  { label: "Landscaping", value: "Landscaping" },
                  {
                    label: "Legal Services / Law Firm",
                    value: "Legal Services / Law Firm",
                  },
                  { label: "Liquor Store", value: "Liquor Store" },
                  { label: "Logging", value: "Logging" },
                  { label: "Machinery", value: "Machinery" },
                  { label: "Manufacturing", value: "Manufacturing" },
                  { label: "Marketing", value: "Marketing" },
                  { label: "Massage Therapy", value: "Massage Therapy" },
                  { label: "Media", value: "Media" },
                  { label: "Medical", value: "Medical" },
                  { label: "Medical Spa", value: "Medical Spa" },
                  { label: "Medical Training", value: "Medical Training" },
                  {
                    label: "Mineral / Oil Mining Expedition",
                    value: "Mineral / Oil Mining Expedition",
                  },
                  { label: "Non-Profit", value: "Non-Profit" },
                  { label: "Not for Profit", value: "Not for Profit" },
                  { label: "Nursery", value: "Nursery" },
                  { label: "Optometrist", value: "Optometrist" },
                  { label: "Pest Control", value: "Pest Control" },
                  { label: "Pet Groomer", value: "Pet Groomer" },
                  { label: "Pharmacy", value: "Pharmacy" },
                  { label: "Photography", value: "Photography" },
                  { label: "Plastic Surgeon", value: "Plastic Surgeon" },
                  { label: "Plumbing", value: "Plumbing" },
                  { label: "Primary Care", value: "Primary Care" },
                  { label: "Printing", value: "Printing" },
                  {
                    label: "Professional Services",
                    value: "Professional Services",
                  },
                  {
                    label: "Property Management",
                    value: "Property Management",
                  },
                  { label: "Real Estate", value: "Real Estate" },
                  { label: "Recreation", value: "Recreation" },
                  {
                    label: "Religious Institute",
                    value: "Religious Institute",
                  },
                  { label: "Restaurant", value: "Restaurant" },
                  { label: "Retail", value: "Retail" },
                  { label: "Salon", value: "Salon" },
                  { label: "School / Education", value: "School / Education" },
                  { label: "Security", value: "Security" },
                  { label: "Shipping", value: "Shipping" },
                  {
                    label: "Sign Language Interpretation",
                    value: "Sign Language Interpretation",
                  },
                  {
                    label: "Smoke / Tobacco / Vape Shops",
                    value: "Smoke / Tobacco / Vape Shops",
                  },
                  { label: "Staffing", value: "Staffing" },
                  { label: "Storage", value: "Storage" },
                  { label: "Technology", value: "Technology" },
                  { label: "Telecommunications", value: "Telecommunications" },
                  { label: "Towing", value: "Towing" },
                  { label: "Transportation", value: "Transportation" },
                  { label: "Travel", value: "Travel" },
                  { label: "Trucking", value: "Trucking" },
                  { label: "User / Lyft / Taxi", value: "User / Lyft / Taxi" },
                  { label: "Utilities", value: "Utilities" },
                  { label: "Veterinarian", value: "Veterinarian" },
                  { label: "Waste Management", value: "Waste Management" },
                  {
                    label: "Wholesale / Distributor",
                    value: "Wholesale / Distributor",
                  },
                  { label: "Window Tinting", value: "Window Tinting" },
                  { label: "Other", value: "Other" },
                ]}
                required
                colSpan={2}
                twoInputInOneLine
                placeholder={"Your Industry"}
                value={yourIndustry}
                onChange={(e) => setYourIndustry(e.target.value)}
              />
              <Input
                title="Avg. Monthly Revenue"
                type="select"
                options={[
                  { label: "Avg. Monthly Revenue", value: "" },
                  { label: "Under $5,000", value: "Under $5,000" },
                  { label: "$5,000 - $10,000", value: "$5,000 - $10,000" },
                  { label: "$10,000 - $25,000", value: "$10,000 - $25,000" },
                  { label: "$25,000 - $50,000", value: "$25,000 - $50,000" },
                  { label: "$50,000 - $100,000", value: "$50,000 - $100,000" },
                  { label: "$100,000 +", value: "$100,000 +" },
                ]}
                required
                colSpan={2}
                twoInputInOneLine
                placeholder={"Avg. Monthly Revenue"}
                value={avgMonthlyRevenue}
                onChange={(e) => setAvgMonthlyRevenue(e.target.value)}
              />
              <div className="col-span-2 w-full">
                <Button
                  width={"w-full"}
                  height={"h-12"}
                  className="rounded-3xl"
                  title="Apply Now"
                  variant={2}
                  onClick={() => setShowSuccessModal(true)}
                />
                <div className="col-span-2 w-full mt-6">
                  <Button
                    onClick={() => {
                      setStep(1);
                    }}
                    backgroundColor="bg-secondary"
                    width={"w-full"}
                    height={"h-12"}
                    className="rounded-3xl"
                    title="Back"
                    variant={2}
                  />
                </div>
              </div>
            </>
          )}
        </FormLayout>
      </div>
      <div className="w-full h-auto py-10 md:py-5 lg:h-[192px] bg-[#F7FAFE] flex flex-col justify-center">
        <LoanFeatures
          features={[
            { title: "LOAN AMOUNT UP TO", description: "$100m" },
            { title: "TERM UP TO", description: "5 years" },
            { title: "RATES", description: " Extremely competitive" },
            { title: "DECISIONS AS FAST AS", description: "72 hours" },
          ]}
        />
      </div>
      <div className="marginBody mx-auto py-8 md:py-16 lg:py-24">
        <div className="flex flex-wrap sm:flex-nowrap items-start gap-8">
          <h1 className="w-full sm:w-[40%] heading2">Acquire Competitive Commercial Real Estate Loans With Us</h1>
          <p className="w-full sm:w-[60%] paragraph1 text-justify">
            Financing real estate purchases as a small or mid-sized business can seem impossible to do on your own,
            which is why so many business owners lean on loans to get the help they need. Unfortunately, many business
            owners realize that finding commercial real estate loans at reasonable rates isn’t easy. They find
            themselves stuck between a rock and a hard place where they need financing but their only options are loans
            with unreasonable rates that they can’t realistically accept.
          </p>
        </div>

        <div className="py-10">
          <p className="paragraph1">
          Sidwell capital can help you get access to real estate loans at competitive rates today. We’re eager to
            connect you with our nationwide network of qualified vendors to get you commercial real estate loans you can
            afford. Get in touch today and take the first step toward getting the financing you need.
          </p>
        </div>
        <div className="pt-7 md:pt-10 lg:pt-20">
          <h1 className="text-center heading2 mb-4">Get Started on Your Next Loan</h1>
        </div>

        <LoanCard
          data={[
            {
              icon: <TbCalendarDollar size={40} className={"text-primary"} />,
              text: "Monthly Payments",
            },
            {
              icon: <TbDirections size={40} className={"text-primary"} />,
              text: "Flexible Loan Terms",
            },
            {
              icon: <BsCashCoin size={40} className={"text-primary"} />,
              text: "Loans from $100k to $100M",
            },
            {
              icon: <FaMoneyBillTrendUp size={40} className={"text-primary"} />,
              text: "Dedicated Team of Professionals",
            },
          ]}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-16 gap-10 md:gap-20">
          <div className="flex flex-col justify-center">
            <p className="text-left paragraph1 ">
              Provide basic information about your business and the property you’re looking to invest in.
            </p>
            <p className="text-left paragraph1 mt-4">
              Our consultants will then complete an initial review to determine if your financing request can be met. If
              so, we’ll contact you to get started on securing your future real estate loan!
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="heading3 ">Minimum Qualifications</h2>
            <div className="flex flex-row items-center">
              <BiSolidChevronRight className="text-primary mt-4 mr-2" />
              <p className="text-left paragraph1 mt-4 ">550+ credit score</p>
            </div>
            <div className="flex flex-row items-center">
              <BiSolidChevronRight className="text-primary mt-4 mr-2" />
              <p className="text-left paragraph1 mt-4 ">2+ Years in Business</p>
            </div>
            <h2 className="heading3 mt-4">What You Need To Apply</h2>
            <div className="flex flex-row items-center">
              <BiSolidChevronRight className="text-primary mt-4 mr-2" />
              <p className="text-left paragraph1 mt-4 ">Basic information about you and your business</p>
            </div>
            <div className="flex flex-row items-center">
              <BiSolidChevronRight className="text-primary mt-4 mr-2" />
              <p className="text-left paragraph1 mt-4 ">Basic details about the subject property</p>
            </div>
            <div className="flex flex-row items-center">
              <BiSolidChevronRight className="text-primary mt-4 mr-2" />
              <p className="text-left paragraph1 mt-4 ">Business is in good standing</p>
            </div>
          </div>
        </div>
      </div>
      <div className="commercialLoanBGImage flex flex-col justify-center items-center">
        <h1 className="heading2 !font-bold text-white text-center mb-10 px-10 md:px-20 lg:px-40">
          Start Your Application and Secure the Funds Your Business Needs Today
        </h1>

        <div className="marginBody grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
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
              <p className="text-white text-sm md:text-base">Receive funds in as little as 72 hours!</p>
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
      <section className="marginBody mx-auto my-10 md:my-20 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-start gap-3 text-left">
          <h3 className="heading3 !text-primary font-medium ">Secure High-Quality Commercial Real Estate Loans Fast</h3>
          <p className="paragraph1">Let’s review why Sidwell capital is the right partner for you.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="heading3 ">Emphasis on Security</h3>
            <p className="paragraph1">
              Security is everything in the modern business environment. Cyberthreats get more elaborate every day, and
              many businesses in the financial industry can’t keep up. Fortunately, we’ve prioritized security from day
              one and consistently train our employees on new security strategies and implement revolutionary
              cybersecurity software. Compromised financial data can have disastrous consequences for your business—work
              with Sidwell Capital to avoid them.
            </p>
          </div>
          <div>
            <h3 className="heading3 ">Relationship-Driven Approach to Financing</h3>
            <p className="paragraph1">
              <span className="text-primary">
                <Link to="/about-us">People are the point at Sidwell Capital.</Link>
              </span>{" "}
              We use this perspective to inform everything we do, from our client interaction model to our relationships
              with the country’s best lenders. Too many businesses in the finance industry get caught up in numbers,
              bottom lines, and statistics and forget that it’s actually all about people. We always keep sight of that
              at Sidwell Capital, which is why you can trust us to meet your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-3 text-left">
          <h3 className="heading3 font-medium ">Transparent Processes</h3>
          <p className="paragraph1">
            Not only do we understand and emphasize data protection, but everything we do is grounded in transparency
            and openness. Unlike other companies that provide sketchy loans that aren’t the best match for your
            business, we frame everything we do around your organization’s success.
          </p>
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

export default CommercialLoan;
