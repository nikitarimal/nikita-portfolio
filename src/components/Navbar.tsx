"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Background blur threshold
    if (latest > 50) {
      setScrolled(true);
    } else {
      setIsOpen(false); // Close mobile menu on scroll
      setScrolled(false);
    }

    // Hide/Show logic with direction check
    // We only hide when scrolling down significantly
    // and show as soon as we scroll up
    if (latest > previous && latest > 150 && !isOpen) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#expertise" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-500 flex items-center px-12 md:px-[15vw] h-20 md:h-24 ${
          scrolled || isOpen
            ? "bg-black/95 backdrop-blur-3xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl md:text-3xl font-black tracking-tighter uppercase flex items-center gap-2 group">
            <span className="text-accent group-hover:scale-105 transition-transform duration-500">Nikita</span>
            <span className="opacity-50 group-hover:opacity-100 transition-opacity duration-500">Rimal</span>
          </Link>
          
          <div className="hidden md:flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/30">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-accent transition-all hover:tracking-[0.6em] duration-500">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/nikitarimal1418" 
              target="_blank"
              className="hidden sm:inline-block text-[10px] font-black border border-white/10 px-8 py-3 rounded-full uppercase tracking-[0.2em] hover:bg-accent hover:text-black hover:border-accent transition-all duration-500"
            >
              LinkedIn
            </a>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 relative z-[110]"
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                className="w-8 h-[2px] bg-white block rounded-full"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-[2px] bg-white block rounded-full"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                className="w-8 h-[2px] bg-white block rounded-full"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 bg-black z-[90] md:hidden flex flex-col items-center justify-center px-12 md:px-[15vw]"
      >
        <div className="flex flex-col items-center gap-12">
          {navLinks.map((link, idx) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-5xl font-black uppercase tracking-tighter hover:text-accent transition-colors block text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                {link.name}
              </motion.span>
            </Link>
          ))}
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.5 }}
            href="https://linkedin.com/in/nikitarimal1418" 
            target="_blank"
            className="mt-12 text-xs font-black border border-accent text-accent px-12 py-5 rounded-full uppercase tracking-widest"
          >
            LinkedIn
          </motion.a>
        </div>

        {/* Dynamic Background Text for Mobile Menu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-[0.02] text-[25vw] font-black uppercase tracking-tighter select-none pointer-events-none w-full text-center">
          Nikita
        </div>
      </motion.div>
    </>
  );
}
