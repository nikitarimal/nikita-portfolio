import Reveal from "./Reveal";

const skills = [
  {
    category: "Product & interaction",
    items: [
      "User Experience Design",
      "User Interface Design",
      "Wireframing & Journeys",
      "Rapid Prototyping",
      "Interaction Patterns",
      "Design Systems",
      "Responsive Architecture",
    ],
    color: "text-white",
  },
  {
    category: "Tools of the trade",
    items: [
      "Figma",
      "FigJam",
      "Adobe Suite",
      "Prototyping Tools",
      "Design-to-Code",
      "Animation Principles",
    ],
    color: "text-accent",
  },
  {
    category: "The visual side",
    items: [
      "Graphic Systems",
      "Digital Branding",
      "Typographic Design",
      "Visual Strategy",
      "Color Theory",
      "Spatial Layouts",
    ],
    color: "text-white/40",
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="expertise"
      className="expertise section-shell section-space"
      aria-labelledby="expertise-title"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow section-label">04 / In my toolkit</p>
          <h2 id="expertise-title" className="section-title">
            The how<span className="red-period">.</span>
          </h2>
        </div>
        <p className="section-summary">
          The skills and tools
          <br />
          behind the finished screens.
        </p>
      </Reveal>
      <div className="expertise-grid">
        {skills.map((group, index) => (
          <Reveal
            className="expertise-card"
            key={group.category}
            delay={index * 0.05}
          >
            <div className="expertise-number">
              0{index + 1}
              <span aria-hidden="true">↗</span>
            </div>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
