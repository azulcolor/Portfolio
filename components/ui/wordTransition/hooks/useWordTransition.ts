import { useEffect, useState } from "react";

export const useWordTransition = (words: string[]) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentWord = words[currentWordIndex];

  return { currentWord };
};
