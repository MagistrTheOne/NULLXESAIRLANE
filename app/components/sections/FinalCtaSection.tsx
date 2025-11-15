"use client";

import { PrimaryCta } from "../PrimaryCta";

export function FinalCtaSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-dark px-4 pb-16 pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4),#020617_80%)]" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] text-zinc-500">
          FINAL CALL - NULLXES AIRLANE 2026
        </p>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Ready to board the future of air? NULLXES AIRLANE - WE FLIGHT
          EVERYONE. Including you, especially you.
        </h2>
        <p className="max-w-xl text-sm text-zinc-300">
          We fly everywhere, even in the parts of the Universe that still do
          not exist on regular maps. You choose the destination, we build the
          route.
        </p>
        <PrimaryCta label="BOOKiNG - CALL THE UNIVERSE" />
      </div>
    </section>
  );
}


