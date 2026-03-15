"use client";

import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PortraitSection from "@/components/PortraitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <section className="snap-start">
        <Hero />
      </section>
      
      <section className="snap-start">
        <PortraitSection />
      </section>

      <div className="relative z-30 bg-black">
        <WorkSection />
        <section className="snap-start">
            <ExperienceSection />
        </section>
        <section className="snap-start">
            <ExpertiseSection />
        </section>
      </div>

      <section className="snap-start">
        <Footer />
      </section>
    </main>
  );
}
