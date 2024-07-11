import { AiFillLinkedin, AiFillShop, AiOutlineCheck } from "react-icons/ai";
import {
  BsInstagram,
  BsArrowUpRight,
  BsBank,
  BsBagCheck,
  BsLightningChargeFill,
  BsBuildings,
  BsFileEarmarkTextFill,
} from "react-icons/bs";
import { BiSolidPencil, BiCalendarCheck, BiTimer } from "react-icons/bi";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";
import { RxEnter } from "react-icons/rx";
import { GiIdCard } from "react-icons/gi";
import { RiHandCoinLine } from "react-icons/ri";
import { TbTableOptions, TbReportMoney } from "react-icons/tb";

import {
  FaCreditCard,
  FaPiggyBank,
  FaFileInvoiceDollar,
  FaRegCreditCard,
  FaTwitter,
  FaFacebookSquare,
} from "react-icons/fa";
import { FaShieldHalved, FaMoneyCheckDollar, FaDatabase, FaCarSide } from "react-icons/fa6";
import { CgCalculator } from "react-icons/cg";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

export const NAV_ITEMS = [
  {
    id: 1,
    route: "/",
    name: "Home",
  },
  {
    id: 2,
    name: "About",
    children: [
      {
        id: 2.1,
        name: "Our Story",
        route: "/about-us",
        icon: <RxEnter />,
      },
      {
        id: 2.2,
        name: "Careers",
        route: "/career",
        icon: <BsArrowUpRight />,
      },
    ],
  },
  {
    id: 3,
    name: "Service",
    children: [
      {
        id: 3.1,
        name: "Direct Funding Programs",
        route: "/programs",
        icon: <FiArrowDown />,
      },
      {
        id: 3.2,
        name: "Business Funding Marketplace",
        route: "/marketplace",
        icon: <BsBagCheck />,
      },
    ],
  },
  {
    id: 4,
    name: "Resources",
    children: [
      {
        id: 4.1,
        name: "Are you ready to get funded?",
        route: "/onboarding",
        icon: <AiOutlineCheck />,
      },
      {
        id: 4.2,
        name: "Business funding blog",
        route: "/small-business-blog",
        icon: <MdOutlineBusinessCenter />,
      },
      {
        id: 4.2,
        name: "Industries we serve",
        route: "/industries-we-serve",
        icon: <TbTableOptions />,
      },
    ],
  },

  {
    id: 5,
    route: "/affiliate-program",
    name: "Affiliates",
  },
  {
    id: 6,
    name: "Business Loans",
    children: [
      {
        id: 6.1,
        name: "Overview",
        route: "/small-business-loans",
      },
      {
        id: 6.2,
        name: "Business Line of credit",
        route: "/business-line-of-credit",
      },
      {
        id: 6.3,
        name: "Commercial Real Estate Loan",
        route: "/commercial-real-estate-loans",
      },
      {
        id: 6.4,
        name: "Employee Retention Credit",
        route: "/erc",
      },
      {
        id: 6.5,
        name: "Equipment Financing",
        route: "/equipment-financing",
      },
      {
        id: 6.6,
        name: "Invoice Financing",
        route: "/invoice-financing",
      },
      {
        id: 6.7,
        name: "Merchant Cash Advance",
        route: "/merchant-cash-advance",
      },
      {
        id: 6.8,
        name: "SBA Loan",
        route: "/sba-loans",
      },
      {
        id: 6.9,
        name: "Short Term Loan",
        route: "/short-term-loans",
      },
      {
        id: 6.11,
        name: "Term Loan",
        route: "/term-loan",
      },
    ],
  },
  {
    id: 7,
    route: "/contact",
    name: "Contact Us",
  },
];

export const SEENITEMS = [
  {
    id: 1,
    name: "CBS",
    imageSrc: "/assets/images/LOGOS/Logo-CBS.png",
  },
  {
    id: 2,
    name: "NBC",
    imageSrc: "/assets/images/LOGOS/Logo-NBC.png",
  },
  {
    id: 3,
    name: "USAtoday",
    imageSrc: "/assets/images/LOGOS/Logo-USAtoday.png",
  },
  {
    id: 4,
    name: "FOX",
    imageSrc: "/assets/images/LOGOS/Logo-FOX.png",
  },
  {
    id: 5,
    name: "MW",
    imageSrc: "/assets/images/LOGOS/Logo-MW.png",
  },
];

export const FOOTER_LINKS = [
  {
    id: 1,
    name: "Career",
    category: "company",
    route: "/career",
  },
  {
    id: 2,
    name: "FAQs",
    category: "company",
    route: "/faqs",
  },
  {
    id: 3,
    name: "About Us",
    category: "company",
    route: "/about-us",
  },
  {
    id: 4,
    name: "Partners",
    category: "company",
    route: "/about-us",
  },
  {
    id: 5,
    name: "Syndication",
    category: "company",
    route: "/syndication",
  },
  {
    id: 6,
    name: "Customer Feedback",
    category: "company",
    route: "/feedback",
  },
  {
    id: 7,
    name: "Twitter",
    category: "connect",
    icon: <FaTwitter />,
    route: "/",
  },
  {
    id: 8,
    name: "LinkedIn",
    category: "connect",
    icon: <AiFillLinkedin />,
    route: "/",
  },
  {
    id: 9,
    name: "facebook",
    category: "connect",
    icon: <FaFacebookSquare />,
    route: "/",
  },
  {
    id: 10,
    name: "Instagram",
    category: "connect",
    icon: <BsInstagram />,
    route: "/",
  },
  {
    id: 11,
    name: "Affiliates",
    category: "resources",
    route: "/affiliate-program",
  },
  {
    id: 12,
    name: "Terms of Use",
    category: "resources",
    route: "/terms-of-use",
  },
  {
    id: 13,
    name: "Privacy Policy",
    category: "resources",
    route: "/privacy-policy",
  },
];

export const TRUSTEDBY = [
  {
    id: 1,
    name: "Emily Johnson",
    description:
      "I can't say enough good things about this company! From start to finish, they've made the process of securing funding for my small business a breeze. Their commitment to streamlining the entire experience is evident, and it's clear that they prioritize making things easy for their clients. I was pleasantly surprised by how seamlessly the application process went, and the personalized options they provided were exactly what I needed. I highly recommend them to any small business owner looking for hassle-free funding solutions.",
    imageSrc: "/assets/images/User-Leslie.webp",
  },
  {
    id: 2,
    name: "Michael Brown",
    description:
      "I was somewhat apprehensive about the loan application process at first, but once I learned about this company's stellar reputation for top-notch customer service, I decided to take the plunge. And let me tell you, it was one of the best decisions I've made for my business! The team exceeded my expectations, providing me with all the necessary information to navigate my funding choices with confidence. Their patience, empathy, and genuine concern for my business's prosperity truly set them apart. I couldn't be happier with the experience.",
    imageSrc: "/assets/images/User-Dennis.webp",
  },
  {
    id: 3,
    name: "David Garcia",
    description:
      "As a small business owner, I've had my fair share of challenges when it comes to financing. However, since partnering with this company, I've been blown away by the level of personalized service and support they've provided me. From the start, their team took the time to understand my unique needs and crafted a loan package that fit my business like a glove. And the best part? I received a decision the same day I applied!",
    imageSrc: "/assets/images/User-Amily.webp",
  },
  {
    id: 4,
    name: "Joseph Robinson",
    description:
      "Navigating financing as a small business owner can be quite the journey, but ever since I joined forces with this company, my experience has been nothing short of exceptional. The personalized service and support they offer have truly surpassed my expectations. Right from the get-go, their team demonstrated a keen understanding of my business's specific requirements, tailoring a loan package that felt like it was made just for me. And talk about efficiency – I was thrilled to receive a decision on my application the very same day I applied! It's safe to say I've found my go-to partner for all my financing needs.",
    imageSrc: "/assets/images/User-Dianne.webp",
  },
  {
    id: 5,
    name: "Olivia Smith",
    description:
      "I was truly impressed by the exceptional level of personalized service provided by this business finance company. Every step of the way, from the simple online application process to the speedy decision-making and fast funding, was smooth sailing and completely hassle-free. Without a doubt, I would enthusiastically recommend this company to any small business owner seeking a dependable and trustworthy partner to support their growth and success.",
    imageSrc: "/assets/images/User-Kristen.webp",
  },
];

export const HOWTOSTEPS = [
  {
    title: "Easy Sign Up",
    description: "Simple online application completed within minutes.",
    icon: <BiSolidPencil className="text-secondary text-base" />,
  },
  {
    title: " Same-Day Decision",
    description: "Easy and fast so you can focus on running your business.",
    icon: <BiCalendarCheck className="text-secondary text-base" />,
  },
  {
    title: "Fast Funding",
    description: "Funds automatically deposited into your business account the same day.",
    icon: <BsLightningChargeFill className="text-secondary text-base" />,
  },
  {
    title: "Bad Credit?",
    description: "Business loans for bad credit. No matter your profile, what matters is your cash flow.",
    icon: <BsFileEarmarkTextFill className="text-secondary text-base" />,
  },
];

export const SMALL_BLOGS = [
  {
    id: 1,
    title: "Unlocking Your Business Potential: A Comprehensive Guide to Securing Capital Funding",
    description: "Cidwell CAPITAL - BLOG TEAM October 10, 2023",
    imageSrc: "/assets/images/Blog-Image1.webp",
  },
  {
    id: 2,
    title: "Fueling Your Mobile App Success: A Comprehensive Guide to Securing Capital Funding for App Entrepreneurs",
    description: "Cidwell CAPITAL - BLOG TEAM October 21, 2023",
    imageSrc: "/assets/images/Blog-Image2.webp",
  },
  {
    id: 3,
    title: "Elevating Your Website Venture: A Comprehensive Guide to Securing Capital Funding for Digital Success",
    description: "Cidwell CAPITAL - BLOG TEAM October 27, 2023",
    imageSrc: "/assets/images/Blog-Image3.webp",
  },
];

export const INDUSTRIES = [
  {
    id: 1,
    title: "Medical Practice Loans",
    description: "Surgeons, psychiatrist, dermatologist and all specialties.",
    imageSrc: "/assets/images/Industries-image1.png",
  },
  {
    id: 2,
    title: "Automotive Repair Shop Loans",
    description: "Collision repair, garages, car care centers & tires shops.",
    imageSrc: "/assets/images/Industries-image2.png",
  },
  {
    id: 3,
    title: "Restaurant Loans",
    description: "Fast food, casual dining, fine dining, coffee shops, pubs & more.",
    imageSrc: "/assets/images/Industries-image3.png",
  },
  {
    id: 4,
    title: "Construction Business Loans",
    description: "Contractors, electricians, plumbers, HVAC specialty & more.",
    imageSrc: "/assets/images/Industries-image4.png",
  },
  {
    id: 5,
    title: "Cleaning Services Loans",
    description: "Commercial cleaners, home cleaners, window cleaners & more.",
    imageSrc: "/assets/images/Industries-image5.png",
  },
  {
    id: 6,
    title: "Retail Store Loans",
    description: "Convenience stores, specialty stores, used goods & more.",
    imageSrc: "/assets/images/Industries-image6.png",
  },
  {
    id: 7,
    title: "Manufacturing Loans",
    description: "Metal manufacturing, food production, wood processing and more.",
    imageSrc: "/assets/images/Industries-image7.png",
  },
  {
    id: 8,
    title: "Staffing Service Loans",
    description: "Recruitment agencies, contract-to-hire businesses and more.",
    imageSrc: "/assets/images/Industries-image8.png",
  },
  {
    id: 9,
    title: "Attorney Firms Loans",
    description: "Family law, personal injury law, real estate law and all specialities.",
    imageSrc: "/assets/images/Industries-image9.png",
  },
  {
    id: 10,
    title: "Auto Dealer Loans",
    description: "Independent dealers, used car dealers, repair shops & more.",
    imageSrc: "/assets/images/Industries-image10.png",
  },
  {
    id: 11,
    title: "Accounting Firms Loans",
    description: "Accounting firms auditing, bookkeeping practices & more.",
    imageSrc: "/assets/images/Industries-image11.png",
  },
  {
    id: 12,
    title: "Beauty Salon Loans",
    description: "Hair salons, makeup salons, day spas and more.",
    imageSrc: "/assets/images/Industries-image12.jpeg",
  },
];

export const FAQS = [
  {
    title: "Who is Cidwell Capital?",
    content:
      "Cidwell Capital is a respectable Cash Advance Company. We were founded in 2012 and have since spent years dedicated to helping countless customers achieve something better than short term business loans, which is an interest-free business cash advance. We continue to work hard, providing working capital to all types of industries and businesses nationwide.",
  },
  {
    title: "What is a merchant cash advance?",
    content:
      "A merchant cash advance or MCA, also known as a business cash advance, is a form of business financing. This type of financing consists of a lump-sum payment being given to a business in exchange for a percentage of their future revenue or credit card sales.",
  },
  {
    title: "Who is eligible for a cash advance?",
    content:
      "Small to mid-sized businesses that have been in business for at least 6 months and have deposited at least $12,000 on an average monthly basis.",
  },
  {
    title: "What type of programs do you offer? ",
    content:
      "Cidwell Capital is proud to offer our customers a wide variety of cash advance programs. We know how important it is to get the money you need for your business fast. That’s why we work hard to provide programs that are well suited for almost any business owner. Here is a quick overview of our programs:Premier Plus Program with a term of 2-12 months.Premier Program with a term of 3-8 months.Standard Program with a term of 2-7 months.Starter Program with a term of 2-5 months To learn more about each program or find out with one would be right for your business, contact Cidwell Capital to learn more.",
  },
  {
    title: " Who is eligible for a cash advance?",
    content:
      "Every business receives customized offers tailored to their business. We offer funding options from $3,000 to $150,000. One of our funding specialists can give you an idea of how much your business could qualify for, and there is no obligation.",
  },
  {
    title: " Why is a business cash advance better than a bank loan? ",
    content:
      "Cidwell Capital does not offer short term business loans. In fact, we don’t provide any type of loan. Instead, we are a merchant cash advance resource that provides businesses with quick, easy capital. While a loan consists of an interest rate that accrues over time, we provide you with something better! A merchant cash advance does not include an interest rate but instead features a fixed cost or “factor rate” that does not change throughout the MCA duration.",
  },
  {
    title: " What are the main benefits of choosing an MCA? ",
    content:
      "When you own a business, you will have countless important decisions to make. Whether or not to get a short-term business loan or an MCA should not be one of the decisions you struggle with. While a bank loan will leave you paying substantial interest over long periods of time, our MCA will have no interest, and we prove shorter terms for your peace of mind. We also offer quick financing to our customers so they can support and maintain their business when they need it.",
  },
  {
    title: "Is applying for an MCA difficult?",
    content:
      "Our application process is easy to fill out, and our criteria are lenient. If you are someone who struggles with low credit score and are unable to get a traditional loan because of it, odds are you will be able to get the MCA without any issues. Contact Cidwell Capital to learn more about the application process and determine if you are the right candidate for our MCA.",
  },
  {
    title: "How can I pay back my advance? ",
    content:
      "Merchant Cash Advance Programs can be paid back in multiple ways depending on the program you are approved for.  We offer a split percentage on credit card receivables, as well as a daily or weekly ACH debits.",
  },
  {
    title: " How can I qualify for more working capital in the future? ",
    content:
      "We keep you updated every step of the way. Once you’ve established positive payment history with us, we’ll make sure to let you know once your business is eligible for renewal and review options available.",
  },
];

export const COMPANY_TIMELINE = [
  {
    id: "0",
    title: "Established",
    description: "Approached the industry with a dream & vision",
    year: 2012,
  },
  {
    id: "1",
    title: "1st Round Funding",
    description: "A young company determined to go higher",
    year: 2014,
  },
  {
    id: "2",
    title: "Onboarding",
    description: "Team development & structuring",
    year: 2015,
  },
  {
    id: "3",
    title: "Focused on Growth",
    description: "Innovation and application process created",
    year: 2016,
  },
  {
    id: "3",
    title: "Strategic Partnerships",
    description: "Building powerful relationships create a positive outcome",
    year: 2017,
  },
  {
    id: "4",
    title: "Expansion",
    description: "New Office and doubled in workforce",
    year: 2017,
  },
  {
    id: "5",
    title: "Technology Push",
    description: "Proprietary software for automation from application to funding to renewal",
    year: 2019,
  },
  {
    id: "6",
    title: "$200M Goal",
    description: "We hit the milestone of $200M to over 2,500 business",
    year: 2021,
  },
];

export const MARKETPLACE_ADTS = [
  {
    id: "0",
    icon: <FaFileInvoiceDollar className="w-6 h-6 text-secondary" />,
    title: "Merchant Cash Advance",
    description: "A merchant cash advance allows you to borrow against future earnings to access that capital today.",
  },
  {
    id: "1",
    icon: <FaCreditCard className="w-6 h-6 text-secondary" />,
    title: "Lines of Credit",
    description: "Like a credit card for your business. You can take money out of the LOC until your limit is reached.",
  },
  {
    id: "2",
    icon: <BsBank className="w-6 h-6 text-secondary" />,
    title: "Traditional Bank Loans",
    description:
      "Usuallv lower interest rates but also takes much longer to get approved. Collateral and a high credit score are needed.",
  },
  {
    id: "3",
    icon: <FaPiggyBank className="w-6 h-6 text-secondary" />,
    title: "401K Business Financing",
    description: "Allows vou to use your 401 (k) funds to finance your business without incurring hefty taxes.",
  },
  {
    id: "4",
    icon: <FaShieldHalved className="w-6 h-6 text-secondary" />,
    title: "Disaster Relief Loan",
    description:
      "An SBA loan that provides assistance for the repair and rebuilding of non-farm, private sector losses for businesses that have sustained economic injury.",
  },
  {
    id: "5",
    icon: <FaMoneyCheckDollar className="w-6 h-6 text-secondary" />,
    title: "Hard Money Business Loans",
    description: "A loan based solely on the property used as collateral. Credit score is not checked.",
  },
  {
    id: "6",
    icon: <FaDatabase className="w-6 h-6 text-secondary" />,
    title: "SBA",
    description:
      "Requires an unconditional guarantee as business collateral. They take into account vour time in business, annual revenue and your credit score.",
  },
  {
    id: "7",
    icon: <FaCarSide className="w-6 h-6 text-secondary" />,
    title: "Equipment Financing",
    description: "A loan that is used to buy equinment for vour business. The equipment is used as collateral.",
  },
  {
    id: "8",
    icon: <AiFillShop className="w-6 h-6 text-secondary" />,
    title: "Invoice Financing",
    description: "Funding provided to you based on your customers’ future invoice Davments.",
  },
];
export const FAQ_AFFILIATES = [
  {
    title: "1. What products are offered by Cidwell Capital? ",
    content:
      "Cidwell Capital specializes in merchant cash advances with four different program tiers on offer. In addition, we have partnered with other lenders to provide a range of funding solutions that include lines of credit, SBA loans, and invoice financing.",
  },
  {
    title: "2. Who is Cidwell Capital for? ",
    content:
      "– Business owners with low credit scores. With a minimum required credit score of 500, borrowers with bad credit may be eligible for a merchant cash advance.",
  },
  {
    title: "3. How to get started? ",
    content:
      "After you’re onboarded with us, you’ll find your referral link on your Impact.com dashboard for you to share on your platforms. Here’s a video with instructions on getting your personalized affiliate link and ready-made visual resources to promote us effectively, and then you can track the whole process on Impact.com.",
  },
  {
    title: "4. How much can I earn for a successful referral? ",
    content:
      "The first month we offer a compensation of 200$ per successful lead, and after that period, we will test your traffic and offer you a customized contract based on your results. We can even offer custom contracts to our preferred partners depending on lead volume and quality.",
  },
  {
    title:
      "5. I'm an ISO broker so I usually get paid on commissions instead of referrals. Do you have a program for ISO brokers?",
    content: "Unfortunately, we’re not accepting ISO brokers at this time.",
  },
  {
    title: "6. Do you have other funding programs for businesses that still don’t have 10K monthly revenue?",
    content:
      "Unfortunately, in order to qualify for our funding programs, businesses should fulfill the following requirements:",
  },
  {
    title: "7. Does Cidwell Capital offer personal loans? ",
    content: "No, we only serve established businesses incorporated in the U.S.",
  },
  {
    title: "8. How long does it take for Cidwell Capital to close a deal? ",
    content:
      "With our easy application process and minimal documentation requirements, we can make a credit decision within the same day of receiving an application for funding. And if a merchant is approved, they can get funding in as little as 24 hours.",
  },
  {
    title: "9. How do I know how much money I’ve earned? ",
    content:
      "You can check your performance history and current account balance at any time. In the upper right corner of the impact.com UI, you’ll find your current account balance.",
  },
  {
    title: "10. How do I get paid? ",
    content:
      "As you satisfy the terms of your contract, Impact.com will automatically credit your account accordingly. You set a payment threshold that works for you, deciding the minimum amount you’d like to see your account balance hit before you get paid. Once your account balance reaches that number, you can:",
  },
];

export const PROGRAM_ADTS = [
  {
    id: "0",
    name: "Starter",
    description: "You're off for an awesome start!",
    price: "$8-30k",
    term: "2-5 Month",
    rate: "1.40",
    renewal: "Yes",
    features: ["Driver's Licence", "Void Check", "Proof of Ownership", "Bank Validation", "Deposit within 1-2 days"],
  },
  {
    id: "1",
    name: "Standard",
    description: "Standard, uou mean awesome!",
    price: "$5-125k",
    term: "2-7 Month",
    rate: "1.34",
    renewal: "Yes",
    features: ["Driver's Licence", "Void Check", "Proof of Ownership", "Bank Validation", "Deposit within 1-2 days"],
  },
  {
    id: "2",
    name: "Premier",
    description: "Premier means awesomeness!",
    price: "$10-225k",
    term: "3-8 Month",
    rate: "1.30",
    renewal: "Yes",
    features: ["Driver's Licence", "Void Check", "Proof of Ownership", "Bank Validation", "Deposit within 1-2 days"],
  },
  {
    id: "3",
    name: "Premier Plus",
    description: "Premier plus means super!",
    price: "$30-500k",
    term: "3-12 Month",
    rate: "1.24",
    renewal: "Yes",
    features: ["Driver's Licence", "Void Check", "Proof of Ownership", "Bank Validation", "Deposit within 1-2 days"],
  },
];

export const BUSINESS_REVIEWS = [
  {
    imageSrc: "/assets/images/BusinessLoan-Trustpilot.png",
  },
  {
    imageSrc: "/assets/images/BusinessLoan-LendingGreen.png",
  },
  {
    imageSrc: "/assets/images/BusinessLoan-Google.png",
  },
  {
    imageSrc: "/assets/images/BusinessLoan-Badge.png",
  },
  {
    imageSrc: "/assets/images/BusinessLoan-BBB.png",
  },
  {
    imageSrc: "/assets/images/BusinessLoan-SBFP.webp",
  },
];

export const BUSINESS_LOANS_TYPES = [
  {
    id: "0",
    icon: <FaFileInvoiceDollar className="w-6 h-6 text-secondary" />,
    title: "SBA Loan",
    description: "A merchant cash advance allows you to borrow against future earnings to access that capital today.",
  },
  {
    id: "1",
    icon: <TbReportMoney className="w-6 h-6 text-secondary" />,
    title: "Term Loan",
    description:
      "Long term, low interest loans for the purchase of fixed assets such as real estate, equipment or machinery...",
  },
  {
    id: "2",
    icon: <CgCalculator className="w-6 h-6 text-secondary" />,
    title: "Equipment Financing",
    description: "Loans or leases specifically for the purchase of business equipment or car loans...",
  },
  {
    id: "3",
    icon: <FaRegCreditCard className="w-6 h-6 text-secondary" />,
    title: "Line of Credit",
    description: "A flexible credit line which can be used for any purpose up to the maximum loan balance...",
  },
  {
    id: "4",
    icon: <LiaFileInvoiceDollarSolid className="w-6 h-6 text-secondary" />,
    title: "Invoice Financing",
    description: "Invoice financing allows you to access quick cash against current unpaid invoices",
  },
  {
    id: "5",
    icon: <BiTimer className="w-6 h-6 text-secondary" />,
    title: "Short Term Loan",
    description: "Small loans which usually must be repaid in two years or less...",
  },
  {
    id: "6",
    icon: <RiHandCoinLine className="w-6 h-6 text-secondary" />,
    title: "Merchant Cash Advance (MCA)",
    description: "Technically not a loan, and payments are a percentage of each scale...",
  },
  {
    id: "7",
    icon: <BsBuildings className="w-6 h-6 text-secondary" />,
    title: "Commercial Real Estate",
    description: "A loan secured by commercial real estate to purchase, refinance, renovate, or for...",
  },
  {
    id: "8",
    icon: <GiIdCard className="w-6 h-6 text-secondary" />,
    title: "Employee Retention Credit",
    description: "A refundable tax credit grant that helps assist with government aid...",
  },
];

export const GOOGLE_REVIEWS = [
  {
    name: "Andrea",
    review:
      "Joe was wonderful to work with. He’s a straight-shooter, answered any questions I had and got the business financing I needed during a cash crunch. Look forward to working with you again in the future.",
  },
  {
    name: "Dream",
    review:
      "I want to say Cidwell capital is an amazing company that really help my small business get funding. The process was very quick and easy and Matt Benincasa made it even more simple process for me. Being a new and small LLC, it’s very hard to get funding but Matt Benincasa and the folks at Cidwell capital made it happen. Thanks you guys for all your help and look forward to building this relationship with you all!",
  },
  {
    name: "Bojan Bogetic",
    review: "The best and faster rate ! Recommend ! Zack Brown is supper professional , thank you gays !",
  },
  {
    name: "Chris Olsen",
    review:
      "Kevin was great. He explained everything, and even gave me some business guidance. Pleasure to deal with!Thanks Kevin",
  },
  {
    name: "Selina",
    review:
      "I had the pleasure of working with Nick. It was a very quick and convenient process for me! I was actually funded the next day as well. Very professional and cool dude!",
  },
  {
    name: "Terry Hayward",
    review: "They got the job done quickly and I was funded in 2 days. Thanks.",
  },
  {
    name: "Hector",
    review:
      "Great group of guys! (Zach &Dan) Excellent  in every way! High level of professionalism always! Treated  me and my small company with respect! Got the job done instantly, making amends to suit my needs on the fly! Where else could I have gotten excellent service like this? Nowhere! Cidwell Capital is the way to go.",
  },
  {
    name: "Greg",
    review:
      "This is my 3rd time to use this company.  But in particular my account manager Adam Rentzer.  Adam is great to work with.  He makes the process as easy as possible.  I will definitely do business with Adam again. Thanks!",
  },
  {
    name: "Steven Obanion",
    review:
      "They made funding for my company very easy, safe, and affordable with the payment plan that was right for our business",
  },
];

export const FAQ_ERC = [
  {
    title: "Can I apply with 1099 Employees?",
    content:
      "Unfortunately, the Employee Retention Credit is based on W-2 employees only.Unfortunately, the Employee Retention Credit is based on W-2 employees only.",
  },
  {
    title: "How do I know how much I will qualify for?",
    content:
      "Every business is different, but the payroll calculations are the same. There is a lot of variability, but the running average of what we’ll be able to secure the client will be between 8-10K per W-2 employee.",
  },
  {
    title: "What time period does this cover?",
    content: "ERC applies to qualified wages paid between March 12, 2020 – September 30, 2021 (Q2 2020 – Q3 2021)",
  },
  {
    title: "What if I already secured PPP Funding?",
    content: "You can still qualify for ERC!",
  },
  {
    title: "Why can’t I file for the ERC credit on my own?",
    content:
      "You absolutely can! However, the process can be very complex and time-consuming. Cidwell capital understands the product extremely well. We have a team here that specializes in this program specifically and have successfully secured over $1B in refund credits for over 3,000 businesses just like yours. Our mission is to help business owners like yourself to capitalize on the benefits of the ERC program, without the extensive investment of your valuable time.",
  },
  {
    title: "How long does the process take?",
    content:
      "The beginning steps to the process can be completed quickly. The quicker you are able to complete our brief Questionnaire and upload the necessary documents our team will need, the quicker we can begin our analysis to determine your ERC refund eligibility. The analysis and filing process will usually take 2-3 weeks. At this point, you will know the exact dollar amount you are eligible for via the ERC program, and we will work with you to get everything filed with the IRS. Once filed, refunds are released based on the IRS backlog. Currently, the IRS has stipulated a 20-week minimum turnaround on the ERC refunds (could take between 5-7 months).",
  },
  {
    title: "Do I have to repay the ERC Credit?",
    content:
      "At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification about the qualifying requirements for a loan, please contact us. We’ll be happy to help.",
  },
];

export const FAQ_EQUIPMENTFINANCE = [
  {
    title: "What are the different types of equipment loans?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">There are a number of different types of Equipment Loan available:</p>
        <p className="paragraph1 font-bold">Step-Up Step-Down</p>
        <p className="paragraph1">
          Do you run a seasonal business or a business where profitability is subject to market trends? A Step-Up
          Step-Down loan allows you to adjust payments so you pay more when business is good and less during slow times.
        </p>

        <p className="paragraph1 font-bold">Quarterly Equipment Lease</p>
        <p className="paragraph1">
          If your business runs long term projects, or simply doesn’t function on a financial month-to-month schedule,
          quarterly payments may be the answer.
        </p>

        <p className="paragraph1 font-bold">Re-financing</p>
        <p className="paragraph1">
          Many leases have a payout at the end of their term, which you may not have the cash to cover. There are also
          situations where a slowdown in business or a freeing of capital for expansion or special projects may require
          a refinance. Alternatively, business may be booming and you might want to shorten an existing lease term to
          reduce losses to interest payments. Finally, an improvement in your credit rating might allow you to negotiate
          a better lease rate.
        </p>

        <p className="paragraph1 font-bold">Sale Leaseback</p>
        <p className="paragraph1">
          A sale leaseback agreement allows you to sell existing equipment you already own to a lender for a lump sum
          cash payment at current fair market value. You then lease back the equipment, keeping it for your operations
          while accessing funds for other needs.
        </p>

        <p className="paragraph1 font-bold">Fair Market Value Lease</p>
        <p className="paragraph1">
          Does your business rely on equipment with rapidly updating technology, such as the latest generation of
          computers or robotic vehicles and equipment? A Fair Market Value lease allows you to defer some of the
          purchase price to the end of your lease term. You then have the option to purchase the equipment at current
          fair market value, continue lease payments or return the equipment to the lender and upgrade to new equipment.
        </p>

        <p className="paragraph1 font-bold">Lease or Loan?</p>
        <p className="paragraph1">
          There’s a common perception that loans are better than leases due to the terms but this is not always the
          case. There are times when a lease makes good financial sense as lease payments can be written off as an
          operating expense.
        </p>
      </div>
    ),
  },
  {
    title: "What are the advantages of an equipment loan?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          While equipment financing is sometimes the only option for startup or expansion, it can also be a great
          investment when capital exists for this purpose but could be put to better use elsewhere. Since the loan is
          secured against the equipment itself and often has no down payment, and you’re not out of pocket for your
          purchases, you might find that making the interest payments on this kind of loan can actually increase
          profitability by allowing you to invest your available cash in areas of your business that will give a better
          return.
        </p>
        <p className="paragraph1">
          Equipment also has upkeep costs, requiring regular maintenance and occasional repair. Equipment financing may
          allow you to replace your aging equipment with new equipment for less monthly outlay then maintaining your
          existing equipment.
        </p>
        <p className="paragraph1">
          Finally, there can be significant tax savings as payments may be deductible, in full or in part, depending
          upon the equipment and structure of the loan.
        </p>
        <p className="paragraph1">
          Cidwell Capital can advise and assist you with finding the right kind of Equipment Loan for your business.
        </p>
      </div>
    ),
  },
  {
    title: "What is equipment financing?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          Equipment financing comes in two basic forms. First, qualifying businesses can borrow funds to purchase
          necessary equipment, everything from bulldozers to barbeques, where the equipment itself serves as collateral
          for the loan, much as with a car loan or lease. Or, with a Sale Leaseback Agreement, you may be able to borrow
          money against equipment you already own, and use that cash for expansion or other needs.
        </p>
        <p className="paragraph1">
          Equipment Financing goes by a number of different names. It’s also known as an Equipment Finance Agreement
          (EFA), Capital Lease, Finance Lease, or $1.00 Buyout (because you can buy the equipment at the end of the
          lease for one dollar or similar small cash payment). In fact, most equipment leases have a Fair Market Value
          (FMV) residual, a fancy accounting term that just means you’ll need to make a lump cash payment at the end of
          the lease if you want to keep the equipment.
        </p>
      </div>
    ),
  },
  {
    title: "What are the pros and cons of equipment financing?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1 font-bold">Benefits</p>
        <ul className="paragraph1">
          <li>Quick access to cash</li>
          <li>Limited paperwork</li>
          <li>Equipment serves as collateral</li>
          <li>Lukewarm credit OK</li>
        </ul>
        <p className="paragraph1 font-bold">Drawbacks</p>
        <ul className="paragraph1">
          <li>Down payment may be required</li>
          <li>Depreciation will reduce tax deductions</li>
          <li>May have large buyout at end of term</li>
          <li>Equipment subject to obsolescence</li>
        </ul>
        <p className="paragraph1">
          At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification
          about the qualifying requirements for a loan, please contact us. We’ll be happy to help.
        </p>
      </div>
    ),
  },
];

export const FAQ_INVOICEFINANCE = [
  {
    title: "Is this the same as an asset based loan?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          Not limited to just invoices, an Asset Based Loan allows your company to borrow against accounts receivable
          but may also include fixed assets such as inventory and machinery. Asset Based Loans can be viewed as a
          halfway point between a bank Line of Credit and Factoring. In cases where the ABL is leveraged against
          invoices, it works much like a line of credit. You may borrow up to 80% against eligible receivables, paying
          back the borrowed amounts plus interest when the invoices are paid.
        </p>
        <p className="paragraph1 font-bold">The advantages of an Asset based loan:</p>
        <p className="paragraph1">
          Because the loan is leveraged against your assets, the current history or even credit rating of your company
          may be irrelevant. This can be an excellent option for growing businesses that have not yet established a
          credit history but that have established good cash flow. In addition, you’ll have the flexibility to access
          cash in relation to your current accounts receivable which can enable much more rapid growth of your company
          than waiting for customers to pay. Finally, Asset Based Loans may be cheaper than Factoring, as the interest
          rate is usually based upon the prime rate.
        </p>
        <p className="paragraph1">
          The amount you can borrow is determined by a borrowing certificate, which details your assets such as
          outstanding receivables (minus ineligible assets) and applies the resulting amount to your credit limit.
        </p>
      </div>
    ),
  },
  {
    title: "What is the benefit and the cost of invoice factoring?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          A major benefit of Invoice Factoring is the availability to small businesses that have no established credit.
          Because you’re selling accounts receivables, the credit score of your customers is taken in to account but
          yours is irrelevant. You can access cash very quickly, which may allow businesses with regular monthly
          operating expenses to offer Net 30 and Net 60 day terms to customers, and Invoice Factoring is easier to get
          than business loans. Finally, setting up Invoice Factoring is relatively quick compared to other kinds of
          business financing.
        </p>
        <p className="paragraph1">
          The typical interest rate for Invoice Factoring will range between 1.5 and 3.5 percent per month, depending
          upon the size and credit score of the company paying the invoice.
        </p>
      </div>
    ),
  },
  {
    title: "What is invoice factoring or invoice financing?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          The key to Invoice Factoring is to understand that invoices are, from an accounting standpoint, an asset. Any
          asset can be sold for all or a portion of its value. Because it’s a sale of an asset, rather than a loan, it
          can be a much easier and quicker way of accessing cash for your business.
        </p>
        <p className="paragraph1">
          In the case of Invoice Factoring, you sell your invoices to a third party who pays you cash for the value of
          those invoices, assuming that the customers for those invoices have good credit and a history of paying their
          bills. In a typical invoice factoring deal, you would receive 80% of the value of the invoices up front, often
          as quickly as one day from the request of funds, and the remaining 20%, minus the factoring fee, when the
          invoice is paid.
        </p>
        <p className="paragraph1">
          Once you’ve established a relationship with a factoring purchaser, Invoice Factoring works very much like a
          line of credit, with the amount of funds available to you being tied to the current total of your verifiable
          accounts receivable. Factoring can be an excellent financing option for companies where operating needs occur
          out of sync with customer payments.
        </p>
      </div>
    ),
  },
  {
    title: "What are the pros and cons of invoice financing?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1 font-bold">Benefits</p>
        <ul className="paragraph1">
          <li>Relatively simple application process</li>
          <li>Your credit score irrelevant</li>
          <li>Quick access to cashInvoices themselves are the collateral</li>
        </ul>
        <p className="paragraph1 font-bold">Drawbacks</p>
        <ul className="paragraph1">
          <li>Higher fees than other forms of financing</li>
          <li>May adversely affect client relationships</li>
          <li>May carry additional fees for cancelling serviceSubject to your customer’s credit score</li>
          <li>Costs you more the longer your customers take to pay</li>
        </ul>
        <p className="paragraph1">
          At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification
          about the qualifying requirements for a loan, please contact us. We’ll be happy to help.
        </p>
      </div>
    ),
  },
];

export const FAQ_MERCHANTADVANCE = [
  {
    title: "Why would I need a merchant cash advance?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          While not advisable as a long term strategy for accessing cash, an MCA might be the best option to take
          advantage of a short term business opportunity such as purchasing inventory at a discount. It might also be
          used by operations that conduct business almost entirely through credit or debit payments but don’t have a
          good credit score and so can’t qualify for other types of financing.
        </p>

        <p className="paragraph1">
          Interest Rates on MCAs can be substantially higher than for other forms of business financing so consider
          carefully if this option is for you.
        </p>
      </div>
    ),
  },
  {
    title: "What is the application process?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          Relatively quick compared to other forms of financing, an MCA can be acquired in as little as one business
          day, but most often will take several days. Once the advance is approved, funds can be available in as little
          as 2 business days.
        </p>
        <p className="paragraph1">The application process is significantly different from other types of funding.</p>
        <p className="paragraph1 font-bold">Apply for Funding.</p>
        <p className="paragraph1">
          The application will require at the very least your social security number, business tax ID and the usual
          identifying and contact information for your business.
        </p>
        <p className="paragraph1 font-bold">Provide Documentation. </p>
        <p className="paragraph1">
          As stated above, this will include credit and debit card statements and may include bank statements, proof of
          citizenship and a copy of your business lease, if applicable.
        </p>
        <p className="paragraph1 font-bold">Wait </p>
        <p className="paragraph1">
          Your advance may be approved in as little as 24 hours but be prepared for a few days.
        </p>
        <p className="paragraph1 font-bold">Set Up Credit/Debit Card Processing (if applicable). </p>
        <p className="paragraph1">
          Depending upon who your MCA provider is you may be required to switch to a different card processor. While
          inconvenient, this is sometimes unavoidable.
        </p>
        <p className="paragraph1 font-bold">Sign the MCA Agreement. </p>
        <p className="paragraph1">
          This agreement will lay out funding and advance repayment details including the amount you’re approved for,
          the holdback percentage and the amount of interest and/or fees.
        </p>
        <p className="paragraph1 font-bold">Funding </p>
        <p className="paragraph1">
          Your MCA provider will deposit the funds to your business account, usually within 2 business days. Repayment
          will be handled automatically as you process payments from your customers.
        </p>
      </div>
    ),
  },
  {
    title: "What is a merchant cash advance or MCA?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          A quicker alternative to more traditional funding methods, a Merchant Cash Advance (MCA) can allow merchants
          to sidestep the lengthy approval process of other loan types and borrow cash against future sales. In fact, an
          MCA isn’t technically a loan, but rather, as the name suggests, a cash advance.
        </p>
        <p className="paragraph1">
          Once you’ve qualified, your MCA provider will lay out in the advance agreement the amount of cash they are
          willing to advance, the term of the advance, the holdback, and the repayment structure. The holdback is the
          percentage of daily credit or debit card sales which are withheld to pay back the advance.
        </p>
        <p className="paragraph1">
          MCA providers evaluate risk differently than banks and other financial institutions. While your credit score
          may be important, they will evaluate the amount of cash they are willing to advance by reviewing your daily
          credit or debit card receipts to determine your ability to repay the loan.
        </p>
        <p className="paragraph1">
          There are two main advantages to an MCA over other types of traditional business financing. First, the
          holdback amount will be in direct proportion to sales. When business is booming, the debt will be paid down
          quickly, but if business is slow, you won’t find yourself struggling to come up with fixed payments.
          Additionally, collateral is not required for an MCA.
        </p>
        <p className="paragraph1 font-bold">Examples:</p>
        <ul className="paragraph1">
          <li>Purchase of stock for a retail operation</li>
          <li>Quick expansion capital</li>
          <li>Taking advantage of the opportunity to purchase inventory at a temporary discount</li>
        </ul>
      </div>
    ),
  },
  {
    title: "What are the pro and cons of a merchant cash advance?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1 font-bold">Benefits</p>
        <ul className="paragraph1">
          <li>Lukewarm credit OK</li>
          <li>Relatively easy application process</li>
          <li>Quick access to cash</li>
          <li>Can be used for a wide variety of purposes</li>
        </ul>
        <p className="paragraph1 font-bold">Drawbacks</p>
        <ul className="paragraph1">
          <li>Relatively high Annual Percentage Rate (APR)</li>
          <li>Payments reduce daily cash flow</li>
          <li>May be required to switch merchant service provider</li>
        </ul>
        <p className="paragraph1">
          At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification
          about the qualifying requirements for a loan, please contact us. We’ll be happy to help.
        </p>
      </div>
    ),
  },
];

// SHORT TERM
export const FAQ_SHORTTERM = [
  {
    title: "Is it possible to get a short term loan as a start up small business?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          It is possible to get a short term loan for a startup or small business, however be prepared for more
          stringent qualification requirements. In addition to the documentation already noted above, you may also need
          to provide projected cash flow and projected financial statements for the next 3 to 5 years. In addition,
          you’ll need to clearly lay out in your financial projections how you plan to repay the loan. Even with all
          that, if your business is a startup it’s most likely that you’ll only qualify for a secured loan, so you’ll
          need some personal assets such as real estate.
        </p>
      </div>
    ),
  },
  {
    title: "What are the interest rates on a short term loan?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          Short term loan interest rates are economy-dependent. In a normal or boom economy, they’ll be higher than long
          term loans, but lower during a recession.
        </p>
        <br />
        <p className="paragraph1">
          The interest and repayment requirements of short term loan rates can be calculated in different ways and
          obviously you’ll want the calculation that is most in your favor. Our experts at Cidwell Capital can assist you with
          finding a lender who will provide your business with the most favorable terms.
        </p>
      </div>
    ),
  },
  {
    title: "What is a short term loan?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          Short term financing is an essential option for small businesses. Buying inventory, covering working capital
          expenses while awaiting payment of invoices, and expanding operations are just some of the uses small
          businesses have for short term loans.
        </p>
        <p className="paragraph1">
          While the overall structure is similar to their more common relative, long term loans, there are some
          important differences.
        </p>
        <p className="paragraph1">
          As with long term loans, your business will need to qualify with the lender. In addition to your credit score,
          the lender may also want to see records of previous loan repayments, payment histories to your suppliers and
          your company’s cash flow history, preferably for the past 3 to 5 years. An income statement may also be
          required. Depending upon these factors, and the lender you’re dealing with, your loan may be secured against
          collateral or unsecured, also known as a “signature loan.”
        </p>
        <p className="paragraph1">
          Payment schedules also differ. Where traditional long term loans usually require monthly payments, short term
          loans may have payment schedules as frequent as every business day.
        </p>
      </div>
    ),
  },
  {
    title: "What are the pros and cons of a short term loan?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1 font-bold">Benefits</p>
        <ul className="paragraph1">
          <li>Lukewarm credit OK</li>
          <li>Limited paperwork</li>
          <li>Quick access to cash</li>
          <li>Can be used for a wide variety of purposes</li>
        </ul>
        <p className="paragraph1 font-bold">Drawbacks</p>
        <ul className="paragraph1">
          <li>Relatively high Annual Percentage Rate (APR)</li>
          <li>Capped loan amount</li>
          <li>Daily payments</li>
        </ul>
        <p className="paragraph1">
          At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification
          about the qualifying requirements for a loan, please contact us. We’ll be happy to help.
        </p>
      </div>
    ),
  },
];

export const SBA_1 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Working Capital: $350,000 max. Commercial Real
          Estate: $5 million max.
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>5 to 25 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>6 – 13%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

export const SBA_2 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Max. $5 million, ($5.5 million for manufacturers)
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>10 to 20 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>3 – 6.5%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

export const SBA_3 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Maximum $5 million ($200,000 for small asset based)
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>Up to 5 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>5.75 – 8.25%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

export const SBA_4 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Maximum $5 million
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>Up to 25 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>8 – 10%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

export const SBA_5 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Up to $50,000
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>Up to 6 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>8 – 13%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

export const SBA_6 = [
  {
    title: "Loan Details",
    html: (
      <div className="flex flex-col">
        <p className="paragraph1">
          <span className="font-bold text-light">LOAN AMOUNT: </span>Up to $2 million
        </p>

        <p className="paragraph1">
          <span className="font-bold text-light">TERM: </span>5 to 25 Years
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">INTEREST RATE: </span>6 – 13%
        </p>
        <p className="paragraph1">
          <span className="font-bold text-light">TIME TO FUNDING: </span>As little as 30 days
        </p>
      </div>
    ),
  },
];

// TERM LOAN
export const FAQ_TERMLOAN = [
  {
    title: "What are the most common types of small business term loans?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          The most common type of business loan, traditional term loans are what most people think of when they look for
          a loan. The bank or other financial institution loans you a lump sum of money, usually secured against
          collateral, and you pay that money back, principal and interest, with regular payments over a set time period.
          Interest can be fixed or variable, depending upon the amount of the loan and what the loan is for. The most
          common type of term loan, and the one we’re all familiar with, is a mortgage for a home or commercial
          property. Term loans work the same way.
        </p>
        <p className="paragraph1">
          While these loans usually come from a bank, there are other lending institutions available. Cidwell Capital keeps a
          comprehensive list of these lenders. Some lenders will only deal with certain types of businesses, while
          others focus on specific geographic areas.
        </p>
        <p className="paragraph1">
          If you qualify for this type of loan, you can use the money for anything your business needs, from equipment
          to expansion to covering short term cash shortages.
        </p>
      </div>
    ),
  },
  {
    title: "What are the pros and cons of small business term loans?",
    html: (
      <div className="flex flex-col gap-4">
        <p className="paragraph1">
          At Cidwell Capital, we can help you structure the best loan for your needs. If you’re confused or need clarification
          about the qualifying requirements for a loan, please contact us. We’ll be happy to help.
        </p>
      </div>
    ),
  },
];

export const CREDIT_SCORE_LIST = [
  {
    id: "0",
    name: "Your Credit Score",
    value: "creditScore",
  },
  {
    id: "1",
    name: "720+",
    value: "720+",
  },
  {
    id: "2",
    name: "680-719",
    value: "680-719",
  },
  {
    id: "3",
    name: "650-679",
    value: "650-679",
  },
  {
    id: "4",
    name: "600-649",
    value: "600-649",
  },
  {
    id: "4",
    name: "590 or below",
    value: "590OrBelow",
  },
];

export const INDUSTRY_LIST = [
  { id: "0", name: "Tech", value: "tech" },
  { id: "1", name: "Finance", value: "finance" },
  { id: "2", name: "Healthcare", value: "healthcare" },
  { id: "3", name: "Entertainment", value: "entertainment" },
];

export const FILED_FOR_ERC = [
  {
    id: "0",
    name: "Yes",
    value: "yes",
  },
  {
    id: "1",
    name: "No",
    value: "no",
  },
];

export const ERC_ADVANCED = [
  {
    id: "0",
    name: "Yes",
    value: "yes",
  },
  {
    id: "1",
    name: "No",
    value: "no",
  },
];
