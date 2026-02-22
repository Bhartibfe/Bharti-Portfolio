"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import { SectionHeading } from "@/components/SectionHeading";
import { Timeline } from "@/components/ui/timeline";
import type { Experience as ExperienceType } from "@/types/portfolio";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  const timelineData = experiences.map((exp) => ({
    title: exp.period,
    content: (
      <div>
        <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
        <p className="mb-1 text-sm text-primary-light">{exp.company}</p>
        <p className="mb-4 text-xs text-foreground-muted">{exp.location}</p>
        <ul className="space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-foreground-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    ),
  }));

  return (
    <section id={SECTION_IDS.experience} className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading label="Experience" title="Where I've Worked" />
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
          <Timeline data={timelineData} />
        </BlurFade>
      </div>
    </section>
  );
}
