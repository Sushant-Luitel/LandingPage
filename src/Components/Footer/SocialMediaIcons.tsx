import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function SocialMediaIcons() {
    return(
        <>
        <div className="w-full flex justify-center gap-6 items-center mt-[35px] mb-2.5 ">
                    <FaFacebookF className="w-6 h-6 text-[#175BEB]" />
                    <FaTwitter className="w-6 h-6 text-[#1DA1F2]" />
                    <FaInstagram className="w-6 h-6 text-[#EF00A2]" />
                    <FaWifi className="w-6 h-6 text-[#f26522]" />
                  </div>
        </>
    );
};

export default SocialMediaIcons;