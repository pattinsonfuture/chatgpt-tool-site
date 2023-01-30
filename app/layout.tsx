import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* 左側Navbar 工具列表 */}

        {/* 主要資料送出 */}
        {children}

        {/* ChatGPT 返回內容 */}
      </body>
    </html>
  );
}
