import React, { useEffect, useRef, useState } from "react";
import { Button, Slider, Stepper } from "../components";
import DualColumns from "../components/macros/DualColumns";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { TRUSTEDBY } from "../../src/utils/mock";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { textVariant, textVariantX } from "../utils/motions";

const Home = () => {
  const spanRef = useRef();

  const [scrollY, setScrollY] = useState(-10);

  const [spanWidth, setSpanWidth] = useState(0);

  useEffect(() => {
    if (spanRef.current) {
      const newSpanWidth = spanRef.current.offsetWidth;
      setSpanWidth(newSpanWidth);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const translateY = scrollY * 0.2;
  const translateY_hero_dots = scrollY * 0.1;

  const navigate = useNavigate();
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-16 md:gap-28 lg:gap-40 py-10 md:py-16 text-lighttext">
      <div className="marginBody mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          <div className="w-full order-2 md:order-1">
            <div className="flex flex-col gap-6">
              <div>
                <motion.p
                  variants={textVariant(0.1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="flex items-center gap-2">
                    <BsFillCreditCard2FrontFill className="text-primary" />
                    <p>Approved and funded the same day</p>
                  </div>
                </motion.p>
                <motion.p
                  variants={textVariant(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                <h2 className="heading1-primary">
                  Business funding is what{" "}
                  <span className="relative" ref={spanRef}>
                    we do
                    <svg
                      width={spanWidth}
                      className="absolute -bottom-4 left-0"
                      fill="transparent"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    </svg>
                  </span>
                </h2>
                </motion.p>
              </div>

              <motion.p
                variants={textVariant(0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                <p className="paragraph1">Our all-in-one working capital funding platform and team of professionals.</p>
              </motion.p>
              <div className="self-start">
                <Button
                  onClick={() => {
                    navigate("/onboarding");
                  }}
                  variant={2}
                  title="APPLY NOW"
                />
              </div>
              <div className="bg-slate-400 h-[1px] w-full" />
              <div className="flex items-center flex-wrap 1110:flex-nowrap gap-6">
                <div className="flex items-center">
                  <motion.image
                    variants={textVariantX(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <img
                      src="/assets/images/Startup-User-1.webp"
                      alt="Entrepreneurs"
                      className="w-[50px] min-w-[50px] max-w-[50px] rounded-full "
                    />
                  </motion.image>
                  <motion.image
                    variants={textVariantX(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <img
                      src="/assets/images/Startup-User-2.webp"
                      alt="Entrepreneurs"
                      className="-ml-3 w-[50px] min-w-[50px] max-w-[50px] rounded-full "
                    />
                  </motion.image>
                  <motion.image
                    variants={textVariantX(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <img
                      src="/assets/images/Startup-User-3.webp"
                      alt="Entrepreneurs"
                      className="-ml-3 w-[50px] min-w-[50px] max-w-[50px] rounded-full "
                    />
                  </motion.image>

                  <motion.div
                    variants={textVariantX(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    <div className="text-secondary text-xs -ml-3 flex items-center rounded-full justify-center bg-white border w-[50px] min-w-[50px] max-w-[50px] h-[50px] min-h-[50px] max-h-[50px]">
                      300+
                    </div>
                  </motion.div>
                </div>

                <motion.p
                  variants={textVariant(0.6, 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <p className="paragraph1 ">
                    Join other enterpreneurs who used Sidwell Capital funding for their business!
                  </p>
                </motion.p>
              </div>
            </div>
          </div>
          <div
            className={`order-1 md:order-2 flex justify-center items-center scale-[0.5] md:scale-[0.6] lg:scale-[0.8] xl:scale-[1]`}
          >
            <motion.div
              variants={textVariant(0.1, 50)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="-m-[60px]  md:m-auto relative w-[540px] h-[521px] flex items-center justify-center">
                <img
                  src="/assets/images/top-image-03.png"
                  alt="top"
                  className={`absolute -bottom-8 lg:-bottom-12 xl:-bottom-24 right-0 w-[500px]`}
                />
                <motion.img
                  style={{ y: -translateY_hero_dots }}
                  src="/assets/images/top-image-01.png"
                  alt="top-image-01"
                  className={`absolute right-16 w-[115px] rounded-full border border-primary object-cover`}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* <DualColumns mediaImage="/assets/images/Home-section1.png"></DualColumns> */}
      </div>

      <div className="marginBody grid grid-cols-1 md:grid-cols-2 gap-12 lg:mt-10">
        <motion.div style={{ y: translateY }}>
          <div className="flex flex-col gap-6">
            <h2 className="heading2">Hi, We're Sidwell Capital</h2>

            <p className="paragraph1">
              We do business finance differently. With more options tailored for you, less hassle and the right guidance
              to keep your mind at ease. We make things simple, to take the guesswork out of small business funding. We
              want you to be able to apply for your loan quickly, get a decision the same day, see the funds show up in
              your bank account, and have a system that is designed specially just for you and your needs that you can
              access from any device at any time. Our primary products include:
            </p>
            <div className="space-y-5">
              <p onClick={() => navigate("/merchant-cash-advance")} className="text-primary cursor-pointer">
                Merchant Cash Advance
              </p>
              <p onClick={() => navigate("/business-line-of-credit")} className="text-primary cursor-pointer">
                Lines of Credit
              </p>
              <p onClick={() => navigate("/sba-loans")} className="text-primary cursor-pointer">
                SBA
              </p>
            </div>
          </div>
        </motion.div>
        <Stepper />
      </div>
      <div className="marginBody mx-auto">
        <DualColumns mediaPlacement={1} mediaImage="/assets/images/Home-Section2.png">
          <div className="flex flex-col gap-6">
            <motion.p
              variants={textVariant(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="heading2">We work with all business types</h2>
            </motion.p>
            <motion.p
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="heading3">Sidwell Capital believes in ALL small businesses.</p>
            </motion.p>
            <motion.p
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="paragraph1">
                We do business finance differently. With more options tailored for you, less hassle and the right
                guidance to keep your mind at ease. We make things simple, to take the guesswork out of small business
                funding. We want you to be able to apply for your loan quickly, get a decision the same day, see the
                funds show up in your bank account, and have a system that is designed specially just for you and your
                needs that you can access from any device at any time. Merchant Cash Advance is our expertise
              </p>
            </motion.p>
            <div className="self-center">
              <Button
                onClick={() => {
                  navigate("/onboarding");
                }}
                variant={2}
                title="APPLY NOW"
              />
            </div>
          </div>
        </DualColumns>
      </div>
      <div className="marginBody mx-auto">
        <DualColumns mediaImage="/assets/images/Home-Section3.png">
          <div className="flex flex-col gap-6">
            <motion.p
              variants={textVariant(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <h2 className="heading2  ">Get it together</h2>
            </motion.p>
            <motion.p
              variants={textVariant(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="heading3">and keep it together.</p>
            </motion.p>
            <motion.p
              variants={textVariant(0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className=" paragraph1">
                Put all your programs and payment information in one place so it's easier to track your progress. You
                can access your online portal from any device and even see when you're eligible for more money.
                <br />
                <br />
                It has never been easier to get funded for your small business, and you won't ever need to look anywhere
                else again. Right here at Sidwell Capital, we have you and your business needs in mind and will do whatever
                it takes to help you elevate your business to the next level. Small business loans have never been so
                easy.
              </p>
            </motion.p>
            <div className="self-center">
              <Button
                onClick={() => {
                  navigate("/onboarding");
                }}
                variant={2}
                title="APPLY NOW"
              />
            </div>
          </div>
        </DualColumns>
      </div>
      <div className="marginBody">
        <Slider controls scrollSize={200} className="!items-start" title="Trusted by many...">
          {TRUSTEDBY.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border border-primary p-4 sm:p-8 rounded-md !min-w-[280px] sm:!min-w-[370px] h-full"
            >
              <img src={item.imageSrc} className="w-[75px] h-[75px] rounded-full object-cover " alt="cover"/>
              <h5 className="text-primary text-lg">{item.name}</h5>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
