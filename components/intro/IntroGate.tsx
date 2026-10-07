"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import IntroAnimation, { type IntroCard } from "@/components/ui/scroll-morph-hero";
import { profile } from "@/content/content";

type Status = "checking" | "active" | "exiting" | "done";

// Show the intro on every visit. Set to true to show it only once per browser session.
const SHOW_ONCE_PER_SESSION = false;
const STORAGE_KEY = "intro-seen-v1";
const TARGET_CARDS = 20;

const IntroContext = createContext({ introDone: false });
/** Hero/Header can use this to start their load animation only after the intro lifts. */
export const useIntro = () => useContext(IntroContext);

function buildCards(): IntroCard[] {
  const images: IntroCard[] = [
    { src: "/intro-gallery/glitch-portrait.jpg", label: "Glitch Portrait" },
    { src: "/intro-gallery/cosmic-profile.jpg", label: "Cosmic Profile" },
    { src: "/intro-gallery/dreamscape-reader.jpg", label: "Dreamscape Reader" },
    { src: "/intro-gallery/dreamscape-runner.jpg", label: "Dreamscape Runner" },
    { src: "/intro-gallery/night-walker.jpg", label: "Night Walker" },
    { src: "/intro-gallery/blue-orb.jpg", label: "Blue Orb" },
    { src: "/intro-gallery/neon-motion.jpg", label: "Neon Motion" },
    { src: "/intro-gallery/motion-study.jpg", label: "Motion Study" },
    { src: "/intro-gallery/saturn.jpg", label: "Saturn" },
  ];
  return Array.from({ length: TARGET_CARDS }, (_, index) => images[index % images.length]);
}

export function IntroGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("checking");
  const cards = useMemo(buildCards, []);

  // Decide whether to show the intro
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = SHOW_ONCE_PER_SESSION && sessionStorage.getItem(STORAGE_KEY) === "1";
    setStatus(reduce || seen || cards.length === 0 ? "done" : "active");
  }, [cards.length]);

  // Lock page scroll while the intro is up
  useEffect(() => {
    if (status !== "checking" && status !== "active") return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [status]);

  const finish = useCallback(() => {
    setStatus((s) => {
      if (s !== "active") return s;
      if (SHOW_ONCE_PER_SESSION) sessionStorage.setItem(STORAGE_KEY, "1");
      return "exiting";
    });
  }, []);

  // Start the website at the very top when the intro lifts
  useEffect(() => {
    if (status === "exiting") window.scrollTo(0, 0);
  }, [status]);

  // Esc skips
  useEffect(() => {
    if (status !== "active") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && finish();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, finish]);

  return (
    <IntroContext.Provider value={{ introDone: status === "exiting" || status === "done" }}>
      {children}

      {status !== "done" && (
        <motion.div
          role="dialog"
          aria-label="Intro"
          data-lenis-prevent
          className="fixed inset-0 z-[100] bg-[#F8F8F8]"
          initial={false}
          animate={{ y: status === "exiting" ? "-100%" : "0%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ pointerEvents: status === "exiting" ? "none" : "auto" }}
          onAnimationComplete={() => {
            if (status === "exiting") setStatus("done");
          }}
        >
          {(status === "active" || status === "exiting") && (
            <>
              <IntroAnimation
                cards={cards}
                title={profile.tagline}
                headingLead="From concept"
                headingTail="to deployment"
                subheading="Scroll to explore my projects and services."
                onComplete={finish}
              />
              <button
                type="button"
                onClick={finish}
                className="absolute right-6 top-6 z-20 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0A0A0A] underline underline-offset-4 hover:text-[#F63E04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0A0A0A] md:right-12 md:top-8"
              >
                Skip intro
              </button>
            </>
          )}
        </motion.div>
      )}
    </IntroContext.Provider>
  );
}

export default IntroGate;
