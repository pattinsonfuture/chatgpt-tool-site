"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navVariants, navChildrens } from "../utils/motion";

type Props = {
  toollists: ToolLists;
};

function ToolListNavLink({ toollists }: Props) {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      // animate="show"
      className="mb-8 md:mb-10">
      <motion.div
        variants={navChildrens}
        animate="show"
        className="text-left font-bold text-[#403F3F] text-base md:text-xl ">
        {toollists.category}
      </motion.div>
      <div className="ml-6 md:ml-8">
        {toollists.lists.map((toollist) => (
          <Link key={toollist.slug} href={`/${toollist.slug}`}>
            <motion.div
              variants={navChildrens}
              // animate="show"
              whileFocus={{
                scale: 1.2,
                className: " underline",
              }}
              // whileTap="tap"
              className="text-white text-xl md:text-2xl">
              {toollist.label}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default ToolListNavLink;
