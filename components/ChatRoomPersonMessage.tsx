import { motion } from "framer-motion";
import { zoomIn } from "@/utils/motion";

interface ChatRoomPersonMessageProps {
  message: string;
}

function ChatRoomPersonMessage({ message }: ChatRoomPersonMessageProps) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={zoomIn(0.3, 0.5, "right")}
      className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end">
          <div>
            <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
              {message}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ChatRoomPersonMessage;
