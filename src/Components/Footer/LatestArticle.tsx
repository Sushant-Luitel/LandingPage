function LatestArticle() {
  const articles = [
    {
      image: "/FarAway.png",
      heading: "Far far away, behind the word mountains",
      date: "Mar 16, 2021",
    },
    {
      image: "/CustomizingBrand.jpg",
      heading: "Customizing your brand and design settings",
      date: "Mar 16, 2021",
    },
    {
      image: "/WritingAndManaging.jpg",
      heading: "Writing and managing content in Ghost",
      date: "Mar 16, 2021",
    },
  ];
  return (
    <>
      <div>
        <div className="w-full flex gap-3.5 mb-[30px] items-center">
          <div className="w-full max-w-[140px] text-[20px] font-sans">
            Latest Articles
          </div>
          <div className="w-full border-2 border-red-600  h-0 text-center"></div>
        </div>
        <div className="flex flex-col gap-5 ">
          {articles.map((article, index) => (
            <div key={index} className="flex gap-4">
              <img
                src={article.image}
                alt="image1"
                className="w-[58px] h-[42px]"
              />
              <div className="flex flex-col">
                <div className="text-[12px] text-[#454360]">
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
