"use client";

import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BlurFade } from "@/components/magicui/blur-fade";
import type { ContactInfo, SocialLink } from "@/types/portfolio";
import { BLUR_FADE_DELAY, SECTION_IDS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={20} />,
  Linkedin: <Linkedin size={20} />,
};

interface ContactProps {
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export function Contact({ contactInfo, socialLinks }: ContactProps) {
  return (
    <section id={SECTION_IDS.contact} className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-secondary">
            Contact
          </span>
        </BlurFade>

        <TextGenerateEffect
          words="Let's Work Together"
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl"
        />

        <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
          <p className="mb-10 text-foreground-muted">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </BlurFade>

        {/* Contact items */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} inView>
          <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-muted">
              <Mail size={16} className="text-primary" />
              {contactInfo.email}
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground-muted">
              <MapPin size={16} className="text-primary" />
              {contactInfo.location}
            </div>
          </div>
        </BlurFade>

        {/* CTA */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} inView>
          <a href={`mailto:${contactInfo.email}`}>
            <ShimmerButton
              shimmerColor="#8B5CF6"
              background="rgba(139, 92, 246, 0.15)"
              className="mx-auto border border-primary/30 px-8 py-3 text-sm"
            >
              <Mail size={16} />
              Say Hello
            </ShimmerButton>
          </a>
        </BlurFade>

        {/* Social links */}
        <BlurFade delay={BLUR_FADE_DELAY * 6} inView>
          <div className="mt-8 flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground-muted transition-all hover:border-primary/30 hover:text-primary-light hover:shadow-md hover:shadow-primary/10"
              >
                {iconMap[link.icon]}
              </a>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
