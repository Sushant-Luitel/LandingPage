import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

import SocialMediaIcons from "../Footer/SocialMediaIcons";
import MenuItems from "./MenuItems";
import EstudioPatagon from "./EstudioPatagon";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 bg-black w-full h-[54px] p-2 flex justify-between items-center z-20">
        <img src="logo.svg" alt="logo" className="w-[114px] h-3.5" />
        <button className="px-4.5 text-white bg-[#82B440] text-[14px] font-serif rounded-1">
          Buy now
        </button>
      </div>

      <div className="flex justify-between p-[15px] items-center lg:justify-around lg:gap-8">
        <RiMenu2Fill
          className="lg:hidden w-[31px] h-[31px] text-[#4B4870] cursor-pointer"
          onClick={() => setOpen(true)}
        />
        <div className="hidden lg:block">
          <SocialMediaIcons />
        </div>
        <div className="text-[40px] text-[#4B4870] font-sans font-bold text-center leading-tight md:text-[50px]">
          <span className="text-red-700">M</span>aktub
          <br className="sm:hidden" /> for Ghost
        </div>

        <div className="rounded-full w-10 h-10 bg-red-600 p-2.5">
          <GoSearch className="w-[17px] h-[17px] text-white" />
        </div>
      </div>

      <div
        className={`fixed top-[54px] left-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300  
        ${open ? "translate-x-0" : "-translate-x-full"} `}
      >
        <div className="lg:hidden">
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

      <div className="hidden lg:block">
        <MenuItems />
      </div>

      <EstudioPatagon />
    </>
  );
}

export default NavBar;
