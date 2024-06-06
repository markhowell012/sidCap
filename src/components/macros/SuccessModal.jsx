import { Modal } from "../../components";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

const SuccessModal = ({ open, onClose, title, description }) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <div className="mt-2 w-[310px] md:w-[450px] flex flex-col gap-8">
        <div className="paragraph2 flex items-center gap-2 pb-4 border-b border-slate-200">
          <IoCheckmarkDoneCircleSharp color="green" />
          <p className="text-gray">{title}</p>
        </div>
        <div className="space-y-2 ">
          <p className="paragraph1 text-gray">{description}</p>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
