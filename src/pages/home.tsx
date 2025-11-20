import { useState, useRef, useEffect } from "react";
import { PostCard } from "../components/Home/PostCard";
import { HomeContent } from "../constants/HomeContent";
import TopCloud from "../components/Footer/TagCloud";
import FollowMe from "../components/Footer/FollowMe";
import { FaChevronUp } from "react-icons/fa";

export const Home = () => {
  const page_size = 6;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(HomeContent.length / page_size);
  const start = page * page_size;
  const visiblePosts = HomeContent.slice(start, start + page_size);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const el = sidebarRef.current;
      if (!el) return;
      const midpoint = el.offsetTop + el.offsetHeight / 2;
      const viewScroll = window.scrollY + window.innerHeight / 2;
      setShowScrollToTop(viewScroll > midpoint);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
      <aside
        id="sidebar"
        ref={sidebarRef}
        className="max-w-[384px] hidden lg:flex lg:w-1/3 w-full h-auto  p-4 flex-col gap-8 mt-[80px] p-[20px] lg:mr-7"
      >
        <TopCloud />
        <div className="p-3">
          <FollowMe />
        </div>
        <div>
          <div className="flex flex-col w-full">
            <div className="w-full flex gap-3.5 mb-[30px] items-center">
              <div className="w-full max-w-[110px] text-[20px] font-josefin">
                Advertising
              </div>
              <div className="w-full border-2 border-red-600   h-0 text-center"></div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="Advertising-banner.png"
                className="w-full max-w-[384px] p-3"
              ></img>
            </div>
          </div>
        </div>
      </aside>
      {showScrollToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 bg-blue-900 h-10 text-white px-4 py-2  shadow-lg text-sm font-semibold transition-opacity duration-300 hidden lg:block "
        >
          <FaChevronUp />
        </button>
      )}
    </div>
  );
};
