"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden [--duration:40s] [--gap:1rem] gap-[var(--gap)]",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        vertical && "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[var(--gap)] [--gap:1rem]",
            vertical ? "flex-col animate-[marquee-vertical_var(--duration)_linear_infinite]" : "animate-[marquee_var(--duration)_linear_infinite]",
            reverse && "direction-reverse [animation-direction:reverse]",
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
