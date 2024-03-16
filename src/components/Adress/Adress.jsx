import AdressBgImage from "../../images/adress_bg_image.png";
import { SlLocationPin } from "react-icons/sl";

const Adress = () => {

  return (
    <div className="w-full h-full py-16">
      <div>
        <div className="relative flex items-center justify-center">
          <div>
            <img className="min-h-[500px]" src={AdressBgImage} alt="adress_image" />
          </div>
          <div className="absolute bg-white p-10">
            <div className="flex flex-col items-center gap-4">
              <SlLocationPin size={30} />
              <h3 className="lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[19px] font-Montserrat text-heroText tracking-[1.5px] font-bold">Gül Dükanı Ünvanı</h3>
              <div className="flex flex-col items-center gap-2">
                <p className="sm:text-[16px] text-[14px] text-heroText font-normal font-Montserrat tracking-[1px]">Azərbaycan, Bakı, Gənclik metrosunun yanı, 54A</p>
                <p className="sm:text-[16px] text-[14px] text-heroText font-normal font-Montserrat tracking-[1px]">
                    Bazar Ertəsi - Cumə 9:00 - 20:00 <br />
                    Şənbə və Bazar 10:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default Adress;