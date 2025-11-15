"use client";

export function UniverseRoutesSection() {
  const routes = [
    {
      id: "mars-gate",
      label: "MARS GATE / RED CORRIDOR",
      mood: "Low gravity silence.",
      eta: "ETA: 02:16 UNIVERSE TIME",
    },
    {
      id: "void-orbit",
      label: "VOID ORBIT / BLACK WINDOW",
      mood: "Zero-light viewports only.",
      eta: "ETA: 04:44 UNIVERSE TIME",
    },
    {
      id: "neo-earth",
      label: "NEO EARTH HUB / NIGHT ENTRY",
      mood: "Planet, but updated.",
      eta: "ETA: 01:09 UNIVERSE TIME",
    },
    {
      id: "outer-thread",
      label: "OUTER THREAD / EDGE LANE",
      mood: "Where maps stop rendering.",
      eta: "ETA: 07:77 UNIVERSE TIME",
    },
  ];

  return (
    <section
      id="fleet"
      className="relative flex min-h-screen items-center justify-center bg-dark px-4 py-16 sm:py-20"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent shadow-[0_1px_6px_rgba(0,0,0,0.9)] backdrop-blur-sm" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.9),#000000_70%)]" />
      <div className="relative z-10 flex w-full max-w-6xl flex-col gap-6 xs:gap-8 sm:gap-10 lg:flex-row">
        <div className="flex-1 space-y-3 xs:space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
            UNIVERSE ROUTES
          </p>
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50 leading-tight">
            We fly where classic airlines stop. Routes across orbit, void and
            neo-planetary hubs.
          </h2>
          <p className="max-w-md text-xs xs:text-sm sm:text-base text-zinc-300 leading-relaxed">
            Each route is a black corridor through the Universe with its own
            mood, silence level and viewport protocol. You choose the story, we
            route the space.
          </p>
        </div>
        <div className="flex-1">
          <div className="glass-panel relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.7),transparent_75%)]" />
            <div className="relative grid gap-4">
              {routes.map((route) => (
                <div
                  key={route.id}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-zinc-800/60 bg-black/80 px-4 py-3 text-sm text-zinc-300 transition hover:border-zinc-700"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-[0.7rem] uppercase tracking-[0.18em] text-zinc-500">
                      {route.label}
                    </span>
                    <span className="text-xs text-zinc-400">{route.mood}</span>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right text-[0.65rem] uppercase tracking-[0.18em] text-zinc-500">
                    <span>{route.eta}</span>
                    <span className="inline-flex items-center gap-1 text-[0.6rem] text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-zinc-500 shadow-[0_0_9px_rgba(255,255,255,0.3)]" />
                      <span>ACTIVE</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


