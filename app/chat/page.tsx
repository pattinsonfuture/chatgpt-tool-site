import ChatRoom from "@/components/ChatRoom";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "聊天",
};

export default function page() {
  return (
    <div className="p-1 sm:p-5">
      <ChatRoom />
    </div>
  );
}
