"use client";

import { Download, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { BlurFade } from "@/components/magicui/blur-fade";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Avatar } from "@/components/Avatar";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

interface HeroProps {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    resumeUrl: string;
    avatarUrl: string;
  };
}

export function Hero({ personalInfo }: HeroProps) {
  return (
    <section
      id={SECTION_IDS.home}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      <Spotlight />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        {/* Avatar — left on desktop, top on mobile */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <div className="relative flex-shrink-0">
            {/* Decorative border frames */}
            <motion.div
              className="absolute -inset-6 rounded-[2rem] border border-primary/10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -inset-12 rounded-[2.5rem] border border-primary/5"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <Avatar
              src="/bharti-avatar.jpg"
              alt={personalInfo.name}
              className="w-52 sm:w-64 lg:w-[300px]"
            />
          </div>
        </BlurFade>

        {/* Text content — right on desktop, below on mobile */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary-light">
              Software Engineer
            </span>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="mb-8 min-h-[2rem] text-lg text-foreground-muted sm:text-xl">
              <TypingAnimation
                text={personalInfo.tagline}
                duration={30}
                className="text-foreground-muted"
              />
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href={personalInfo.resumeUrl} download>
                <ShimmerButton
                  shimmerColor="#8B5CF6"
                  background="rgba(139, 92, 246, 0.15)"
                  className="border border-primary/30 px-6 py-3 text-sm"
                >
                  <Download size={16} />
                  Download Resume
                </ShimmerButton>
              </a>
              <a href="#contact">
                <ShimmerButton
                  shimmerColor="#D4B896"
                  background="rgba(21, 21, 38, 0.8)"
                  className="border border-border px-6 py-3 text-sm"
                >
                  Get in Touch
                  <ArrowRight size={16} />
                </ShimmerButton>
              </a>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs text-foreground-muted">Scroll</span>
            <div className="h-6 w-px bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </BlurFade>
      </div>
    </section>
  );
}
