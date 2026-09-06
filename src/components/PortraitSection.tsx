import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function PortraitSection() {
  return (
    <section
      id="about"
      className="about section-shell section-space"
      aria-labelledby="about-title"
    >
      <Reveal className="portrait-column">
        <div className="portrait">
          <Image
            src="/image/nikita.jpg"
            alt="Nikita Rimal"
            fill
            sizes="(max-width: 760px) 85vw, 38vw"
            className="portrait-image"
          />
        </div>
        <p className="portrait-caption">
          <span>Fig. 01 — The person behind the pixels</span>
          <span className="handwritten">Hello again!</span>
        </p>
      </Reveal>
      <Reveal className="about-copy">
        <p className="eyebrow section-label">02 / Off the artboard</p>
        <h2 id="about-title" className="section-title">
          Behind
          <br />
          the screens<span className="red-period">.</span>
        </h2>
        <p className="body-large">
          I’m Nikita, a UI/UX designer based in Nepal.
        </p>
        <p className="body-copy">
          My work spans travel booking, creator marketplaces, business tools,
          and mobile apps. I like finding the structure in a complicated flow,
          then getting the small things right: the hierarchy, the spacing, the
          next step.
        </p>
        <p className="body-copy">
          I work from wireframes through to detailed interfaces and prototypes,
          with a background in graphic design.
        </p>
        <div className="about-credentials">
          <span>BCA Graduate</span>
          <span>Google UX Certified</span>
        </div>
        <a className="text-link" href="#experience">
          Where I’ve worked <ArrowUpRight size={18} />
        </a>
      </Reveal>
    </section>
  );
}
