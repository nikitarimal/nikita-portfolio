"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import Marquee from "./Marquee";
import Image from "next/image";

const projects = [
  {
    title: "Freelance Travel",
    category: "Travel Booking Platform",
    year: "2024",
    link: "https://freelancetravel.com/",
    description: "Designed a travel booking website that allows users to easily search and book travel packages through a simple and user-friendly interface.",
    image: "/projects/freelance-landing.png",
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Reffero",
    category: "Influencer Marketplace",
    year: "2024",
    link: "#",
    description: "A platform connecting brands with influencers for collaboration and hiring. Creator dashboard and hiring workflow design.",
    image: "/projects/reffero.png",
    color: "bg-[#0f0f0f]",
  },
  {
    title: "Baliyo Ventures",
    category: "Official Company Website",
    year: "2025",
    link: "https://www.baliyoventures.com/",
    description: "Designed the official company website focusing on modern design, usability, and clear content structure.",
    image: "/projects/baliyo-landing.png",
    color: "bg-[#0a0a0a]",
  },
  {
    title: "Trek Booking",
    category: "Adventure Platform",
    year: "2024",
    link: "#",
    description: "Designed a comprehensive trekking and adventure booking platform for the Himalayan region.",
    image: "/projects/trek-booking.png",
    color: "bg-[#0f0f0f]",
  }
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={ref} 
      className="h-screen w-full flex items-center justify-center snap-start snap-always relative overflow-hidden"
    >
      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-12 md:px-[15vw] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center h-full"
      >
        {/* Left Side: Project Image */}
        <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] w-full perspective-2000">
          <motion.div 
            whileHover={{ rotateY: 3, rotateX: -3, scale: 1.02 }}
            className={`relative w-full h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 ${project.color} group shadow-2xl transition-all duration-700`}
          >
            <motion.div style={{ scale: imgScale }} className="absolute inset-0 w-full h-full">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-all duration-1000"
              />
            </motion.div>

            {/* Link overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-20">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-24 h-24 bg-accent rounded-full flex items-center justify-center scale-0 hover:scale-100 transition-transform duration-500 hover:rotate-12"
              >
                <ExternalLink className="text-black w-8 h-8" />
              </a>
            </div>

            {/* Background Title Marquee (Subtle) */}
            <div className="absolute inset-x-0 bottom-10 opacity-[0.05] pointer-events-none">
               <Marquee text={project.title} baseVelocity={index % 2 === 0 ? 0.5 : -0.5} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Info */}
        <motion.div style={{ y }} className="flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="text-accent text-sm font-mono tracking-[0.3em] font-bold uppercase">{project.category}</span>
              <div className="w-12 h-px bg-white/20" />
              <span className="text-white/30 text-sm font-medium tracking-widest uppercase">{project.year}</span>
            </div>
            
            <h3 className="text-6xl md:text-8xl xl:text-[7.5vw] font-black uppercase tracking-tighter leading-[0.85] text-white">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block last:text-accent last:italic">{word}</span>
              ))}
            </h3>
          </div>

          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light uppercase tracking-tight max-w-xl italic">
            {project.description}
          </p>

          <div className="flex items-baseline gap-4 mt-4">
             <span className="text-accent text-6xl font-black font-mono opacity-20 italic select-none">0{index + 1}</span>
             <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">Project Scope</span>
                <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium border-l border-accent/30 pl-3">Full Case Study Coming Soon</span>
             </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function WorkSection() {
  return (
    <div id="work" className="bg-black">
      {/* Intro section that scrolls normally - Reduced height */}
      <section className="h-[40vh] flex flex-col justify-end px-12 md:px-[15vw] pb-16 overflow-hidden">
         <motion.span 
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="text-accent text-xs font-bold tracking-[0.6em] uppercase mb-10 block"
         >
           Portfolio
         </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-[15vw] font-black uppercase leading-[0.7] tracking-tighter"
        >
          Selected <br />
          <motion.span 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="translate-x-10 inline-block italic"
          >
            Works
          </motion.span>
        </motion.h2>
      </section>

      {/* Snap Container */}
      <div className="snap-y snap-mandatory select-none">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
