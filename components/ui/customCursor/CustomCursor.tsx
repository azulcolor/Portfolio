"use client";

import { motion } from "framer-motion";
import { useCursorAnimation } from "./hooks";

export const CustomCursor = () => {
  const { cursorPosition, cursorSize, cursorText } = useCursorAnimation();

  return (
    <motion.div
      className={`custom-cursor ${cursorSize}`}
      animate={{
        x: cursorText === "" ? cursorPosition.x - 20 : cursorPosition.x - 50,
        y: cursorPosition.y - 20,
        scale: 1,
      }}
      transition={{ ease: "easeOut", duration: 0 }}
    >
      {cursorText}
    </motion.div>
  );
};
