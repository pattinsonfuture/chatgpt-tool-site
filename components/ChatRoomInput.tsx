"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

function ChatRoomInput() {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 1)}
      initial="hidden"
      animate="show"
      className="w-full mx-auto">
      <form>
        <label className="sr-only">Your message</label>
        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700 shadow-md shadow-black">
          <textarea
            id="chat"
            rows={1}
            className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your message..."></textarea>
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
