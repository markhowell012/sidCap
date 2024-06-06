import React, { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../utils/mock";
import { AiOutlineSearch } from "react-icons/ai";
import { MdVerifiedUser } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../macros/Button";

const Navbar = ({ setShowSearchBox }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openDD, setOpenDD] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const prevScrollY = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setIsVisible(false); // User is scrolling down, hide the navbar
      } else {
        setIsVisible(true); // User is scrolling up, show the navbar
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`sticky top-0 left-0 w-full ${isVisible ? "shadow-lg" : ""} z-50`}
    >
      <div 
        className={`hidden lg:flex items-center justify-between gap-5 Navbar h-[145px] ${
          location.pathname.includes("/syndication") ? "bg-[#CDA33B] text-light" : "text-lighttext"
        } marginNav text-sm`}
        style={{backgroundColor: 'rgb(0 123 255)'}}
      >
        <div>
        <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'White' }}>Sidwell Capital</p>
        </div>
        <div className="flex items-center gap-4 xl:gap-8">
          <div className="flex items-center justify-center gap-4 xl:gap-4 font-medium flex-wrap xl:flex-nowrap whitespace-nowrap">
            {NAV_ITEMS.map((nav, index) => (
              <>
                {nav?.children ? (
                  <span
                    onMouseOver={() => setOpenDD(index)}
                    key={index}
                    className={` relative navitem cursor-pointer hover:text-primary flex items-center gap-2`}
                  >
                    {nav?.name}
                    <BsChevronDown className="text-xs" />
                    {openDD && openDD === index && (
                      <div
                        onMouseLeave={() => setOpenDD(false)}
                        className=" absolute top-0 -left-3 text-base font-medium whitespace-nowrap"
                      >
                        <div className="mt-20 bg-primary min-w-[280px] py-[22px] flex flex-col gap-5">
                          {nav?.children.map((item) => (
                            <div
                              onClick={() => navigate(item?.route)}
                              className="text-secondary hover:text-light px-[20px] flex items-center gap-3"
                            >
                              {item?.icon}
                              {item?.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </span>
                ) : (
                  <span
                    onClick={() => navigate(nav?.route)}
                    key={index}
                    className={`${
                      location?.pathname === nav?.route
                        ? "text-primary2"
                        : location.pathname.includes("/syndication")
                        ? "text-light"
                        : "text-lighttext"
                    } navitem cursor-pointer hover:text-primary`}
                  >
                    {nav?.name}
                  </span>
                )}
              </>
            ))}
          </div>
          <div className="flex items-center gap-4 xl:gap-6 ">
            <span
              onClick={() => navigate("/user-account")}
              className="flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <MdVerifiedUser className="text-primary text-lg" />
              Log In
            </span>
            <span
              onClick={() => {
                setShowSearchBox(false);
              }}
            >
              <AiOutlineSearch className="text-2xl font-bold" />
            </span>
            <div className="whitespace-nowrap">
              <Button
                onClick={() => {
                  navigate("/onboarding");
                }}
                title="Apply Now"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
