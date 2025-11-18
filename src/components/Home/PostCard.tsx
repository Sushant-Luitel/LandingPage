import type { BlogPost } from "./HomeContent";
import { FaRegComment } from "react-icons/fa";
type PostCardProps = {
  post: BlogPost;
};
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-md  sm:rounded-sm shadow-lg flex flex-col p-4 mb-10 ">
      <div className="flex items-center justify-center overflow-hidden gap-4  md:items-start md:p-6 ">
        <img
          src={post.image}
          alt={post.title}
          className="w-25 h-25 flex-shrink-0 object-cover md:w-32 md:h-32"
        ></img>
        <div>
          <h2 className="text-base font-bold font-josefin md:text-xl text-left">
            {post.title}
          </h2>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center mb-4 mt-4 ">
          <span className="text-xs text-gray-500 font-source-serif">
            {post.date}
          </span>
          <div className="h-[4px] w-[15px] bg-red-500 mx-2"></div>
          <div className="text-xs text-gray-500 font-source-serif">
            {post.readingtime}
          </div>
          <div className="flex flex-row ml-2 gap-1 justify-center align-middle text-xs text-gray-500 font-source-serif">
            {" "}
            <FaRegComment className="text-red-500 text-sm" />{" "}
            {post.comments ?? 0}{" "}
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6 font-source-serif text-left text-[13px]">
          {post.content.substring(0, 150)}...
        </p>
      </div>
      <div className="flex items-center justify-between mt-auto mb-10 ">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-semibold px-2 py-1 rounded-md shadow-lg border  border-gray-300 flex items-center (
                tag
              )}`}
            >
              <span className="mr-1">#</span> {tag}
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
      </div>
      <div className="mt-auto">
        <button className="w-40 h-10 bg-[#4B4870] text-white  rounded shadow-md text-sm font-semibold ">
          Continue Reading
        </button>
      </div>
    </div>
  );
};
