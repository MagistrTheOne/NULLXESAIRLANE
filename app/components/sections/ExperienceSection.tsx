"use client";

import { TELEGRAM_URL } from "../config";

export function ExperienceSection() {
  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center justify-center bg-black px-4 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(24,24,27,0.9),#020617_75%)]" />
      <div className="relative z-10 w-full max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
              ONBOARD EXPERIENCE
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Inside the cabin, the Universe is quiet and the glass is darker
              than any night you remember.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            We remove noise, clutter and distraction. You keep your thoughts,
            your plans and your destination. Everything else we mute.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-panel relative overflow-hidden p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,244,245,0.08),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                BLACK GLASS CABIN
              </p>
              <p className="text-sm text-zinc-100">
                Every surface is matte-black glass with controlled reflections.
                No bright panels, no random screens.
              </p>
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                ZERO-NOISE ZONES
              </p>
              <p className="text-sm text-zinc-100">
                Sound is tuned down to a low-level engine pulse. Enough to
                remind you you&apos;re flying. Not enough to break your focus.
              </p>
            </div>
          </div>
          <div className="glass-panel relative overflow-hidden p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_70%)]" />
            <div className="relative space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
                UNIVERSE VIEWPORTS
              </p>
              <p className="text-sm text-zinc-100">
                Windows act like portals: deep-space view when you want it,
                total blackout when you don&apos;t.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-panel relative mt-4 flex flex-col items-center justify-between gap-4 border-zinc-700/80 bg-zinc-950/90 px-6 py-5 sm:flex-row">
          <div className="relative space-y-1 text-center sm:text-left">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
              CREATED BY MAGISTRTHEONE
            </p>
            <p className="text-sm text-zinc-100">
              Vision architect of NULLXES AIRLANE – villain-level airline for
              everyone who still wants more sky.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
            }}
            className="glass-chip inline-flex items-center gap-2 px-4 py-2 text-[0.65rem] uppercase tracking-[0.18em] text-zinc-100 transition hover:text-white"
          >
            <span>Talk on Telegram</span>
            <span className="h-3 w-px bg-zinc-500/70" />
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-50 text-[0.55rem] text-zinc-950">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}


