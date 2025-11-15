"use client";

import { TELEGRAM_URL } from "./config";

export function NavBar() {
  const items = [
    "Concept",
    "Universe Routes",
    "Fleet",
    "Experience",
    "Contact",
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-5">
      <div className="pointer-events-auto glass-panel flex w-full max-w-6xl items-center justify-between gap-6 rounded-full border border-zinc-800/80 bg-black/75 px-5 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-950/70 ring-1 ring-zinc-600/70">
            <span className="text-xs font-semibold tracking-[0.12em]">
              NXS
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-zinc-400">
              NULLXES AIRLANE
            </span>
            <span className="text-[0.6rem] text-zinc-500">
              WE FLIGHT EVERYONE
            </span>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-[0.65rem] font-medium uppercase tracking-[0.18em] text-zinc-400 md:flex">
          {items.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative transition hover:text-zinc-100"
            >
              <span>{item}</span>
              <span className="absolute inset-x-0 -bottom-1 h-px origin-center scale-x-0 bg-linear-to-r from-zinc-200/0 via-zinc-200/80 to-zinc-200/0 transition group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
            }}
            className="group relative hidden items-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/80 px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-zinc-100 shadow-[0_0_40px_rgba(0,0,0,1)] transition hover:-translate-y-0.5 hover:border-zinc-50/80 hover:bg-zinc-900 hover:shadow-[0_0_70px_rgba(244,244,245,0.45)] md:inline-flex"
          >
            <span>BOOKiNG</span>
            <span className="h-3 w-px bg-zinc-500/70" />
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-zinc-50 text-[0.55rem] text-zinc-950 group-hover:scale-110">
              ↗
            </span>
          </button>
          <span className="inline-flex items-center gap-1 text-[0.55rem] uppercase tracking-[0.18em] text-zinc-500 md:hidden">
            <span className="h-1 w-1 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            <span>UNIVERSE</span>
          </span>
        </div>
      </div>
    </header>
  );
}


