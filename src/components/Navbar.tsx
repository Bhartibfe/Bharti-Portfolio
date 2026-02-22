"use client";

import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Mail,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "Home", link: "#home", icon: <Home size={16} /> },
  { name: "About", link: "#about", icon: <User size={16} /> },
  { name: "Skills", link: "#skills", icon: <Wrench size={16} /> },
  { name: "Experience", link: "#experience", icon: <Briefcase size={16} /> },
  { name: "Projects", link: "#projects", icon: <FolderOpen size={16} /> },
  { name: "Contact", link: "#contact", icon: <Mail size={16} /> },
];

export function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
