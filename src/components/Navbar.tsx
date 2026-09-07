"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Expertise", href: "#expertise" },
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    let previousY = window.scrollY;
    let ticking = false;
    let frame = 0;

    const updateHeader = () => {
      const currentY = window.scrollY;
      const difference = currentY - previousY;

      if (currentY <= 16) {
        setHidden(false);
      } else if (Math.abs(difference) >= 1) {
        setHidden(difference > 0);
      }

      previousY = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        frame = window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const main = document.getElementById("main");
    const footer = document.getElementById("contact");

    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }

    return () => {
      document.documentElement.classList.remove("menu-open");
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    const breakpoint = window.matchMedia("(min-width: 900px)");
    const resize = () => {
      if (breakpoint.matches) setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    breakpoint.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
      breakpoint.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <header
      ref={header}
      className={`site-header${open ? " is-open" : ""}${
        hidden && !open ? " is-hidden" : ""
      }`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="nav-inner section-shell">
        <a
          href="#top"
          className="wordmark"
          aria-label="Nikita Rimal, back to top"
          onClick={() => setOpen(false)}
        >
          nr<span aria-hidden="true">.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Say hello <ArrowUpRight size={16} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {[...links, { name: "Contact", href: "#contact" }].map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.name}
            <ArrowUpRight size={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}
