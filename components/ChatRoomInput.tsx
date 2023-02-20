"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { PaperAirplaneIcon, ArrowPathIcon } from "@heroicons/react/24/solid";

interface ChatRoomInputProps {
  sendMessage: (message: string) => void;
  resetMessage: () => void;
}

function ChatRoomInput({ sendMessage, resetMessage }: ChatRoomInputProps) {
  // Submit form 功能
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(e.currentTarget.chat.value);
    // 清空input
    e.currentTarget.chat.value = "";
  };

  // Reset form 功能
  const handleReset = () => {
    resetMessage();
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 1)}
      initial="hidden"
      animate="show"
      className="w-full mx-auto">
      {/* 點送出按鈕或按Enter，送出value */}
      <form
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit(e);
          }
        }}>
        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 shadow-md shadow-black">
          <button
            onClick={handleReset}
            aria-label="reset"
            type="button"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <ArrowPathIcon className="w-6 h-6" />
          </button>
          <textarea
            id="chat"
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="來說點什麼..."></textarea>
          <button
            aria-label="submit"
            type="submit"
            className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default ChatRoomInput;
