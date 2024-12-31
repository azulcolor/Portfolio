"use client";

import { motion } from "framer-motion";
import { useCursorAnimation } from "./hooks";

export const CustomCursor = () => {
  
  const {cursorPosition, cursorSize} = useCursorAnimation()

  return (
    <motion.div
      className={`custom-cursor ${cursorSize}`}
      animate={{
        x: cursorPosition.x - 20,
        y: cursorPosition.y - 20,
        scale: 1,
      }}
      transition={{ ease: "easeOut", duration: 0 }}
    ></motion.div>
  );
};
