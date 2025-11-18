import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function FollowMe(){
    return(
      <>
      <div className="w-full flex flex-col ">
            <div className="w-full flex gap-3.5 mb-[30px] items-center">
              <div className="w-full max-w-[110px] text-[20px] font-sans">
                Follow Me!
              </div>
              <div className="w-full border-2 border-red-600   h-0 text-center"></div>
            </div>
            <div className="w-full  flex justify-center gap-4 items-center  mb-[10px] ">
              <div className="w-full bg-[#175BEB] p-[22px] outline-2 outline-offset-2 outline-[#175BEB]"><FaFacebookF className="w-[24px] h-[24px] text-white " /></div>
              <div className="w-full bg-[#1DA1F2] p-[22px] outline-2 outline-offset-2 outline-[#1DA1F2]"><FaTwitter className="w-[24px] h-[24px] text-white" /></div>
              <div className="w-full bg-[#EF00A2] p-[22px] outline-2 outline-offset-2 outline-[#EF00A2]"><FaInstagram className="w-[24px] h-[24px] text-white" /></div>
              <div className="w-full bg-amber-500 p-[22px] outline-2 outline-offset-2 outline-[#f26522]"><FaWifi className="w-[24px] h-[24px] text-white" /></div>
            </div>
          </div>
      </>
    );
};

export default FollowMe