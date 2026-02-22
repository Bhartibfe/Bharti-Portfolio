import type { Metadata } from "next";
import { spaceGrotesk, inter, geistMono } from "@/lib/fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Bharti Sharma | Frontend Web Developer",
  description:
    "Portfolio of Bharti Sharma — Frontend Web Developer & B.E. student at Panjab University. Specializing in React, Next.js, and TypeScript.",
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
