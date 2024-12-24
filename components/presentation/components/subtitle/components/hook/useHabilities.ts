import { useEffect, useState } from "react";
import { adjectives } from "../constants";

export const useHabilities = () => {
  const [currentAdjectiveIndex, setCurrentAdjectiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdjectiveIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentAdjective = adjectives[currentAdjectiveIndex];

  return { currentAdjective };
};
