"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Marquee from "./Marquee";

const skills = [
  {
    category: "Design Architecture",
    items: [
      "User Experience Design",
      "User Interface Design",
      "Wireframing & Journeys",
      "Rapid Prototyping",
      "Interaction Patterns",
      "Design Systems",
      "Responsive Architecture"
    ],
    color: "text-white"
  },
  {
    category: "Technical Stack",
    items: [
      "Figma",
      "FigJam",
      "Adobe Suite",
      "Prototyping Tools",
      "Design-to-Code",
      "Animation Principles"
    ],
    color: "text-accent"
  },
  {
    category: "Visual Logic",
    items: [
      "Graphic Systems",
      "Digital Branding",
      "Typographic Design",
      "Visual Strategy",
      "Color Theory",
      "Spatial Layouts"
    ],
    color: "text-white/40"
  }
];

export default function ExpertiseSection() {
  return (
    <section 
      id="expertise"
      className="relative min-h-screen w-full !px-[7vw] bg-[#050505] overflow-hidden flex flex-col justify-start pb-32 gap-32 snap-start"
    >
      <div className="h-[10vh] w-full shrink-0" />
      <div className="noise-bg opacity-30" />
      
      {/* Background Section Title - Locked to center */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.01] uppercase tracking-tighter select-none pointer-events-none z-0">
        Expertise
      </h2>

      {/* Header Area */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="text-9xl md:text-[clamp(3.5rem, 7vw, 9.5vw)] font-black uppercase leading-[0.8] tracking-tighter">
            Core <br />
            <span className="text-accent italic">Expertise</span>
          </h2>
        </div>
        
        <div className="max-w-[200px] md:pb-2">
          <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] leading-relaxed font-mono border-l border-white/10 pl-4">
            // Fusing intuition with technical precision.
          </p>
        </div>
      </div>

      {/* Skills Grid - Forced to fit */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 w-full flex-grow content-center">
        {skills.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-accent font-mono text-[9px] font-bold tracking-[0.3em]">0{idx + 1}</span>
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white/20">
                {group.category}
              </h3>
            </div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              {group.items.map((skill, sIdx) => (
                <div key={sIdx} className="group overflow-hidden">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className={`text-xl md:text-3xl lg:text-[2.2vw] font-black uppercase tracking-tighter leading-none cursor-default ${group.color} group-hover:text-accent transition-colors duration-500 flex items-center gap-2`}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-accent text-sm">→</span>
                    {skill}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
