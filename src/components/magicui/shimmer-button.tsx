"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface ShimmerButtonProps extends ComponentProps<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerButton({
  shimmerColor = "#8B5CF6",
  shimmerSize = "2px",
  borderRadius = "100px",
  shimmerDuration = "8s",
  background = "rgba(21, 21, 38, 1)",
  className,
  children,
  ...props
}: ShimmerButtonProps) {
  return (
    <button
      style={
        {
          "--shimmer-color": shimmerColor,
          "--radius": borderRadius,
          "--speed": shimmerDuration,
          "--bg": background,
          "--border-width": shimmerSize,
        } as React.CSSProperties
      }
      className={cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3",
        "text-foreground [border-radius:var(--radius)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      )}
      {...props}
    >
      {/* Spinning gradient behind everything — creates the animated border */}
      <div
        className="absolute inset-[-2px] [border-radius:var(--radius)] opacity-25 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `conic-gradient(from 0deg, transparent 70%, ${shimmerColor} 85%, transparent 100%)`,
          animation: `spin ${shimmerDuration} linear infinite`,
        }}
      />
      {/* Inner fill — covers everything except the thin border edge */}
      <div
        className="absolute [border-radius:var(--radius)]"
        style={{
          inset: "var(--border-width)",
          background: "var(--bg)",
        }}
      />
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 font-medium">
        {children}
      </span>
    </button>
  );
}
