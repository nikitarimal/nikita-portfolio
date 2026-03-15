"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function PortraitSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and scaling for the image
  // Start the image higher (-10%) to ensure the top curve is fully filled
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1.2]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[120vh] w-full bg-black z-20"
    >
      {/* Sticky Image Wrapper */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-12 md:px-[15vw]">
        <motion.div 
          className="relative w-full md:w-[50vw] h-[80vh] md:h-[90vh] overflow-hidden rounded-t-full shadow-[0_0_100px_rgba(0,0,0,0.5)] border-x border-t border-white/10"
        >
          <motion.div style={{ y, scale }} className="absolute inset-0 w-full h-[110%] origin-top">
            <Image 
              src="/image/nikita.jpg"
              alt="Nikita Rimal"
              fill
              priority
              className="object-cover object-bottom" 
            />
          </motion.div>
          {/* Subtle Contrast Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-10 md:p-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-white leading-none text-center">
                Design <br /><span className="text-accent italic">with Purpose</span>
              </h3>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Reduced placeholder to tighten the gap to the next section */}
      <div className="h-[20vh] w-full" />
    </section>
  );
}
