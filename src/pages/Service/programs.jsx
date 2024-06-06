import { useNavigate } from "react-router-dom";
import ProgramCard from "../../components/macros/ProgramCard";
import { PROGRAM_ADTS } from "../../utils/mock";
import { Button } from "../../components";
const Programs = () => {
  const navigate = useNavigate();

  return (
    <div className="marginBody mx-auto p-[10px]">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="heading1 font-normal text-light">
            Funding options to
            <br />
            <span className="text-primary">fit your business goals</span>
          </h2>
          <p className="paragraph2 py-5 mb-3">
            We offer a full suite of program types.
          </p>
          <p className="paragraph1">
            Our programs are tailored to offer great flexibility, fast
            responses, and a hassle-free process to meet the demands of your
            business.
          </p>
          <Button
            className="mt-5"
            onClick={() => {
              navigate("/onboarding");
            }}
            variant={2}
            title="APPLY NOW"
          />
        </div>
        <div className="flex-1">
          <img src="/assets/images/Programs_hero_01.png" alt="program-01" />
        </div>
      </div>

      <div className="py-12">
        <h1 className="heading1-primary text-center">Explore our programs</h1>
        <p className="paragraph2 py-5 mb-3 text-center">
          We offer a full suite of program types.
        </p>

        <p className="text-center paragraph1 leading-7 max-w-3xl mx-auto">
          We understand not every business is the same. Each growth opportunity
          varies from one to the next. That’s why we designed different tiers,
          each perfect for a specific individual. Who can benefit from our
          merchant cash advance programs?
          <br />
          <br />
          Every business we fund receives their own personalized offer that is
          created to meet their specific business needs. Our business funding
          solutions range from $30,000 to $150,000. Our funding specialists will
          be able to assist you with all of your questions and concerns. They
          can help determine which program would be best for you, how much you
          would qualify for, and there is absolutely no obligation.
        </p>
      </div>

      <div className="p-2 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROGRAM_ADTS.map((item) => (
          <ProgramCard item={item} onPressApply={() => {}} />
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-8 py-20">
        <div className="flex-1">
          <h1 className="heading1-primary font-bold">
            Removing the complexity
          </h1>
        </div>
        <div className="w-[3px] bg-secondary" />
        <div className="flex-1 py-2 md:py-6">
          <h2 className="heading3 mb-6">Fast decisions to keep you moving.</h2>
          <p className="text-base paragraph1 leading-7">
            We have developed AI decision-making software to help automate our
            process, taking into account multiple key factors of a business to
            produce a faster decision.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src={"/assets/images/Business-model.png"}
          className="w-full h-80 object-contain"
          alt="model"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 py-2 md:py-32">
        <div className="flex-1 order-2">
          <h2 className="heading1-primary font-bold text-right">
            Our team is here to guide you
          </h2>

          <p className="paragraph2 py-5 mb-3 text-right">
            Clear your mind to make the best call.
          </p>
          <p className="paragraph1 text-right">
            Allow our funding specialists to help determine which cash advance
            program would be best for your business.Still have questions? Our
            experienced, certified advisory team wants to help!
          </p>
          <div className="w-full flex justify-end">
            <Button
              className="mt-8"
              onClick={() => {
                navigate("/onboarding");
              }}
              variant={2}
              title="APPLY NOW"
            />
          </div>
        </div>
        <div className="flex-1 order-1">
          <img src="/assets/images/Program_hero_02.png" alt="program-02" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex-1">
          <h2 className=" heading1-primary font-normal">
            An option for every business
          </h2>
          <p className="paragraph2 py-5 mb-3">
            No matter your industry, we got you covered.
          </p>
          <p className="paragraph1 leading-7 gray">
            Small businesses are plentiful and diverse. Every business deserves
            to grow to its full potential and we’re here to guide you on your
            journey. Arguably one of the best reasons to get an MCA is how
            effortless our application process is for all businesses. When you
            turn to a bank for help with funding, you will frequently be met
            with strict criteria and substantial interest rates. When your
            business needs help, the last thing you should have to do is jump
            through hoops trying to meet their application requirements..GFN
            Capital has recognized the difficulties some businesses face when
            trying to get help with business funding solutions. We are proud to
            offer programs to all companies in need without requiring a ton of
            data. Instead, our application is lenient, making it possible for
            more people to receive help.Another exceptional reason to apply for
            one of our MCA programs is rapid delivery. If your business needs
            help, you should not have to wait around forever, trying to get
            approved and then waiting for the funding to come in. Our MCAs are
            made available quickly, so your business operations can continue
            normally without missing a beat.Are you worried about a low credit
            score? GFN Capital offers solutions to everyone, even those who do
            not have the best credit status. To learn more about your options,
            contact us to speak with a funding specialist.
          </p>
          <Button
            className="mt-8"
            onClick={() => {
              navigate("/onboarding");
            }}
            variant={2}
            title="APPLY NOW"
          />
        </div>
        <div className="flex-1">
          <img
            src="/assets/images/Programs_Business_Graphic-01.png"
            alt="program-business-01"
          />
        </div>
      </div>

      <div className="flex justify-center py-14">
        <Button
          className="mt-8"
          onClick={() => {
            navigate("/marketplace");
          }}
          variant={2}
          title="Discover The Power of Marketplace"
        />
      </div>
    </div>
  );
};

export default Programs;
