import { useContext } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import NavData from "../../DataBase/NavData";
import { NavLink } from "react-router-dom";
import { SidebarContext } from "../../contexts/SidebarContexts";

const MenuSidebar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div>
      <div onClick={() => setIsOpen(false)} className={`${isOpen ? 'fixed inset-0 bg-[rgba(0,0,0,0.17)] z-50' : ''}`}></div>
      <div
        className={`${
          isOpen ? "-right-0" : "-right-full"
        } w-full  bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
      >
        <div onClick={() => setIsOpen(false)} className="mt-10 cursor-pointer">
          <HiMiniXMark size={25} />
        </div>
        <div className="z-50 relative">
          {NavData.map((navItem, idx) => {
            return (
              <div key={idx} className="flex flex-col gap-10">
                <NavLink
                  onClick={() => setIsOpen(false)}
                  className={
                    "mt-6 text-[25px] font-fontDisplay tracking-[1.5px] hover:text-red-500 transition duration-200"
                  }
                  to={navItem.to}
                >
                  {navItem.label}
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuSidebar;
