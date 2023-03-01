"use client";

import {
  startButtonMotion,
  startButtonHoverSpan,
  fadeIn,
} from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

export default function StartButton() {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 1)}
      initial="hidden"
      whileInView="show"
      className="mt-36">
      <motion.div
        variants={startButtonMotion}
        initial="hidden"
        whileHover="animate"
        className=" w-fit m-auto p-3 pl-4 text-4xl text-white font-bold tracking-widest text-center justify-center rounded-2xl">
        <div>START</div>
        <motion.span
          variants={startButtonHoverSpan}
          className=" bottom-0 left-0 block h-[2px] w-full  bg-blue-500 content-[''] opacity-0"></motion.span>
      </motion.div>
    </motion.div>
  );
}
