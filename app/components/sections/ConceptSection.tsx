"use client";

export function ConceptSection() {
  return (
    <section
      id="universe-routes"
      className="relative flex min-h-screen items-center justify-center bg-dark px-4 py-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.9),#000000_65%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent shadow-[0_1px_4px_rgba(0,0,0,0.8)]" />
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-6 xs:gap-8 sm:gap-10 lg:flex-row">
        <div className="flex-1 space-y-6">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
            EVERYONE FLIES. EVERYWHERE. BEYOND.
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 leading-tight">
            We do not ask who you are. We only ask where you want to go - even
            if maps call it "off-limits".
          </h2>
          <p className="max-w-xl text-xs xs:text-sm sm:text-base text-zinc-300 leading-relaxed">
            NULLXES AIRLANE is a universe-class airline born from a villain
            mindset and precision engineering. No borders, no polite ceilings,
            no regular routes. Just black glass cabins and flight paths through
            everything the Universe offers.
          </p>
          <div className="flex flex-wrap gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-zinc-300">
            <span className="glass-chip px-3 py-1">
              UNIVERSE-BASED AIRLANE
            </span>
            <span className="glass-chip px-3 py-1">
              NO PASSPORT FOR THE VOID
            </span>
            <span className="glass-chip px-3 py-1">
              POST-2025 FLIGHT STANDARD
            </span>
          </div>
        </div>
        <div className="flex-1 space-y-6">
          <div className="glass-panel relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_60%)]" />
            <div className="relative flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-2">
                <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                  VILLAIN-LEVEL PREMIUM
                </p>
                <p className="max-w-xs text-sm text-zinc-100">
                  This is the airline you launch when you own the corporation,
                  the sky and the orbit. We keep the cabin dark, the glass
                  sharp and the routes undisclosed.
                </p>
              </div>
              <div className="flex flex-col items-end gap-3 text-right text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                <span>NO ECONOMY CLASS</span>
                <span>ONLY NULLXES CLASS</span>
                <span>ONLY ONE RULE - FLY</span>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="glass-chip flex flex-col gap-2 px-4 py-3">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                LOCATION
              </span>
              <span className="text-xs text-zinc-100">
                Universe, every known and unknown layer. No assigned region.
              </span>
            </div>
            <div className="glass-chip flex flex-col gap-2 px-4 py-3">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                ACCESS
              </span>
              <span className="text-xs text-zinc-100">
                Everyone. If you can read this, you can board.
              </span>
            </div>
            <div className="glass-chip flex flex-col gap-2 px-4 py-3">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-500">
                MOOD
              </span>
              <span className="text-xs text-zinc-100">
                Dark, quiet, decisive. A black glass corridor through space.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


