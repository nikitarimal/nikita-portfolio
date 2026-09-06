import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ExperienceSection from "@/components/ExperienceSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import PortraitSection from "@/components/PortraitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <WorkSection />
        <PortraitSection />
        <ExperienceSection />
        <ExpertiseSection />
      </main>
      <Footer />
    </>
  );
}
