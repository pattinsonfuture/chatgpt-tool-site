"use client";

import {
  CombinedFormInput,
  ToolboxChooseFormProps,
} from "@/constants/toolbox-typings";
import { useEffect } from "react";

// 預設值
const defaultForm = {
  product_name: "Angry Bird 馬克杯",
  introductory_tone: "活力、有趣、有感染力",
  ingredients: "陶瓷",
  length: 100,
  other: "",
} as CombinedFormInput;

function IntroduceForm({
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
          <label htmlFor="product_name" className="hidden">
            產品名稱
          </label>
          <input
            type="text"
            name="product_name"
            defaultValue={form.product_name ?? defaultForm.product_name}
            onChange={(e) => setForm({ ...form, product_name: e.target.value })}
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
            defaultValue={
              form.introductory_tone ?? defaultForm.introductory_tone
            }
            onChange={(e) =>
              setForm({ ...form, introductory_tone: e.target.value })
            }
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
            defaultValue={form.ingredients ?? defaultForm.ingredients}
            onChange={(e) => setForm({ ...form, ingredients: e.target.value })}
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
            defaultValue={form.length ?? defaultForm.length}
            onChange={(e) => setForm({ ...form, length: +e.target.value })}
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
            defaultValue={form.other ?? defaultForm.other}
            onChange={(e) => setForm({ ...form, other: e.target.value })}
            placeholder="其他需求..."
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

export default IntroduceForm;
