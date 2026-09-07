import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rudraksha Case Study | Nikita Rimal",
  description:
    "Rudraksha is a spiritual lifestyle app bringing mantras, panchanga, kundali insights, and personalized guidance into one calm daily practice.",
};

const outcomes = [
  {
    number: "01",
    title: "Personal panchanga",
    copy: "Daily guidance shaped around the user's birth details and current calendar.",
  },
  {
    number: "02",
    title: "Guided mantras",
    copy: "A focused library with favourites, playlists, and clear practice steps.",
  },
  {
    number: "03",
    title: "Kundali & pujas",
    copy: "Personal insights paired with relevant rituals and timely next actions.",
  },
  {
    number: "04",
    title: "Veda AI",
    copy: "A conversational place for questions that would normally need an expert.",
  },
];

export default function RudrakshaCaseStudy() {
  return (
    <>
      <main id="main" className="case-study">
        <section
          id="top"
          className="case-hero section-shell"
          aria-labelledby="case-title"
        >
          <div className="case-kicker">
            <p className="eyebrow">Spiritual Lifestyle</p>
            <p className="eyebrow">Mobile product design</p>
          </div>

          <Reveal>
            <h1 id="case-title">
              Rudraksha<span className="red-period">.</span>
            </h1>
          </Reveal>

          <div className="case-hero-bottom">
            <p className="body-large">
              A calm, personal space for everyday spiritual practice.
            </p>
            <div className="case-actions" aria-label="Project links">
              <a className="case-action case-action-primary" href="#case-study">
                View case study
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a
                className="case-action"
                href="https://apps.apple.com/sa/app/nepa-rudraksha/id6447183834"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Rudraksha on the App Store (opens in a new tab)"
              >
                View App Store
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="case-artwork" aria-label="Rudraksha app screens">
          <Reveal className="case-artwork-inner">
            <figure>
              <Image
                src="/projects/rudraksh.jpeg"
                alt="Rudraksha mobile app screens showing onboarding, daily sadhana, mantras, panchanga, Veda AI, pujas, horoscope, and kundali"
                width={1017}
                height={1600}
                sizes="(max-width: 760px) 92vw, 1017px"
                priority
              />
              <figcaption className="eyebrow">
                Selected interface system / Mobile application
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
                Devotion, made easier to return to
                <span className="red-period">.</span>
              </h2>
              <p>
                Building a daily companion for spiritual practice that brings
                mantras, panchanga, and personalized astrology into one calm
                space. A platform where devotion becomes a steady habit instead
                of a scattered search across almanacs, calendars, and
                consultations.
              </p>
            </div>
          </Reveal>

          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">02 / Challenges & research</span>
            </div>
            <div className="case-section-copy">
              <h2>
                The practice was present. The structure wasn’t
                <span className="red-period">.</span>
              </h2>
              <p>
                Spiritual practice today is spread across paper almanacs,
                calendar apps, chant videos, and one-off visits to a consultant.
                New practitioners rarely know where to begin, which mantra fits
                them, how to wear a rudraksha, or which puja matters this week,
                while regular devotees juggle several sources just to keep a
                routine.
              </p>
              <blockquote>
                Research pointed to a single gap: people are not short on
                devotion, they are short on a structured, trustworthy place to
                practice it every day.
              </blockquote>
            </div>
          </Reveal>

          <Reveal className="case-section case-section-solution">
            <div className="case-section-label">
              <span className="eyebrow">03 / Solutions & impact</span>
            </div>
            <div className="case-section-copy">
              <h2>
                One profile. A practice shaped around you
                <span className="red-period">.</span>
              </h2>
              <p>
                The design organizes everything around the user&apos;s own birth
                chart and chosen sadhana. Onboarding captures birth details once,
                then the rest of the app adapts: a personalized panchanga on the
                home screen, a guided mantra library with favourites, kundali
                insights with suggested pujas, and Veda AI for questions that
                would normally need an expert.
              </p>
              <p>
                Clear next steps replace guesswork, so first-time seekers and
                daily practitioners always know what to do next.
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
