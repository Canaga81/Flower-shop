import { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { SidebarContext } from "../../contexts/SidebarContexts";

const searchSidebar = () => {
  const { searchOpen, setSearchOpen } = useContext(SidebarContext);

  return (
    <div>
      <div
        onClick={() => setSearchOpen(false)}
        className={`${
          searchOpen ? "fixed inset-0 bg-[rgba(0,0,0,0.17)] z-50" : ""
        }`}
      ></div>
      <div
        className={`${
          searchOpen
            ? "bg-searchBg w-full h-[200px] flex justify-center items-center fixed top-[90px] z-50 transition-all duration-300"
            : "opacity-0 transition-all fixed top-0"
        }`}
      >
        <div className="flex items-center bg-white px-3 py-2 w-1/3 rounded-md">
          <input
            placeholder="Mağazamızı axtarın"
            className="border-none outline-none px-3 py-2 w-full rounded-md font-Montserrat"
            type="text"
          />
          <IoIosSearch size={28} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default searchSidebar;