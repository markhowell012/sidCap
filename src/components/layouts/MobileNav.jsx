import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { NAV_ITEMS } from "../../utils/mock";
import Button from "../macros/Button";
import { useNavigate } from "react-router-dom";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [selectedNav, setSelectedNav] = useState([]);
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
    setOpen(false);
    setSelectedNav([]);
    window.scrollTo(0, 0);
  };
  return (
    <div className="relative marginNav lg:hidden w-full h-[66px] md:h-[125px] flex justify-between items-center" style={{backgroundColor: 'rgb(0 123 255)'}}>
      <div className="flex items-center justify-between w-full">
        <HiOutlineMenuAlt1
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>
      {open && (
        <div className="z-[1000] fixed marginNav py-8 top-0 left-0 bg-secondary h-screen w-screen flex flex-col gap-10">
          <div className="flex items-center justify-between w-full">
            <AiOutlineClose
              className="text-2xl cursor-pointer"
              onClick={() => {
                setOpen(false);
                setSelectedNav([]);
              }}
            />

          </div>
          <div className="flex flex-col gap-6 items-center justify-center paragraph2">
            {selectedNav.length === 0 &&
              NAV_ITEMS.map((nav, index) => (
                <>
                  {nav?.children ? (
                    <span
                      onClick={() => setSelectedNav(nav.children)}
                      key={index}
                      className="navitem relative cursor-pointer hover:text-primary flex items-center justify-center gap-2 w-full"
                    >
                      {nav?.name}
                      <BsChevronDown className="absolute right-0 -rotate-90" />
                    </span>
                  ) : (
                    <span
                      key={index}
                      onClick={() => handleNavigation(nav?.route)}
                      className="navitem cursor-pointer hover:text-primary"
                    >
                      {nav?.name}
                    </span>
                  )}
                </>
              ))}
            {selectedNav.length > 0 && (
              <>
                <span
                  onClick={() => setSelectedNav([])}
                  className="text-xs cursor-pointer hover:text-primary flex items-center justify-center gap-2 w-full"
                >
                  back
                </span>
                {selectedNav.map((item, i) => (
                  <span
                    onClick={() => handleNavigation(item?.route)}
                    key={i}
                    className="cursor-pointer hover:text-primary flex items-center justify-center gap-2 w-full"
                  >
                    {item?.icon}
                    {item?.name}
                  </span>
                ))}
              </>
            )}
          </div>
          <div className="mt-auto">
            <Button
              onClick={() => handleNavigation("/onboarding")}
              title="Apply Now"
              width="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
