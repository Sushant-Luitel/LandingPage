import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { menuItemsData } from "../Constants/MenuItemsData";
function MenuItems() {
  return (
    <>
      <div className="flex flex-col gap-5 p-6 text-[#4B4870] text-[15px] 
       lg:flex-row lg:gap-5 lg:items-center lg:shadow-2xl lg:max-w-[582px] lg:p-0 
       lg:py-2.5  lg:font-semibold lg:justify-center lg:ml-auto lg:mr-auto">
        {menuItemsData.map((item) => (
        <div className="flex items-center gap-1" key={item.name}>
          <Link to={item.path} className="hover:text-red-500">
            {item.name}
          </Link>
          {item.hasDropdown && <RiArrowDropDownLine className="w-6 h-6" />}
        </div>
      ))}

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
