import React from "react";
import { toolListMap } from "../constants";
import ToolListNavLink from "./ToolListNavLink";

function ToolList() {
  return (
    <div className="hidden sm:inline flex-auto max-w-[200px] p-5 mx-auto bg-[#020201]  shadow-xl md:max-w-xs">
      {/* Logo */}
      <div className="text-center items-center justify-center font-black text-white text-3xl p-2 mb-8 md:text-5xl md:p-5 md:mb-5">
        {/* <Image src={Logo} alt="logo" className="w-16 h-16 rounded-full mx-2" /> */}
        {/* <div className="text-center items-center justify-center"> */}
        <div>
          玩轉 <span className=" text-violet-600">A.I.</span>
        </div>
        <div>人工智能</div>
        {/* </div> */}
      </div>

      {/* 工具種類 */}
      <nav className="p-0 md:p-2 w-full">
        {/* <div className="text-left font-bold text-[#403F3F]">程式語言</div> */}
        {toolListMap.map((toollist) => (
          <ToolListNavLink key={toollist.label} toollist={toollist} />
        ))}
        {/* <div className="text-left font-bold text-[#403F3F]">撰寫文章</div>
        <div className="text-left font-bold text-[#403F3F]">市場業務</div> */}
      </nav>

      {/*  */}
    </div>
  );
}

export default ToolList;
