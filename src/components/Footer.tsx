"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Linkedin, Globe, Mail, Phone } from "lucide-react";
import Marquee from "./Marquee";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-black px-12 md:px-[15vw] overflow-hidden h-screen flex flex-col justify-between py-12 md:py-16 snap-start">
      
      <div className="flex flex-col justify-center flex-1 relative z-10 w-full gap-8 md:gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-32">
           <div className="flex flex-col gap-10">
              <h2 className="text-5xl md:text-[clamp(4rem,8vw,12vw)] font-black uppercase leading-[0.8] tracking-tighter">
                Say <br />
                <span className="text-accent italic">Hello</span>
              </h2>
              <div className="flex flex-col gap-8 max-w-xl">
                <p className="text-2xl md:text-4xl text-white/50 font-light uppercase tracking-tighter leading-tight">
                  Passionate UI/UX Designer specialized in creating intuitive user interfaces and user-centered digital products.
                </p>
                <div className="flex items-center gap-4 text-accent text-sm md:text-base font-mono tracking-widest mt-8">
                  <span className="w-3 h-3 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#e5ff00]" />
                  Currently available for full-time & freelance projects
                </div>
              </div>
           </div>

           <div className="flex flex-col gap-10 text-right self-end md:self-auto md:pt-10">
              <div className="flex flex-col gap-6">
                 <span className="text-xs text-white/30 uppercase tracking-[0.5em] font-mono">Direct Contact</span>
                 <a href="mailto:nikitarimal1418@gmail.com" className="text-2xl md:text-5xl font-black uppercase tracking-tighter hover:text-accent transition-colors flex items-center justify-end gap-6 group">
                    <span className="group-hover:pr-4 transition-all">nikitarimal1418@gmail.com</span> <Mail className="w-10 h-10" />
                 </a>
                 <a href="tel:+9779865500240" className="text-2xl md:text-5xl font-black uppercase tracking-tighter hover:text-accent transition-colors flex items-center justify-end gap-6 group">
                    <span className="group-hover:pr-4 transition-all">+977 9865500240</span> <Phone className="w-10 h-10" />
                 </a>
              </div>
              <div className="flex flex-col gap-6">
                 <span className="text-xs text-white/30 uppercase tracking-[0.5em] font-mono">Socials</span>
                 <div className="flex justify-end gap-12">
                    <a href="https://linkedin.com/in/nikitarimal1418" target="_blank" className="hover:text-accent transition-all hover:scale-125"><Linkedin className="w-12 h-12" /></a>
                    <a href="#" className="hover:text-accent transition-all hover:scale-125"><Instagram className="w-12 h-12" /></a>
                    <a href="https://designer-portfolio-wine-eight.vercel.app/" target="_blank" className="hover:text-accent transition-all hover:scale-125"><Globe className="w-12 h-12" /></a>
                 </div>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
          <div className="flex flex-col gap-2">
             <span className="text-[10px] md:text-xs text-white/20 uppercase tracking-[0.6em] font-bold">©2025 NIKITA RIMAL</span>
             <span className="text-[10px] md:text-xs text-white/20 uppercase tracking-[0.6em] font-bold">KATHMANDU, NEPAL</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-6 text-[10px] md:text-xs uppercase tracking-[0.6em] text-white/40 hover:text-accent transition-colors"
          >
            <span>Back to top</span>
            <div className="w-20 h-20 border border-white/10 rounded-full flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all duration-700">
              <ArrowUp className="w-8 h-8 animate-bounce" />
            </div>
          </button>

          <div className="flex flex-col gap-2 text-right">
             <span className="text-[10px] md:text-xs text-white/20 uppercase tracking-[0.5em] font-black">BCA Graduate</span>
             <span className="text-[10px] md:text-xs text-white/20 uppercase tracking-[0.5em] font-black">Google UX Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
