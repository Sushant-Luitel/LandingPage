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
        return <CiLock className="text-red-500 w-4 h-3" title="Member" />;
      case "paid":
        return <RiVipLine className="text-red-500 w-4 h-4" title="Paid" />;
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
        return "#ff4d61"
      default:
        return "text-gray-500";
    }
  };
  return (
    <div>
      <div className="bg-white rounded-md  sm:rounded-sm shadow-lg flex flex-col p-4 mb-10 relative h-full">
        <div className="flex items-center justify-start overflow-hidden gap-4  md:items-start md:p-6 ">
          <img
            src={post.image}
            alt={post.title}
            className="w-25 h-25 flex-shrink-0  object-cover md:w-32 md:h-32 "
          ></img>
          <div>
            <h2 className="text-base font-bold font-josefin md:text-xl text-left">
              {post.title}
            </h2>
          </div>
        </div>
        <div className="flex flex-col flex-grow mt-4 md:mt-6 gap-2 ">
          <div className="flex items-center justify-center mb-4 mt-4 items-baseline">
            <span className="text-xs text-gray-500 font-source-serif">
              {post.date}
            </span>
            <div className="h-[4px] w-[15px] bg-red-500 mx-2"></div>
            <div className="text-xs text-gray-500 font-source-serif">
              {post.readingtime}
            </div>
            <div className="flex flex-row ml-2 gap-1 items-center text-xs text-gray-500 font-source-serif">
              {" "}
              <FaRegComment className="text-red-500 text-sm" />{" "}
              {post.comments ?? 0}{" "}
            </div>
            <div className="flex ml-2 ">{renderTypeIcon(post.type)}</div>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 font-source-serif text-left text-[13px]">
            {post.content.substring(0, 200)}...
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto mb-10 ">
          <div className="flex flex-wrap gap-3">
            
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className={
                  "text-xs font-semibold px-2 py-1 rounded-md shadow-lg border border-gray-300 flex items-center transition-transform duration-300 hover:scale-112"
                }
              >
                <span className={`mr-1 ` } style={{ color: tagColor(tag) }}>#</span> {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center hidden md:flex gap-2">
            <span className="text-sm font-medium text-gray-700 mr-3">
              {post.author}
            </span>
            <img
              src={post.authorimg || "https://i.pravatar.cc/150?img=68"}
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover border border-gray-200"
            />
          </div>
          <div className="mt-auto">
            <button className="w-40 h-10 bg-[#4B4870] text-white  rounded shadow-md text-sm font-semibold absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 ">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
