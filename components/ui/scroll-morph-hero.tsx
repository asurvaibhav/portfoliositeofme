"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";

// --- Types ---
export type AnimationPhase = "scatter" | "line" | "circle" | "bottom-strip";

export interface IntroCard {
  src: string;
  label: string;
}

interface FlipCardProps {
  card: IntroCard;
  index: number;
  target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 60;
const IMG_HEIGHT = 85;
const MAX_SCROLL = 3000; // virtual scroll range
const OVERSCROLL_TO_EXIT = 300; // extra scroll at the end that leaves the intro

// --- FlipCard ---
function FlipCard({ card, index, target }: FlipCardProps) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      style={{
        position: "absolute",
        width: IMG_WIDTH,
        height: IMG_HEIGHT,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="cursor-pointer group"
    >
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-[8px] bg-[#F8DAD2] shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={card.src}
            alt=""
            aria-hidden
            draggable={false}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-transparent" />
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[8px] bg-[#0A0A0A] p-2 shadow-lg"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="text-center">
            <p className="mb-1 text-[7px] font-bold uppercase tracking-widest text-[#F63E04]">
              {index % 2 === 0 ? "Work" : "Build"}
            </p>
            <p className="text-[9px] font-medium leading-tight text-white">{card.label}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

// --- Main ---
export default function IntroAnimation({
  cards,
  title,
  headingLead,
  headingTail,
  subheading,
  onComplete,
}: {
  cards: IntroCard[];
  title: string;
  headingLead: string;
  headingTail: string;
  subheading: string;
  onComplete: () => void;
}) {
  const total = cards.length;
  const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [atEnd, setAtEnd] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // --- Container size ---
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });
    observer.observe(el);
    setContainerSize({ width: el.offsetWidth, height: el.offsetHeight });
    return () => observer.disconnect();
  }, []);

  // --- Virtual scroll ---
  const virtualScroll = useMotionValue(0);
  const scrollRef = useRef(0);
  const overscrollRef = useRef(0);
  const completedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const advance = (delta: number) => {
      if (completedRef.current) return;
      const current = scrollRef.current;

      // At the end: more downward scrolling leaves the intro
      if (current >= MAX_SCROLL && delta > 0) {
        overscrollRef.current += delta;
        if (overscrollRef.current > OVERSCROLL_TO_EXIT) {
          completedRef.current = true;
          onCompleteRef.current();
        }
        return;
      }

      overscrollRef.current = 0;
      const next = Math.min(Math.max(current + delta, 0), MAX_SCROLL);
      scrollRef.current = next;
      virtualScroll.set(next);
      setAtEnd(next >= MAX_SCROLL);
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      advance(e.deltaY);
    };

    let touchY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const y = e.touches[0].clientY;
      advance((touchY - y) * 2);
      touchY = y;
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        advance(250);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        advance(-250);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKey);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKey);
    };
  }, [virtualScroll]);

  // 1. Morph progress: circle -> bottom arc (scroll 0..600)
  const morphProgress = useTransform(virtualScroll, [0, 600], [0, 1]);
  const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });

  // 2. Shuffle rotation after the morph (scroll 600..3000)
  const scrollRotate = useTransform(virtualScroll, [600, 3000], [0, 360]);
  const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

  // --- Mouse parallax ---
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normalizedX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseX.set(normalizedX * 100);
    };
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // --- Intro sequence: scatter -> line -> circle ---
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase("line"), 500);
    const t2 = setTimeout(() => setIntroPhase("circle"), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // --- Random scatter positions ---
  const scatterPositions = useMemo(
    () =>
      Array.from({ length: total }, () => ({
        x: (Math.random() - 0.5) * 1500,
        y: (Math.random() - 0.5) * 1000,
        rotation: (Math.random() - 0.5) * 180,
        scale: 0.6,
        opacity: 0,
      })),
    [total]
  );

  // --- Manual render values ---
  const [morphValue, setMorphValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);
  const [parallaxValue, setParallaxValue] = useState(0);

  useEffect(() => {
    const u1 = smoothMorph.on("change", setMorphValue);
    const u2 = smoothScrollRotate.on("change", setRotateValue);
    const u3 = smoothMouseX.on("change", setParallaxValue);
    return () => {
      u1();
      u2();
      u3();
    };
  }, [smoothMorph, smoothScrollRotate, smoothMouseX]);

  // Arc content fades in once the arc is formed
  const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
  const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

  const display = "font-sora font-[family-name:var(--font-display)]";

  // --- Circle geometry (shared by the cards and the centre text) ---
  const isMobileView = containerSize.width < 768;
  const minDim = Math.min(containerSize.width, containerSize.height);
  const circleRadius = isMobileView
    ? Math.min(containerSize.width * 0.4, containerSize.height * 0.35, 350)
    : Math.min(minDim * 0.35, 350);
  // Clear space inside the ring = radius minus the cards' half-diagonal and a little padding
  const innerRadius = Math.max(circleRadius - 62, 40);
  const textWidth = innerRadius * 1.5; // rectangle that fits inside the circle
  const textSize = Math.max(Math.min(innerRadius * 0.13, 56), 13);
  const hintSize = Math.max(Math.min(textSize * 0.4, 12), 9);

  return (
    <div
      ref={containerRef}
      data-lenis-prevent
      className="relative h-full w-full select-none overflow-hidden bg-[#F8F8F8]"
      style={{ touchAction: "none", overscrollBehavior: "contain" }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center" style={{ perspective: 1000 }}>
        {/* Intro text (fades out) */}
        <div
          className="pointer-events-none absolute top-1/2 z-0 flex -translate-y-1/2 flex-col items-center justify-center text-center"
          style={{ width: textWidth, visibility: containerSize.width ? "visible" : "hidden" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={
              introPhase === "circle" && morphValue < 0.5
                ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)" }
                : { opacity: 0, filter: "blur(10px)" }
            }
            transition={{ duration: 1 }}
            style={{ fontSize: textSize }}
            className={`${display} w-full font-semibold uppercase leading-[0.98] tracking-[-0.04em] text-[#0A0A0A]`}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 0.5 - morphValue } : { opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ fontSize: hintSize }}
            className="mt-3 font-bold tracking-[0.18em] text-[#686868]"
          >
            SCROLL TO EXPLORE
          </motion.p>
        </div>

        {/* Arc content (fades in) */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="pointer-events-none absolute top-[10%] z-10 flex flex-col items-center justify-center px-4 text-center"
        >
          <h2
            className={`${display} mb-4 text-[clamp(30px,5vw,72px)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-[#0A0A0A]`}
          >
            {headingLead} <span className="text-[#686868]">{headingTail}</span>
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-[#686868] md:text-base">{subheading}</p>
        </motion.div>

        {/* Cards */}
        <div className="relative flex h-full w-full items-center justify-center">
          {cards.map((card, i) => {
            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

            if (introPhase === "scatter") {
              target = scatterPositions[i];
            } else if (introPhase === "line") {
              const lineSpacing = Math.min(70, (containerSize.width - 40) / total);
              const lineTotalWidth = total * lineSpacing;
              target = { x: i * lineSpacing - lineTotalWidth / 2, y: 0, rotation: 0, scale: 1, opacity: 1 };
            } else {
              const isMobile = isMobileView;

              // A. Circle
              const circleAngle = (i / total) * 360;
              const circleRad = (circleAngle * Math.PI) / 180;
              const circlePos = {
                x: Math.cos(circleRad) * circleRadius,
                y: Math.sin(circleRad) * circleRadius,
                rotation: circleAngle + 90,
              };

              // B. Bottom arc ("rainbow")
              const baseRadius = Math.min(containerSize.width, containerSize.height * 1.5);
              const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
              const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
              const arcCenterY = arcApexY + arcRadius;
              const spreadAngle = isMobile ? 100 : 130;
              const startAngle = -90 - spreadAngle / 2;
              const step = spreadAngle / (total - 1 || 1);

              const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
              const maxRotation = spreadAngle * 0.8;
              const boundedRotation = -scrollProgress * maxRotation;

              const currentArcAngle = startAngle + i * step + boundedRotation;
              const arcRad = (currentArcAngle * Math.PI) / 180;
              const arcPos = {
                x: Math.cos(arcRad) * arcRadius + parallaxValue,
                y: Math.sin(arcRad) * arcRadius + arcCenterY,
                rotation: currentArcAngle + 90,
                scale: isMobile ? 1.4 : 1.8,
              };

              // C. Morph
              target = {
                x: lerp(circlePos.x, arcPos.x, morphValue),
                y: lerp(circlePos.y, arcPos.y, morphValue),
                rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                scale: lerp(1, arcPos.scale, morphValue),
                opacity: 1,
              };
            }

            return <FlipCard key={i} card={card} index={i} target={target} />;
          })}
        </div>

        {/* End hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: atEnd ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute bottom-8 z-10 text-xs font-bold tracking-[0.2em] text-[#686868]"
        >
          SCROLL TO ENTER ↓
        </motion.p>
      </div>
    </div>
  );
}
