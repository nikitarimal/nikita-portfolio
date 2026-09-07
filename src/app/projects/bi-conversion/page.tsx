import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BI Report Conversion Case Study | Nikita Rimal",
  description:
    "An enterprise data tool that guides analysts through BI report migration and gives teams one place to manage their converted reports.",
};

const outcomes = [
  {
    number: "01",
    title: "Guided source setup",
    copy: "A clear starting point for connecting the report source and preparing a conversion.",
  },
  {
    number: "02",
    title: "Schema & mapping",
    copy: "Visible mapping steps help analysts understand how source data moves into the new environment.",
  },
  {
    number: "03",
    title: "Actionable states",
    copy: "Plain success and error feedback explains what happened and what the user should do next.",
  },
  {
    number: "04",
    title: "Report management",
    copy: "Search, rename, bulk actions, delete, and analysis tools keep the converted library organized.",
  },
];

export default function BIConversionCaseStudy() {
  return (
    <>
      <main id="main" className="case-study">
        <section
          id="top"
          className="case-hero section-shell case-hero-long"
          aria-labelledby="case-title"
        >
          <div className="case-kicker">
            <p className="eyebrow">Enterprise Software / Data Tooling</p>
            <p className="eyebrow">BI migration product / 2025</p>
          </div>

          <Reveal>
            <h1
              id="case-title"
              className="case-title-long case-title-bi"
              aria-label="BI Report Conversion"
            >
              <span aria-hidden="true">BI Report</span>
              <span aria-hidden="true">
                Conversion<span className="red-period">.</span>
              </span>
            </h1>
          </Reveal>

          <div className="case-hero-bottom">
            <p className="body-large">
              A technical migration process, reshaped into a flow analysts can
              complete with confidence.
            </p>
            <div className="case-actions" aria-label="Project links">
              <a className="case-action case-action-primary" href="#case-study">
                View case study
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section
          className="case-artwork case-artwork-wide case-artwork-bi"
          aria-label="BI Report Conversion interface screens"
        >
          <Reveal className="case-artwork-inner">
            <figure>
              <Image
                src="/projects/bi-conversion-ui.png"
                alt="BI Report Conversion screens showing sign in, dashboard, source setup, schema mapping, conversion progress, and report management"
                width={2716}
                height={3330}
                sizes="(max-width: 760px) 94vw, 1500px"
                priority
              />
              <figcaption className="eyebrow">
                Conversion workflow / Enterprise data tool
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
                Migration without the manual rebuild
                <span className="red-period">.</span>
              </h2>
              <p>
                Designing a tool that migrates Tableau reports into a new BI
                environment without the manual rebuilding teams usually dread.
                The goal was to turn a technical, error-prone process into a
                guided flow that analysts can run themselves, then manage
                everything they convert from one place.
              </p>
            </div>
          </Reveal>

          <Reveal className="case-section">
            <div className="case-section-label">
              <span className="eyebrow">02 / Challenges & research</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Conversion was only half the problem
                <span className="red-period">.</span>
              </h2>
              <p>
                Moving reports between BI platforms is slow, technical, and easy
                to get wrong. Teams either rebuild dashboards by hand or lean on
                specialists, and when a conversion fails, the reason is often
                buried and hard to act on.
              </p>
              <p>
                The work also does not end at conversion: people need to find,
                rename, and organize dozens of converted reports afterward,
                which the original process ignored.
              </p>
              <blockquote>
                Research pointed to two needs: a conversion flow that explains
                each step and its errors clearly, and a proper home for managing
                the output.
              </blockquote>
            </div>
          </Reveal>

          <Reveal className="case-section case-section-solution">
            <div className="case-section-label">
              <span className="eyebrow">03 / Solutions & impact</span>
            </div>
            <div className="case-section-copy">
              <h2>
                Every step visible. Every result manageable
                <span className="red-period">.</span>
              </h2>
              <p>
                The design breaks conversion into a clear sequence: add a source,
                set the schema and mapping, review, then convert, with the state
                of each step visible at every point. Success and error states are
                surfaced plainly so users know what happened and what to do next,
                rather than hitting a dead end.
              </p>
              <p>
                After conversion, a reports table with search, rename, bulk
                actions, and delete gives teams a single place to manage their
                library, and an analyze view lets them work with the results. The
                outcome is a process a non-specialist can complete with
                confidence.
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
