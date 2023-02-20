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
const defaultMessages: Message[] = [
  { message: "歡迎來到玩轉 A.I. 人工智能！", isBot: true },
];

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
  }, []);

  // 收到人類送出的Submit，更新對話State
  const handleHumanSubmit = (message: string) => {
    writeMessages(messages.concat({ message, isBot: false }));
  };

  // 重置對話State
  const handleReset = () => {
    setMessages([]);
    localStorage.removeItem("ChatRoomMessages");
    writeMessages(defaultMessages);
  };

  // 獨立出寫入messages的function，方便重置時使用
  const writeMessages = (messages: Message[]) => {
    setMessages(messages);
    localStorage.setItem("ChatRoomMessages", JSON.stringify(messages));
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
