"use client";

import ChatRoomBotMessage from "./ChatRoomBotMessage";
import ChatRoomPersonMessage from "./ChatRoomPersonMessage";
import { motion } from "framer-motion";
import ChatRoomInput from "./ChatRoomInput";
import { useEffect, useState } from "react";

interface Message {
  message: string;
  isBot: boolean;
}

// 設定預設對話
const defaultMessages: Message = {
  message: "歡迎來到玩轉 A.I. 人工智能！",
  isBot: true,
};

function ChatRoom() {
  // 記錄對話State，並寫到localStorage
  const [messages, setMessages] = useState<Message[]>([]);

  // 一開始先讀取localStorage的對話紀錄，為空就設定預設對話
  useEffect(() => {
    const messages = localStorage.getItem("ChatRoomMessages");

    if (messages) {
      setMessages(JSON.parse(messages));
    } else {
      writeMessages(defaultMessages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect監聽對話State，當對話State有變動時，就寫到localStorage
  useEffect(() => {
    // 沒有messages且沒有localStorage時，設定預設對話
    if (messages.length === 0 && !localStorage.getItem("ChatRoomMessages")) {
      writeMessages(defaultMessages);
    } else if (messages[messages.length - 1]?.isBot === false) {
      // 當是人類發問時，請求OpenAI API
      console.log(messages[messages.length - 1]);
      handleBotSubmit(messages[messages.length - 1].message);
    } else if (messages.length > 0) {
      // 有對話紀錄時，寫到localStorage
      localStorage.setItem("ChatRoomMessages", JSON.stringify(messages));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);

  // 收到人類送出的Submit，更新對話State
  const handleHumanSubmit = (message: string) => {
    writeMessages({ message, isBot: false });
  };

  // 重置對話State
  const handleReset = () => {
    setMessages([]);
    localStorage.removeItem("ChatRoomMessages");
  };

  // 獨立出寫入messages的function，方便重置時使用
  const writeMessages = (message: Message) => {
    setMessages([...messages, message]);
  };

  // 機器人回應
  const handleBotSubmit = async (prompt: string) => {
    // 人類送出訊息後，機器人回應
    await fetch("/api/sendopenai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        chatId: 123,
        // model,
        // session
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("fetch /api/sendopenai", res);

        // 機器人回應後，更新對話State
        writeMessages({ message: res.answer, isBot: true });
      });
  };

  return (
    <>
      <motion.div className="min-h-[72vh]">
        {/* 聊天對話內容 */}
        <div className="flex-1 mb-5 justify-end flex flex-col h-[72vh] font-mono">
          <div className="flex flex-col space-y-4 overflow-y-auto scrollbar">
            {/* 使用State的對話紀錄 */}
            {messages.map((message, index) => {
              if (message.isBot) {
                return (
                  <ChatRoomBotMessage key={index} message={message.message} />
                );
              } else {
                return (
                  <ChatRoomPersonMessage
                    key={index}
                    message={message.message}
                  />
                );
              }
            })}
          </div>
        </div>
      </motion.div>
      {/* 對話輸入Input */}
      <ChatRoomInput
        sendMessage={handleHumanSubmit}
        resetMessage={handleReset}
      />
    </>
  );
}

export default ChatRoom;
