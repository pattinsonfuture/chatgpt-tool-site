"use client";

import ChatRoomBotMessage from "./ChatRoomBotMessage";
import ChatRoomPersonMessage from "./ChatRoomPersonMessage";
import { motion } from "framer-motion";
import ChatRoomInput from "./ChatRoomInput";

function ChatRoom() {
  return (
    <>
      <motion.div className="min-h-[72vh]">
        {/* 聊天對話框 */}
        <div className="flex-1 mb-5 justify-end flex flex-col h-[72vh] font-mono">
          <div className="flex flex-col space-y-4 overflow-y-auto scrollbar">
            {/* 人類對話泡泡 */}
            <ChatRoomPersonMessage message={`你好呀AI!`} />
            {/* Bot對話泡泡 */}
            <ChatRoomBotMessage message={`歡迎來到玩轉 A.I. 人工智能！`} />
          </div>
        </div>
      </motion.div>
      {/* 對話輸入框 */}
      <ChatRoomInput />
    </>
  );
}

export default ChatRoom;
