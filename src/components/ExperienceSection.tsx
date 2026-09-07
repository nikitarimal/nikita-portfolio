import Reveal from "./Reveal";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Truenary Solutions",
    location: "Kathmandu",
    period: "Mar 2024 – Mar 2026",
    desc: "Design modern interfaces for web and mobile applications. Create wireframes, high-fidelity UI designs, and prototypes in Figma. Collaborative product design workflows.",
  },
  {
    role: "UI/UX & Graphic Designer",
    company: "Baliyo Ventures",
    location: "Lalitpur",
    period: "Oct 2023 – Mar 2024",
    desc: "Designed the company website and digital interfaces. Created brand visuals and marketing creatives. Improved website usability and aesthetic appeal.",
  },
  {
    role: "UI/UX Designer",
    company: "Yuwasoft Technologies",
    location: "Hetauda",
    period: "Jan 2023 – Oct 2023",
    desc: "Designed responsive UI layouts and user flows. Developed prototypes and design mockups. Participated in usability improvements.",
  },
  {
    role: "Graphic Designer",
    company: "Menzz & Mangobyte",
    location: "Hetauda",
    period: "Apr 2022 – Nov 2022",
    desc: "Designed social media graphics and marketing materials. Assisted UI projects with visual design assets. Brand identity development.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="experience section-shell section-space"
      aria-labelledby="experience-title"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow section-label">03 / The working years</p>
          <h2 id="experience-title" className="section-title">
            A little
            <br />
            background<span className="red-period">.</span>
          </h2>
        </div>
        <p className="section-summary">
          From graphic design to product interfaces.
          <br />
          The teams I’ve been part of.
        </p>
      </Reveal>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <Reveal key={exp.company}>
            <article className="experience-row">
              <div className="experience-year">
                <span className="eyebrow">0{index + 1}</span>
                <span>{exp.period}</span>
              </div>
              <div>
                <h3>{exp.role}</h3>
                <p className="experience-company">
                  {exp.company}
                  <span>{exp.location}</span>
                </p>
              </div>
              <p className="body-copy">{exp.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
