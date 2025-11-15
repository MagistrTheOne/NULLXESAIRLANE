"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useHeroParallax } from "../useHeroParallax";
import { PrimaryCta } from "../PrimaryCta";
import { SpiderVFX } from "../SpiderVFX";

export function HeroSection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Autoplay track every 2 minutes
  useEffect(() => {
    if (!audioRef.current) return;
    const play = () => audioRef.current?.play().catch(() => {});
    play();
    const interval = setInterval(play, 120000);
    return () => clearInterval(interval);
  }, []);

  const {
    rotateX,
    rotateY,
    translateX,
    translateY,
    handlePointerMove,
    reset,
  } = useHeroParallax();

  return (
    <section
      id="concept"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 pt-28 sm:pt-32 pb-20 sm:pb-24 bg-dark text-white"
    >

      {/* FULLSCREEN BACKGROUND - AIRLANE, NO STRETCH */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center bg-black">
        <div className="relative h-full w-full">
          <Image
            src="/airlane.png"
            alt="NULLXES AIRLANE - Nightcraft"
            fill
            priority
            className="object-contain object-center md:object-cover"
          />
        </div>
      </div>

      <SpiderVFX />

      {/* MAIN HERO CONTENT */}
      <div
        className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center"
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
      >
        {/* TOP CHIP */}
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="inline-flex items-center gap-3 rounded-full border border-zinc-700/50 bg-black/70 px-4 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-zinc-300 shadow-[0_0_40px_rgba(0,0,0,1)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_14px_white]" />
          <span>UNIVERSE LOCATION - EVERY REALITY - 2026</span>
        </motion.div>

        {/* HERO TITLE */}
        <motion.h1
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="mt-10 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(0,0,0,1)]"
        >
          We Fly Every Reality We fly in Space
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="mt-6 max-w-2xl text-white/70 text-sm sm:text-lg leading-relaxed"
        >
          The premium  airline engineered beyond physics, fear and borders.{" "}
          <span className="text-white">
            Crafted by NULLXES × MagistrTheOne.
          </span>
        </motion.p>

        {/* PRIMARY CTA */}
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <PrimaryCta label="BOOKiNG - UNIVERSE ENTRY" />
        </motion.div>

        {/* TAGS */}
        <motion.div
          style={{ rotateX, rotateY, x: translateX, y: translateY }}
          className="mt-8 flex flex-wrap justify-center gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/50"
        >
          <span className="glass-chip px-3 py-1 bg-black/60 border-white/20">
            LOCATION · UNIVERSAL / NO LIMITS
          </span>
          <span className="glass-chip px-3 py-1 bg-black/60 border-white/20">
            YEAR · 2026 / DARK GLASS MODE
          </span>
          <span className="glass-chip px-3 py-1 bg-black/60 border-white/20">
            ACCESS · EVERYONE / EVERY REALITY
          </span>
        </motion.div>
      </div>

      {/* HIDDEN AUDIO AUTOPLAY */}
      <audio ref={audioRef} src="/nullxsingle.mp3" preload="auto" />
    </section>
  );
}
