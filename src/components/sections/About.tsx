"use client";

import { BoxReveal } from "@/components/magicui/box-reveal";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/SectionHeading";
import type { Stat } from "@/types/portfolio";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

interface AboutProps {
  personalInfo: { bio: string };
  stats: Stat[];
}

export function About({ personalInfo, stats }: AboutProps) {
  return (
    <section id={SECTION_IDS.about} className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center lg:text-left">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading label="About Me" title="Who I Am" />
        </BlurFade>

        <div className="mb-12">
          <BoxReveal width="100%" duration={0.6}>
            <p className="text-lg leading-relaxed text-foreground-muted">
              {personalInfo.bio}
            </p>
          </BoxReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <BlurFade key={stat.label} delay={BLUR_FADE_DELAY * (index + 2)} inView>
              <div className="rounded-xl border border-border bg-surface p-6 text-center transition-colors hover:border-primary/30">
                <div className="mb-2 font-display text-4xl font-bold text-primary">
                  <NumberTicker value={stat.value} suffix={stat.suffix} delay={0.3} />
                </div>
                <p className="text-sm text-foreground-muted">{stat.label}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
