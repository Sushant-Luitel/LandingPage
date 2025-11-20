import type { BlogPost } from "../../constants/HomeContent";
import { FaRegComment } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { RiVipLine } from "react-icons/ri";
import React from "react";
type PostCardProps = {
  post: BlogPost;
};
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const renderTypeIcon = (type: string) => {
    switch (type) {
      case "member":
        return (
          <CiLock
            className="text-red-500 w-4 h-3 md:w-4 md:h-4"
            title="Member"
          />
        );
      case "paid":
        return (
          <RiVipLine
            className="text-red-500 w-4 h-4 md:w-4 md:h-4"
            title="Paid"
          />
        );
      default:
        return null;
    }
  };

  const tagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "travel":
        return "#7171e3";
      case "health":
        return "#f5b56c";
      case "technology":
        return "#408cff";
      case "music":
        return "#fa0598";
      case "getting started":
        return "#ff4d61";
      default:
        return "text-gray-500";
    }
  };
  return (
    <div className="md:w-full p-3 sm:px-10 ">
      <div className="bg-white rounded-md w-full sm:rounded-sm shadow-lg flex flex-col p-4  relative h-full mt-5 md:p-[40px] md:mt-[70px]">
        <div className="flex items-center justify-start gap-4  md:items-start">
          <div className="w-25 h-25 md:w-[120px] md:h-[114px] relative">
            {/* <div className="absolute h-full w-full outline-4 -outline-offset-4"></div> */}
            <img
            src={post.image}
            alt={post.title}
            className="h-full w-full flex-shrink-0  object-cover  hover:cursor-pointer"
          ></img>
          <div className="absolute top-1/2 left-1/2 z-2 -translate-1/2 h-[95%] w-[95%] bg-white"></div>
          <div className="absolute top-1/2 left-1/2 z-3 -translate-1/2 h-[95%] w-[95%]">
            <img
            src={post.image}
            alt={post.title}
            className="h-full w-full z-1 flex-shrink-0  object-cover  hover:cursor-pointer hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-300 ease-in-out"
          ></img>
          </div>
          </div>
          <div className="flex justify-start items-start flex-col flex-grow md:ml-2 md:p-2">
            <h2 className=" inline justify-start items-center text-base font-bold font-josefin md:text-2xl justify-start text-left md:pb-2 hover:cursor-pointer hover:underline decoration-blue-500 decoration-3 underline-offset-6 underline-eaese-in-out duration-900">
              {post.title}
            </h2>
            <div className=" items-center justify-center mb-4 items-baseline hidden md:flex">
              <span className="text-xs text-gray-500 font-source-serif md:text-md">
                {post.date}
              </span>
              <div className="md:h-[4px] md:w-[20px] bg-red-500 mx-2"></div>
              <div className="text-xs text-gray-500 font-source-serif md:text-md">
                {post.readingtime}
              </div>
              <div className="flex flex-row ml-2 gap-1 items-center text-xs text-gray-500 font-source-serif md:text-md hover:text-red-500 hover:cursor-pointer">
                {" "}
                <FaRegComment className="text-red-500 text-sm " />{" "}
                {post.comments ?? 0}{" "}
              </div>
              <div className="flex ml-2  ">{renderTypeIcon(post.type)}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow mt-4 md:mt-4 gap-2 ">
          <div className="flex items-center justify-center mb-4 mt-4 items-baseline md:hidden">
            <span className="text-xs text-gray-500 font-source-serif">
              {post.date}
            </span>
            <div className="h-[4px] w-[15px] bg-red-500 mx-2"></div>
            <div className="text-xs text-gray-500 font-source-serif">
              {post.readingtime}
            </div>
            <div className="flex flex-row ml-2 gap-1 items-center text-xs text-gray-500 font-source-serif hover:text-red-500">
              {" "}
              <FaRegComment className="text-red-500 text-sm md:text-md" />{" "}
              {post.comments ?? 0}{" "}
            </div>
            <div className="flex ml-2 ">{renderTypeIcon(post.type)}</div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 font-source-serif text-left text-[13px] md:text-lg md:mt-5">
            {post.content.substring(0, 200)}...
          </p>
        </div>
        <div className="flex flex-row items-center justify-between mt-auto mb-10 w-full">
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className={
                  "text-xs font-semibold px-2 py-1 rounded-md shadow-lg border border-gray-300 flex items-center md:text-md transition-transform duration-300  hover:scale-112"
                }
              >
                <span className={`mr-1 `} style={{ color: tagColor(tag) }}>
                  #
                </span>{" "}
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 hidden md:flex ">
            <img
              src={post.authorimg || "https://i.pravatar.cc/150?img=68"}
              alt={post.author}
              title={post.author}
              className="w-12 h-12 rounded-full object-cover border border-gray-200 md:w-8 md:h-8 "
            />
            <span className="text-sm font-medium md:text-md text-gray-700 mr-3 hover:text-red-500">
              {post.author}
            </span>
          </div>
        </div>
        <div className="mt-auto absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
          <div className="relative inline-block group">
              <span className="absolute top-0 left-0 w-full h-full border-2 border-[#47446a]"></span>
              <button className="relative bg-[#47446a] text-white px-8 py-3 text-lg transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2">
                Continue Reading
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};
