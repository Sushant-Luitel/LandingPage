import FollowMe from "../Footer/FollowMe";
import TagCloud from "../Footer/TagCloud";
import { FaChevronUp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
export const Sidebar = () => {
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
    <>
      <aside
        id="sidebar"
        ref={sidebarRef}
        className="max-w-[384px] hidden lg:flex lg:w-1/3 w-full h-auto  p-4 flex-col gap-8 mt-[80px] p-[20px] lg:mr-7"
      >
        <TagCloud />
        <div className="p-3">
          <FollowMe />
        </div>
        <div>
          <div className="flex flex-col w-full">
            <div className="w-full flex gap-3.5 mb-[30px] items-center">
              <div className="w-full max-w-[110px] text-[20px] font-bold font-josefin">
                Advertising
              </div>
              <div className="w-full border-2 border-red-600   h-0 text-center"></div>
            </div>
            <div className="flex justify-center items-center hover:cursor-pointer">
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
    </>
  );
};
