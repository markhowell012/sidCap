import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, children }) => {
  const overlayClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    : "hidden";

  const modalClasses = isOpen ? "relative p-6 bg-white rounded-sm shadow-lg max-h-[95vh] overflow-y-auto" : "hidden";

  return (
    <div className={overlayClasses}>
      <div className={modalClasses}>
        <AiOutlineClose className="absolute top-3 right-4 cursor-pointer" color="black" onClick={onClose} />
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times"></i>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
