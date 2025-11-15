"use client";

import type React from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useHeroParallax() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 60, damping: 16, mass: 0.6 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 16, mass: 0.6 });

  const rotateY = useTransform(smoothX, [-40, 40], [10, -10]);
  const rotateX = useTransform(smoothY, [-40, 40], [-8, 8]);
  const translateX = useTransform(smoothX, [-40, 40], [-16, 16]);
  const translateY = useTransform(smoothY, [-40, 40], [10, -10]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left - bounds.width / 2;
    const relativeY = event.clientY - bounds.top - bounds.height / 2;
    x.set(Math.max(-40, Math.min(40, relativeX / 8)));
    y.set(Math.max(-40, Math.min(40, relativeY / 8)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return {
    rotateX,
    rotateY,
    translateX,
    translateY,
    handlePointerMove,
    reset,
  };
}


