"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";
import Marquee from "./Marquee";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  year?: string;
  link: string;
  description?: string;
  image?: string;
  color: string;
  figma?: boolean;
};

const projects: Project[] = [
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
  },
  {
    title: "BI Conversion",
    category: "Business Intelligence",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=543-30478&t=tAPp6UPsgBLM7stW-1",
    color: "bg-[#10151c]",
    figma: true,
  },
  {
    title: "Cropyield",
    category: "Productivity and Management Apps",
    description: "Internal task and project management app",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=381-8153&t=tAPp6UPsgBLM7stW-1",
    color: "bg-[#101a14]",
    figma: true,
  },
  {
    title: "AmCham Nepal Website",
    category: "Website Design",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=1-8&t=tAPp6UPsgBLM7stW-1",
    color: "bg-[#1b1115]",
    figma: true,
  },
  {
    title: "Rudraksha App",
    category: "Mobile App Design",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=1169-34706&t=fDh5i0YVjsli57An-1",
    color: "bg-[#1c160f]",
    figma: true,
  },
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={ref} 
      className="min-h-screen !py-16 lg:!py-24 w-full flex items-center justify-center snap-start relative overflow-hidden"
    >
      <motion.div 
        style={{ opacity }}
        className="w-full !px-[7vw] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center h-full"
      >
        {/* Left Side: Project Image */}
        <div className="relative h-[40vh] md:h-[60vh] lg:h-[70vh] w-full perspective-2000">
          <motion.div 
            whileHover={{ rotateY: 3, rotateX: -3, scale: 1.02 }}
            className={`relative w-full h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 ${project.color} group shadow-2xl transition-all duration-700`}
          >
            {project.image ? <motion.div style={{ scale: imgScale }} className="absolute inset-0 w-full h-full">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                sizes="(min-width: 1024px) 43vw, 86vw"
                className="object-cover transition-all duration-1000"
              />
            </motion.div> : (
              <div className="absolute inset-0 flex flex-col justify-between !p-8 md:!p-12 bg-[radial-gradient(ellipse_at_top_right,rgba(229,255,0,0.12),transparent_65%)]">
                <span className="text-xs uppercase tracking-[0.3em] text-white/50">Design project / {String(index + 1).padStart(2, "0")}</span>
                <span className="text-[clamp(2rem,5vw,5rem)] font-black uppercase tracking-tighter leading-none break-words">{project.title}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-accent">Explore in Figma <ExternalLink aria-hidden="true" className="inline-block ml-2 h-4 w-4" /></span>
              </div>
            )}

            {/* Link overlay */}
            {project.link !== "#" && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`View ${project.title}${project.figma ? " in Figma" : " website"} (opens in a new tab)`}
                className="absolute inset-0 z-20 flex items-center justify-center rounded-[inherit] hover:bg-black/20 focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-accent group/link"
              >
                <span className="w-24 h-24 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover/link:opacity-100 group-focus-visible/link:opacity-100 transition-opacity duration-300">
                  <ExternalLink aria-hidden="true" className="text-black w-8 h-8" />
                </span>
              </a>
            )}

            {/* Background Title Marquee (Subtle) */}
            <div className="absolute inset-x-0 bottom-10 opacity-[0.05] pointer-events-none">
               <Marquee text={project.title} baseVelocity={index % 2 === 0 ? 0.5 : -0.5} />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Info */}
        <div className="min-w-0 flex flex-col gap-8 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-accent text-sm font-mono tracking-[0.3em] font-bold uppercase">{project.category}</span>
              {project.year && <>
                <div className="w-12 h-px bg-white/20" />
                <span className="text-white/30 text-sm font-medium tracking-widest uppercase">{project.year}</span>
              </>}
            </div>
            
            <h3 className="text-[clamp(2.5rem,10vw,6rem)] lg:text-[5.5vw] font-black uppercase tracking-tighter leading-[0.9] text-white break-words">
              {project.title.split(' ').map((word, i) => (
                <span key={i} className="block last:text-accent last:italic">{word}</span>
              ))}
            </h3>
          </div>

          {project.description && <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-light uppercase tracking-tight max-w-xl italic">
            {project.description}
          </p>}

          {project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title}${project.figma ? " in Figma" : " website"} (opens in a new tab)`}
              className="inline-flex min-h-11 items-center gap-3 self-start border-b border-accent/40 py-2 text-sm font-bold uppercase tracking-widest text-accent hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {project.figma ? "View in Figma" : "Visit website"}
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          )}

          <div className="flex items-baseline gap-4 mt-4">
             <span className="text-accent text-6xl font-black font-mono opacity-20 italic select-none">0{index + 1}</span>
             {!project.figma && <div className="flex flex-col gap-1">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.5em] font-bold">Project Scope</span>
                <span className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium border-l border-accent/30 pl-3">Full Case Study Coming Soon</span>
             </div>}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default function WorkSection() {
  return (
    <div id="work" className="bg-black">
      {/* Intro section that scrolls normally - Reduced height */}
      <section className="h-[25vh] flex flex-col justify-end w-full !px-[7vw] pb-16 overflow-hidden">
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
          className="text-9xl md:text-[clamp(5rem, 12vw, 16vw)] font-black uppercase leading-[0.7] tracking-tighter"
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
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
