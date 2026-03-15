"use client";

import Marquee from "./Marquee";

export default function StripeMarquee() {
  const words = [
    "Problem Solver",
    "Creative Thinker",
    "Collaborative",
    "Detail-Oriented",
    "User-Centered",
    "Iterative",
    "Research-Driven",
    "Curious",
    "Strategic",
    "Adaptable",
    "System Thinker"
  ].join(" • ");

  return (
    <div className="relative w-full py-10 md:py-20 bg-accent flex flex-col justify-center items-center shadow-[0_0_80px_rgba(229,255,0,0.1)] border-y border-black/5">
      {/* Background Noise Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />
      
      <div className="w-full text-black">
        <Marquee text={words} baseVelocity={0.8} />
      </div>
      
      {/* Subtle Bottom Accent Line */}
      <div className="absolute bottom-4 left-0 w-full h-px bg-black/10 md:bottom-8" />
      <div className="absolute top-4 left-0 w-full h-px bg-black/10 md:top-8" />
    </div>
  );
}
