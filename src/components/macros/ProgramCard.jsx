import { MdOutlineListAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ProgramCard = ({ item, onPressApply }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-1 w-full bg-[#F8F8F8] rounded-3xl overflow-hidden">
      <div className="w-full h-28 bg-primary flex justify-center items-center">
        <div>
          <h2 className="font-bold heading3 !text-secondary text-center">
            {item.name} Program
          </h2>
          <p className="paragraph1 !text-secondary text-center">
            {item.description}
          </p>
        </div>
      </div>
      <>
        <h1 className="text-[65px] font-bold text-secondary text-center mb-1">
          {item.price}
        </h1>
        <p className="text-secondary text-base text-center">
          Term: {item.term}
        </p>
        <p className="text-secondary text-base text-center">
          Rate: {item.rate}
        </p>
        <p className="text-secondary text-base text-center">
          Renewal: {item.renewal}
        </p>
      </>
      <div className="flex flex-col items-center mt-10 px-14">
        {item.features.map((text) => (
          <div className="w-full flex justify-center items-center gap-4 py-4 border-b border-b-[#DDD]">
            <MdOutlineListAlt color="gray" />
            <p className="text-gray text-sm">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 mb-6 flex justify-center">
        <button
          onClick={() => {
            navigate("/onboarding");
          }}
          className="bg-primary px-6 py-4 rounded-sm paragraph1 !text-secondary"
        >
          Apply Now
        </button>
      </div>

      <p className="text-[13px] text-grey text-center text-gray pb-6">
        * Required documents are listed above
      </p>
    </div>
  );
};

export default ProgramCard;
