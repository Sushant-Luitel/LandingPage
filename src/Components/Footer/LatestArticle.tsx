import { articles } from "./ArticleData";
function LatestArticle() {
  return (
    <>
      <div>
        <div className="w-full flex gap-3.5 mb-[30px] items-center">
          <div className="w-full max-w-[140px] text-[20px] font-josefin font-bold text-[#454630]">
            Latest Articles
          </div>
          <div className="w-full border-2 border-red-600  h-0 text-center"></div>
        </div>
        <div className="flex flex-col gap-5 ">
          {articles.map((article, index) => (
            <div key={index} className="flex gap-4">
              <div className="relative w-[60px] h-[60px] group">
                <div
                  className="absolute w-full h-full outline outline-offset-1 "
                  style={{ outlineColor: article.color }}
                ></div>

                <div className="absolute w-full h-full flex items-center justify-center transition-all duration-300 group-hover:-top-1.5 group-hover:-left-1.5">
                  <img
                    src={article.image}
                    alt="image1"
                    className="w-[58px] h-[42px] md:h-[60px] object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <div className="text-[12px] text-[#454360] md:text-[13px] font-josefin font-semibold ">
                  {article.heading}
                </div>
                <div className="text-[12px]">{article.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LatestArticle;
