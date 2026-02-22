import type { Metadata } from "next";
import { spaceGrotesk, inter, geistMono } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bharti Sharma | Software Engineer",
    template: "%s | Bharti Sharma",
  },
  description:
    "Software Engineer specializing in React, Next.js, and TypeScript. Building enterprise-grade frontend applications with modern web technologies and AI-augmented workflows.",
  keywords: [
    "Bharti Sharma",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Bharti Sharma" }],
  creator: "Bharti Sharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Bharti Sharma | Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and TypeScript. Building enterprise-grade frontend applications with modern web technologies.",
    siteName: "Bharti Sharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharti Sharma | Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and TypeScript. Building enterprise-grade frontend applications with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
