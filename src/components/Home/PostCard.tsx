import type { BlogPost } from "./HomeContent";
import { FaRegComment } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { RiVipLine } from "react-icons/ri";
type PostCardProps = {
  post: BlogPost;
};
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const renderTypeIcon = (type: string) => {
    switch (type) {
      case "member":
        return (
          <CiLock
            className="text-red-500 w-4 h-3 lg:w-4 lg:h-4"
            title="Member"
          />
        );
      case "paid":
        return (
          <RiVipLine
            className="text-red-500 w-4 h-4 lg:w-4 lg:h-4"
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
    <div className="md:w-full lg:w-full p-3 sm:px-10 ">
      <div className="bg-white rounded-md w-full sm:rounded-sm shadow-lg flex flex-col p-4 mb-10 relative h-full mt-5 md:p-[40px] md:mt-[70px]">
        <div className="flex items-center justify-start overflow-hidden gap-4  md:items-start ">
          <img
            src={post.image}
            alt={post.title}
            className="w-25 h-25 flex-shrink-0  object-cover md:w-[114px] md:h-[114px] lg:h-[150px] lg:w-[150px] xl:w-[250px] xl:h-[250px] "
          ></img>
          <div className="flex justify-center items-center flex-col flex-grow md:ml-2 md:pt-5 ">
            <h2 className=" flex justify-start items-center text-base font-bold font-josefin md:text-xl flex flex-row justify-start text-left md:pb-2 lg:text-3xl justify-start xl:text-4xl justify-start">
              {post.title}
            </h2>
            <div className=" items-center justify-center mb-4 mt-4 items-baseline hidden md:flex">
              <span className="text-xs text-gray-500 font-source-serif md:text-md lg:text-lg">
                {post.date}
              </span>
              <div className="md:h-[4px] md:w-[20px] bg-red-500 mx-2"></div>
              <div className="text-xs text-gray-500 font-source-serif md:text-md lg:text-lg">
                {post.readingtime}
              </div>
              <div className="flex flex-row ml-2 gap-1 items-center text-xs text-gray-500 font-source-serif md:text-md">
                {" "}
                <FaRegComment className="text-red-500 text-sm" />{" "}
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
            <div className="flex flex-row ml-2 gap-1 items-center text-xs text-gray-500 font-source-serif">
              {" "}
              <FaRegComment className="text-red-500 text-sm md:text-md lg:text-lg" />{" "}
              {post.comments ?? 0}{" "}
            </div>
            <div className="flex ml-2 ">{renderTypeIcon(post.type)}</div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 font-source-serif text-left text-[13px] md:text-lg md:mt-5 lg:text-xl xl:text-2xl 2xl:text-3xl">
            {post.content.substring(0, 200)}...
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto mb-10 w-full">
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag, i) => (
              <span
          key={i}
          className={
            "text-xs font-semibold px-2 py-1 rounded-md shadow-lg border border-gray-300 flex items-center md:text-md lg:text-lg xl:text-xl 2xl:text-2xl transition-transform duration-300  hover:scale-112"
          }
              >
          <span className={`mr-1 `} style={{ color: tagColor(tag) }}>
            #
          </span>{" "}
          {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 md:flex">
            <img
              src={post.authorimg || "https://i.pravatar.cc/150?img=68"}
              alt={post.author}
              className="w-12 h-12 rounded-full object-cover border border-gray-200"
            />
            <span className="text-sm font-medium md:text-md lg:text-lg xl:text-xl 2xl:text-2xl text-gray-700 mr-3">
              {post.author}
            </span>
          </div>
        </div>
        <div className="mt-auto">
          <button className="w-40 h-10 bg-[#4B4870] text-white  rounded shadow-md text-sm font-semibold absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 ">
            Continue Reading
          </button>
        </div>
      </div>
    </div>
  );
};
