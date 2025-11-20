import LatestArticle from "./LatestArticle";
import FollowMe from "./FollowMe";
import AboutUs from "./AboutUs";
import SocialMediaIcons from "./SocialMediaIcons";
import TagCloud from "./TagCloud";
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
            <div className="w-full bg-[#F9F9FE] px-[25px] py-3 shadow-md text-center text-[16px] text-[#596172] md:w-[260px]">
              Enter your email address
            </div>
            <div className="relative inline-block group">
              <span className="absolute top-0 left-0 w-full h-full border-2 border-[#47446a]"></span>
              <button className="relative bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300 hover:-top-1.5 hover:-left-1.5">
                Submit
              </button>
            </div>
          </div>
          <SocialMediaIcons />
        </div>
        <div className="w-full flex flex-col gap-10 mt-[45px] md:grid md:grid-cols-2 md:grid-rows-2 md:gap-10 xl-grid xl:grid-cols-4 xl:grid-rows-1 xl:max-w-[1440px] ">
          <LatestArticle />
          <TagCloud />
          <FollowMe />
          <AboutUs />
        </div>

        <div className="mt-5 flex flex-col gap-5">
          <div className="text-[32px] text-[#4B4870] font-sans font-bold text-center leading-tight transition-transform duration-300  hover:scale-112 ">
            <span className="text-red-700">M</span>aktub for Ghost
          </div>
          <div className="text-[16px] text-[59172] text-center ">
           <span className="hover:text-red-500">Terms & Conditions </span> 
           <span className="mr-2.5 ml-1">|</span> 
           <span className="hover:text-red-500">Faqs</span>
            <span className="mr-2.5 ml-1">|</span>
            <span className="hover:text-red-500"> Privacy
            <br className="md:hidden" /> Policy</span>
          </div>
          <div className="text-[16px] text-[59172] text-center">
            Published with Ghost & EstudioPatagon
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
