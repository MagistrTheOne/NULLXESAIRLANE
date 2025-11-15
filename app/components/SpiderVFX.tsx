"use client";

import { useEffect, useState } from "react";

export function SpiderVFX() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showDuration = 22000; // 22 sec visible
    const interval = 4 * 60 * 1000; // every 4 min

    const activate = () => {
      setVisible(true);
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
      {/* LASER BEAM */}
      <div className="relative h-72 w-px bg-linear-to-b from-white/60 via-white/20 to-transparent animate-[pulse_4s_ease-in-out_infinite]">
        {/* SPIDER MARKER */}
        <div className="signal-spider absolute top-0 left-1/2 mt-8 -translate-x-1/2">
          <div
            className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.12)] animate-[glitch-in_0.6s_ease-out]"
          >
            {/* INNER CORE */}
            <div
              className="relative h-8 w-8 rounded-full bg-linear-to-b from-white/70 to-white/20 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
            >
              {/* EYES */}
              <div className="absolute inset-x-2 top-2 flex justify-between">
                <span className="spider-eyes h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                <span className="spider-eyes h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              </div>

              {/* MARKING */}
              <div
                className="absolute inset-x-1 bottom-1 flex justify-between text-[6px] text-white/40 font-semibold tracking-widest"
              >
                <span>/N</span>
                <span>XS/</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes glitch-in {
          0% {
            opacity: 0;
            transform: translate(-50%, -20%) scale(0.8);
            filter: blur(4px);
          }
          40% {
            opacity: 1;
            transform: translate(-50%, 0%) scale(1);
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.65;
          }
        }

        @keyframes spider-blink {
          0%,
          90%,
          100% {
            transform: scaleY(1);
          }
          92%,
          98% {
            transform: scaleY(0.2);
          }
        }

        .spider-eyes {
          animation: spider-blink 4.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

