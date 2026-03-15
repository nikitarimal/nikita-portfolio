"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Truenary Solutions",
    location: "Kathmandu",
    period: "2025",
    desc: "Design modern interfaces for web and mobile applications. Create wireframes, high-fidelity UI designs, and prototypes in Figma. Collaborative product design workflows."
  },
  {
    role: "UI/UX & Graphic Designer",
    company: "Baliyo Ventures",
    location: "Lalitpur",
    period: "2024",
    desc: "Designed the company website and digital interfaces. Created brand visuals and marketing creatives. Improved website usability and aesthetic appeal."
  },
  {
    role: "UI/UX Designer",
    company: "Yuwasoft Technologies",
    location: "Hetauda",
    period: "2024",
    desc: "Designed responsive UI layouts and user flows. Developed prototypes and design mockups. Participated in usability improvements."
  },
  {
    role: "Graphic Designer",
    company: "Menzz & Mangobyte",
    location: "Hetauda",
    period: "2022",
    desc: "Designed social media graphics and marketing materials. Assisted UI projects with visual design assets. Brand identity development."
  }
];

function ExperienceItem({ exp, index }: { exp: typeof experiences[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const xOffset = useSpring(isHovered ? 20 : 0, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col md:flex-row gap-12 md:gap-32 py-12 md:py-24 items-start transition-colors duration-700 hover:bg-white/[0.01] overflow-visible"
    >
      {/* Background Floating Element - Numbering */}
      <motion.div 
        style={{ y }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.015] pointer-events-none select-none z-0 tracking-tighter"
      >
        0{index + 1}
      </motion.div>

      {/* Date Lane */}
      <div className="md:w-1/5 flex flex-col gap-6 relative z-10 shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-accent font-mono text-[9px] tracking-[0.6em] uppercase">Timeline</span>
          <div className="h-[1px] flex-grow bg-white/10 group-hover:bg-accent/40 transition-colors duration-500" />
        </div>
        <div className="flex flex-col gap-1">
            <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                {exp.period}
            </span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest">Active Period</span>
        </div>
      </div>

      {/* Primary Content Lane */}
      <div className="md:w-4/5 flex flex-col gap-12 relative z-10">
        <motion.div style={{ x: xOffset }} className="flex flex-col gap-6">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none transition-colors duration-500 group-hover:text-accent">
             {exp.role}
          </h3>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xl md:text-3xl font-bold text-white/40 uppercase tracking-tighter group-hover:text-white transition-colors duration-500">
              {exp.company}
            </span>
            <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(229,255,0,0.5)]" />
            <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-mono">
              {exp.location}
            </span>
          </div>
        </motion.div>
        
        <p className="max-w-2xl text-base md:text-lg text-white/30 leading-relaxed font-light uppercase tracking-tight group-hover:text-white/60 transition-all duration-700 italic border-l border-white/5 pl-8 group-hover:border-accent">
          {exp.desc}
        </p>
      </div>

      {/* Radial Hover Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-64 pb-48 md:pb-[30vh] w-full !px-[7vw] bg-black overflow-hidden relative selection:bg-accent selection:text-black snap-start">
      {/* Decorative Background Text */}
      <div className="absolute left-10 top-20 text-[20vw] font-black text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none z-0">
        Background
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-48 md:mb-[40vh] gap-16 relative z-10">
        <div className="flex flex-col">
          <span className="text-accent text-[11px] font-bold tracking-[0.8em] uppercase mb-10 block py-2 px-6 border-l-2 border-accent w-fit">
            Professional Experience
          </span>
          <div className="relative py-4">
            <motion.h2 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-[clamp(4rem,7.5vw,10vw)] font-black uppercase leading-none tracking-tighter"
            >
              EXPER<span className="text-accent italic">IENCE</span>
            </motion.h2>
          </div>
        </div>
        
        <div className="max-w-md md:pb-6">
          <p className="text-[10px] text-white/40 uppercase tracking-[0.6em] leading-loose font-mono border-r border-white/5 pr-12 text-right md:text-left">
           // [ A systematic timeline of professional growth and digital product contributions ]
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-32 md:gap-48 relative z-10">
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
}
