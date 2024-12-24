"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useHabilities } from "./hook";


export const Habilities = () => {

    const { currentAdjective } = useHabilities()

  return (
    <div className="presentation-subtitle__habilities-container">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentAdjective}
          className="presentation-subtitle__habilities"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {currentAdjective}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};
