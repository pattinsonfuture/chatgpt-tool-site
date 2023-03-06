import { Metadata } from "next";

export const metadata: Metadata = {
  title: "介紹產品",
};

export default function page() {
  return (
    <div>
      {/* 白色標題 */}
      {/* <div className="flex justify-left items-center h-20 mx-10">
        <h1 className="text-2xl font-bold">介紹產品</h1>
      </div> */}
      {/* form 清單 */}
      <form className="p-10">
        <div className="mb-2">
          <label htmlFor="product_name" className="hidden">
            產品名稱
          </label>
          <input
            type="text"
            name="product_name"
            placeholder="產品名稱"
            className="w-8/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="introductory_tone" className="hidden">
            介紹語氣
          </label>
          <input
            type="text"
            name="introductory_tone"
            placeholder="介紹語氣"
            className="w-10/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="ingredients" className="hidden">
            產品成分
          </label>
          <input
            type="text"
            name="ingredients"
            placeholder="產品成分"
            className="w-10/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="length" className="hidden">
            字數
          </label>
          <input
            type="number"
            name="length"
            min={0}
            max={400}
            placeholder="字數"
            className="w-[100px] mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
          />
        </div>
        <div className="mb-2 mt-4">
          <label htmlFor="other" className="hidden">
            其他需求
          </label>
          <textarea
            name="other"
            rows={5}
            placeholder="其他需求..."
            className="py-3 px-3 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border-none bg-white dark:bg-gray-800 bg-clip-padding text-gray-800 dark:text-gray-50 font-semibold outline-none transition-all focus:outline-none"></textarea>
        </div>
        <button
          type="submit"
          className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white">
          送出
        </button>
      </form>
    </div>
  );
}
