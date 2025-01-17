import { AnimatePresence, motion } from "framer-motion";
import { useWordTransition } from "./";

interface Props {
  words: string[];
  duration?: number 
}

export const WordTransition = ({ words, duration = 0.3 }: Props) => {
  const { currentWord } = useWordTransition(words);

  return (
    <AnimatePresence mode="wait">
      <motion.p
        key={currentWord}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration }}
      >
        {currentWord}
      </motion.p>
    </AnimatePresence>
  );
};
