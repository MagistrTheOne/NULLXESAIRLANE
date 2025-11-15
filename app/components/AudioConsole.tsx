"use client";

import { useEffect, useMemo, useState } from "react";

export function AudioConsole() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const id = useMemo(() => "nullxes-audio", []);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    const audioElement = document.getElementById(id) as HTMLAudioElement | null;
    if (!audioElement) {
      return;
    }

    const refreshIntervalMs = 3 * 60 * 1000 + 15000;

    const handler = () => {
      audioElement.currentTime = 0;
      void audioElement.play();
    };

    const interval = setInterval(handler, refreshIntervalMs);

    return () => {
      clearInterval(interval);
    };
  }, [id, isPlaying]);

  const togglePlayback = () => {
    const audioElement = document.getElementById(id) as HTMLAudioElement | null;
    if (!audioElement) return;

    if (audioElement.paused) {
      audioElement
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      audioElement.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="pointer-events-auto">
      <audio id={id} src="/nullxsingle.mp3" loop className="hidden" />
      <button
        type="button"
        onClick={togglePlayback}
        disabled={!isReady}
        className="glass-chip group flex items-center gap-3 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-zinc-200 transition hover:text-white"
      >
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950/60 ring-1 ring-zinc-500/60">
          <span className="absolute inset-1 rounded-full bg-linear-to-br from-zinc-600/70 to-zinc-500/40 opacity-80" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-zinc-400 shadow-[0_0_14px_rgba(255,255,255,0.5)]" />
        </span>
        <span className="flex flex-col text-left">
          <span className="text-[0.6rem] text-zinc-400">
            NULLXES AIRLANE AUDIO
          </span>
          <span className="text-[0.7rem] text-zinc-50">
            {isPlaying ? "NOW PLAYING - nullxsingle.mp3" : "PLAY EXPERIENCE"}
          </span>
        </span>
      </button>
    </div>
  );
}


