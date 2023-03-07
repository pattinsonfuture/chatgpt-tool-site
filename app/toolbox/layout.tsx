import RobotResponseCard from "@/components/RobotResponseCard";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Grid 分類左右同等大小區塊 小於md時變成上下 */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">{children}</div>
    </>
  );
}
