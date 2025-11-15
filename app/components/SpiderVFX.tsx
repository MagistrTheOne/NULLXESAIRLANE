"use client";

import { useEffect, useState } from "react";

// Spider Cursor Component
function SpiderCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only show cursor on desktop (hide on mobile)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed pointer-events-none z-9999 transition-all duration-150 ease-out ${
        isClicking ? 'scale-125' : 'scale-100'
      }`}
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Spider Cursor with web trail */}
      <div className="relative">
        {/* Web trail effect */}
        <div className="absolute inset-0 -m-8">
          <div className="absolute top-1/2 left-1/2 w-16 h-px bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse" />
          <div className="absolute top-1/2 right-1/2 w-16 h-px bg-linear-to-l from-transparent via-white/10 to-transparent animate-pulse" />
        </div>

        {/* Main spider body */}
        <div className="relative h-7 w-5 rounded-full bg-black/95 border border-white/40 shadow-[0_0_12px_rgba(0,0,0,0.9),0_0_25px_rgba(255,255,255,0.1)] backdrop-blur-sm animate-[cursor-follow_2s_ease-in-out_infinite]">
          {/* Abdomen */}
          <div className="absolute -bottom-1 left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-black/80 border border-white/30 shadow-[0_0_8px_rgba(0,0,0,0.7)]" />

          {/* Glowing red eyes */}
          <div className="absolute -top-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
            <div className="h-0.5 w-0.5 rounded-full bg-red-500 shadow-[0_0_3px_rgba(239,68,68,0.9),0_0_8px_rgba(239,68,68,0.5)] animate-[spider-blink_1.2s_ease-in-out_infinite]" />
            <div className="h-0.5 w-0.5 rounded-full bg-red-500 shadow-[0_0_3px_rgba(239,68,68,0.9),0_0_8px_rgba(239,68,68,0.5)] animate-[spider-blink_1.2s_ease-in-out_infinite_0.6s]" />
          </div>

          {/* Legs with enhanced shadow */}
          <div className="absolute -left-2 top-0.5 flex flex-col gap-0.5">
            <div className="h-2 w-0.5 origin-bottom rotate-15 bg-black/90 shadow-[0_0_3px_rgba(255,255,255,0.2)] animate-[leg-wiggle_1s_ease-in-out_infinite]" />
            <div className="h-1.5 w-0.5 origin-bottom -rotate-10 bg-black/90 shadow-[0_0_3px_rgba(255,255,255,0.2)] animate-[leg-wiggle_1s_ease-in-out_infinite_0.3s]" />
          </div>
          <div className="absolute -right-2 top-0.5 flex flex-col gap-0.5">
            <div className="h-2 w-0.5 origin-bottom -rotate-15 bg-black/90 shadow-[0_0_3px_rgba(255,255,255,0.2)] animate-[leg-wiggle_1s_ease-in-out_infinite_0.2s]" />
            <div className="h-1.5 w-0.5 origin-bottom rotate-10 bg-black/90 shadow-[0_0_3px_rgba(255,255,255,0.2)] animate-[leg-wiggle_1s_ease-in-out_infinite_0.5s]" />
          </div>

          {/* Tiny NXS marking */}
          <div className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
            <span className="text-[2px] text-white/80 font-bold">N</span>
            <span className="text-[2px] text-white/80 font-bold">X</span>
            <span className="text-[2px] text-white/80 font-bold">S</span>
          </div>
        </div>

        {/* Cursor point indicator */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white/60 rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)] animate-pulse" />
      </div>
    </div>
  );
}

// Web Pattern Background
function WebPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]">
      <svg width="100%" height="100%" className="absolute inset-0">
        <defs>
          <pattern id="web-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Main web structure */}
            <path d="M0,60 Q30,30 60,60 T120,60 M60,0 Q90,30 60,60 T60,120 M0,0 L120,120 M120,0 L0,120"
                  stroke="white" strokeWidth="0.3" fill="none" opacity="0.4"/>
            {/* Spider web details */}
            <circle cx="60" cy="60" r="1.5" fill="white" opacity="0.3"/>
            <circle cx="30" cy="30" r="1" fill="white" opacity="0.2"/>
            <circle cx="90" cy="90" r="1" fill="white" opacity="0.2"/>
            <circle cx="30" cy="90" r="1" fill="white" opacity="0.2"/>
            <circle cx="90" cy="30" r="1" fill="white" opacity="0.2"/>
            {/* Connecting threads */}
            <path d="M30,30 L60,60 L90,90" stroke="white" strokeWidth="0.2" fill="none" opacity="0.2"/>
            <path d="M90,30 L60,60 L30,90" stroke="white" strokeWidth="0.2" fill="none" opacity="0.2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#web-pattern)" />
      </svg>
    </div>
  );
}

// Spider Easter Egg Component
function SpiderEasterEgg() {
  const [spiders, setSpiders] = useState<Array<{id: number, x: number, y: number, delay: number}>>([]);

  const spawnSpider = (x: number, y: number) => {
    const newSpider = {
      id: Date.now(),
      x,
      y,
      delay: Math.random() * 2,
    };
    setSpiders(prev => [...prev, newSpider]);

    // Remove spider after animation
    setTimeout(() => {
      setSpiders(prev => prev.filter(spider => spider.id !== newSpider.id));
    }, 3000);
  };

  useEffect(() => {
    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-logo]')) {
        spawnSpider(e.clientX, e.clientY);
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => document.removeEventListener('click', handleLogoClick);
  }, []);

  return (
    <>
      {spiders.map(spider => (
        <div
          key={spider.id}
          className="fixed pointer-events-none z-50 animate-[spider-explode_3s_ease-out_forwards]"
          style={{
            left: spider.x - 20,
            top: spider.y - 20,
            animationDelay: `${spider.delay}s`,
          }}
        >
          {/* Exploding spider */}
          <div className="relative">
            <div className="h-10 w-7 rounded-full bg-red-500/80 border border-red-400 shadow-[0_0_20px_rgba(239,68,68,0.8)] animate-pulse">
              <div className="absolute -bottom-1.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-red-600/60 border border-red-500" />
              <div className="absolute -top-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
                <div className="h-0.5 w-0.5 rounded-full bg-yellow-300 shadow-[0_0_3px_rgba(253,224,71,0.9)]" />
                <div className="h-0.5 w-0.5 rounded-full bg-yellow-300 shadow-[0_0_3px_rgba(253,224,71,0.9)]" />
              </div>
              <div className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
                <span className="text-[3px] text-yellow-200 font-bold">N</span>
                <span className="text-[3px] text-yellow-200 font-bold">X</span>
                <span className="text-[3px] text-yellow-200 font-bold">S</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// Loading Spider Animation
function LoadingSpider({ isLoading }: { isLoading: boolean }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-9998 flex items-center justify-center bg-black/90 backdrop-blur-md">
      <div className="relative">
        {/* Central web with spider */}
        <div className="relative h-40 w-40">
          {/* Outer web rings */}
          <div className="absolute inset-0 rounded-full border-2 border-white/10 animate-[spin_4s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-white/5 animate-[spin_3s_linear_infinite_reverse]" />
          <div className="absolute inset-4 rounded-full border border-white/3 animate-[spin_2s_linear_infinite]" />

          {/* Web threads */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 left-1/2 w-px h-20 bg-white/5 origin-bottom animate-pulse"
                style={{
                  transform: `translateX(-50%) rotate(${i * 45}deg)`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>

          {/* Central spider */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              {/* Spider body with glow */}
              <div className="relative h-10 w-7 rounded-full bg-black/95 border border-white/40 shadow-[0_0_20px_rgba(0,0,0,0.9),0_0_40px_rgba(255,255,255,0.1)]">
                {/* Abdomen */}
                <div className="absolute -bottom-1.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-black/80 border border-white/30 shadow-[0_0_10px_rgba(0,0,0,0.7)]" />

                {/* Glowing eyes */}
                <div className="absolute -top-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
                  <div className="h-0.5 w-0.5 rounded-full bg-red-500 shadow-[0_0_3px_rgba(239,68,68,0.9),0_0_6px_rgba(239,68,68,0.6)] animate-[spider-blink_0.8s_ease-in-out_infinite]" />
                  <div className="h-0.5 w-0.5 rounded-full bg-red-500 shadow-[0_0_3px_rgba(239,68,68,0.9),0_0_6px_rgba(239,68,68,0.6)] animate-[spider-blink_0.8s_ease-in-out_infinite_0.4s]" />
                </div>

                {/* Legs with glow */}
                <div className="absolute -left-2 top-1 flex flex-col gap-0.5">
                  <div className="h-2 w-0.5 origin-bottom rotate-15 bg-black/90 shadow-[0_0_2px_rgba(255,255,255,0.3)] animate-[leg-wiggle_1.5s_ease-in-out_infinite]" />
                  <div className="h-1.5 w-0.5 origin-bottom -rotate-10 bg-black/90 shadow-[0_0_2px_rgba(255,255,255,0.3)] animate-[leg-wiggle_1.5s_ease-in-out_infinite_0.2s]" />
                </div>
                <div className="absolute -right-2 top-1 flex flex-col gap-0.5">
                  <div className="h-2 w-0.5 origin-bottom -rotate-15 bg-black/90 shadow-[0_0_2px_rgba(255,255,255,0.3)] animate-[leg-wiggle_1.5s_ease-in-out_infinite_0.1s]" />
                  <div className="h-1.5 w-0.5 origin-bottom rotate-10 bg-black/90 shadow-[0_0_2px_rgba(255,255,255,0.3)] animate-[leg-wiggle_1.5s_ease-in-out_infinite_0.3s]" />
                </div>

                {/* Glowing NXS marking */}
                <div className="absolute bottom-0.5 left-1/2 flex -translate-x-1/2 gap-0.5">
                  <span className="text-[3px] text-white font-bold animate-pulse drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">N</span>
                  <span className="text-[3px] text-white font-bold animate-pulse drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">X</span>
                  <span className="text-[3px] text-white font-bold animate-pulse drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]">S</span>
                </div>
              </div>

              {/* Energy rings around spider */}
              <div className="absolute inset-0 -m-2 rounded-full border border-white/5 animate-[spin_6s_linear_infinite]" />
              <div className="absolute inset-0 -m-4 rounded-full border border-white/3 animate-[spin_8s_linear_infinite_reverse]" />
            </div>
          </div>
        </div>

        {/* Loading text with spider theme */}
        <div className="mt-10 text-center">
          <p className="text-base text-white/80 uppercase tracking-[0.25em] animate-pulse font-semibold">
            Weaving NULLXES Reality
          </p>
          <p className="text-sm text-white/50 mt-2 tracking-[0.15em]">
            Spider protocols initializing...
          </p>
          <div className="mt-4 flex justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse shadow-[0_0_4px_rgba(255,255,255,0.5)]"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpiderVFX() {
  const [visible, setVisible] = useState(false);
  const [spiderPosition, setSpiderPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading screen
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Check if mobile device
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    const showDuration = 22000; // 22 sec visible
    const interval = isMobile ? 5 * 60 * 1000 : 4 * 60 * 1000; // every 5 min on mobile, 4 min on desktop

    const activate = () => {
      setVisible(true);
      setSpiderPosition(0); // Reset spider position

      // Spider descent animation (down and up on mobile)
      const descentDuration = isMobile ? 12000 : 8000; // 12 seconds on mobile (down and up), 8 on desktop
      const startTime = Date.now();

      const animateSpider = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / descentDuration, 1);

        let position;
        if (isMobile) {
          // Mobile: go down then up (sine wave)
          const normalizedProgress = progress * Math.PI; // 0 to π
          position = Math.sin(normalizedProgress) * 0.8; // -0.8 to 0.8, but we want 0 to 0.8 to 0
          position = Math.abs(position); // 0 to 0.8
        } else {
          // Desktop: just down with ease-out
          position = 1 - Math.pow(1 - progress, 3);
        }

        setSpiderPosition(position);

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
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <LoadingSpider isLoading={isLoading} />

      {/* Web Pattern Background - only on desktop */}
      {typeof window !== 'undefined' && window.innerWidth >= 768 && <WebPattern />}

      {/* Spider Cursor */}
      <SpiderCursor />

      {/* Spider Easter Egg */}
      <SpiderEasterEgg />

      {/* Main Spider VFX */}
      {visible && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-center">
          {/* WEB THREAD */}
          <div className="relative h-screen w-px">
            {/* Thread line */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/30 to-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]" />

            {/* Spider on thread */}
            <div
              className="absolute left-1/2 top-0 -translate-x-1/2 transition-transform duration-75 ease-out"
              style={{
                transform: `translateX(-50%) translateY(${spiderPosition * (typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 80)}vh)`,
              }}
            >
              {/* SPIDER MODEL */}
              <div className="relative">
                {/* Spider body */}
                <div className="relative flex items-center justify-center">
                  {/* Main body */}
                  <div className="relative h-10 w-7 xs:h-12 xs:w-8 rounded-full bg-black/80 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-sm">
                    {/* Abdomen */}
                    <div className="absolute -bottom-1.5 xs:-bottom-2 left-1/2 h-5 w-5 xs:h-6 xs:w-6 -translate-x-1/2 rounded-full bg-black/60 border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.6)]" />

                    {/* Eyes */}
                    <div className="absolute -top-0.5 xs:-top-1 left-1/2 flex -translate-x-1/2 gap-0.5 xs:gap-1">
                      <div className="h-0.5 w-0.5 xs:h-1 xs:w-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] animate-[spider-blink_3s_ease-in-out_infinite]" />
                      <div className="h-0.5 w-0.5 xs:h-1 xs:w-1 rounded-full bg-red-500 shadow-[0_0_4px_rgba(239,68,68,0.8)] animate-[spider-blink_3s_ease-in-out_infinite_0.5s]" />
                    </div>

                    {/* Legs - left side */}
                    <div className="absolute -left-2 xs:-left-3 top-1 flex flex-col gap-0.5">
                      <div className="h-2 w-0.5 xs:h-3 origin-bottom rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite]" />
                      <div className="h-1.5 w-0.5 xs:h-2 origin-bottom -rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.3s]" />
                      <div className="h-2 w-0.5 xs:h-3 origin-bottom rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.6s]" />
                      <div className="h-1.5 w-0.5 xs:h-2 origin-bottom -rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.9s]" />
                    </div>

                    {/* Legs - right side */}
                    <div className="absolute -right-2 xs:-right-3 top-1 flex flex-col gap-0.5">
                      <div className="h-2 w-0.5 xs:h-3 origin-bottom -rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.2s]" />
                      <div className="h-1.5 w-0.5 xs:h-2 origin-bottom rotate-12 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.5s]" />
                      <div className="h-2 w-0.5 xs:h-3 origin-bottom -rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_0.8s]" />
                      <div className="h-1.5 w-0.5 xs:h-2 origin-bottom rotate-6 bg-black/70 shadow-[0_0_3px_rgba(0,0,0,0.5)] animate-[leg-wiggle_2s_ease-in-out_infinite_1.1s]" />
                    </div>

                    {/* NXS Marking */}
                    <div className="absolute bottom-0.5 xs:bottom-1 left-1/2 flex -translate-x-1/2 gap-0.5">
                      <span className="text-[3px] xs:text-[4px] text-white/60 font-bold">N</span>
                      <span className="text-[3px] xs:text-[4px] text-white/60 font-bold">X</span>
                      <span className="text-[3px] xs:text-[4px] text-white/60 font-bold">S</span>
                    </div>
                  </div>

                  {/* Web silk attachment point */}
                  <div className="absolute -top-0.5 xs:-top-1 left-1/2 h-0.5 w-0.5 xs:h-1 xs:w-1 -translate-x-1/2 rounded-full bg-white/40 shadow-[0_0_6px_rgba(255,255,255,0.6)] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Web anchor point at top */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <div className="h-1 w-1 xs:h-2 xs:w-2 rounded-full bg-white/20 shadow-[0_0_8px_rgba(255,255,255,0.4)] animate-pulse" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
