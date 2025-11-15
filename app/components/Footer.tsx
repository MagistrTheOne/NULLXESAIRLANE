"use client";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-black/90 px-4 py-6 text-[0.7rem] text-zinc-500">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <span className="uppercase tracking-[0.18em] text-zinc-400">
            © 2025 NULLXES AIRLANE · UNIVERSE
          </span>
          <span className="text-[0.65rem]">
            Created by MagistrTheOne · Location: Universe · Status: Always in
            flight.
          </span>
        </div>
        <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.18em]">
          <span className="text-zinc-500">Terms</span>
          <span className="text-zinc-500">Privacy</span>
          <span className="text-zinc-500">Universe Policy</span>
        </div>
      </div>
    </footer>
  );
}


