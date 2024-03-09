import React from "react";
import HeroImage from "../../images/bg-shop-image.jpg";
import { NavLink } from "react-router-dom";
import { FaTruckFast } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-full">
      <div className="mx-auto">
        <div className="relative flex justify-center items-center h-[629.1px]">
          <img className="w-full h-full" src={HeroImage} alt="" />
          <div className="absolute flex flex-col items-center gap-6">
            <h1 className=" text-center md:text-[80px] sm:text-[60px] text-[40px] font-Montserrat text-white">
              Hər Zövqə Görə Çiçəklər
            </h1>
            <p className="text-center text-white md:text-[24px] sm:text-[20px] text-[16px] font-Montserrat">
              Məqsədimiz Bakıda ən yüksək keyfiyyətli və təzə çiçək
              çatdırılmasını təmin etməkdir.
            </p>
            <NavLink to={'/catalog'}>
              <button className="bg-white px-5 py-2 rounded-md border-none outline-none font-Montserrat font-bold shadow-sm transition duration-200 hover:scale-95">İndi baxın</button>
            </NavLink>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-28 gap-10 py-5 px-6 shadow-lg">
            <div className="flex justify-between sm:gap-3 gap-1.5 items-center">
                <div>
                    <h3 className="text-heroText font-Montserrat font-bold sm:text-[22.2px] text-[18px]">Bu gün çatdırılan çiçəklərə ehtiyacınız varmı?</h3>
                    <p className="text-heroText font-Montserrat sm:text-[16px] text-[12px]">Bizə zəng edin və ya söhbət edin</p>
                </div>
                <div>
                    <FaTruckFast size={37} />
                </div>
            </div>
            <div className="flex justify-between sm:gap-3 gap-1.5 items-center">
                <div>
                    <h3 className="text-heroText font-Montserrat font-bold sm:text-[22.2px] text-[18px]">4 mil məsafədə pulsuz çatdırılma</h3>
                    <p className="text-heroText font-Montserrat sm:text-[16px] text-[12px]">Minimum sifariş yoxdur</p>
                </div>
                <div>
                    <FaBasketShopping size={37} />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
