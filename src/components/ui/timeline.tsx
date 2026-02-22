"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
}

export function Timeline({ data }: TimelineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="w-full">
      <div ref={ref} className="relative mx-auto max-w-3xl">
        {/* Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-8">
          <motion.div
            className="w-full bg-gradient-to-b from-primary via-primary-light to-transparent"
            style={{ height: heightTransform }}
          />
        </div>

        {data.map((item, index) => (
          <div key={index} className="relative flex gap-6 pb-12 md:gap-10">
            {/* Dot */}
            <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface md:h-16 md:w-16">
              <div className="h-2.5 w-2.5 rounded-full bg-primary md:h-3 md:w-3" />
            </div>

            {/* Content */}
            <div className="flex-1 pt-1 md:pt-4">
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground md:text-xl">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
