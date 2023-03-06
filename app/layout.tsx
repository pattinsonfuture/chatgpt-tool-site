import "../styles/globals.css";
import ToolList from "@/components/ToolList";
import localFont from "@next/font/local";
import TopNavbar from "@/components/TopNavbar";
import { Metadata } from "next";
import ClientProvider from "@/components/ClientProvider";

const myFont = localFont({ src: "../public/fonts/Cubic_11_1.013_R.woff2" });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "chatgpt-tool-site",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "OpenAI", "ChatGPT", "GPT-3"],
  authors: [
    { name: "Pattinson" },
    { name: "Pattinson", url: "https://github.com/pattinsonfuture" },
  ],
  colorScheme: "dark",
  title: {
    default: "Chat GPT 工具箱",
    template: "%s | Chat GPT 工具箱",
  },
  description:
    "ChatGPT 工具箱是一個網頁應用程序，它基於 OpenAI 的大型語言模型 ChatGPT，可以為用戶提供各種實用的工具和服務。該工具箱包含多個小工具，可以幫助用戶解決各種問題，例如自然語言處理、數學計算、時間轉換、網絡協議、編程等等。使用者可以輸入相關的問題或內容，ChatGPT 工具箱會快速地提供回應並展示結果。ChatGPT 工具箱簡單易用，為用戶提供了一個高效的工具，讓用戶可以更輕鬆地處理和解決各種問題。",
  openGraph: {
    type: "website",
    locale: "zh_TW",
    title: "Chat GPT 工具箱",
    description:
      "ChatGPT 工具箱是一個網頁應用程序，它基於 OpenAI 的大型語言模型 ChatGPT，可以為用戶提供各種實用的工具和服務。該工具箱包含多個小工具，可以幫助用戶解決各種問題，例如自然語言處理、數學計算、時間轉換、網絡協議、編程等等。使用者可以輸入相關的問題或內容，ChatGPT 工具箱會快速地提供回應並展示結果。ChatGPT 工具箱簡單易用，為用戶提供了一個高效的工具，讓用戶可以更輕鬆地處理和解決各種問題。",
    url: "https://chatgpt-tool-site.vercel.app/",
    images: [
      {
        url: "./images/c07aa58e518a0a01.png",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/images/c07aa58e518a0a01.png",
    shortcut: "/images/c07aa58e518a0a01.png",
    apple: "/images/c07aa58e518a0a01.png",
    other: {
      rel: "logo",
      url: "/images/c07aa58e518a0a01.png",
    },
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body className="flex flex-row min-h-screen">
        <ClientProvider />
        {/* 左側Navbar 工具列表 */}
        <ToolList />

        {/* 主要資料送出 */}
        <div className="flex-auto bg-gradient-to-br from-[#3C3A3C] to-[#333134]">
          {/* 頂部按鈕列 */}
          <TopNavbar />

          {children}
        </div>

        {/* ChatGPT 返回內容 */}
      </body>
    </html>
  );
}
