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
      className="relative flex min-h-screen items-center justify-center bg-dark px-4 sm:px-6 py-20 sm:py-24 overflow-hidden"
    >
      {/* PREMIUM BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.85),#000000_95%)] backdrop-blur-2xl" />

      <div className="relative z-10 w-full max-w-6xl space-y-12">

        {/* HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
              THE FLEET
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl leading-tight">
              A line of ships built for villain-level calm  
              and universe-scale reach.
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/70 leading-relaxed">
            Each NXS vessel is a silent black capsule designed to erase noise, 
            light and friction. You step in once - and step out in a different 
            layer of reality.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {fleet.map((ship) => (
            <div
              key={ship.name}
              className="glass-panel relative overflow-hidden bg-black/70 border-white/20 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_70%)]" />

              <div className="relative flex flex-col gap-4">

                <div className="flex items-center justify-between gap-4">
                  {/* LEFT */}
                  <div className="space-y-1">
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/40">
                      {ship.name}
                    </p>
                    <p className="text-xs text-white/60">{ship.range}</p>
                  </div>

                  {/* RIGHT */}
                  <div className="flex flex-col items-end gap-1 text-right">
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                      {ship.capacity}
                    </span>

                    {/* READY INDICATOR - white premium bar */}
                    <span className="inline-flex items-center gap-2 text-[0.6rem] text-white/70">
                      <span className="h-0.5 w-7 rounded-full bg-white shadow-[0_0_8px_white]" />
                      READY
                    </span>
                  </div>
                </div>

                <p className="text-xs text-white/80">{ship.mood}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
