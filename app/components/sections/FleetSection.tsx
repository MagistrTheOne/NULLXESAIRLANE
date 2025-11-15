"use client";

export function FleetSection() {
  const fleet = [
    {
      name: "NXS-01 VOIDLINER",
      range: "INTER-ORBITAL / VOID-READY",
      capacity: "144 SOULS · ALL WINDOW SEATS",
      mood: "Silent, heavy, pure black glass.",
    },
    {
      name: "NXS-02 STARTHREAD",
      range: "UNIVERSE THREAD / LONG HAUL",
      capacity: "88 SOULS · EXTENDED NIGHT MODE",
      mood: "Soft gravity, deep-blue ambient.",
    },
    {
      name: "NXS-03 NIGHTFALL",
      range: "PLANET & ORBIT / HYBRID ENTRY",
      capacity: "66 SOULS · DIRECT NIGHT LANDINGS",
      mood: "Sharp descent, low static noise.",
    },
    {
      name: "NXS-04 BLACK ORBITER",
      range: "HIGH VOID / CLASSIFIED",
      capacity: "32 SOULS · SEALED WINDOWS",
      mood: "For flights you will not post.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex min-h-screen items-center justify-center bg-black px-4 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(24,24,27,0.9),#020617_70%)]" />
      <div className="relative z-10 w-full max-w-6xl space-y-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
              THE FLEET
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              A line of ships built for villain-level calm and universe-scale
              reach.
            </h2>
          </div>
          <p className="max-w-md text-sm text-zinc-300">
            Each NXS ship is a dark glass capsule tuned to erase noise, light
            and friction. You board once and step out in a different layer of
            reality.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {fleet.map((ship) => (
            <div
              key={ship.name}
              className="group glass-panel relative overflow-hidden border-zinc-700/70 bg-zinc-950/90 p-5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,244,245,0.08),transparent_70%)] opacity-80" />
              <div className="relative flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-400">
                      {ship.name}
                    </p>
                    <p className="text-xs text-zinc-300">{ship.range}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1 text-right text-[0.65rem] uppercase tracking-[0.18em] text-zinc-400">
                    <span>{ship.capacity}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-300">
                      <span className="h-1 w-6 bg-linear-to-r from-emerald-300 via-emerald-400 to-transparent" />
                      <span>READY</span>
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-200">{ship.mood}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


