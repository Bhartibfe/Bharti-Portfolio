"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Outer animated glow */}
      <motion.div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary via-primary-light/40 to-secondary opacity-50 blur-2xl"
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Gradient border frame */}
      <div className="relative rounded-3xl bg-gradient-to-br from-primary via-primary-light/60 to-secondary p-[2px]">
        <div className="overflow-hidden rounded-3xl bg-background p-[3px]">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={alt}
              width={400}
              height={500}
              className="h-full w-full rounded-2xl object-cover"
              priority
            />

            {/* Bottom fade into dark */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating decorative dots */}
      <motion.div
        className="absolute -right-3 top-8 h-3 w-3 rounded-full bg-primary/60"
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-4 bottom-12 h-2 w-2 rounded-full bg-secondary/60"
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-2 right-8 h-2.5 w-2.5 rounded-full bg-primary-light/40"
        animate={{ y: [-3, 5, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
