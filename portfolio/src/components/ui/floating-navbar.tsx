"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type NavItem = {
  name: string;
  link: string;
};

type FloatingNavProps = {
  navItems: NavItem[];
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  className?: string;
};

export const FloatingNav = ({
  navItems,
  leftSlot,
  rightSlot,
  className,
}: FloatingNavProps) => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current < 16) {
        setShow(true);
      } else if (current > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: show ? 0 : -24, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center rounded-full border border-border/60 bg-background/80 px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur",
        className
      )}
    >
      <div className="flex items-center">{leftSlot}</div>
      <nav className="hidden items-center justify-center gap-2 text-[11px] uppercase tracking-[0.32em] text-muted-foreground md:flex">
        {navItems.map((item) => (
          <a
            key={item.name}
            className="group relative rounded-full px-3 py-2 transition hover:text-foreground"
            href={item.link}
          >
            {item.name}
            <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent opacity-0 transition group-hover:opacity-100" />
          </a>
        ))}
      </nav>
      <div className="flex items-center justify-end">{rightSlot}</div>
    </motion.div>
  );
};
