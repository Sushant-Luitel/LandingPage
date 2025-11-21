import Subscriber from "../components/CustomizingBrand/Subscriber";
import { FaHashtag } from "react-icons/fa";
import ShareArticle from "../components/CustomizingBrand/ShareArticle";
import Writer from "../components/CustomizingBrand/Writer";
import { Sidebar } from "../components/Sidebar/Sidebar";
function CustomizingBrandPage() {
  return (
    <>
      <div className="w-full flex flex-col justify-center md:flex-row md:gap-8 mx-auto mt-10 px-4 md:px-0">
        
          <div className="w-full max-w-3xl  flex flex-col gap-3.5 justify-center items-center showdow-md p-5 md:p-12">
            <div className="w-full object-cover">
              <img
                src="tree.jpg"
                alt="image1"
                className="w-full h-[200px] shrink-0  object-cover  hover:cursor-pointer"
              ></img>
            </div>
            <div className="flex flex-col gap-5 mb-5">
              <div className="text-center text-[18px] md:text-[20px] text-[#434560] font-bold font-josefin">
                Customizing your brand and design settings
              </div>
              <div className=" text-center text-[12px] md:text-[15px] text-[#424851] font-sans flex gap-2 justify-center items-center">
                <span>March 16, 2021</span>
                <div className="w-2 border-2 border-red-500 "></div>
                <span>3 min read</span>
              </div>
              <div className="text-[13px] md:text-[14px] text-[#434560] font-sans text-center">
                As discussed in the introduction post, one of the best things
                about Ghost is just how much you can customize to turn your site
                into something unique...
              </div>
            </div>
            <Subscriber />

            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-full max-w-[120px] text-[20px] font-josefin font-bold text-[#454630] md:text-[24px] text-center">
                Tag Cloud
              </div>
              <div className="flex gap-2.5 flex-wrap md:flex-wrap lg:flex-wrap mt-5">
                <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                  <FaHashtag className="w-[8.6px] h-[13.6px] text-red-500" />
                  Getting Started
                </div>
                <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                  <FaHashtag className="w-[8.6px] h-[13.6px] text-blue-500" />
                  Technology
                </div>
              </div>
            </div>

            <ShareArticle />

            <Writer />
          </div>
        
        <Sidebar />
      </div>
    </>
  );
}
export default CustomizingBrandPage;
