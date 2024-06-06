import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayoutMain from "./components/layouts/LayoutMain";
import {
  Home,
  AboutUs,
  Career,
  SmallBusinessBlog,
  Industries,
  Faq,
  Feedback,
  Marketplace,
  Programs,
  Affiliates,
  Contact,
  Onboarding,
  Login,
  TermsAndConditions,
  Policy,
  BusinessLoans,
  BusinessLineCredits,
  CommercialLoan,
  EmployeeRetention,
  EquipmentFinance,
  InvoiceFinance,
  MerchantAdvance,
  SBALoan, 
  ShortTermLoan,
  TermLoan,
  Syndication,
} from "./pages";

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<LayoutMain />}>
        <Route index path="*" element={<Navigate to="/" />} />
        <Route index path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        {/* ABOUT */}

        <Route path="/small-business-blog" element={<SmallBusinessBlog />} />
        <Route path="/industries-we-serve" element={<Industries />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/feedback" element={<Feedback />} />

        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/programs" element={<Programs />} />

        <Route path="/affiliate-program" element={<Affiliates />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-of-use" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<Policy />} />

        {/* BUSINESS LOANS */}
        <Route path="/small-business-loans" element={<BusinessLoans />} />
        <Route
          path="/business-line-of-credit"
          element={<BusinessLineCredits />}
        />
        <Route
          path="/commercial-real-estate-loans"
          element={<CommercialLoan />}
        />
        <Route path="/erc" element={<EmployeeRetention />} />
        <Route path="/equipment-financing" element={<EquipmentFinance />} />
        <Route path="/invoice-financing" element={<InvoiceFinance />} />
        <Route path="/merchant-cash-advance" element={<MerchantAdvance />} />
        <Route path="/sba-loans" element={<SBALoan />} />
        <Route path="/short-term-loans" element={<ShortTermLoan />} />
        <Route path="/term-loan" element={<TermLoan />} />
        {/* BUSINESS LOANS */}
        {/* Footer Routes */}
        <Route path="/syndication" element={<Syndication />} />
        {/* Footer Routes */}
      </Route>
      <Route path="/user-account" element={<Login />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </>
  )
);
