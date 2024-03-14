import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Subscribe = () => {
  return (
    <div className="w-full h-full py-16 ">
      <div className="w-full">
        <div className="bg-searchBg w-full py-6 flex flex-col items-center gap-3">
          <h2 className="text-center lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px] font-Montserrat font-bold">E-poçtlarımıza abunə olun</h2>
          <p className="text-center sm:text-[16px] text-[14px] font-Montserrat">
            Yeni kolleksiyalar və eksklüziv təkliflər haqqında ilk siz xəbərdar
            olun.
          </p>
          <div className="bg-white flex items-center gap-3 h-[45px] md:w-[450px] sm:w-[400px] w-[280px]">
            <input placeholder="E-mail" className="outline-none border-none pl-2 w-full bg-transparent" type="text" />
            <MdOutlineKeyboardArrowRight className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
