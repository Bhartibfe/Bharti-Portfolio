"use client";

import { ExternalLink, Github } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { SectionHeading } from "@/components/SectionHeading";
import type { Project } from "@/types/portfolio";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id={SECTION_IDS.projects} className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <SectionHeading label="Projects" title="What I've Built" />
        </BlurFade>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * (index + 2)} inView>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <BorderBeam size={200} duration={12} delay={index * 3} />

                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-foreground-muted">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-primary-light"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-foreground-muted transition-colors hover:text-primary-light"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
