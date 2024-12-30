"use client";

import { resume } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface Props {
  isDarkSection: boolean;
}

export const ResumeButton = ({ isDarkSection }: Props) => {
  const [text, setText] = useState("Resume");

  return (
    <Link
      href={resume}
      target="_blank"
      className={`header-list__button transition-colors ${isDarkSection && "bg-purple-600"}`}
      onMouseEnter={() => setText("Let's go")}
      onMouseLeave={() => setText("Resume")}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </Link>
  );
};
