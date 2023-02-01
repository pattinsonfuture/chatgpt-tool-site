import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-auto bg-gradient-to-br from-[#3C3A3C] to-[#333134]">
      <h1 className="text-3xl font-bold underline content-center">
        Hello world!
      </h1>
    </div>
  );
}
