import type {
  Stat,
  SkillCategory,
  Experience,
  Project,
  ContactInfo,
  SocialLink,
} from "@/types/portfolio";

export const personalInfo = {
  name: "Bharti Sharma",
  title: "Software Engineer",
  tagline: "I don't just build UIs — I ship products. React, TypeScript, and AI-augmented dev workflows.",
  bio: "I'm a software engineer who thinks in products, not components. Currently building enterprise-grade frontend for a Government Defense Department at VDOIT Technologies — handling auth flows with JWTs, encrypted APIs, and strict security requirements. I use AI coding tools like Claude Code, Cursor, and Copilot daily to ship faster without cutting corners. B.E. (Electrical & Electronics) from UIET, Panjab University.",
  resumeUrl: "/Bharti-Sharma-Resume-2026.pdf",
};

export const stats: Stat[] = [
  { label: "Products Shipped", value: 4, suffix: "+" },
  { label: "Components Built", value: 40, suffix: "+" },
  { label: "Tech in Stack", value: 15, suffix: "+" },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Core Stack",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
    ],
  },
  {
    name: "Languages & Backend",
    skills: [
      "C",
      "C++",
      "Python",
      "HTML/CSS",
      "REST APIs",
      "JWT Auth",
      "AWS S3",
    ],
  },
  {
    name: "AI & Dev Tools",
    skills: [
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "ChatGPT",
      "Git",
      "Jira",
      "Figma",
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Engineer Intern",
    company: "VDOIT Technologies Ltd.",
    location: "Gurugram, Haryana (Remote)",
    period: "Oct 2025 – Present",
    highlights: [
      "Developing frontend features for an enterprise application used by a Government Defense Department, adhering to strict regulatory and security requirements",
      "Built and maintained 40+ reusable UI components using React.js, Next.js, Material-UI, and Tailwind CSS, improving delivery speed by 25%",
      "Implemented authentication and access control flows (JWTs, refresh tokens, protected routes) and integrated encrypted APIs for handling sensitive data",
      "Collaborating closely with backend and security teams on system design, permissions, and data flow across defense and AI platforms",
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "DIC, Panjab University",
    location: "Chandigarh (On-site)",
    period: "Jun 2025 – Aug 2025",
    highlights: [
      "Developed and updated the official DIC website using React.js and SCSS, supporting daily usage by 5,000+ visitors",
      "Created 25+ reusable frontend components, improving maintainability and reducing duplicated code across pages",
      "Built interactive interface elements that improved navigation flow and reduced user drop-offs by 15%",
      "Worked with backend developers to integrate 15+ APIs, ensuring accurate data rendering and stable client-server communication",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "CartCraft",
    description:
      "A fully responsive e-commerce app with dynamic product listings, shopping cart, and secure checkout. Built from scratch with component-based architecture — not a tutorial clone.",
    techStack: ["React", "Tailwind CSS", "REST API", "Auth"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Interactive Dashboard",
    description:
      "A data visualization dashboard with 5+ dynamic tables (CRUD), 3 pie charts, 2 bar charts, and 2 line charts. Modular component structure with clean data handling and real-time UI feedback.",
    techStack: ["React", "SCSS", "Chart.js", "MUI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weekly Wise",
    description:
      "A productivity platform with blogs, notes, to-do lists, and a planner — increased personal workflow efficiency by 40% during testing. Includes auth for secure access and data protection.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Auth"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const contactInfo: ContactInfo = {
  email: "bhartisharma95185@gmail.com",
  location: "Chandigarh, India",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "Github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "Linkedin",
  },
];

export const allSkillIcons = [
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "tailwindcss",
  "nodedotjs",
  "python",
  "cplusplus",
  "mongodb",
  "git",
  "github",
  "figma",
  "vercel",
  "amazons3",
  "anthropic",
  "jira",
];
