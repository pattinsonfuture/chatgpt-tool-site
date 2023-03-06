"use client";

import Image from "next/image";
import RobotWithEyes from "@/public/images/c07aa58e518a0a01.png";
import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatRoomBotMessageProps {
  message: string;
}

function ChatRoomBotMessage({ message }: ChatRoomBotMessageProps) {
  return (
    <motion.div
      variants={zoomIn(0.3, 0.5, "left")}
      initial="hidden"
      animate="show">
      <div className="flex items-end">
        <div className="flex flex-col space-y-2 lg:max-w-4xl mx-2 order-2 items-start">
          <div>
            <div className="px-5 py-5 rounded-lg inline-block bg-gray-300 text-gray-600 prose lg:prose-xl">
              <ReactMarkdown
                className="prose lg:prose-xl"
                remarkPlugins={[remarkGfm]}>
                {message}
              </ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="rounded-full order-1">
          <Image
            width="24"
            height="24"
            src={RobotWithEyes}
            alt="Bot profile"
            className="w-[20px] h-[20px] rounded-full order-1 sm:w-6 sm:h-6"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ChatRoomBotMessage;
