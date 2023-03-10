"use client";

import {
  CombinedFormInput,
  ToolboxChooseFormProps,
} from "@/constants/toolbox-typings";
import React, { useEffect } from "react";

// 預設值
const defaultForm = {
  language: "python",
  code: `import Random
  a = random.randint(1,12)
  b = random.randint(1,12)
  for i in range(10):
      question = "What is "+a+" x "+b+"? "
      answer = input(question)
      if answer = a*b
          print (Well done!)
      else:
          print("No.")`,
} as CombinedFormInput;

function CodeFixForm({ handleSubmit, setForm, form }: ToolboxChooseFormProps) {
  // 第一次寫入預設值
  useEffect(() => {
    setForm(defaultForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className=" my-auto items-center">
      <form className="p-10" onSubmit={handleSubmit}>
        <div className="mb-2 mt-4">
          <label htmlFor="language" className="hidden">
            使用語言
          </label>
          <select
            aria-label="使用語言"
            name="language"
            defaultValue={form.language ?? defaultForm.language}
            onChange={(e) => setForm({ ...form, language: e.target.value })}
            className="w-8/12 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none">
            <option value="apache">Apache</option>
            <option value="bash">Bash</option>
            <option value="c">C</option>
            <option value="csharp">C#</option>
            <option value="cpp">C++</option>
            <option value="css">CSS</option>
            <option value="dart">Dart</option>
            <option value="django">Django</option>
            <option value="dockerfile">Docker</option>
            <option value="go">Go</option>
            <option value="html">HTML</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="json">JSON</option>
            <option value="kotlin">Kotlin</option>
            <option value="markdown">Markdown</option>
            <option value="nginx">Nginx</option>
            <option value="perl">Perl</option>
            <option value="php">PHP</option>
            <option value="python">Python</option>
            <option value="r">R</option>
            <option value="ruby">Ruby</option>
            <option value="rust">Rust</option>
            <option value="sql">Sql</option>
            <option value="swift">Swift</option>
            <option value="typescript">TypeScript</option>
            <option value="xml">Xml</option>
            <option value="yaml">YAML</option>
          </select>
        </div>
        <div className="mb-2 mt-4">
          <label htmlFor="content" className="hidden">
            代碼內容
          </label>
          <textarea
            aria-label="代碼內容"
            name="code"
            defaultValue={form.code ?? defaultForm.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border-none  border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold  focus:outline-none"
            placeholder="請輸入代碼內容"
            rows={20}
          />
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

export default CodeFixForm;
