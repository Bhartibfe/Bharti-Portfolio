"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface IconCloudProps {
  iconSlugs: string[];
  className?: string;
}

interface IconPosition {
  x: number;
  y: number;
  z: number;
  slug: string;
}

export function IconCloud({ iconSlugs, className }: IconCloudProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  const icons = useMemo(() => {
    const positions: IconPosition[] = [];
    const count = iconSlugs.length;
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      positions.push({
        x: Math.cos(theta) * Math.sin(phi),
        y: Math.sin(theta) * Math.sin(phi),
        z: Math.cos(phi),
        slug: iconSlugs[i],
      });
    }
    return positions;
  }, [iconSlugs]);

  useEffect(() => {
    let time = 0;
    const animate = () => {
      time += 0.003;
      if (mouseRef.current.isHovering) {
        setRotation({
          x: mouseRef.current.y * 0.5,
          y: mouseRef.current.x * 0.5,
        });
      } else {
        setRotation({
          x: Math.sin(time * 0.5) * 0.3,
          y: time,
        });
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        isHovering: true,
      };
    }
  };

  const radius = 140;

  return (
    <div
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseRef.current.isHovering = false;
      }}
      className={cn("relative h-[300px] w-[300px] cursor-grab", className)}
    >
      {icons.map((icon) => {
        const cosX = Math.cos(rotation.x);
        const sinX = Math.sin(rotation.x);
        const cosY = Math.cos(rotation.y);
        const sinY = Math.sin(rotation.y);

        const x1 = icon.x * cosY - icon.z * sinY;
        const z1 = icon.x * sinY + icon.z * cosY;
        const y1 = icon.y * cosX - z1 * sinX;
        const z2 = icon.y * sinX + z1 * cosX;

        const scale = (z2 + 2) / 3;
        const opacity = Math.max(0.2, (z2 + 1.5) / 2.5);

        return (
          <div
            key={icon.slug}
            className="absolute left-1/2 top-1/2 flex items-center justify-center transition-none"
            style={{
              transform: `translate(-50%, -50%) translate(${x1 * radius}px, ${y1 * radius}px) scale(${scale})`,
              opacity,
              zIndex: Math.round(z2 * 100),
            }}
          >
            <img
              src={`https://cdn.simpleicons.org/${icon.slug}/A78BFA`}
              alt={icon.slug}
              width={36}
              height={36}
              className="pointer-events-none select-none drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]"
            />
          </div>
        );
      })}
    </div>
  );
}
