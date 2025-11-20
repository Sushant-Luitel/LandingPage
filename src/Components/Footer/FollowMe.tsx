import { socialIcons } from "./IconsData";

function FollowMe() {
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex gap-3.5 mb-[30px] items-center">
          <div className="w-full max-w-[110px] text-[20px] font-josefin font-bold text-[#454630]">
            Follow Me!
          </div>
          <div className="w-full border-2 border-red-600 h-0"></div>
        </div>

        <div className="w-full  flex items-center gap-4 ">
          {socialIcons.map((item) => (
            <div className="relative w-[60px] h-[60px] group">
              <div
                className="absolute  w-full h-full outline outline-offset-1 "
                style={{ outlineColor: item.color }}
              ></div>

              <div
                className="absolute w-full h-full flex items-center justify-center transition-all duration-300 group-hover:-top-1.5 group-hover:-left-1.5"
                style={{ backgroundColor: item.color }}
              >
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FollowMe;
