import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Robot from "@/components/Robot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-10">
      {/* 眼睛跟著滑鼠的機器人 */}
      <Robot />
      {/* Start按鈕 */}
      <div className="w-48 rounded-full border-spacing-4 text-4xl font-bold tracking-widest border-4 text-center justify-center text-pink-500">
        SART
      </div>
    </div>
  );
}
