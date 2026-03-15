"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue
} from "framer-motion";

interface MarqueeProps {
  text: string;
  baseVelocity?: number;
  reverse?: boolean;
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function Marquee({ text, baseVelocity = 2, reverse = false }: MarqueeProps) {
  const effectiveVelocity = reverse ? -baseVelocity : baseVelocity;
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * We need enough items to fill the screen twice.
   * Wrapping logic works best if we wrap at exactly the width of the repeating unit.
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * effectiveVelocity * (delta / 1000);

    /**
     * Change direction based on scroll velocity
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-2 md:py-4 select-none">
      <motion.div className="flex whitespace-nowrap flex-nowrap transition-transform duration-0" style={{ x }}>
        {[...Array(15)].map((_, i) => (
          <span key={i} className="flex items-center px-4 font-black uppercase text-inherit">
            {text}
            <span className="mx-6 md:mx-10 inline-block w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
