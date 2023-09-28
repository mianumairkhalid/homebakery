import React, { useState } from "react";
import bakeryArticleBgImg from "../img/bakeryArticleBgImg.png";
import featuredBlogImg from "../img/featuredBlogImg.png";

function BakeryArticle() {
  const activeTabClass = "bg-[#F2E7D6] text-[#795E32]";
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <main>
      <section
        className="min-h-[50vh] relative flex items-center coverCenter"
        style={{ background: `url('${bakeryArticleBgImg}')` }}
      >
        {/* <div className="background-overlay"></div> */}
        <div className="container mx-auto max-w-[750px] px-6 flex flex-col justify-center text-center min-h-[600px]">
          <h1 className="text-white text-shadow-lg font-Avenir text-[81px] font-bold leading-[68px] tracking-[2.43px] uppercase relative">
            bakery article
          </h1>

          <p className="text-white text-shadow-sm font-noto-sans-thai text-2xl font-normal leading-[28px] mt-14">
            เนื้อหาจำลองแบบเรียบๆ ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
            จำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
          </p>
        </div>
      </section>
      <section className="mt-[120px]">
        <div className="max-w-[1300px] mx-auto flex">
          <div>
            <img src={featuredBlogImg} alt="" />
          </div>
          <div className="pl-[130px]">
            <h2 className="text-[#795E32] text-[40px] font-bold font-Avenir">
              The Secret of Toffee Cake
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros. Consectetur adipiscing elit.
            </p>
            <button className="w-[177px] h-[47px] bg-[#E41E25] uppercase text-white rounded-full mt-[40px] ">
              VIEW MORE
            </button>
          </div>
        </div>
      </section>
      <section className="mt-[130px]">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex gap-x-6">
            <button
              onClick={() => handleTabClick(1)}
              className={`px-4 py-2 text-[#795E32] ${
                activeTab === 1 ? "bg-[#F2E7D6] text-[#795E32]" : "bg-[#F8F3EB]"
              } rounded`}
            >
              View All
            </button>
            <button
              onClick={() => handleTabClick(2)}
              className={`px-4 py-2 text-[#795E32] ${
                activeTab === 2 ? "bg-[#F2E7D6] text-[#795E32]" : "bg-[#F8F3EB]"
              } rounded`}
            >
              Toffee Cake
            </button>
            <button
              onClick={() => handleTabClick(3)}
              className={`px-4 py-2 text-[#795E32] ${
                activeTab === 3 ? "bg-[#F2E7D6] text-[#795E32]" : "bg-[#F8F3EB]"
              } rounded`}
            >
              Bakery
            </button>
            <button
              onClick={() => handleTabClick(4)}
              className={`px-4 py-2 text-[#795E32] ${
                activeTab === 4 ? "bg-[#F2E7D6] text-[#795E32]" : "bg-[#F8F3EB]"
              } rounded`}
            >
              Sweet
            </button>
          </div>

          <div className="mt-4">
            {activeTab === 1 && <div>Tab 1 content goes here</div>}
            {activeTab === 2 && <div>Tab 2 content goes here</div>}
            {activeTab === 3 && <div>Tab 3 content goes here</div>}
            {activeTab === 4 && <div>Tab 4 content goes here</div>}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BakeryArticle;
