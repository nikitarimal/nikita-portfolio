import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Reffero Case Study | Nikita Rimal",
  description:
    "Reffero is a referral platform designed to help businesses grow through authentic customer recommendations, transparent rewards, and clear tracking.",
};

const gallery = [
  {
    src: "/projects/reffero-detail/03.png",
    width: 11669,
    height: 7844,
    label: "Responsive product screens",
  },
  {
    src: "/projects/reffero.png",
    width: 1440,
    height: 6111,
    label: "Reffero landing page",
  },
];

export default function RefferoCaseStudy() {
  return (
    <>
      <main id="main" className="case-study case-study-reffero">
        <section
          id="top"
          className="case-hero section-shell"
          aria-labelledby="case-title"
        >
          <div className="case-kicker">
            <p className="eyebrow">Software as a Service</p>
            <p className="eyebrow">Referral product design / 2024</p>
          </div>

          <Reveal>
            <h1 id="case-title">
              Reffero<span className="red-period">.</span>
            </h1>
          </Reveal>

          <div className="case-hero-bottom">
            <p className="body-large">
              An authentic referral ecosystem for customers, creators, and
              modern businesses.
            </p>
            <div className="case-actions" aria-label="Project links">
              <a className="case-action case-action-primary" href="#case-study">
                View case study
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a
                className="case-action"
                href="https://reffero.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the Reffero website (opens in a new tab)"
              >
                View website
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="case-artwork case-artwork-wide case-artwork-reffero"
          aria-label="Reffero platform overview"
        >
          <Reveal className="case-artwork-inner">
            <figure>
              <div className="case-preview-window">
                <Image
                  src="/projects/reffero-detail/01.png"
                  alt="Reffero referral platform overview"
                  fill
                  sizes="(max-width: 760px) 94vw, 1440px"
                  className="case-preview-image"
                  priority
                />
              </div>
              <figcaption className="eyebrow">
                Referral platform / Responsive product
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <div id="case-study" className="case-story section-shell">
          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">01 / Project objective</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Referrals made simple<span className="red-period">.</span>
              </h2>
              <p>
                Reffero is a platform that helps businesses grow by getting more
                customers through referrals. Instead of spending money on ads,
                businesses can ask their happy customers to invite others. When
                someone refers a friend, they can earn rewards, and the business
                gets new customers. It makes sharing, tracking, and rewarding
                referrals simple and easy for everyone.
              </p>
            </div>
          </Reveal>

          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">02 / Challenges & research</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Trust was the real product
                <span className="red-period">.</span>
              </h2>
              <p>
                Building a platform that users genuinely trust was the biggest
                hurdle.
              </p>
              <blockquote>
                Research indicated that existing referral platforms often felt
                “spammy.” The experience needed to focus on authenticity and
                clear incentives.
              </blockquote>
            </div>
          </Reveal>

          <Reveal className="case-section case-section-solution">
            <div className="case-section-label">
              <span className="eyebrow">03 / Solutions & impact</span>
            </div>
            <div className="case-section-copy">
              <h2>
                A transparent referral ecosystem
                <span className="red-period">.</span>
              </h2>
              <p>
                Integration of a Trust-Score algorithm and a transparent reward
                system fosters an authentic, high-conversion referral ecosystem
                for modern businesses.
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
            <span className="case-gallery-count">02</span>
          </Reveal>

          <div className="case-gallery-list">
            {gallery.map((image, index) => (
              <Reveal key={image.src}>
                <figure className="case-gallery-item">
                  <Image
                    src={image.src}
                    alt={`Reffero ${image.label.toLowerCase()}`}
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
