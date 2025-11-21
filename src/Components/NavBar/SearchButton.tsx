import { GoSearch } from "react-icons/go";
import { FaHashtag } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigateToHomePage = useNavigate();
  const handleClick = () => {
    navigateToHomePage("/");
  }
  return (
    <div className=" ">
      <button className="fixed top-0 right-0 text-[#4B4870]  p-2 " onClick={handleClick}>
        <RxCross2 className="text-[32px]" />
      </button>

      <div className="mt-10 mb-10 flex justify-center items-center">
        <h2 className="text-[40px] text-[#4B4870] font-josefin font-bold text-center leading-tight md:text-[50px]">
          Press <span className="text-red-500">ESC</span> to close
        </h2>
      </div>
      <div className="w-full flex flex-col gap-10 justify-center items-center">
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Type to search..."
            className="w-80 border border-gray-300 rounded-lg p-2 outline-none"
          />
          <GoSearch className="w-[17px] h-[17px] text-red-500 cursor-pointer" />
        </div>
        <div className="w-full text-[#596172] text-[14px] font-serif text-center md:text-[16px]">
          Or check our Popular Categories...
        </div>

        <div className="flex gap-2.5 flex-wrap md:flex-wrap lg:flex-wrap justify-center items-center mt-5">
          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-red-500" />
            Getting Started
          </div>

          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-amber-500" />
            Health
          </div>

          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-green-500" />
            Lifestyle
          </div>

          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-pink-500" />
            Music
          </div>

          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-blue-500" />
            Technology
          </div>

          <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
            <FaHashtag className="w-[8.6px] h-[13.6px] text-purple-500" />
            Travel
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
