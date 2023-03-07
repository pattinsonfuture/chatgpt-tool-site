import {
  CombinedFormInput,
  ToolboxChooseFormProps,
} from "@/constants/toolbox-typings";
import React, { useEffect } from "react";

// 預設值
const defaultForm = {
  content: `AI人工智慧繪圖軟體，近來十分火紅，現在日本還出現完全靠AI繪圖繪製的漫畫，即將在（3月）9日上市，作者表示他根本不擅長畫畫，全靠AI生成內容，短短6週就完成100多頁的全彩漫畫，再度掀起職業可能被AI取代的焦慮。

  熱騰騰剛出版的漫畫，黯黑色調充滿未來感，連書本身的誕生都很科幻，整本都是借助AI科技。
  
  AI繪圖軟體6週完成100多頁全彩漫畫　漫畫家要失業了？
  AI漫畫作者Rootport（筆名）說，「我沒畫過插畫繪畫才能是『零』。」
  
  今年37歲的作者，承認自己根本不會畫畫，但沒有關係，只要有AI，繪畫「苦手」也能變高手。不過就怕被炎上，只肯用黑貓形象受訪。
  
  AI漫畫作者Rootport（筆名）說，「AI繪圖可以說遠比手繪快得多，一幅全彩插圖得耗掉繪師整天時間，無論他畫得多快，相較之下這項工具1分鐘之類的就能完成。」
  
  AI繪圖軟體Midjourney近來爆紅，乘勢推出的AI漫畫也備受關注，100多頁從無到有只花6週，難道連漫畫家都要失業了嗎？
  
  AI繪圖軟體6週完成100多頁全彩漫畫　漫畫家要失業了？
  AI漫畫作者Rootport（筆名）說，「儘管我認為純人工繪製的漫畫，未來仍會繼續存在，但也不覺得，完全不用AI輔助的漫畫能永遠主導市場。」
  
  設計專門學校裡，學生埋頭練習，對新科技世代來說，人與AI或許不需要是零和遊戲。
  
  19歲東京設計專門學校學生柿澤說，「重要場景我會想自己畫不過一些小場景，不是重點的小場景就交給AI工具。」
  
  不過也有教授提醒，AI軟體可能從網路剽竊受智慧財產權保障的內容，更好的作法可能是當作靈感參考，跟AI當好「同事」。`,
} as CombinedFormInput;

function CaptureForm({ handleSubmit, setForm, form }: ToolboxChooseFormProps) {
  // 第一次寫入預設值
  useEffect(() => {
    setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" my-auto items-center">
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="mb-2 mt-4">
          <label htmlFor="content" className="hidden">
            文章內容
          </label>
          <textarea
            name="content"
            rows={30}
            defaultValue={form.content ?? defaultForm.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            placeholder="文章內容"
            className="py-3 px-3 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border-none bg-white dark:bg-gray-800 bg-clip-padding text-gray-800 dark:text-gray-50 font-semibold outline-none transition-all focus:outline-none scrollbar"></textarea>
        </div>
        <button
          type="submit"
          className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-teal-500 uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:bg-slate-900 hover:text-white">
          送出
        </button>
      </form>
    </div>
  );
}

export default CaptureForm;
