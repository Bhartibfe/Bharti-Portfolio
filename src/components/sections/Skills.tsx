"use client";

import dynamic from "next/dynamic";
import { Marquee } from "@/components/magicui/marquee";
import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/SectionHeading";
import type { SkillCategory } from "@/types/portfolio";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

const IconCloud = dynamic(
  () => import("@/components/magicui/icon-cloud").then((m) => ({ default: m.IconCloud })),
  { ssr: false }
);

function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-light transition-colors hover:bg-primary/20">
      {skill}
    </span>
  );
}

interface SkillsProps {
  skillCategories: SkillCategory[];
  allSkillIcons: string[];
}

export function Skills({ skillCategories, allSkillIcons }: SkillsProps) {
  const allSkills = skillCategories.flatMap((cat) => cat.skills);
  const midpoint = Math.ceil(allSkills.length / 2);

  return (
    <section id={SECTION_IDS.skills} className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading label="Skills" title="What I Work With" />
        </BlurFade>

        {/* Icon Cloud + Marquee side by side on desktop */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <div className="mb-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-16">
            <IconCloud
              iconSlugs={allSkillIcons}
              className="h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]"
            />
            <div className="flex max-w-md flex-col gap-3">
              <Marquee pauseOnHover className="[--duration:25s]">
                {allSkills.slice(0, midpoint).map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:30s]">
                {allSkills.slice(midpoint).map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </Marquee>
            </div>
          </div>
        </BlurFade>

        {/* 3-column balanced grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {skillCategories.map((category, index) => (
            <BlurFade key={category.name} delay={BLUR_FADE_DELAY * (index + 3)} inView>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-secondary">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-surface-light px-2.5 py-1 text-xs text-foreground-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
