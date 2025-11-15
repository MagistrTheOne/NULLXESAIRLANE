"use client";

import { TELEGRAM_URL } from "./config";

type PrimaryCtaProps = {
  label: string;
};

export function PrimaryCta({ label }: PrimaryCtaProps) {
  return (
    <button
      type="button"
      onClick={() => {
        window.open(TELEGRAM_URL, "_blank", "noopener,noreferrer");
      }}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-800/50 bg-black/80 px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-100 shadow-[0_0_60px_rgba(0,0,0,1)] transition-all hover:border-zinc-600/70 hover:bg-zinc-900 hover:shadow-[0_0_90px_rgba(255,255,255,0.2)]"
    >
      <span className="absolute inset-0 bg-linear-to-r from-zinc-900/20 via-zinc-800/30 to-zinc-700/20 opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="relative flex items-center gap-3">
        <span>{label}</span>
        <span className="h-px w-8 bg-linear-to-r from-zinc-200/40 via-zinc-50 to-transparent" />
        <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-zinc-50/70 text-[0.55rem]">
          NXS
        </span>
      </span>
    </button>
  );
}


