import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoChevronUpOutline } from "react-icons/io5";

const AccordionApp = ({ question, answer }) => {

  const [acc, setAcc] = useState(false);

  const handleAccFuncClose = () => {
    setAcc(false);
  };

  const handleAccFuncOpen = () => {
    setAcc(true);
  };

  const handleOpenCloseFunc = () => {
    setAcc(!acc)
  }

  return (

    <div className="">
      <div className="flex flex-col gap-1 max-w-[900px] items-center justify-between">
        <div className="flex items-center w-full justify-between gap-3" onClick={handleOpenCloseFunc}>
          <h2 className="md:text-[18px] sm:text-[16px] text-[14px] font-bold font-Montserrat">
            {question}
          </h2>
          <div>
            {acc ? (
              <IoChevronUpOutline
                className="cursor-pointer sm:text-[30px] text-[20px]"
                onClick={handleAccFuncClose}
              />
            ) : (
              <IoChevronDownSharp
                className="cursor-pointer sm:text-[30px] text-[20px]"
                onClick={handleAccFuncOpen}
              />
            )}
          </div>
        </div>
        <div className="mb-6 mt-6 w-full">
          <p
            className={`${
              acc
                ? "sm:h-[80px] h-[full] py-3 opacity-1 transition-all duration-300"
                : "h-0 opacity-0 overflow-hidden transition-all duration-300 md:text-[16px] sm:text-[14px] text-[12px] font-Montserrat"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
  
};

export default AccordionApp;