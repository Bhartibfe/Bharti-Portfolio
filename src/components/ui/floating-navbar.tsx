"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  icon?: React.ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

export function FloatingNav({ navItems, className }: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - (scrollYProgress.getPrevious() ?? 0);
      if (current < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  const handleLinkClick = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Desktop nav */}
      <AnimatePresence mode="wait">
        <motion.nav
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "fixed inset-x-0 top-4 z-[5000] mx-auto hidden max-w-fit items-center justify-center gap-1 rounded-full px-4 py-2 md:flex",
            "border border-border bg-surface/80 backdrop-blur-md shadow-lg shadow-primary/5",
            !atTop && "border-primary/20",
            className
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={cn(
                "relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium",
                "text-foreground-muted transition-colors hover:text-foreground"
              )}
            >
              {item.icon && <span className="text-primary">{item.icon}</span>}
              <span>{item.name}</span>
            </a>
          ))}
        </motion.nav>
      </AnimatePresence>

      {/* Mobile hamburger button */}
      <AnimatePresence mode="wait">
        <motion.button
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible || isMobileOpen ? 0 : -100, opacity: visible || isMobileOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className={cn(
            "fixed right-4 top-4 z-[5001] flex h-12 w-12 items-center justify-center rounded-2xl md:hidden",
            "border border-border bg-surface/90 backdrop-blur-md shadow-lg shadow-primary/5",
            "text-foreground-muted transition-all hover:text-foreground",
            isMobileOpen && "border-primary/40 bg-surface text-foreground"
          )}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait">
            {isMobileOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={20} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </AnimatePresence>

      {/* Mobile menu — full-screen panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[4999] md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

            {/* Decorative gradient blob */}
            <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-20 bottom-1/4 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="relative flex h-full flex-col justify-between px-8 pb-12 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Nav links */}
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.link}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25, delay: 0.1 + index * 0.06 }}
                    className="group flex items-center justify-between rounded-2xl px-4 py-4 transition-all hover:bg-surface"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        {item.icon}
                      </span>
                      <span className="font-display text-2xl font-semibold tracking-tight text-foreground">
                        {item.name}
                      </span>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-foreground-muted opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </motion.a>
                ))}
              </nav>

              {/* Bottom info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="border-t border-border pt-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-foreground-muted/50">
                  Bharti Sharma
                </p>
                <p className="mt-1 text-sm text-foreground-muted/40">
                  Frontend Engineer
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
