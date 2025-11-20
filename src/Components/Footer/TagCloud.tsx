import { FaHashtag } from "react-icons/fa";
function TagCloud() {
  return (
    <>
      <div>
        <div className="w-full flex flex-col ">
          <div className="w-full flex gap-3.5 mb-[30px] items-center">
            <div className="w-full max-w-[120px] text-[20px] font-josefin font-bold text-[#454630] md:text-[24px]">
              Top Cloud
            </div>
            <div className="w-full border-2 border-red-600   h-0 text-center"></div>
          </div>
          <div className="w-full ">
            <div className="flex gap-2.5 flex-wrap md:flex-wrap lg:flex-wrap">
              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-red-500" />
                Getting Started
              </div>

              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-amber-500" />
                Health
              </div>

              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-green-500" />
                Lifestyle
              </div>

              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-pink-500" />
                Music
              </div>

              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-blue-500" />
                Technology
              </div>

              <div className="pt-1.5 px-2 pb-1 text-[14px] flex gap-1 items-center rounded-md shadow-lg border border-gray-300 transition-transform duration-300  hover:scale-112">
                <FaHashtag className="w-[8.6px] h-[13.6px] text-purple-500" />
                Travel
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagCloud;
