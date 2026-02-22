# Bharti Sharma — Portfolio

Personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, and **Payload CMS v3**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **CMS:** Payload CMS v3 (MongoDB, Lexical editor)
- **Animations:** Motion (Framer Motion), custom Magic UI components
- **Fonts:** Space Grotesk, Inter, Geist Mono

## Features

- Fully CMS-driven content via Payload admin panel at `/admin`
- Server-side data fetching with parallel requests
- Responsive design with dark theme
- Animated sections: hero with typing effect, skill icon cloud, timeline, shimmer buttons
- SEO-optimized metadata

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (also generates Payload types)
npm run dev

# Seed the database with portfolio data
npm run seed

# Production build
npm run build
npm start
```

## Environment Variables

Create a `.env` file:

```
DATABASE_URL=mongodb://127.0.0.1:27017/bharti_portfolio
PAYLOAD_SECRET=your-secret-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Project Structure

```
src/
├── app/
│   ├── (site)/        # Frontend routes (portfolio)
│   └── (payload)/     # CMS admin panel & API
├── components/        # React components
│   ├── sections/      # Page sections (Hero, About, Skills, etc.)
│   ├── ui/            # UI primitives
│   └── magicui/       # Animated components
├── payload/           # Payload CMS schema
│   ├── collections/   # Users, Media, Experiences, Projects, Skills
│   └── globals/       # SiteSettings, SocialLinks
├── lib/               # Utilities & data fetchers
├── types/             # TypeScript interfaces
└── scripts/           # Seed script
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run seed` | Seed database with portfolio data |
| `npm run lint` | Run ESLint |
