import type { BlogPost } from "./HomeContent";
type PostCardProps = {
  post: BlogPost;
};
export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-md border-2 sm:rounded-sm shadow-sm flex flex-col pb-10 md:pb-7 sm:pb-5">
      <div className="md:w-1/3 relative">
        <img src={post.image}></img>
      </div>
      <div>
        <div>
          <h2>{post.title}</h2>
          <div>
            <span>{post.date}</span>
            <div></div>
            <div>{post.readingtime}</div>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mb-6">
          {post.content.substring(0, 150)}...
        </p>
      </div>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
      
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-semibold px-2 py-1 rounded-md flex items-center (
                tag
              )}`}
            >
              <span className="mr-1">#</span> {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-700 mr-3">
            {post.author}
          </span>
          <img
            src={post.authorimg || "https://i.pravatar.cc/150?img=68"} 
            alt={post.author}
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 md:translate-y-0 md:static md:block md:w-full md:bg-transparent md:p-0">
      </div>
       <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] bg-slate-700 text-white px-6 py-2 rounded shadow-md text-sm font-semibold hover:bg-slate-800 transition-colors">
            Continue Reading
      </button>
      </div>
    </div>
  );
};

