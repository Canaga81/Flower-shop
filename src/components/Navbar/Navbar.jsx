import { useContext } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import logoImg from "../../images/Group 514.png";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { SidebarContext } from "../../contexts/SidebarContexts";

const Navbar = () => {
  const { setIsOpen } = useContext(SidebarContext);
  const { searchHandleClose } = useContext(SidebarContext);

  return (
    <div className="w-full h-[100px] bg-white sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between sm:pl-24 sm:pr-24 pl-6 pr-6">
          <div>
            <div
              onClick={() => setIsOpen(true)}
              className="w-[45px] h-[45px] flex justify-center items-center rounded-[5px] shadow-lg cursor-pointer pt-2 transition duration-200 hover:scale-95"
            >
              <HiBars3BottomLeft />
            </div>
          </div>
          <div>
            <div>
              <img src={logoImg} alt="" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div onClick={searchHandleClose} className="w-[45px] h-[45px] flex justify-center items-center rounded-[5px] shadow-lg cursor-pointer pt-2 transition duration-200 hover:scale-95">
              <IoIosSearch />
            </div>
            <div className="flex justify-between items-center gap-2 w-[95px] h-[45px] shadow-lg rounded-[5px] cursor-pointer pl-2 pr-2 pt-2 transition duration-200 hover:scale-95">
              <IoCartOutline />
              <p className="font-Montserrat">25 Azn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;