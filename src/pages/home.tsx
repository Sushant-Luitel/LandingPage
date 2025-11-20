
import { useState } from "react";
import { PostCard } from "../components/Home/PostCard";
import { HomeContent } from "../constants/HomeContent";
export const Home = () => {
  const page_size = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(HomeContent.length / page_size);
  const start = page * page_size;
  const visiblePosts = HomeContent.slice(start, start + page_size);

  return (
    <div className="w-full flex flex-col md:flex-row md:gap-8 px-4">
      
      <div className="w-full max-w-3xl lg:w-2/3">
        <div id="blogarticle">
          {visiblePosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 my-6">
          {page > 0 && (
            <button
              onClick={() => setPage(page - 1)}
              className="px-3 py-2 rounded border bg-red-500 text-white w-20"
            >
              Prev
            </button>
          )}

          <span className="text-sm">
            Page {page + 1} of {totalPages}
          </span>

          {page < totalPages - 1 && (
            <button
              onClick={() => setPage(page + 1)}
              className="px-3 py-2 rounded bg-red-500 text-white border w-20"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <aside
        id="sidebar"
        className="max-w-xl hidden lg:flex lg:w-1/3 w-full  shadow p-4"
      >
        Sidebar 
      </aside>

    </div>
  );
};