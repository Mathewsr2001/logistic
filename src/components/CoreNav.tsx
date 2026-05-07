"use client";

import { useEffect, useRef, useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";

/** Delta mínimo de scroll para reaccionar — más alto = menos “parpadeos”. */
const SCROLL_EPS = 10;

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
          setShowPromo(y < 80);
          ticking.current = false;
          return;
        }

        /* Solo la barra promocional se pliega; SiteHeader sigue fijo y visible siempre. */
        if (y < 72) {
          setShowPromo(true);
        } else if (delta > SCROLL_EPS && y > 200) {
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
        className={`grid overflow-hidden motion-reduce:transition-none motion-reduce:duration-0 transition-[grid-template-rows] duration-[920ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showPromo ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        aria-hidden={!showPromo}
      >
        <div className="min-h-0 overflow-hidden">
          <AnnouncementBar />
        </div>
      </div>
      <SiteHeader elevated={elevated} />
    </div>
  );
}
