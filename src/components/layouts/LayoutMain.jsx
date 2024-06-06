import React, { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer/Footer";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import SearchCard from "./SearchCard";

const LayoutMain = () => {
  const ref = useRef();
  const location = useLocation();

  useEffect(() => {
    const pathnameWithoutLeadingSlash = location.pathname.replace(/^\/+/, "");
    document.title = `Sidwell Capital ${pathnameWithoutLeadingSlash}`;
  }, [location]);
  const [showSearchBox, setShowSearchBox] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="bg-background text-white" ref={ref}>
      {showSearchBox ? (
        <SearchCard
          handleClose={() => {
            setShowSearchBox(false);
          }}
          text="text"
        />
      ) : (
        <>
          <TopBar />
          <Navbar setShowSearchBox={setShowSearchBox} />
          <MobileNav />
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
};

export default LayoutMain;
