"use client";

import { TELEGRAM_URL } from "../config";

export function ExperienceSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center bg-dark px-4 py-16 sm:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/12 to-transparent shadow-[0_1px_5px_rgba(0,0,0,0.85)] backdrop-blur-sm" />
      {/* Full black cinematic gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.8),#000000_80%)]" />

      <div className="relative z-10 w-full max-w-6xl space-y-6 xs:space-y-8 sm:space-y-10">
        {/* HEADER BLOCK */}
        <div className="flex flex-col gap-3 xs:gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              ONBOARD EXPERIENCE
            </p>
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
              Inside the cabin, the Universe is silent and the glass is darker
              than any night you remember.
            </h2>
          </div>
          <p className="max-w-md text-xs xs:text-sm sm:text-base text-white/60 leading-relaxed">
            No noise. No chaos. No distractions.
            You keep the mission.
            NULLXES keeps the silence.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="glass-panel relative overflow-hidden p-5 bg-black/50 border-white/10 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                BLACK GLASS CABIN
              </p>
              <p className="text-sm text-white/80">
                Every surface is premium matte-black glass.  
                No aggressive lights. No chaos. Just clarity.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel relative overflow-hidden p-5 bg-black/60 border-zinc-800/50 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.01),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                ZERO-NOISE ZONES
              </p>
              <p className="text-sm text-white/80">
                Engine sound reduced to a deep, soft pulse.  
                Enough to feel alive. Never enough to interrupt.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel relative overflow-hidden p-5 bg-black/50 border-white/10 backdrop-blur-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                UNIVERSE VIEWPORTS
              </p>
              <p className="text-sm text-white/80">
                Portals to deep space.  
                Blackout mode when the Universe becomes too loud.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CARD */}
        <div className="glass-panel relative mt-4 flex flex-col items-center justify-between gap-4 bg-black/70 border-zinc-800/50 backdrop-blur-3xl px-6 py-5 sm:flex-row">
          <div className="relative space-y-1 text-center sm:text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              CREATED BY MAGISTRTHEONE
            </p>
            <p className="text-sm text-white/80">
              Vision architect of NULLXES AIRLANE -
              the villain-level airline for those who demand more sky.
            </p>
          </div>

          <button
            type="button"
            onClick={() => window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer")}
            className="glass-chip inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] bg-black/80 border-zinc-700/50 text-zinc-300 hover:text-zinc-100 backdrop-blur-xl transition"
          >
            <span>Talk on Telegram</span>
            <span className="h-3 w-px bg-white/20" />
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-600 text-[0.55rem] text-zinc-100">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
