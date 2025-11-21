import { RiFileCopyLine } from "react-icons/ri";
import SocialMediaIcons from "../Footer/SocialMediaIcons";

function ShareArticle() {
    return (
        <>
        <div className="w-full max-w-[488px] flex flex-col justify-center items-center mt-5 shadow-md p-10">
          <div className="text-center text-[14px] md:text-[16px] text-[#434560] font-bold font-josefin mb-5">
            Share Article
          </div>
          <SocialMediaIcons />
          <div className="flex gap-5 p-2 border-2 border-gray-200  justify-center items-center w-full mt-5 ">
            <div className="text-[13px] text-gray-400">https://ghost.estudiopatagon.com/maktub/design/</div>
            <RiFileCopyLine className="text-[25px] text-red-500"/>
          </div>
        </div>
        </>
    );
};
export default ShareArticle;