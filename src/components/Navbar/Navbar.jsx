import { useContext } from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import logoImg from "../../images/Group_514_image.png";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { SidebarContext } from "../../contexts/SidebarContexts";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Navbar = () => {
  const { price } = useContext(DataContext);
  const { searchHandleClose, setIsOpen } = useContext(SidebarContext);

  return (
    <div className="w-full rd:h-[100px] h-[80px] bg-white sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-2 sm:pl-24 sm:pr-24 pl-0 pr-0">
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
              <NavLink to={"/"}>
                <img src={logoImg} alt="" />
              </NavLink>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div
              onClick={searchHandleClose}
              className="w-[45px] h-[45px] flex justify-center items-center rounded-[5px] shadow-lg cursor-pointer pt-2 transition duration-200 hover:scale-95"
            >
              <IoIosSearch />
            </div>
            <Link to={"/shoppingcart"}>
              <div className="flex justify-between items-center gap-2 w-[126px] h-[45px] shadow-lg rounded-[5px] cursor-pointer pl-2 pr-2 pt-2 transition duration-200 hover:scale-95">
                <IoCartOutline />
                <p className="font-Montserrat font-bold text-[12px]">
                  {price} Azn
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;