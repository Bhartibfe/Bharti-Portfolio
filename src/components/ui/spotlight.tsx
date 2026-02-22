"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "#8B5CF6" }: SpotlightProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute -top-40 left-0 h-[60vh] w-[60vw]"
        style={{
          background: `radial-gradient(ellipse at center, ${fill}15 0%, ${fill}08 40%, transparent 70%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="absolute -top-20 right-0 h-[40vh] w-[40vw]"
        style={{
          background: `radial-gradient(ellipse at center, ${fill}10 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = divRef.current?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    },
    [mouseX, mouseY]
  );

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={cn("relative overflow-hidden rounded-xl", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.1), transparent 80%)`,
          opacity: isFocused ? 1 : 0,
        }}
      />
      {children}
    </div>
  );
}
