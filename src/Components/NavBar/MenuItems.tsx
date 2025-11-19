import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function MenuItems() {
  return (
    <>
      <div className="flex flex-col gap-5 p-6 text-[#4B4870] text-[15px] 
       lg:flex-row lg:gap-5 lg:items-center lg:shadow-2xl lg:max-w-[582px] lg:p-0 
       lg:py-2.5  lg:font-semibold lg:justify-center lg:ml-auto lg:mr-auto">
        <Link to="/" className="hover:text-red-500">
          Home
        </Link>
        <Link to="/Membership" className="hover:text-red-500">
          Membership
        </Link>
        <Link to="/style-guide" className="hover:text-red-500">
          Style Guide
        </Link>
        <Link to="/tag" className="hover:text-red-500">
          #Tag
        </Link>
        <div className="flex justify-between">
          <Link to="/more" className="hover:text-red-500">
            More
          </Link>
          <RiArrowDropDownLine className="w-6 h-6" />
        </div>

        <div className="text-center">
          <button className="mt-6 w-[100px] py-2 px-[25px] bg-[#4B4870] text-[15px] text-white lg:mt-0 ">
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
export default MenuItems;
