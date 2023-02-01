import "../styles/globals.css";
import ToolList from "../components/ToolList";
import localFont from "@next/font/local";

const myFont = localFont({ src: "../public/fonts/Cubic_11_1.013_R.woff2" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-row min-h-screen">
        {/* 左側Navbar 工具列表 */}
        <ToolList />

        {/* 主要資料送出 */}
        {children}

        {/* ChatGPT 返回內容 */}
      </body>
    </html>
  );
}
