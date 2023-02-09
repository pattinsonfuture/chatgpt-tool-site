"use client";

import { borderGradient } from "@/utils/motion";
import { motion } from "framer-motion";
import React from "react";

export default function StartButton() {
  return (
    <div className="mt-36">
      <motion.div
        variants={borderGradient}
        initial="hidden"
        animate="animate"
        className="w-48 m-auto p-1 pl-3 rounded-2xl border-spacing-4 text-4xl font-bold tracking-widest border-4 text-center justify-center text-[#0000FF] border-[#0000FF]">
        SART
      </motion.div>
    </div>
  );
}
