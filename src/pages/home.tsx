import { useSearchParams } from "react-router-dom";
import { PostCard } from "../components/Home/PostCard";
import { HomeContent } from "../constants/HomeContent";
import { Sidebar } from "../components/Sidebar/Sidebar";
export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page_size = 6;
  const page = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(HomeContent.length / page_size);
  const start = (page - 1) * page_size;
  const visiblePosts = HomeContent.slice(start, start + page_size);

  const goToPage = (pageNumber: number) => {
    setSearchParams({ page: pageNumber.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col justify-center md:flex-row md:gap-8 mx-auto mt-10 px-4 md:px-0">
      <div className="w-full max-w-7xl lg:w-2/3">
        <div id="blogarticle">
          {visiblePosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="flex items-center justify-center gap-5 my-6">
          {page > 1 && (
            <button
              onClick={() => {
                goToPage(page - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-3 py-2 rounded border bg-red-500 text-white w-20"
            >
              Prev
            </button>
          )}

          <span className="text-sm">
            Page {page} of {totalPages}
          </span>

          {page < totalPages && (
            <button
              onClick={() => {
                goToPage(page + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
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
