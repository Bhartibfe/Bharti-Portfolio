export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ContactInfo {
  email: string;
  location: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
