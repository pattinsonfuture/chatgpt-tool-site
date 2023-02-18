"use client";

import { navVariants } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href={`/`}>
      <motion.div
        variants={navVariants}
        initial="hidden"
        animate="show"
        className="text-center items-center justify-center font-black text-white text-3xl p-2 mb-8 md:text-5xl md:p-5 md:mb-5">
        {/* <Image src={Logo} alt="logo" className="w-16 h-16 rounded-full mx-2" /> */}
        {/* <div className="text-center items-center justify-center"> */}
        <div>
          玩轉 <span className=" text-violet-600"> A.I. </span>
        </div>
        <div>人工智能</div>
        {/* </div> */}
      </motion.div>
    </Link>
  );
}

export default Logo;
