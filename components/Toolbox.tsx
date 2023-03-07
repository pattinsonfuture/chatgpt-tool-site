"use client";

import { FormEvent, useState } from "react";
import RobotResponseCard from "./RobotResponseCard";
import toast from "react-hot-toast";
import {
  toolboxcategory,
  CombinedFormInput,
} from "@/constants/toolbox-typings";
import ToolboxChooseForm from "./ToolboxChooseForm";
import { ChoosePrompt } from "@/lib/ChoosePrompt";

function Toolbox({ toolboxcategory }: { toolboxcategory: toolboxcategory }) {
  const [form, setForm] = useState<CombinedFormInput>({} as CombinedFormInput);
  const [thinking, setThinking] = useState("");
  const [loading, setLoading] = useState(false);

  // form送出請求
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 送出前先清空機器人回應
    setThinking("");

    const notification = toast.loading("機器人思考中...");
    // 是否需要請求code api，字串內有包含code就需要
    let needCode = toolboxcategory.includes("code");

    const response = await fetch(
      needCode ? "/api/SendCodeGPT" : "/api/SendChatGPT",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // messages 送出是使用ChatCompletionsMessage的interface 機器人role是assistant 人類role是user 取最後五段話
        body: JSON.stringify({
          prompt: ChoosePrompt(toolboxcategory, form),
        }),
      }
    );

    // response錯誤時，顯示錯誤訊息
    if (!response.ok) {
      toast.error("機器人出錯了，請稍後再試");
      return;
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    setLoading(true);

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setThinking((prev) => prev + chunkValue);
    }

    if (done) {
      // 機器人回應完成，寫入對話State
      setLoading(false);
      toast.success("機器人回應完成", { id: notification });
    }
  };

  // 重製thinking
  const handleReset = () => {
    setThinking("");
  };

  // 複製thinking文字
  const handleCopy = () => {
    navigator.clipboard.writeText(thinking);
    toast.success("已複製到剪貼簿");
  };
  return (
    <>
      <ToolboxChooseForm
        toolboxcategory={toolboxcategory}
        setForm={setForm}
        form={form}
        handleSubmit={handleSubmit}
      />
      <RobotResponseCard
        message={thinking}
        handleReset={handleReset}
        handleCopy={handleCopy}
      />
    </>
  );
}

export default Toolbox;
