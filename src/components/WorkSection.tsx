import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  year?: string;
  link: string;
  websiteUrl?: string;
  hasCaseStudy?: boolean;
  description?: string;
  image?: string;
  imageFit?: "cover" | "contain";
  internal?: boolean;
};

const projects: Project[] = [
  {
    title: "Freelance Travel",
    category: "Travel & Tour Booking",
    year: "2024",
    link: "/projects/freelance-travel",
    websiteUrl: "https://freelancetravel.com/",
    hasCaseStudy: true,
    internal: true,
    description:
      "Designed a travel booking website that allows users to easily search and book travel packages through a simple and user-friendly interface.",
    image: "/projects/freelance-landing.png",
  },
  {
    title: "Reffero",
    category: "Software as a Service",
    year: "2024",
    link: "/projects/reffero",
    websiteUrl: "https://reffero.com/",
    hasCaseStudy: true,
    internal: true,
    description:
      "A platform connecting brands with influencers for collaboration and hiring. Creator dashboard and hiring workflow design.",
    image: "/projects/reffero.png",
  },
  {
    title: "Baliyo Ventures",
    category: "Official Company Website",
    year: "2025",
    link: "https://www.baliyoventures.com/",
    description:
      "Designed the official company website focusing on modern design, usability, and clear content structure.",
  },
  {
    title: "Trek Booking",
    category: "Adventure Platform",
    year: "2024",
    link: "#",
    description:
      "Designed a comprehensive trekking and adventure booking platform for the Himalayan region.",
  },
  {
    title: "BI Conversion",
    category: "Enterprise Software / Data Tooling",
    description:
      "A guided tool for converting BI reports and managing the resulting library.",
    link: "/projects/bi-conversion",
    internal: true,
  },
  {
    title: "Cropyield",
    category: "Productivity and Management Apps",
    description: "Internal task and project management app",
    link: "#",
  },
  {
    title: "American Chamber of Commerce Nepal",
    category: "Business Association / Nonprofit",
    description:
      "A clearer digital home for members, events, publications, and the Nepal–U.S. business community.",
    link: "/projects/amcham-nepal",
    websiteUrl: "https://amchamnepal.com/",
    hasCaseStudy: true,
    image: "/projects/amchm.jpeg",
    internal: true,
  },
  {
    title: "Rudraksha",
    category: "Spiritual Lifestyle",
    description:
      "A calm daily companion for mantras, panchanga, and personalized astrology.",
    link: "/projects/rudraksha",
    hasCaseStudy: true,
    image: "/projects/rudraksh.jpeg",
    imageFit: "contain",
    internal: true,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className={`project-visual project-visual-${index}`}>
        <div className="project-sheet">
          <div className="sheet-edge" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{project.title}</span>
          </div>
          <div className="project-image-window">
            <Image
              src={project.image!}
              alt={`${project.title} interface design`}
              fill
              sizes={
                index === 0
                  ? "(max-width: 760px) 85vw, 58vw"
                  : "(max-width: 760px) 85vw, 44vw"
              }
              className={`project-image${
                project.imageFit === "contain" ? " project-image-contain" : ""
              }`}
            />
          </div>
        </div>
      {project.link !== "#" && (
        <span className="project-open">
          {project.hasCaseStudy ? "Read case study" : "Open project"}
          <ArrowUpRight size={17} />
        </span>
      )}
      </div>
      <div className="project-caption">
        <span className="project-index">
          ({String(index + 1).padStart(2, "0")})
        </span>
        <div>
          <h3>{project.title}</h3>
          <p className="project-meta">
            {project.category}
            {project.year && <span> / {project.year}</span>}
          </p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="caption-arrow"
          strokeWidth={1.3}
          size={30}
        />
      </div>
      {project.description && (
        <p className="project-description">{project.description}</p>
      )}
      {project.link === "#" && (
        <span className="project-pending">Case study coming soon</span>
      )}
    </>
  );
  const primaryLabel = project.hasCaseStudy
    ? `Read the ${project.title} case study`
    : `View ${project.title} website`;

  return (
    <Reveal className={`project-card project-card-${index}`}>
      <article>
        {project.link === "#" ? (
          <div className="project-link project-unlinked">{content}</div>
        ) : project.internal ? (
          <Link
            href={project.link}
            className="project-link"
            aria-label={primaryLabel}
          >
            {content}
          </Link>
        ) : (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`${primaryLabel} (opens in a new tab)`}
          >
            {content}
          </a>
        )}
        {project.websiteUrl && (
          <a
            className="project-secondary-link"
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the live ${project.title} website (opens in a new tab)`}
          >
            Visit live website <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </article>
    </Reveal>
  );
}

export default function WorkSection() {
  const featuredOrder = [
    "Freelance Travel",
    "Reffero",
    "Rudraksha",
    "American Chamber of Commerce Nepal",
  ];
  const featured = projects
    .filter((project) => project.image)
    .sort(
      (a, b) => featuredOrder.indexOf(a.title) - featuredOrder.indexOf(b.title),
    );
  const designIndexOrder = [
    "BI Conversion",
    "Baliyo Ventures",
    "Trek Booking",
    "Cropyield",
  ];
  const designIndex = projects
    .filter((project) => !project.image)
    .sort(
      (a, b) =>
        designIndexOrder.indexOf(a.title) - designIndexOrder.indexOf(b.title),
    );
  return (
    <section
      id="work"
      className="work section-shell section-space"
      aria-labelledby="work-title"
    >
      <Reveal className="work-heading">
        <div>
          <p className="eyebrow section-label">01 / Proof of work</p>
          <h2 id="work-title" className="section-title">
            Selected
            <br />
            <span className="work-title-bottom">
              work<span className="work-superscript">[08]</span>
            </span>
          </h2>
        </div>
        <div className="work-margin-note">
          <p className="handwritten">
            A few things
            <br />
            I’ve put out into the world.
          </p>
          <svg viewBox="0 0 140 90" aria-hidden="true">
            <path d="M115 7C110 75 75 80 23 51M23 51L42 51M23 51L28 71" />
          </svg>
        </div>
      </Reveal>
      <div className="project-grid">
        {featured.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="project-index-section">
        <div className="index-heading">
          <h3>Also on the artboard</h3>
          <p className="eyebrow">Explore more projects ↗</p>
        </div>
        {designIndex.map((project, index) => {
          const row = (
            <>
              <span className="index-number">
                ({String(featured.length + index + 1).padStart(2, "0")})
              </span>
              <div>
                <h4>{project.title}</h4>
                {project.description && <p>{project.description}</p>}
              </div>
              <span className="index-category">{project.category}</span>
              <ArrowUpRight size={28} strokeWidth={1.3} />
            </>
          );

          if (project.link === "#") {
            return (
              <div
                className="design-index-row design-index-row-disabled"
                key={project.title}
                aria-disabled="true"
              >
                {row}
              </div>
            );
          }

          return project.internal ? (
            <Link
              className="design-index-row"
              key={project.title}
              href={project.link}
              aria-label={`Read the ${project.title} case study`}
            >
              {row}
            </Link>
          ) : (
            <a
              className="design-index-row"
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} in Figma (opens in a new tab)`}
            >
              {row}
            </a>
          );
        })}
      </div>
    </section>
  );
}
