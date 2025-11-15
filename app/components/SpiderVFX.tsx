"use client";

import { useEffect, useState } from "react";

export function SpiderVFX() {
  const [visible, setVisible] = useState(false);
  const [spiderPosition, setSpiderPosition] = useState(0);

  useEffect(() => {
    const showDuration = 22000; // 22 sec visible
    const interval = 4 * 60 * 1000; // every 4 min

    const activate = () => {
      setVisible(true);
      setSpiderPosition(0); // Reset spider position

      // Spider descent animation
      const descentDuration = 8000; // 8 seconds to descend
      const startTime = Date.now();

      const animateSpider = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / descentDuration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease-out cubic
        setSpiderPosition(easeProgress);

        if (progress < 1) {
          requestAnimationFrame(animateSpider);
        }
      };

      requestAnimationFrame(animateSpider);

      const timeout = setTimeout(() => setVisible(false), showDuration);
      return timeout;
    };

    let timeoutId = activate();

    const intervalId = setInterval(() => {
      timeoutId = activate();
    }, interval);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center">
      {/* WEB THREAD */}
      <div className="relative h-screen w-px">
        {/* Thread line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/30 to-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

        {/* Spider on thread */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(-50%) translateY(${spiderPosition * 80}vh)`,
          }}
        >
          {/* SPIDER MODEL */}
          <div className="relative">
            {/* Spider body */}
            <div className="relative flex items-center justify-center">
              {/* Main body */}
              <div className="relative h-12 w-8 rounded-full bg-black/80 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                {/* Abdomen */}
                <div className="absolute -bottom-2 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-black/60 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.6)]" />

                {/* Eyes */}
                <div className="absolute -top-1 left-1/2 flex -translate-x-1/2 gap-1">
                  <div className="h-1 w-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] animate-[spider-blink_3s_ease-in-out_infinite]" />
                  <div className="h-1 w-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] animate-[spider-blink_3s_ease-in-out_infinite_0.5s]" />
                </div>

                {/* Legs - left side */}
                <div className="absolute -left-3 top-1 flex flex-col gap-0.5">
                  <div className="h-3 w-0.5 origin-bottom rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite]" />
                  <div className="h-2 w-0.5 origin-bottom -rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.3s]" />
                  <div className="h-3 w-0.5 origin-bottom rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.6s]" />
                  <div className="h-2 w-0.5 origin-bottom -rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.9s]" />
                </div>

                {/* Legs - right side */}
                <div className="absolute -right-3 top-1 flex flex-col gap-0.5">
                  <div className="h-3 w-0.5 origin-bottom -rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.2s]" />
                  <div className="h-2 w-0.5 origin-bottom rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.5s]" />
                  <div className="h-3 w-0.5 origin-bottom -rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.8s]" />
                  <div className="h-2 w-0.5 origin-bottom rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_1.1s]" />
                </div>

                {/* NXS Marking */}
                <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5">
                  <span className="text-[4px] text-white/60 font-bold">N</span>
                  <span className="text-[4px] text-white/60 font-bold">X</span>
                  <span className="text-[4px] text-white/60 font-bold">S</span>
                </div>
              </div>

              {/* Web silk attachment point */}
              <div className="absolute -top-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-pulse" />
            </div>
          </div>
        </div>

        {/* Web anchor point at top */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-2 w-2 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-pulse" />
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes spider-blink {
          0%, 90%, 100% {
            transform: scaleY(1);
          }
          92%, 98% {
            transform: scaleY(0.2);
          }
        }

        @keyframes leg-wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          50% {
            transform: rotate(-3deg);
          }
          75% {
            transform: rotate(2deg);
          }
        }

        @keyframes web-shimmer {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

