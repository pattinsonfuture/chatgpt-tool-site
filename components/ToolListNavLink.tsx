"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants, navChildrens } from "../utils/motion";
import { usePathname } from "next/navigation";
import { ToolLists } from "@/constants/typings";

type Props = {
  toollists: ToolLists;
};

function ToolListNavLink({ toollists }: Props) {
  const pathname = usePathname();
  const isActive = (path: string) => {
    return pathname?.split("/").pop() === path;
  };
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      // whileInView="show"
      animate="show"
      className="mb-8 md:mb-10">
      <motion.div
        variants={navChildrens}
        animate="show"
        className="text-left font-bold text-[#403F3F] text-base md:text-xl ">
        {toollists.category}
      </motion.div>
      <div className="ml-6 md:ml-8">
        {toollists.lists.map((toollist: any) => (
          <Link key={toollist.slug} href={`/toolbox/${toollist.slug}`}>
            <motion.div
              variants={navChildrens}
              // animate="show"
              whileHover={{
                scale: 1.2,
              }}
              className={`text-white text-xl md:text-2xl ${
                isActive(toollist.slug) &&
                "underline decoration-orange-600 underline-offset-4 font-bold"
              }`}>
              {toollist.label}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default ToolListNavLink;
