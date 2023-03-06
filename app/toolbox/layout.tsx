import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Grid 分類左右同等大小區塊 小於md時變成上下 */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* 左側 輸入資料黑色卡片 浮雕 form */}
        {children}
        {/* 右側 openai 輸出資料 */}
        <div className="p-10">
          <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
            <div className="absolute inset-0 bg-gradient-to-r from-[#321b52] to-[#191125] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-black shadow-lg sm:rounded-3xl p-10 pl-10 pr-6 flex ">
              {/* <div className="max-w-md mx-auto"> */}
              <div className="pr-4 flex-col  h-[60vh]  overflow-y-auto scrollbar">
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
                <h1 className="text-2xl font-semibold">
                  Login Form with Floating Labels Login Form with Floating
                  Labels
                </h1>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
