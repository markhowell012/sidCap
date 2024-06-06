import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import { MARKETPLACE_ADTS } from "../../utils/mock";

const Marketplace = () => {
  const navigate = useNavigate();

  return (
    <div className="marginBody mx-auto p-[10px]">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="!text-light !font-medium heading1">GFN Capital</h2>
          <h2 className="!font-medium heading1-primary">
            Short Term Business Loans
          </h2>

          <p className="paragraph2 py-5 mb-3">Powerful Partnerships</p>
          <p className="paragraph1">
            If GFN Capital's direct programs aren’t the best fit for you, our
            Marketplace gotcha covered! GFN Capital has created its own unique
            Marketplace, with over a decade of vetted partnerships.
          </p>
          <Button
            className="mt-8"
            onClick={() => {
              navigate("/onboarding");
            }}
            variant={2}
            title="Apply Now"
          />
        </div>
        <div className="flex-1">
          <img src="/assets/images/marketplace-01.png" alt="marketplace" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-10 ">
        {MARKETPLACE_ADTS.map((item) => (
          <div className="flex-1 m-2 p-10 bg-light rounded-2xl">
            <div className="flex justify-center mb-2">{item.icon}</div>
            <h3 className="text-secondary text-lg text-center mb-4">
              {item.title}
            </h3>
            <p className="text-sm text-gray text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
