import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import SocialMediaIcons from "../Footer/SocialMediaIcons";
import MenuItems from "./MenuItems";
import EstudioPatagon from "./EstudioPatagon";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const [open, setOpen] = useState(false);
  const navigateToSearchPage = useNavigate();
  const handleClick = () => {
    navigateToSearchPage('/search');
  }

  return (
    <>
      <div className="pt-[70px]">
      <div className="flex justify-between p-[15px] mt-3 items-center lg:justify-evenly lg:gap-8">
        <RiMenu2Fill
          className="lg:hidden w-[31px] h-[31px] text-[#4B4870] cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <div className="hidden lg:block ">
          <SocialMediaIcons />
        </div>
        <div className="text-[40px] text-[#4B4870] font-josefin font-bold text-center leading-tight md:text-[50px] transition-transform duration-300  hover:scale-112">
          <span className="text-red-700">M</span>aktub
          <br className="sm:hidden" /> for Ghost
        </div>

        <div onClick={handleClick} className="rounded-full w-10 h-10 bg-red-600 p-2.5 xl:w-11 xl:h-11 cursor-pointer flex justify-center items-center ">
          <GoSearch className="w-[17px] h-[17px] text-white " />
        </div>
      </div>

      <div
        className={`fixed top-[54px] left-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300 height-full p-5 pt-10 z-99999 
        ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="lg:hidden  ">
          <MenuItems />
        </div>
      </div>

      {open && (
        <button
          onClick={() => setOpen(false)}
          className="fixed top-[90px] left-[310px] text-[#4B4870]  p-2 "
        >
          <RxCross2 className="text-[32px]" />
        </button>
      )}

      <div className="hidden lg:flex  justify-center items-center">
        <MenuItems />
      </div>

      <EstudioPatagon />
      </div>
    </>
  );
}

export default NavBar;
