import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";

import LatestArticle from "./LatestArticle";
import TopCloud from "./TopCloud";
import FollowMe from "./FollowMe";
import AboutUs from "./AboutUs";
function Footer() {
  return (
    <>
      <div className=" w-full flex flex-col items-center px-[25px] py-[35px]">
        <div className="w-full ">
          <div className="text-[26px] mb-[15px] text-[#4B4870] text-center font-bold">
            Subscribe to <br className="sm:hidden" />{" "}
            <span className="text-red-700">M</span>aktub for Ghost
          </div>
          <div className="w-full text-[#596172] text-[14px] font-serif text-center ">
            Get the latest posts delivered right to your
            <br className="sm:hidden" /> email.
          </div>
          <div className=" w-full mt-[25px] mb-[15px] flex flex-col gap-5 items-center md:flex-row justify-center md:gap-0">
            <div className="w-full bg-[#F9F9FE] px-[25px] py-[12px] shadow-md text-center text-[16px] text-[#596172] md:w-[260px]">
              Enter your email address
            </div>
            <button className="w-[94.98px] py-[8px] px-[25px] bg-[#4B4870] text-white">
              Submit
            </button>
          </div>
          <div className="w-full  flex justify-center gap-6 items-center mt-[35px] mb-[10px] ">
            <FaFacebookF className="w-[24px] h-[24px] text-[#175BEB]" />
            <FaTwitter className="w-[24px] h-[24px] text-[#1DA1F2]" />
            <FaInstagram className="w-[24px] h-[24px] text-[#EF00A2]" />
            <FaWifi className="w-[24px] h-[24px] text-[#f26522]" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 mt-[45px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 lg-grid lg:grid-cols-4 lg:grid-rows-1">
          {/*Latest Articles */}
          <LatestArticle />

          {/*Top Cloud */}
          <TopCloud />
          {/*Follow Me */}
          <FollowMe />

          {/*About Me */}
          <AboutUs />
        </div>

        <div className="mt-[20px] flex flex-col gap-5">
          <div className="text-[32px] text-[#4B4870] font-sans font-bold text-center leading-tight ">
            <span className="text-red-700">M</span>aktub for Ghost
          </div>
          <div className="text-[16px] text-[59172] text-center">
            Terms & Conditions <span className="mr-[10px] ml-1">|</span> Faqs <span className="mr-[10px] ml-1">|</span> Privacy<br className="md:hidden"/> Policy
          </div>
          <div className="text-[16px] text-[59172] text-center">Published with Ghost & EstudioPatagon</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
