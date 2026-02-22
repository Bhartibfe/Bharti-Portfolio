import { getPayload } from "payload";
import config from "../payload.config";

async function seed() {
  const payload = await getPayload({ config });

  // --- Admin User ---
  const existingUsers = await payload.find({ collection: "users", limit: 1 });
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: "bhartisharma95185@gmail.com",
        password: "admin123",
      },
    });
    console.log("Created admin user");
  } else {
    console.log("Admin user already exists, skipping");
  }

  // --- Experiences ---
  const existingExperiences = await payload.find({ collection: "experiences", limit: 1 });
  if (existingExperiences.totalDocs === 0) {
    await payload.create({
      collection: "experiences",
      data: {
        role: "Software Engineer Intern",
        company: "VDOIT Technologies Ltd.",
        location: "Gurugram, Haryana (Remote)",
        period: "Oct 2025 – Present",
        highlights: [
          { text: "Developing frontend features for an enterprise application used by a Government Defense Department, adhering to strict regulatory and security requirements" },
          { text: "Built and maintained 40+ reusable UI components using React.js, Next.js, Material-UI, and Tailwind CSS, improving delivery speed by 25%" },
          { text: "Implemented authentication and access control flows (JWTs, refresh tokens, protected routes) and integrated encrypted APIs for handling sensitive data" },
          { text: "Collaborating closely with backend and security teams on system design, permissions, and data flow across defense and AI platforms" },
        ],
        order: 1,
      },
    });
    await payload.create({
      collection: "experiences",
      data: {
        role: "Frontend Engineer Intern",
        company: "DIC, Panjab University",
        location: "Chandigarh (On-site)",
        period: "Jun 2025 – Aug 2025",
        highlights: [
          { text: "Developed and updated the official DIC website using React.js and SCSS, supporting daily usage by 5,000+ visitors" },
          { text: "Created 25+ reusable frontend components, improving maintainability and reducing duplicated code across pages" },
          { text: "Built interactive interface elements that improved navigation flow and reduced user drop-offs by 15%" },
          { text: "Worked with backend developers to integrate 15+ APIs, ensuring accurate data rendering and stable client-server communication" },
        ],
        order: 2,
      },
    });
    console.log("Created experiences");
  } else {
    console.log("Experiences already exist, skipping");
  }

  // --- Projects ---
  const existingProjects = await payload.find({ collection: "projects", limit: 1 });
  if (existingProjects.totalDocs === 0) {
    await payload.create({
      collection: "projects",
      data: {
        title: "CartCraft",
        description:
          "A fully responsive e-commerce app with dynamic product listings, shopping cart, and secure checkout. Built from scratch with component-based architecture — not a tutorial clone.",
        techStack: [
          { name: "React" },
          { name: "Tailwind CSS" },
          { name: "REST API" },
          { name: "Auth" },
        ],
        liveUrl: "#",
        githubUrl: "#",
        order: 1,
      },
    });
    await payload.create({
      collection: "projects",
      data: {
        title: "Interactive Dashboard",
        description:
          "A data visualization dashboard with 5+ dynamic tables (CRUD), 3 pie charts, 2 bar charts, and 2 line charts. Modular component structure with clean data handling and real-time UI feedback.",
        techStack: [
          { name: "React" },
          { name: "SCSS" },
          { name: "Chart.js" },
          { name: "MUI" },
        ],
        liveUrl: "#",
        githubUrl: "#",
        order: 2,
      },
    });
    await payload.create({
      collection: "projects",
      data: {
        title: "Weekly Wise",
        description:
          "A productivity platform with blogs, notes, to-do lists, and a planner — increased personal workflow efficiency by 40% during testing. Includes auth for secure access and data protection.",
        techStack: [
          { name: "React" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Auth" },
        ],
        liveUrl: "#",
        githubUrl: "#",
        order: 3,
      },
    });
    console.log("Created projects");
  } else {
    console.log("Projects already exist, skipping");
  }

  // --- Skills ---
  const existingSkills = await payload.find({ collection: "skills", limit: 1 });
  if (existingSkills.totalDocs === 0) {
    await payload.create({
      collection: "skills",
      data: {
        category: "Core Stack",
        skills: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "JavaScript" },
          { name: "Tailwind CSS" },
          { name: "Shadcn UI" },
          { name: "Material UI" },
        ],
        order: 1,
      },
    });
    await payload.create({
      collection: "skills",
      data: {
        category: "Languages & Backend",
        skills: [
          { name: "C" },
          { name: "C++" },
          { name: "Python" },
          { name: "HTML/CSS" },
          { name: "REST APIs" },
          { name: "JWT Auth" },
          { name: "AWS S3" },
        ],
        order: 2,
      },
    });
    await payload.create({
      collection: "skills",
      data: {
        category: "AI & Dev Tools",
        skills: [
          { name: "Claude Code" },
          { name: "Cursor" },
          { name: "GitHub Copilot" },
          { name: "ChatGPT" },
          { name: "Git" },
          { name: "Jira" },
          { name: "Figma" },
        ],
        order: 3,
      },
    });
    console.log("Created skills");
  } else {
    console.log("Skills already exist, skipping");
  }

  // --- Site Settings ---
  await payload.updateGlobal({
    slug: "site-settings",
    data: {
      hero: {
        name: "Bharti Sharma",
        title: "Software Engineer",
        tagline: "I don't just build UIs — I ship products. React, TypeScript, and AI-augmented dev workflows.",
        bio: "I'm a software engineer who thinks in products, not components. Currently building enterprise-grade frontend for a Government Defense Department at VDOIT Technologies — handling auth flows with JWTs, encrypted APIs, and strict security requirements. I use AI coding tools like Claude Code, Cursor, and Copilot daily to ship faster without cutting corners. B.E. (Electrical & Electronics) from UIET, Panjab University.",
        avatarUrl: "/bharti-avatar.jpg",
        resumeUrl: "/Bharti-Sharma-Resume-2026.pdf",
      },
      about: {
        stats: [
          { label: "Products Shipped", value: 4, suffix: "+" },
          { label: "Components Built", value: 40, suffix: "+" },
          { label: "Tech in Stack", value: 15, suffix: "+" },
        ],
      },
      contact: {
        email: "bhartisharma95185@gmail.com",
        location: "Chandigarh, India",
      },
      seo: {
        metaTitle: "Bharti Sharma | Frontend Web Developer",
        metaDescription:
          "Portfolio of Bharti Sharma — Frontend Web Developer & B.E. student at Panjab University. Specializing in React, Next.js, and TypeScript.",
        siteUrl: "http://localhost:3000",
      },
      skillIconSlugs: [
        { slug: "react" },
        { slug: "nextdotjs" },
        { slug: "typescript" },
        { slug: "javascript" },
        { slug: "tailwindcss" },
        { slug: "nodedotjs" },
        { slug: "python" },
        { slug: "cplusplus" },
        { slug: "mongodb" },
        { slug: "git" },
        { slug: "github" },
        { slug: "figma" },
        { slug: "vercel" },
        { slug: "html5" },
        { slug: "anthropic" },
        { slug: "jira" },
      ],
    },
  });
  console.log("Updated site settings");

  // --- Social Links ---
  await payload.updateGlobal({
    slug: "social-links",
    data: {
      links: [
        { name: "GitHub", url: "https://github.com", icon: "Github", visible: true },
        { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin", visible: true },
      ],
    },
  });
  console.log("Updated social links");

  console.log("Seed complete!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
