"use client";

import { useEffect, useRef, useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";

const SCROLL_EPS = 4;

export function CoreNav() {
  const [elevated, setElevated] = useState(false);
  const [showPromo, setShowPromo] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      if (typeof window === "undefined") return;
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        lastY.current = y;

        setElevated(y > 12);

        const prefersReduced =
          typeof window.matchMedia === "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReduced) {
          setShowPromo(y < 64);
          ticking.current = false;
          return;
        }

        if (y < 56) {
          setShowPromo(true);
        } else if (delta > SCROLL_EPS && y > 120) {
          setShowPromo(false);
        } else if (delta < -SCROLL_EPS) {
          setShowPromo(true);
        }

        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[80] transition-shadow duration-300 ease-out"
      style={{
        boxShadow: elevated ? "0 12px 48px -16px rgba(2, 12, 40, 0.55)" : "none",
      }}
    >
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-out"
        style={{
          maxHeight: showPromo ? "3.75rem" : "0px",
          opacity: showPromo ? 1 : 0,
        }}
        aria-hidden={!showPromo}
      >
        <AnnouncementBar />
      </div>
      <SiteHeader elevated={elevated} />
    </div>
  );
}
