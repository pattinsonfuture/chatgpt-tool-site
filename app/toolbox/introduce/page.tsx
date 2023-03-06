import { Metadata } from "next";

export const metadata: Metadata = {
  title: "介紹產品",
};

export default function page() {
  return (
    <>
      {/* 白色標題 */}
      <div className="flex justify-center items-center h-20">
        <h1 className="text-2xl font-bold">介紹產品</h1>
      </div>
      {/* 黑色圓角卡片 */}
      <div className="flex justify-center items-center h-96 bg-black rounded-3xl">
        <h1 className="text-2xl font-bold text-white">產品介紹</h1>
      </div>
    </>
  );
}
