import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { GoSearch } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

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

      <div className="flex justify-between p-[15px] items-center">
        <RiMenu2Fill
          className="w-[31px] h-[31px] text-[#4B4870] cursor-pointer"
          onClick={() => setOpen(true)}
        />

        <div className="text-[40px] text-[#4B4870] font-sans font-bold text-center leading-tight ">
          <span className="text-red-700">M</span>aktub<br className="sm:hidden"/> for Ghost
        </div>

        <div className="rounded-full w-10 h-10 bg-red-600 p-2.5">
          <GoSearch className="w-[17px] h-[17px] text-white" />
        </div>
      </div>

      <div className={`fixed top-[54px] left-0 h-full w-[300px] bg-white shadow-2xl transition-transform duration-300  
        ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col gap-5 p-6 text-[#4B4870] text-[15px]" >
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/style-guide">Style Guide</Link>
          <Link to="/tag">#Tag</Link>
          <div className="flex justify-between">
          <Link to="/more">More</Link>
          <RiArrowDropDownLine className="w-6 h-6"/>
          </div>

          <div className="text-center">
            <button className="mt-6 w-[100px] py-2 px-[25px] bg-[#4B4870] text-[15px] text-white">
              Sign In
            </button>
          </div>
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
    </>
  );
}

export default NavBar;
