import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
function FollowMe() {
  return (
    <>
      <div className="w-full flex flex-col ">
        <div className="w-full flex gap-3.5 mb-[30px] items-center">
          <div className="w-full max-w-[110px] text-[20px] font-sans">
            Follow Me!
          </div>
          <div className="w-full border-2 border-red-600   h-0 text-center"></div>
        </div>
        <div className="w-full  flex  gap-4 items-center  mb-2.5 ">
          <div className="w-full  bg-[#175BEB] p-[22px] outline-2 outline-offset-2 outline-[#175BEB] xl:max-w-[50px] xl:p-4">
            <FaFacebookF className="w-6 h-6 text-white " />
          </div>
          <div className="w-full bg-[#1DA1F2] p-[22px] outline-2 outline-offset-2 outline-[#1DA1F2] xl:max-w-[50px] xl:p-4">
            <FaTwitter className="w-6 h-6 text-white" />
          </div>
          <div className="w-full h-auto bg-[#EF00A2] p-[22px] outline-2 outline-offset-2 outline-[#EF00A2] xl:w-[50px] xl:p-4">
            <FaInstagram className="w-6 h-6 text-white" />
          </div>
          <div className="w-full bg-amber-500 p-[22px] outline-2 outline-offset-2 outline-[#f26522] xl:w-[50px] xl:p-4">
            <FaWifi className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FollowMe;
