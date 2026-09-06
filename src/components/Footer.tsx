import { ArrowUp, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer id="contact" className="footer" aria-labelledby="contact-title">
      <div className="section-shell">
        <Reveal>
          <div className="footer-top">
            <p className="eyebrow">05 / Your move</p>
            <span className="availability">
              <i /> Available for full-time & freelance
            </span>
          </div>
          <div className="contact-composition">
            <h2 id="contact-title">
              Have a<br />
              <span>good one?</span>
            </h2>
            <div className="contact-side">
              <p className="handwritten">
                An idea, a project,
                <br />
                or just a hello.
              </p>
              <a
                href="mailto:nikitarimal1418@gmail.com"
                className="contact-arrow"
                aria-label="Email Nikita about your project"
              >
                <ArrowUpRight strokeWidth={1} />
              </a>
            </div>
          </div>
          <div className="contact-details">
            <a
              className="contact-email"
              href="mailto:nikitarimal1418@gmail.com"
            >
              <span>nikitarimal1418@gmail.com</span>
              <ArrowUpRight size={24} aria-hidden="true" />
            </a>
            <div className="contact-secondary">
              <a href="tel:+9779865500240">+977 9865500240</a>
              <a
                href="https://linkedin.com/in/nikitarimal1418"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Nikita Rimal</span>
          <span>Made in Nepal. Open to everywhere.</span>
          <a href="#top">
            <span>Back to the top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
