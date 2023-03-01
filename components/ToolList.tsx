"use client";

import React from "react";
import { toolListMap } from "../constants/constants";
import ToolListNavLink from "./ToolListNavLink";
import Logo from "./Logo";

function ToolList() {
  return (
    <div className="hidden sm:inline flex-auto max-w-[200px] p-5 mx-auto bg-[#020201]  shadow-xl md:max-w-xs">
      {/* Logo */}
      <Logo />

      {/* 工具種類 */}
      <nav className="p-0 md:p-2 w-full">
        {/* <div className="text-left font-bold text-[#403F3F]">程式語言</div> */}
        {toolListMap.map((toollists) => (
          <ToolListNavLink key={toollists.category} toollists={toollists} />
        ))}
        {/* <div className="text-left font-bold text-[#403F3F]">撰寫文章</div>
        <div className="text-left font-bold text-[#403F3F]">市場業務</div> */}
      </nav>

      {/*  */}
    </div>
  );
}

export default ToolList;
