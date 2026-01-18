"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const wordsArray = words.split(" ");

  return (
    <span className={cn("inline", className)}>
      {wordsArray.map((word, idx) => (
        <React.Fragment key={`${word}-${idx}`}>
          <motion.span
            initial={{
              opacity: 0,
              filter: filter ? "blur(10px)" : "none",
            }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration, delay: idx * 0.08 }}
            className="inline-block"
          >
            {word}
          </motion.span>
          {idx < wordsArray.length - 1 ? " " : ""}
        </React.Fragment>
      ))}
    </span>
  );
};
