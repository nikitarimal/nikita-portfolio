import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Freelance Travel Case Study | Nikita Rimal",
  description:
    "A travel and tour booking experience designed to guide users through planning, pricing, and booking with greater clarity and confidence.",
};

const figmaUrl =
  "https://www.figma.com/proto/NhQqguFZrOwMVmEM4ci8zl/my-Case-studies?node-id=5-6206&t=ePcsvmmVQyIIlW6J-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A17856";

const gallery = [
  {
    src: "/projects/freelance-travel/mobile.png",
    width: 1400,
    height: 2555,
    label: "Mobile booking experience",
  },
  {
    src: "/projects/freelance-travel/main.png",
    width: 1441,
    height: 1762,
    label: "Desktop travel experience",
  },
  {
    src: "/projects/freelance-travel/02.png",
    width: 1440,
    height: 2019,
    label: "Exploration and trip details",
  },
  {
    src: "/projects/freelance-travel/Cart_1.png",
    width: 1440,
    height: 1131,
    label: "Trip cart and pricing",
  },
  {
    src: "/projects/freelance-travel/Date_selected_1.png",
    width: 1440,
    height: 1837,
    label: "Travel date selection",
  },
];

export default function FreelanceTravelCaseStudy() {
  return (
    <>
      <main id="main" className="case-study case-study-travel">
        <section
          id="top"
          className="case-hero section-shell case-hero-long"
          aria-labelledby="case-title"
        >
          <div className="case-kicker">
            <p className="eyebrow">Travel & Tour Booking</p>
            <p className="eyebrow">Web and mobile product design / 2024</p>
          </div>

          <Reveal>
            <h1
              id="case-title"
              className="case-title-long case-title-travel"
              aria-label="Freelance Travel"
            >
              <span aria-hidden="true">Freelance</span>
              <span aria-hidden="true">
                Travel<span className="red-period">.</span>
              </span>
            </h1>
          </Reveal>

          <div className="case-hero-bottom">
            <p className="body-large">
              A guided ecosystem for booking, earning, and saving through every
              journey.
            </p>
            <div className="case-actions" aria-label="Project links">
              <a
                className="case-action case-action-primary"
                href={figmaUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the Freelance Travel case study in Figma (opens in a new tab)"
              >
                View case study
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a
                className="case-action"
                href="https://freelancetravel.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the Freelance Travel website (opens in a new tab)"
              >
                View website
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div id="case-study" className="case-story section-shell">
          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">01 / Project objective</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Value from every interaction
                <span className="red-period">.</span>
              </h2>
              <p>
                Creating a multi-layered travel ecosystem for booking, earning,
                and saving. A platform where users don’t just book trips, they
                gain value from every interaction.
              </p>
            </div>
          </Reveal>

          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">02 / Challenges & research</span>
            </div>
            <div className="case-section-copy">
              <h2>
                More guidance. Less overwhelm
                <span className="red-period">.</span>
              </h2>
              <p>
                Users often find travel planning overwhelming due to too many
                choices, unclear starting points, and a fragmented booking
                process. This leads to hesitation and a lack of confidence while
                making decisions.
              </p>
              <blockquote>
                Users don’t need more options; they need better guidance to make
                confident decisions.
              </blockquote>
            </div>
          </Reveal>

          <Reveal className="case-section case-section-solution">
            <div className="case-section-label">
              <span className="eyebrow">03 / Solutions & impact</span>
            </div>
            <div className="case-section-copy">
              <h2>
                A structured path from discovery to booking
                <span className="red-period">.</span>
              </h2>
              <p>
                The solution focuses on streamlining the travel planning
                experience by introducing a structured and guided user journey.
                By simplifying exploration, clarifying pricing, and optimizing
                the booking flow, the design reduces friction and supports more
                informed decision-making.
              </p>
            </div>
          </Reveal>
        </div>

        <section
          className="case-gallery section-shell"
          aria-labelledby="gallery-title"
        >
          <Reveal className="case-gallery-heading">
            <div>
              <p className="eyebrow">04 / Project gallery</p>
              <h2 id="gallery-title">
                Visual
                <br />
                showcase<span className="red-period">.</span>
              </h2>
            </div>
            <span className="case-gallery-count">05</span>
          </Reveal>

          <div className="case-gallery-list">
            {gallery.map((image, index) => (
              <Reveal key={image.src}>
                <figure className="case-gallery-item">
                  <Image
                    src={image.src}
                    alt={`Freelance Travel ${image.label.toLowerCase()}`}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 760px) 92vw, 1280px"
                  />
                  <figcaption>
                    <span className="eyebrow">
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                    <span>{image.label}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="case-next section-shell">
          <Reveal>
            <p className="eyebrow">End of case study</p>
            <div>
              <h2>
                Back to the
                <br />
                work<span className="red-period">.</span>
              </h2>
              <Link href="/#work" className="case-back-link">
                <ArrowLeft size={21} aria-hidden="true" />
                View all projects
                <ArrowUpRight size={21} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
