import {
  CombinedFormInput,
  ToolboxChooseFormProps,
} from "@/constants/toolbox-typings";
import React, { useEffect } from "react";

// 預設值
const defaultForm = {
  title: "50嵐店員做十年還在搖 內行爆超優待遇「不輸科技業」",
  keywords: "生意好、純益20萬",
} as CombinedFormInput;

function PressreleaseForm({
  handleSubmit,
  setForm,
  form,
}: ToolboxChooseFormProps) {
  // 第一次寫入預設值
  useEffect(() => {
    setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" my-auto items-center">
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="title" className="hidden">
            新聞標題
          </label>
          <input
            type="text"
            name="title"
            defaultValue={form.title ?? defaultForm.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="新聞標題"
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
          />
        </div>
        <div className="mb-2 mt-4">
          <label htmlFor="keywords" className="hidden">
            關鍵字
          </label>
          <textarea
            name="keywords"
            rows={5}
            defaultValue={form.keywords ?? defaultForm.keywords}
            onChange={(e) => setForm({ ...form, keywords: e.target.value })}
            placeholder="關鍵字"
            className="py-3 px-3 focus:shadow-soft-primary-outline min-h-unset text-sm leading-5.6 ease-soft block h-auto w-full appearance-none rounded-lg border-none bg-white dark:bg-gray-800 bg-clip-padding text-gray-800 dark:text-gray-50 font-semibold outline-none transition-all focus:outline-none"></textarea>
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

export default PressreleaseForm;
