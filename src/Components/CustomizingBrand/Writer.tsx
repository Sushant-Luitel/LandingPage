import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
function Writer() {
  return (
    <>
    <div className="w-full justify-center items-center flex flex-col  gap-4   mb-2.5 mt-15 shadow-xl px-10 py-6">
              <div className="flex gap-4 justify-center items-center">
                <img
                  src="profile.png"
                  alt="profile"
                  className="w-[82px] h-[82px]"
                />
                <div className="w-full flex flex-col gap-1">
                  <div className="w-full text-[14px] font-semibold text-[#454360]">
                    Jonathan Doe
                  </div>
                  <div className="w-full ext-[14px] ">Collaborator & Editor</div>
                  <div className="w-full flex gap-2">
                    <FaTwitter className="w-[15px] h-[15px] text-[#1DA1F2]" />
                    <FaFacebookF className="w-[15px] h-[15px] text-[#175BEB]" />
                    <FaEarthAsia className="w-[15px] h-[15px] text-orange-500" />
                  </div>
                </div>
              </div>
              <div className=" w-full text-[14px] text-center">
                Hello! My name is Jonathan Doe working from Chile. I create some
                Ghost and Wordpress themes for differents markets, also, i offer
                live support via our ticket system.
              </div>
            </div>
    </>
  );
};
export default Writer;    
