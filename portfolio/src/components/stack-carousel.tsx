"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type StackItem = {
  name: string;
  logo: string;
  detail: string;
};

type StackCarouselProps = {
  items: StackItem[];
  speed?: number;
  className?: string;
};

const SCROLL_STEP = 220;

export function StackCarousel({
  items,
  speed = 0.02,
  className,
}: StackCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const pauseTimerRef = useRef<number | null>(null);
  const loopItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || items.length === 0) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let rafId = 0;
    let lastTime = performance.now();

    const tick = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!pausedRef.current) {
        scroller.scrollLeft += delta * speed;
        const resetPoint = scroller.scrollWidth / 2;
        if (scroller.scrollLeft >= resetPoint) {
          scroller.scrollLeft -= resetPoint;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [items.length, speed]);

  const pauseAutoScroll = (duration = 1200) => {
    pausedRef.current = true;
    if (pauseTimerRef.current) {
      window.clearTimeout(pauseTimerRef.current);
    }
    pauseTimerRef.current = window.setTimeout(() => {
      pausedRef.current = false;
    }, duration);
  };

  const handleStep = (direction: "prev" | "next") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    pauseAutoScroll();
    const resetPoint = scroller.scrollWidth / 2;
    if (direction === "prev" && scroller.scrollLeft <= 0) {
      scroller.scrollLeft = resetPoint;
    } else if (direction === "next" && scroller.scrollLeft >= resetPoint) {
      scroller.scrollLeft -= resetPoint;
    }

    scroller.scrollBy({
      left: direction === "next" ? SCROLL_STEP : -SCROLL_STEP,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative", className)}>
      <div className="stack-controls">
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-full text-muted-foreground hover:text-foreground"
          onClick={() => handleStep("prev")}
          aria-label="Scroll stack left"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
          <span className="sr-only">Scroll left</span>
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          className="rounded-full text-muted-foreground hover:text-foreground"
          onClick={() => handleStep("next")}
          aria-label="Scroll stack right"
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            pausedRef.current = false;
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
      <div
        ref={scrollerRef}
        className="stack-scroll logo-marquee"
        tabIndex={0}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
        onFocus={() => {
          pausedRef.current = true;
        }}
        onBlur={() => {
          pausedRef.current = false;
        }}
      >
        <div className="logo-track">
          {loopItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="logo-item"
              title={item.detail}
            >
              <div className="logo-mark">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={26}
                  height={26}
                  className="h-6 w-6"
                />
              </div>
              <p className="text-sm font-medium text-[color:var(--ink)]">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
