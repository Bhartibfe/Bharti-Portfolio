import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import {
  getSiteSettings,
  getSocialLinks,
  getExperiences,
  getProjects,
  getSkills,
} from "@/lib/payload";
import type {
  Stat,
  SkillCategory,
  Experience as ExperienceType,
  Project,
  ContactInfo,
  SocialLink,
} from "@/types/portfolio";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [siteSettings, socialLinksData, experiencesData, projectsData, skillsData] =
    await Promise.all([
      getSiteSettings(),
      getSocialLinks(),
      getExperiences(),
      getProjects(),
      getSkills(),
    ]);

  const personalInfo = {
    name: siteSettings.hero?.name ?? "",
    title: siteSettings.hero?.title ?? "",
    tagline: siteSettings.hero?.tagline ?? "",
    bio: siteSettings.hero?.bio ?? "",
    avatarUrl: siteSettings.hero?.avatarUrl ?? "",
    resumeUrl: siteSettings.hero?.resumeUrl ?? "",
  };

  const stats: Stat[] = (siteSettings.about?.stats ?? []).map(
    (s: { label: string; value: number; suffix?: string | null }) => ({
      label: s.label,
      value: s.value,
      suffix: s.suffix ?? undefined,
    }),
  );

  const contactInfo: ContactInfo = {
    email: siteSettings.contact?.email ?? "",
    location: siteSettings.contact?.location ?? "",
  };

  const skillCategories: SkillCategory[] = skillsData.map((doc) => ({
    name: doc.category,
    skills: (doc.skills ?? []).map((s: { name: string }) => s.name),
  }));

  const allSkillIcons: string[] = (siteSettings.skillIconSlugs ?? []).map(
    (s: { slug: string }) => s.slug,
  );

  const experiences: ExperienceType[] = experiencesData.map((doc) => ({
    role: doc.role,
    company: doc.company,
    location: doc.location,
    period: doc.period,
    highlights: (doc.highlights ?? []).map((h: { text: string }) => h.text),
  }));

  const projects: Project[] = projectsData.map((doc) => ({
    title: doc.title,
    description: doc.description,
    techStack: (doc.techStack ?? []).map((t: { name: string }) => t.name),
    liveUrl: doc.liveUrl ?? undefined,
    githubUrl: doc.githubUrl ?? undefined,
  }));

  type SocialLinkDoc = { name: string; url: string; icon: string; visible?: boolean | null };
  const socialLinks: SocialLink[] = (socialLinksData.links ?? [])
    .filter((link: SocialLinkDoc) => link.visible !== false)
    .map((link: SocialLinkDoc) => ({
      name: link.name,
      url: link.url,
      icon: link.icon,
    }));

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={{ bio: personalInfo.bio }} stats={stats} />
      <Skills skillCategories={skillCategories} allSkillIcons={allSkillIcons} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact contactInfo={contactInfo} socialLinks={socialLinks} />
      <Footer />
    </main>
  );
}
