"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import RobotImg from "@/public/images/8b31156dd7b92df1.png";
import RobotEye from "@/public/images/a7b8a59cf737f5f1.png";
import { motion } from "framer-motion";
import { lookAtMouse } from "@/utils/motion";

function Robot() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  console.log(mousePosition);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      let xpercent = (e.clientX * 100) / window.innerWidth / 100;
      let ypercent = (e.clientY * 100) / window.innerHeight / 100;

      //   console.log("innerWidth", window.innerWidth, window.innerHeight);
      //   console.log("clientX", e.clientX, e.clientY);
      setMousePosition({
        x: xpercent,
        y: ypercent,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div className="flex items-center justify-center relative h-64">
      {/* 機器人圖片 */}
      <Image src={RobotImg} alt="robot" className="w-64 h-64 mx-2 absolute" />
      {/* 機器人眼睛 固定在機器人圖片上 */}
      <div className="flex w-32 h-32 relative">
        <motion.div
          variants={lookAtMouse(mousePosition, "left")}
          initial="initial"
          animate="look"
          className="w-12 h-12 mx-3 items-center justify-center ">
          <Image src={RobotEye} alt="robot-left-eyes" />
        </motion.div>
        <motion.div
          variants={lookAtMouse(mousePosition, "right")}
          initial="initial"
          animate="look"
          className="w-12 h-12 mx-3 items-center justify-center">
          <Image src={RobotEye} alt="robot-right-eyes" />
        </motion.div>
      </div>
    </div>
  );
}

export default Robot;
