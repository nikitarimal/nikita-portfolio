import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="hero section-shell"
      aria-labelledby="hero-title"
    >
      <div className="hero-topline">
        <p className="eyebrow">Independent designer / Kathmandu, Nepal</p>
        <p className="eyebrow">Web · Mobile · Visual</p>
      </div>
      <div className="hero-composition">
        <Reveal className="hero-heading">
          <h1 id="hero-title">
            <span>Nikita</span>
            <span className="hero-surname">
              Rimal<span className="hero-period">.</span>
            </span>
          </h1>
          <span className="name-underline" aria-hidden="true" />
        </Reveal>
        <div className="hero-side">
          <div className="hero-note">
            a designer,
            <br />
            <span>among other things.</span>
            <svg viewBox="0 0 100 70" aria-hidden="true">
              <path d="M8 8C58 2 92 16 71 49M71 49L70 31M71 49L87 42" />
            </svg>
          </div>
          <a href="#about" className="hero-photo">
            <div className="hero-photo-image">
              <Image
                src="/image/nikita.jpg"
                alt="Meet Nikita Rimal"
                fill
                priority
                sizes="(max-width: 760px) 150px, 240px"
              />
            </div>
            <span>
              Hi, I’m Nikita. <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
        <span className="hero-side-label" aria-hidden="true">
          A work in progress. Always.
        </span>
      </div>
      <div className="hero-bottom">
        <p className="hero-description">
          UI/UX designer.
          <br />
          Web, mobile & the
          <br />
          <span className="marked-word">details</span> in between.
        </p>
        <p className="hero-intro">
          I design interfaces for people
          <br />
          with places to go and things to do.
        </p>
        <a href="#work" className="work-jump">
          <span>
            Enough about me.
            <br />
            <strong>Here’s the work.</strong>
          </span>
          <ArrowDownRight size={44} strokeWidth={1.3} />
        </a>
      </div>
    </section>
  );
}
