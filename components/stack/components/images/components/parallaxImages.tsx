"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useParallaxImages } from "./hooks";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

export const ParallaxImages = ({ children, baseVelocity }: ParallaxProps) => {
  const { x } = useParallaxImages(baseVelocity);

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        {children}     
        {children}     
        {children}     
        {children}     
      </motion.div>
    </div>
  );
};
