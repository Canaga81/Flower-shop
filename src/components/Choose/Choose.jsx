import { FaRegSun } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";

const Choose = () => {
  return (
    <div className="w-full h-full py-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          <div>
            <h1 className="text-center text-heroText font-Montserrat font-bold lg:text-[48px] md:text-[42px] sm:[36px] text-[27px]">
              Niyə bizi Seçməlisiniz ?
            </h1>
          </div>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <div className="w-[360px] h-[200px] shadow-lg flex flex-col gap-3 p-4">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px] tracking-[1.5px] text-heroText font-Montserrat font-bold">
                  Geniş seçim
                </h3>
                <FaRegSun size={30} className="cursor-pointer" />
              </div>
              <div>
                <p className="sm:text-[16px] text-[14px] text-heroText font-Montserrat">
                  Şəhərin ən gözəl çiçəklərindən ibarət böyük seçimimiz var.
                  Bizim gül mağazamızda qızılgül, lalə, zanbaq və s. daxil
                  olmaqla bütün növ çiçəklər var!
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[200px] shadow-lg flex flex-col gap-3 p-4">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px] tracking-[1.5px] text-heroText font-Montserrat font-bold">
                  Tez Çatdırılma
                </h3>
                <GoClock size={30} className="cursor-pointer" />
              </div>
              <div>
                <p className="sm:text-[16px] text-[14px] text-heroText font-Montserrat">
                  Çiçəkləri mümkün qədər tez çatdırmağa gəldikdə, biz
                  qarışmırıq. Biz həmçinin növbəti gün mağazamızdan qapınıza
                  çatdırırıq.
                </p>
              </div>
            </div>
            <div className="w-[360px] h-[200px] shadow-lg flex flex-col gap-3 p-4">
              <div className="flex justify-between items-center">
                <h3 className="lg:text-[24px] md:text-[22.2px] sm:text-[20.4px] text-[18px] tracking-[1.5px] text-heroText font-Montserrat font-bold">
                  Onlayn sifariş
                </h3>
                <AiOutlineGlobal size={30} className="cursor-pointer" />
              </div>
              <div>
                <p className="sm:text-[16px] text-[14px] text-heroText font-Montserrat">
                  Sizə lazım olan tək şey onlayn istədiyiniz şeyin növünü və
                  miqdarını seçməkdir - qalanını biz həll edəcəyik! Komandamız
                  müştərilərlə 24/7 onlayndır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
