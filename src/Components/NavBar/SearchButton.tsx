import { GoSearch } from "react-icons/go";

function Search() {
  return (
    <div>
      <div className="w-screen h-screen max-w-full max-h-full p-0 bg-white rounded-none top-0 left-0 translate-x-0 translate-y-0 border-none shadow-none">
        <div className="dialog-header mt-10 mb-10 flex justify-center items-center">
          <h2 className="text-[40px] text-[#4B4870] font-josefin font-bold text-center leading-tight md:text-[50px]">
            Press <span className="text-red-500">ESC</span> to close
          </h2>
        </div>
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
      </div>
    </div>
  );
}
export default Search;
