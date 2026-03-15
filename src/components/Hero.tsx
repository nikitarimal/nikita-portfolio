"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Marquee from "./Marquee";
import { useRef } from "react";
import Particles from "./Particles";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black select-none">
      <Particles />

      <motion.div 
        style={{ scale, opacity, y: textY }}
        className="relative z-10 w-full px-12 md:px-[10vw] pt-24 md:pt-32 flex flex-col items-center text-center"
      >
        <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
           className="flex flex-col items-center gap-12"
        >
          {/* Top Metadata */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-accent border border-accent/20 px-4 py-1.5 rounded-full">
              Available for Projects
            </span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(229,255,0,0.5)]" />
            <span className="text-[10px] font-black tracking-[0.6em] uppercase text-white/30 truncate">
                Based in Nepal
            </span>
          </motion.div>

          {/* Main Massive Title */}
          <div className="relative">
            <h1 className="text-[14vw] md:text-[16vw] font-black uppercase leading-[0.7] tracking-tighter flex flex-col items-center">
              <motion.span 
                variants={itemVariants} 
                className="relative inline-block hover:scale-[1.02] transition-transform duration-700"
              >
                Nikita
              </motion.span>
              <motion.span 
                variants={itemVariants} 
                className="text-accent italic translate-y-[-2vw] hover:scale-[1.02] transition-transform duration-700"
              >
                Rimal
              </motion.span>
            </h1>
          </div>

          {/* Subtitle / Focus */}
          <motion.div variants={itemVariants} className="max-w-xl flex flex-col gap-8">
            <p className="text-xl md:text-3xl text-white font-medium uppercase tracking-[0.1em] leading-none">
              Product & Interface Designer
            </p>
            <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.4em] leading-loose max-w-sm mx-auto">
              [ Specializing in high-impact digital products, scalable design systems, and user-centric architecture ]
            </p>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* Bottom Corner Info */}
      <div className="absolute bottom-10 left-10 md:left-20 hidden md:flex flex-col gap-1">
          <span className="text-[8px] text-white/20 uppercase tracking-[0.5em] font-bold">Focus Area</span>
          <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">Marketplaces & Booking Systems</span>
      </div>

      <div className="absolute bottom-10 right-10 md:right-20 hidden md:flex flex-col gap-1 items-end">
          <span className="text-[8px] text-white/20 uppercase tracking-[0.5em] font-bold">Current Era</span>
          <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-black">'25 Portfolio v.02</span>
      </div>
    </section>
  );
}
