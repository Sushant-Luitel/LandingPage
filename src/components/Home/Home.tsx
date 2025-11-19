import { HomeContent } from "./constants/HomeContent";
import { PostCard } from "./PostCard";
import { useState } from "react";
export const Home = () => {
  const page_size = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(HomeContent.length / page_size);
  const start = page * page_size;
  const visiblePosts = HomeContent.slice(start, start + page_size);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  return (
    <div>
      <div>
        {visiblePosts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-5 my-6">
        {page > 0 && (
          <button
            onClick={prevPage}
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
            onClick={nextPage}
            className="px-3 py-2 rounded bg-red-500 text-white border w-20"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
