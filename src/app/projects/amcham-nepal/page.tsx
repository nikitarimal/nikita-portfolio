import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "American Chamber of Commerce Nepal Case Study | Nikita Rimal",
  description:
    "A website redesign for the American Chamber of Commerce Nepal, creating clearer paths to its members, events, publications, and diaspora community.",
};

const outcomes = [
  {
    number: "01",
    title: "Member directory",
    copy: "Searchable member listings and individual profiles make the chamber's network visible and useful.",
  },
  {
    number: "02",
    title: "Events flow",
    copy: "A direct journey from event discovery to details and registration removes unnecessary steps.",
  },
  {
    number: "03",
    title: "Publication library",
    copy: "Organized reports and an in-page reader turn valuable chamber knowledge into accessible content.",
  },
  {
    number: "04",
    title: "Diaspora connection",
    copy: "A dedicated section gives the Nepal–U.S. business community a clear place to connect and engage.",
  },
];

export default function AmChamNepalCaseStudy() {
  return (
    <>
      <main id="main" className="case-study">
        <section
          id="top"
          className="case-hero section-shell case-hero-long"
          aria-labelledby="case-title"
        >
          <div className="case-kicker">
            <p className="eyebrow">Business Association / Nonprofit</p>
            <p className="eyebrow">Website redesign</p>
          </div>

          <Reveal>
            <h1
              id="case-title"
              className="case-title-long"
              aria-label="American Chamber of Commerce Nepal"
            >
              <span aria-hidden="true">American Chamber</span>
              <span aria-hidden="true">
                of Commerce Nepal<span className="red-period">.</span>
              </span>
            </h1>
          </Reveal>

          <div className="case-hero-bottom">
            <p className="body-large">
              A credible digital home for the people moving Nepal–U.S. business
              forward.
            </p>
            <div className="case-actions" aria-label="Project links">
              <a className="case-action case-action-primary" href="#case-study">
                View case study
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a
                className="case-action"
                href="https://amchamnepal.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the American Chamber of Commerce Nepal website (opens in a new tab)"
              >
                View website
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="case-artwork case-artwork-wide case-artwork-amcham"
          aria-label="American Chamber of Commerce Nepal website screens"
        >
          <Reveal className="case-artwork-inner">
            <figure>
              <Image
                src="/projects/acocn.jpeg"
                alt="American Chamber of Commerce Nepal website designs showing the homepage, member directory, events, publications, diaspora community, profiles, and registration forms"
                width={1473}
                height={1600}
                sizes="(max-width: 760px) 94vw, 1473px"
                priority
              />
              <figcaption className="eyebrow">
                Selected responsive screens / Website redesign
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
                A credible home for a growing business community
                <span className="red-period">.</span>
              </h2>
              <p>
                Redesigning the American Chamber of Commerce Nepal website into
                a clear, credible home for its members, events, and publications.
                A site that reflects the organization&apos;s role connecting Nepali
                and American businesses, and makes it simple to join, attend, and
                stay informed.
              </p>
            </div>
          </Reveal>

          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">02 / Challenges & research</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Too many audiences. Not enough clear paths
                <span className="red-period">.</span>
              </h2>
              <p>
                The original site tried to serve several audiences at once:
                prospective members, current members, event-goers, and the
                diaspora, but gave none of them a clear path forward. Core
                content like the member directory, upcoming events, and
                publications was buried, and joining or registering for an event
                took more steps than it should.
              </p>
              <blockquote>
                Research pointed to a single theme: the chamber&apos;s credibility
                was being undercut by a dated interface that did not match the
                weight of the organization behind it.
              </blockquote>
            </div>
          </Reveal>

          <Reveal className="case-section case-section-solution">
            <div className="case-section-label">
              <span className="eyebrow">03 / Solutions & impact</span>
            </div>
            <div className="case-section-copy">
              <h2>
                A direct route for every audience
                <span className="red-period">.</span>
              </h2>
              <p>
                The redesign gives each audience a direct route. A searchable
                member directory with individual profiles, an events flow that
                runs cleanly from listing to detail to registration, and a
                publications library with an in-page reader replace the old dead
                ends.
              </p>
              <p>
                A consistent navigation, a calmer visual system, and a dedicated
                diaspora section rebuild trust and make the site feel as
                established as the chamber itself.
              </p>

              <div className="case-outcomes">
                {outcomes.map((outcome) => (
                  <article key={outcome.number}>
                    <span className="eyebrow">({outcome.number})</span>
                    <h3>{outcome.title}</h3>
                    <p>{outcome.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

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
