"use client";

import { WordTransition } from "@/components/ui/wordTransition";
import { adjectives } from "./constants";

export const Habilities = () => {

  return (
    <div className="presentation-subtitle__habilities-container">
          <WordTransition words={adjectives}/>
    </div>
  );
};
