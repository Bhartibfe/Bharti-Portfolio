"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number;
  suffix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  className,
  delay = 0,
  suffix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" as `${number}px` });
  const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => {
      const start = direction === "down" ? value : 0;
      const end = direction === "down" ? 0 : value;
      const duration = 1500;
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (end - start) * eased);
        setDisplayValue(current);
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, direction, delay]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {displayValue}
      {suffix}
    </span>
  );
}
