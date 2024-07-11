import React, { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { PiFlagBold } from "react-icons/pi";
import { COMPANY_TIMELINE } from "../../utils/mock";
const AboutUs = () => {
  const [accordionShowMore, setAccordionShowMore] = useState(false);

  return (
    <div className="marginBody mx-auto p-[10px]">
      <p className="text-center heading1-primary font-medium">
        Hello there,
        <br /> We are
        <br /> <span className="text-primary">Cidwell Capital's</span>
      </p>
      <p className="p-5 paragraph2 text-center">
        Let’s get to know each other better
      </p>
      <div className="flex justify-center mt-5">
        <p className="paragraph1 text-center max-w-xl">
          Learn what drives our company, what our mission serves to accomplish
          and the values we embrace to accomplish our mission.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-[100px] pb-[44px]">
        <div className="p-[10px]">
          <div className="relative">
            <img
              className="bg-offWhite max-w-[405px] max-h-[405px] object-contain rounded-2xl pb-20"
              src={"/assets/images/Pages-Hero-BG-Element.webp"}
              alt="page-hero"
            />
            <img
              className="max-w-[32px] max-h-[32px] absolute top-[80px] left-[35px]"
              src="/assets/images/innovation-element.webp"
              alt="innovation-element"
            />
            <img
              src="/assets/images/p1.webp"
              className="max-w-52 max-h-52 bg-secondary rounded-full absolute -top-[30px] right-[30px]"
              alt="person"
            />
            <img
              src="/assets/images/p2.webp"
              className="max-w-[150px] max-h-[150px] bg-primary rounded-full absolute bottom-[20px] right-[50px]"
              alt="person"
            />
            <img
              src="/assets/images/p3.webp"
              className="max-w-[100px] max-h-[100px] bg-white rounded-full absolute bottom-[140px] left-[65px]"
              alt="person"
            />
          </div>
        </div>
        <div className="p-[10px]">
          <img
            src={"/assets/images/Pages-Hero-Image.webp"}
            className="max-w-[605px] max-h-[400px] object-cover rounded-2xl"
            alt="hero-page"
          />
        </div>
      </div>

      <p className="text-center heading1-primary font-medium">
        A little <span className="text-primary">about us</span>
      </p>

      <p className="p-5 paragraph2 text-center">
        Finally, a company that cares about you
      </p>

      <div className="flex justify-center mt-5">
        <p className="paragraph1 text-center max-w-xl">
          Cidwell Capital was launched in 2012 with a mission to make receiving
          capital for small businesses possible. We had one strategy in mind –
          to make receiving working capital simple, intuitive and human. The
          challenge of meeting the daily demands of your business and making
          your business stand out in a competitive marketplace requires money.
          Getting approved for a loan through a bank or other types of payday
          companies can be a daunting task. Cidwell Capital has found a way to work
          around these challenges. Our funding approval process is centered
          around our customers, using the power of technology. Over 90% of our
          customers are approved for funding, using our simple, user-friendly
          application process.
        </p>
      </div>

      {/* COMPANY MANIFESTO */}
      <div className="w-full h-auto min-h-[600px] mt-10">
        <div className="w-full h-full shadow-main border border-primaryrounded-[30px] p-2">
          <p className="heading2 font-bold text-center mt-4 sm:mt-10">
            Company Manifesto
          </p>
          <p className="paragraph2 p-5 text-center">
            What drives our company, what our mission serves to accomplish and
            the values we embrace to accomplish our mission.
          </p>

          {/* CONTENT HERE... */}
          {accordionShowMore ? (
            <div className="mt-10 p-[10px] sm:p-[30px]">
              <h4 className="text-base font-bold text-[#008080] text-center mb-5">
                Our Mission
              </h4>
              <p className="paragraph1 mb-12">
                Our mission is to be a top MCA Fin-tech company that provides
                working capital to businesses to help them grow, prosper, and
                evolve using a seamless, automated and customer-centered
                experience.
              </p>

              <h4 className="text-base font-bold text-[#008080] text-center  mb-5">
                Our Vision
              </h4>
              <p className="paragraph1 mb-12">
                To make receiving working capital simple, intuitive and human.
              </p>

              <h4 className="text-base font-bold text-[#008080] text-center  mb-5">
                Our Values
              </h4>
              <p className="paragraph1 mb-12">
                As we work towards that mission, we need a set of shared values
                and principles. Our values fuel our identity and culture. They
                are the guidelines for every decision we make:
              </p>

              <h4 className="text-base font-bold text-[#008080] text-center  mb-5">
                Our Values & Principles
              </h4>
              <p className="paragraph1 mb-12">
                Be entrepreneurial – Possibilities are endless if you think like
                an entrepreneur.Think simple – We don’t want to make it
                difficult for businesses to get what they need; how can we make
                our process as simple as possible?Constraints bring out
                creativity – See opportunity in problems.Sweat the details – As
                Sherlock Holmes stated, “The little things are infinitely more
                important.” Perfecting the little things will create something
                that is perfectly whole.Relentless focus on success – Entirely
                focused on creating a successful future, by being completely
                committed to the present.A sense of purpose – Cidwell Capital was
                born from our founder’s dedication to make a difference in the
                lives of small business owners. That same purpose drives us
                every day.Human – We remain personable because we put ourselves
                in the shoes of others every day.
              </p>

              <h4 className="text-base font-bold text-[#008080] text-center  mb-5">
                Fostering an Indestructible Team
              </h4>

              <h4 className="text-base font-bold text-gray">
                Create an environment of trust
              </h4>
              <p className="paragraph1 mb-12">
                Fostering a strong sense of trust leads to increased
                productivity, improved morale, and the ability to be more
                effective. We also want to build trust with our customers. We
                exist because of our customers and they need to know we have
                their best interest in mind. We build trust by supporting each
                other, having good communication, giving our people and our
                customers a voice, and working together to find solutions.
              </p>

              <h4 className="text-base font-bold text-gray">
                Healthy, positive and effective communication
              </h4>
              <p className="paragraph1 mb-12">
                Having an open line of communication, agreeing to disagree,
                having an open mind, and creating mutual respect are all
                important factors that contribute to overall effective
                communication. It’s important for our people and our customers
                to feel safe to voice their opinion and concerns
              </p>

              <h4 className="text-base font-bold text-gray">Accountability</h4>
              <p className="paragraph1 mb-12">
                It is our obligation to accept full responsibility for our
                actions. Being able to admit when you’re wrong and taking
                ownership of errors is an important aspect of being accountable.
              </p>

              <h4 className="text-base font-bold text-gray">
                Commitment to getting results
              </h4>
              <p className="paragraph1 mb-12">
                Results measure our success. We are committed to be the best MCA
                company in the United States.
              </p>

              <h4 className="text-base font-bold text-gray">Diversity</h4>
              <p className="paragraph1 mb-12">
                We strive to foster a diverse team made up of members of
                different ages, genders, ethnicity and cultural beliefs. This
                diversity results in a broad range of experience, innovative
                concepts, fosters creativity and offers a range of perspectives
                and ideas.
              </p>

              <h4 className="text-base font-bold text-gray text-center  mb-5">
                What should you look for in a Merchant Cash Advance Company?
              </h4>
              <p className="paragraph1 mb-12">
                Throughout your journey as a business owner, you will eventually
                find yourself in a situation where you might need to borrow
                capital. You could need to invest in new business equipment to
                keep operations running, or you might need help just keeping
                your business running properly. No matter the reason, you need
                help from someone you can trust, someone who can deliver.When
                choosing a Merchant Cash Advance company, you need to select a
                trusted and respected company across the board. Cidwell Capital is a
                company committed to strong communications and cultivating a
                trustworthy environment. We want our customers to feel right at
                home the moment they walk through the door. If someone is
                walking through our doors, odds are they are in a difficult
                situation. The last thing we want to do is add to their
                troubles. Instead, we are dedicated to ensuring we provide the
                best services to everyone we come in contact with to ensure we
                can make their day a little bit brighter. You need a merchant
                cash advance company that is willing to go the extra mile to
                ensure you get the funding you deserve, Cidwell Capital is that
                company. We are proud to work hard to see our customers get the
                fast approval for business funding so they can continue doing
                what they love. Cidwell Capital provides US business funding
                solutions to those in need. We are there to help when others
                turn their back to you. At Cidwell Capital's, we only want the best
                for our customers. That is why we work hard to provide
                exceptional business funding solutions—the last thing we want to
                see if you and your business suffer. Our solutions are ideally
                suited to fit the needs of almost every business owner. We do
                not receive the best customer reviews without reason. We get
                those high reviews because we care about our customers and only
                want the best for them.
              </p>

              <div className="flex justify-center">
                <div
                  className="flex justify-center items-center gap-5 cursor-pointer"
                  onClick={() => setAccordionShowMore(false)}
                >
                  <div className="text-primary paragraph3 py-4 flex-row">
                    Click here to collapse
                  </div>
                  <HiMinus className="text-primary" size={20} />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-10 p-[30px]">
              <div
                className="flex justify-center items-center gap-5 cursor-pointer"
                onClick={() => setAccordionShowMore(true)}
              >
                <div className="text-primary paragraph3 py-4 flex-row">
                  READ MORE
                </div>
                <HiPlus className="text-primary" size={20} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* PROGRESS STEPPER */}
      <div className="w-full h-auto">
        {COMPANY_TIMELINE.map((item, index) =>
          index % 2 === 0 ? (
            <div
              className={`flex justify-evenly items-center gap-[4px] ${
                COMPANY_TIMELINE.length - 1 === index
                  ? "bg-background"
                  : "bg-primary"
              } relative`}
            >
              {/* LEFT INCLINED */}
              <div className="w-12 h-12 rounded-full border-[4px] border-primary absolute top-0 flex justify-center items-center bg-background z-10">
                <PiFlagBold size={20} />
              </div>

              <div className="flex-1 h-auto min-h-[200px] bg-background">
                <div className="relative">
                  <div className="w-[80%] sm:w-[90%] h-auto max-h-[150px] overflow-hidden bg-secondary p-2 sm:p-10 md:p-6">
                    <h4 className="text-primary text-xs sm:text-sm mb-3">
                      {item.title}
                    </h4>
                    <p className="text-lighttext text-xs sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-secondary absolute top-4 right-[16%] sm:right-[9%] rotate-45" />
                </div>
              </div>
              <div className="flex-1 h-[200px] bg-background">
                <div className="w-[80px] h-auto flex justify-center items-center text-base py-3 px-4 bg-secondary text-lighttext ml-[20%] sm:ml-[10%] rounded-md">
                  {item.year}
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex justify-evenly items-center gap-[4px] ${
                COMPANY_TIMELINE.length - 1 === index
                  ? "bg-background"
                  : "bg-primary"
              } relative`}
            >
              {/* RIGHT INCLINED */}
              <div className="w-12 h-12 rounded-full border-[4px] border-primary absolute top-0 flex justify-center items-center bg-background z-10">
                <PiFlagBold size={20} />
              </div>

              <div className="flex-1 h-[200px] flex justify-end items-start bg-background">
                <div className="w-[80px] h-auto flex justify-center items-center text-base py-3 px-4 bg-secondary text-lighttext mr-[20%] sm:mr-[10%]  rounded-md">
                  {item.year}
                </div>
              </div>

              <div className="flex-1 h-auto min-h-[200px] bg-background">
                <div className="relative flex justify-end">
                  <div className="w-[80%] sm:w-[90%] h-auto max-h-[150px] overflow-hidden bg-secondary p-2 sm:p-10 md:p-6">
                    <h4 className="text-primary text-xs sm:text-sm mb-3">
                      {item.title}
                    </h4>
                    <p className="text-lighttext text-xs sm:text-base">
                      {item.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex w-4 h-4 bg-secondary absolute top-4 left-[16%] sm:left-[9%] rotate-45" />
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-10 py-20">
        <div className="flex-1">
          <div className="flex flex-col justify-center items-center">
            <h1 className="heading1-primary text-center sm:text-left">
              What we could do
              <span className="text-primary"> together</span>
            </h1>
            <p className="paragraph2 mt-4 mb-8">We’ve got your back!</p>
          </div>
          <p className="text-lighttext text-base leading-7 mb-4">
            The ups and downs of a business will always be a challenge. It’s a
            non-stop job to keep up with new technology and the ever-changing
            needs of your customers. That’s why we pride ourselves on the
            relationships we build with our customers. We want to become
            life-long partners to help you along your journey to success.
          </p>
          <p className="text-lighttext font-bold mb-4">
            Why should you choose a merchant cash advance company over a
            traditional bank loan?
          </p>
          <p className="text-lighttext text-base leading-7 mb-4">
            As a merchant cash advance company, what we offer is entirely
            different from the loan you would receive from a bank. Most
            traditional loans supplied to businesses from a bank will come with
            high interest rates, and they can be extremely difficult to qualify
            for. When you choose a merchant cash advance company over a bank,
            you are choosing someone who will do their best to go around the
            challenges to get you the funding you deserve. Our application
            process is much more lenient than that of a traditional bank loan;
            almost 90% of all applications are approved! Our merchant cash
            advance programs do not feature an interest rate but instead have a
            fixed cost or “fact rate” that will never increase throughout the
            MCA.
          </p>
          <p className="text-lighttext font-bold mb-4">
            Cidwell Capital's offers exceptional customer satisfaction.
          </p>
          <p className="text-lighttext text-base leading-7 mb-4">
            Cidwell Capital's boasts excellent customer satisfaction. Our customers
            leave high reviews thanks to our accommodating merchant cash advance
            programs. We are proud to offer a reliable business funding solution
            to every business, no matter the industry or type. To learn why our
            customers rave about Cidwell Capital, contact our funding specialists
            today to start your journey towards getting the perfect MCA.
          </p>
        </div>

        <div className="flex-1">
          <img
            src={"/assets/images/about-illustration.png"}
            className="w-full h-full"
            alt="about-illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
