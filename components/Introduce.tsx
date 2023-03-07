"use client";

import { FormEvent, useState } from "react";
import IntroduceForm from "./IntroduceForm";
import RobotResponseCard from "./RobotResponseCard";
import toast from "react-hot-toast";

export interface Form {
  product_name: string;
  introductory_tone: string;
  ingredients: string;
  length: number;
  other: string;
}

function Introduce() {
  const [form, setForm] = useState<Form>({
    product_name: "",
    introductory_tone: "",
    ingredients: "",
    length: 0,
    other: "",
  });
  const [thinking, setThinking] = useState("");
  const [loading, setLoading] = useState(false);

  // form送出請求
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit", form);

    const response = await fetch("/api/SendChatGPT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // messages 送出是使用ChatCompletionsMessage的interface 機器人role是assistant 人類role是user 取最後五段話
      body: JSON.stringify({
        prompt: `老闆:用${form.introductory_tone}的語氣描述「${form.product_name}」，列舉成分${form.ingredients}的效益，並且使用${form.length}個字。${form.other}\n你:`,
      }),
    });

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
    const notification = toast.loading("機器人思考中...");

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
      <IntroduceForm
        handleSubmit={handleSubmit}
        form={form}
        setForm={setForm}
      />
      <RobotResponseCard
        message={thinking}
        handleReset={handleReset}
        handleCopy={handleCopy}
      />
    </>
  );
}

export default Introduce;
