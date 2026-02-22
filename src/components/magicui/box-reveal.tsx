"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

interface BoxRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number;
  delay?: number;
}

export function BoxReveal({
  children,
  width = "fit-content",
  boxColor = "#8B5CF6",
  duration = 0.5,
  delay = 0,
}: BoxRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration, delay: delay + 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: boxColor,
          zIndex: 20,
        }}
        initial={{ left: 0 }}
        animate={isInView ? { left: "100%" } : {}}
        transition={{ duration, ease: "easeIn", delay }}
      />
    </div>
  );
}
