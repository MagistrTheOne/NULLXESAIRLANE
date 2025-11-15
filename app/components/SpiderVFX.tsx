"use client";

import { useEffect, useState } from "react";

export function SpiderVFX() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showDuration = 22000;
    const interval = 4 * 60 * 1000;

    const schedule = () => {
      setVisible(true);
      const hideTimeout = setTimeout(() => {
        setVisible(false);
      }, showDuration);
      return hideTimeout;
    };

    let hideHandle: NodeJS.Timeout | null = null;
    const intervalHandle = setInterval(() => {
      hideHandle = schedule();
    }, interval);

    hideHandle = schedule();

    return () => {
      clearInterval(intervalHandle);
      if (hideHandle) {
        clearTimeout(hideHandle);
      }
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center">
      <div className="relative h-72 w-px bg-linear-to-b from-zinc-200/70 via-zinc-500/40 to-transparent">
        <div className="spider-swing absolute top-0 left-1/2 mt-6 -translate-x-1/2">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 shadow-[0_0_40px_rgba(0,0,0,0.9)] ring-1 ring-zinc-500/60">
            <div className="relative h-8 w-8 rounded-full bg-linear-to-b from-zinc-200 to-zinc-500/80">
              <div className="absolute inset-x-2 top-2 flex justify-between">
                <span className="spider-eyes h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                <span className="spider-eyes h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
              </div>
              <div className="absolute inset-x-1 bottom-1 flex justify-between text-[6px] text-zinc-900/80">
                <span>/N</span>
                <span>XS/</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


