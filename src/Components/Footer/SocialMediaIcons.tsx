import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function SocialMediaIcons() {
    return(
        <>
        <div className="w-full flex justify-center gap-6 items-center mt-[35px] mb-2.5 ">
                    <FaFacebookF className="w-6 h-6 text-[#175BEB] transition-transform duration-300  hover:scale-112" />
                    <FaTwitter className="w-6 h-6 text-[#1DA1F2] transition-transform duration-300  hover:scale-112" />
                    <FaInstagram className="w-6 h-6 text-[#EF00A2] transition-transform duration-300  hover:scale-112" />
                    <FaWifi className="w-6 h-6 text-[#f26522] transition-transform duration-300  hover:scale-112" />
                  </div>
        </>
    );
};

export default SocialMediaIcons;