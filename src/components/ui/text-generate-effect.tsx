"use client";

import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        { opacity: 1, filter: "blur(0px)" },
        { duration, delay: stagger(0.1) }
      );
    }
  }, [isInView, animate, duration]);

  return (
    <div ref={ref} className={cn("font-display", className)}>
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="inline-block opacity-0"
            style={{ filter: "blur(10px)" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}
