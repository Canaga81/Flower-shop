import { Link } from "react-router-dom";
import FooterLogoImage from "../../images/footer_logo_image.png";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import BankCardFooterImage from '../../images/bank-cards-footer-image.png';

const Footer = () => {

  return (
    <div className="w-full h-full py-16 sm:px-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center gap-x-6 gap-y-16 flex-wrap">
            <div className="flex flex-col gap-4 items-center">
              <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] font-Montserrat font-bold tracking-[1px]">
                Menu
              </h2>
              <div className="flex flex-col gap-2 items-center">
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/"}
                >
                  Axtarış
                </Link>
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/"}
                >
                  Ana Səhifə
                </Link>
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/about"}
                >
                  Haqqımızda
                </Link>
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/catalog"}
                >
                  Kataloq
                </Link>
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/collections"}
                >
                  Kolleksiyalar
                </Link>
                <Link
                  className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]"
                  to={"/contacts"}
                >
                  Əlaqə
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-9 -mt-16 items-center">
              <div>
                <img src={FooterLogoImage} alt="" />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div>
                  <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px] text-center">
                    Azərbaycan, Bakı, Gənclik metrosunun yanı, 54A
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px] text-center">
                    Bazar Ertəsi - Cumə 9:00 - 20:00 <br />
                    Şənbə və Bazar 10:00 - 17:00
                  </p>
                </div>
                <div>
                  <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px] underline text-center">
                    +994 99 999 99 99 <br />
                    gultukani@gmail.com
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaPinterest size={30} className="cursor-pointer" />
                  <FaInstagramSquare size={30} className="cursor-pointer" />
                  <ImFacebook2 size={30} className="cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <h2 className="md:text-[24px] sm:text-[22.2px] text-[20.4px] font-Montserrat font-bold tracking-[1px]">
                Hüquqi Bildiriş
              </h2>
              <div className="flex flex-col gap-2 items-center">
                <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">
                  Gizlilik Siyasəti
                </p>
                <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">
                  Xidmət Şərtləri
                </p>
                <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">
                  Geri qaytarma siyasəti
                </p>
                <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">
                  Göndərmə polisi
                </p>
                <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">
                  Hesablama və ödəniş
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto flex flex-col items-center gap-2">
            <img src={BankCardFooterImage} alt="" />
            <p className="text-[12px] font-Montserrat font-normal text-heroText tracking-[1px]">© 2024, Azərbaycan Bakı - Gül Dükanı</p>
          </div>
        </div>
      </div>
    </div>

  );

};

export default Footer;