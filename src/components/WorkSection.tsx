import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
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
  figma?: boolean;
};

const projects: Project[] = [
  {
    title: "Freelance Travel",
    category: "Travel Booking Platform",
    year: "2024",
    link: "https://www.figma.com/proto/NhQqguFZrOwMVmEM4ci8zl/my-Case-studies?node-id=5-6206&t=ePcsvmmVQyIIlW6J-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=52%3A17856",
    websiteUrl: "https://freelancetravel.com/",
    hasCaseStudy: true,
    description:
      "Designed a travel booking website that allows users to easily search and book travel packages through a simple and user-friendly interface.",
    image: "/projects/freelance-landing.png",
  },
  {
    title: "Reffero",
    category: "Influencer Marketplace",
    year: "2024",
    link: "#",
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
    image: "/projects/baliyo-landing.png",
  },
  {
    title: "Trek Booking",
    category: "Adventure Platform",
    year: "2024",
    link: "#",
    description:
      "Designed a comprehensive trekking and adventure booking platform for the Himalayan region.",
    image: "/projects/trek-booking.png",
  },
  {
    title: "BI Conversion",
    category: "Business Intelligence",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=543-30478&t=tAPp6UPsgBLM7stW-1",
    figma: true,
  },
  {
    title: "Cropyield",
    category: "Productivity and Management Apps",
    description: "Internal task and project management app",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=381-8153&t=tAPp6UPsgBLM7stW-1",
    figma: true,
  },
  {
    title: "AmCham Nepal Website",
    category: "Website Design",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=1-8&t=tAPp6UPsgBLM7stW-1",
    figma: true,
  },
  {
    title: "Rudraksha App",
    category: "Mobile App Design",
    link: "https://www.figma.com/design/51BOTxROVKiH0s1QINnXV4/Nikita-s-Works?node-id=1169-34706&t=fDh5i0YVjsli57An-1",
    figma: true,
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
              className="project-image"
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
        {project.link !== "#" ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`${primaryLabel} (opens in a new tab)`}
          >
            {content}
          </a>
        ) : (
          <div className="project-link project-unlinked">{content}</div>
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
  const featured = projects.filter((project) => project.image);
  const designIndex = projects.filter((project) => !project.image);
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
          <p className="eyebrow">Explore the designs in Figma ↗</p>
        </div>
        {designIndex.map((project, index) => (
          <a
            className="design-index-row"
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} in Figma (opens in a new tab)`}
          >
            <span className="index-number">
              ({String(featured.length + index + 1).padStart(2, "0")})
            </span>
            <div>
              <h4>{project.title}</h4>
              {project.description && <p>{project.description}</p>}
            </div>
            <span className="index-category">{project.category}</span>
            <ArrowUpRight size={28} strokeWidth={1.3} />
          </a>
        ))}
      </div>
    </section>
  );
}
