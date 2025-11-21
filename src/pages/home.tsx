import { useState, useRef } from "react";
import { PostCard } from "../components/Home/PostCard";
import { HomeContent } from "../constants/HomeContent";
import { Sidebar } from "../components/Sidebar/Sidebar";
export const Home = () => {
  const page_size = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(HomeContent.length / page_size);
  const start = page * page_size;
  const visiblePosts = HomeContent.slice(start, start + page_size);
  const blogRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="w-full flex flex-col justify-center md:flex-row md:gap-8 mx-auto mt-10 px-4 md:px-0">
      <div className="w-full max-w-7xl lg:w-2/3">
        <div id="blogarticle" ref={blogRef}>
          {visiblePosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 my-6">
          {page > 0 && (
            <button
              onClick={() => {
                setPage(page - 1);
                blogRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
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
              onClick={() => {
                setPage(page + 1);
                blogRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-3 py-2 rounded bg-red-500 text-white border w-20"
            >
              Next
            </button>
          )}
        </div>
      </div>
      <Sidebar />
    </div>
  );
};
