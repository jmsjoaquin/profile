"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

type ExpandableCardItem = {
  step: string;
  detail: string;
};

type ExpandableCardsProps = {
  items: ExpandableCardItem[];
  className?: string;
};

const accents = [
  "from-cyan-500/15 via-transparent to-emerald-400/10",
  "from-amber-500/15 via-transparent to-cyan-400/10",
  "from-emerald-500/15 via-transparent to-sky-400/10",
  "from-sky-500/15 via-transparent to-amber-400/10",
];

export function ExpandableCards({ items, className }: ExpandableCardsProps) {
  const [active, setActive] = useState<ExpandableCardItem | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);
  const spring = { type: "spring", stiffness: 220, damping: 26 };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollbarWidth
        ? `${scrollbarWidth}px`
        : "";
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {active ? (
          <div className="fixed inset-0 z-50 grid place-items-center px-6">
            <motion.div
              layoutId={`process-card-${active.step}-${id}`}
              ref={ref}
              transition={spring}
              className="w-full max-w-xl overflow-hidden rounded-3xl border border-border/60 bg-background/95 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-amber-500/10" />
                <div className="relative flex items-start justify-between gap-6 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Process
                    </p>
                    <motion.h3
                      layoutId={`process-title-${active.step}-${id}`}
                      className="mt-2 text-2xl font-semibold text-foreground"
                    >
                      {active.step}
                    </motion.h3>
                  </div>
                  <motion.button
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    type="button"
                    onClick={() => setActive(null)}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition hover:text-foreground"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`detail-${active.step}`}
                    layoutId={`process-detail-${active.step}-${id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-muted-foreground"
                  >
                    {active.detail}
                  </motion.p>
                </AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  className="flex flex-wrap gap-2"
                >
                  {["Scope", "Signals", "Milestones"].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                    >
                      {pill}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className={cn("grid gap-4 md:grid-cols-2", className)}>
        {items.map((item, index) => (
          <motion.button
            key={item.step}
            layoutId={`process-card-${item.step}-${id}`}
            onClick={() => setActive(item)}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-background/40 p-5 text-left transition hover:border-border hover:bg-card/70"
            type="button"
          >
            <span
              className={cn(
                "pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100",
                `bg-gradient-to-br ${accents[index % accents.length]}`
              )}
            />
            <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <motion.p
                  layoutId={`process-step-${item.step}-${id}`}
                  className="text-xs uppercase tracking-[0.3em] text-muted-foreground"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.p>
                <motion.p
                  layoutId={`process-title-${item.step}-${id}`}
                  className="mt-2 text-lg font-medium text-foreground"
                >
                  {item.step}
                </motion.p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Open
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </>
  );
}
