import Robot from "@/components/Robot";
import StartButton from "@/components/StartButton";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-10">
      {/* 眼睛跟著滑鼠的機器人 */}
      <Robot />
      {/* Start按鈕 */}
      <Link href={`/chat`}>
        <StartButton />
      </Link>
    </div>
  );
}
