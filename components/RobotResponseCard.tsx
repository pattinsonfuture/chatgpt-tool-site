import {
  ArrowPathIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import ReactMarkdown from "react-markdown";
import Robot from "./Robot";

interface RobotResponseCardProps {
  message: string;
  handleReset: () => void;
  handleCopy: () => void;
}

function RobotResponseCard({
  message,
  handleReset,
  handleCopy,
}: RobotResponseCardProps) {
  return (
    <div>
      <div className="p-10">
        {/* 固定位置在卡片正上方 */}
        <div className="relative py-3 sm:max-w-xl sm:mx-auto ">
          <div className="absolute inset-0 bg-gradient-to-r from-[#321b52] to-[#191125] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative bg-black shadow-lg sm:rounded-3xl p-10 pl-10 pr-6 ">
            {/* <div className="absolute m-auto item-center  top-[-10vh]">
              <Robot />
            </div> */}
            {/* <div className="max-w-md mx-auto"> */}
            <div className="pr-4 flex-col  h-[60vh]  overflow-y-auto scrollbar">
              <div className="mt-[10vh]">
                <ReactMarkdown>{message}</ReactMarkdown>
              </div>
            </div>
            {/* 重製按鈕 跟 複製按鈕 flex分開左右 */}
            <div className="flex justify-between">
              <button
                onClick={handleReset}
                aria-label="reset"
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <ArrowPathIcon className="w-6 h-6" />
              </button>
              <button
                onClick={handleCopy}
                aria-label="copy"
                type="button"
                className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <DocumentDuplicateIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default RobotResponseCard;
