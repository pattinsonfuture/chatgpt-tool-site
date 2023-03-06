import React from "react";

export default function layout() {
  return (
    <>
      {/* Grid 分類左右同等大小區塊 小於md時變成上下 */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* 左側 輸入資料黑色卡片 浮雕 form */}
        <div className="flex justify-center items-center h-96 bg-[#070313] rounded-3xl">
          <h1 className="text-2xl font-bold text-white">產品介紹</h1>
        </div>
        {/* 右側 openai 輸出資料 */}
        <div className="flex justify-center items-center h-96 bg-[#070313] rounded-3xl">
          <h1 className="text-2xl font-bold text-white">產品介紹</h1>
        </div>
      </div>
    </>
  );
}
