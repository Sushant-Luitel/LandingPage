import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { menuItems } from "./MenuItemsData";
import { useNavigate } from "react-router-dom";
function MenuItems() {
  const navigateToSignInPage = useNavigate();
  const handleClick = () => {
    navigateToSignInPage('/signin-page');
  }
  return (
    <>
      <div
        className="flex flex-col gap-5 p-6 text-[#4B4870] text-[15px] font-bold
       lg:flex-row lg:gap-5  lg:items-center lg:shadow-sm lg:max-w-[582px] lg:p-0 lg:px-3.5
       lg:py-2.5  lg:font-semibold lg:justify-center "
      >
        {menuItems.map((item) => (
          <div className="flex items-center font-josefin gap-1" key={item.name}>
            <Link to={item.path} className="hover:text-red-500">
              {item.name}
            </Link>

            {item.hasDropdown && <RiArrowDropDownLine className="w-6 h-6" />}
          </div>
        ))}
        <div className="text-center">
          <button className="mt-6 w-[120px] py-2 px-[25px] bg-[#4B4870] text-[15px] text-white font-josefin lg:mt-0 "
                  onClick={handleClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
export default MenuItems;
