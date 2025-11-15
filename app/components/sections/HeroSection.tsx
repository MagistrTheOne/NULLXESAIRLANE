"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useHeroParallax } from "../useHeroParallax";
import { PrimaryCta } from "../PrimaryCta";
import { AudioConsole } from "../AudioConsole";
import { SpiderVFX } from "../SpiderVFX";

export function HeroSection() {
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-20 pt-28"
    >
      <div className="hero-gradient absolute inset-0 opacity-90" />
      <div className="pointer-events-none universe-grid absolute inset-x-0 top-14 h-52 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.4),transparent_65%)]" />
      <SpiderVFX />

      <div
        className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row"
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
      >
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-zinc-500/40 bg-black/60 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-zinc-300 shadow-[0_0_30px_rgba(0,0,0,0.9)]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            <span>UNIVERSE LOCATION – EVERYWHERE · 2026</span>
          </div>
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
              NULLXES AIRLANE – WE FLIGHT EVERYONE
            </h1>
            <p className="max-w-xl text-balance text-sm text-zinc-300 sm:text-base">
              The villain-level premium airline from the Universe itself.{" "}
              <span className="text-zinc-100">
                We fly everywhere – even where maps stop rendering.
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <PrimaryCta label="BOOKiNG – UNIVERSE ENTRY" />
            <AudioConsole />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-zinc-400 lg:justify-start">
            <span className="glass-chip px-3 py-1">
              LOCATION · UNIVERSE / NO BORDERS
            </span>
            <span className="glass-chip px-3 py-1">
              YEAR · 2026 / DARK GLASS STANDARD
            </span>
            <span className="glass-chip px-3 py-1">
              ACCESS · EVERYONE / EVERY STORY
            </span>
          </div>
        </div>

        <div className="flex-1">
          <motion.div
            style={{ rotateX, rotateY, x: translateX, y: translateY }}
            className="glass-panel relative mx-auto flex h-[320px] max-w-md items-center justify-center border-zinc-600/70 bg-zinc-950/90"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[1.4rem] border border-zinc-50/10" />
            <div className="absolute -top-4 right-8 inline-flex items-center gap-2 rounded-full border border-zinc-600/70 bg-black/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-zinc-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
              <span>LIVE FLIGHT PATH</span>
            </div>
            <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/80 px-4 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-zinc-400 ring-1 ring-zinc-500/70">
              <span>NULLXES AIRLANE CORE SHIP</span>
            </div>
            <div className="relative h-52 w-72">
              <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-sky-500/35 blur-3xl" />
              <div className="absolute -right-5 bottom-0 h-32 w-32 rounded-full bg-violet-500/35 blur-3xl" />
              <Image
                src="/image.png"
                alt="NULLXES AIRLANE flagship aircraft"
                fill
                priority
                className="pointer-events-none select-none object-contain drop-shadow-[0_30px_80px_rgba(15,23,42,1)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


