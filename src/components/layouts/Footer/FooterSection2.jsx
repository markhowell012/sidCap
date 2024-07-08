import React from "react";
import CardFooter from "../../macros/CardFooter";
import { FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FooterSection2 = () => {

  const navigate = useNavigate()

  return (
    <div className=" w-full pt-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 marginBody">
        <CardFooter
          learnMore={true}
          onLearnMorePress={() => navigate('/about-us')}
          title="More about Cidwell Capital"
          description="You should know everything about the company you work with and trust
          to give your capital."
          icon={<FaPlusCircle />}
        />
        <CardFooter
          learnMore={true}
          onLearnMorePress={() => navigate('/programs')}
          title="Explore Cidwell Capital Program"
          description="We offer you a suit of options along with our marketplace to help you get the best option for your business."
          icon={<FaPlusCircle />}
        />
      </div>
    </div>
  );
};

export default FooterSection2;
