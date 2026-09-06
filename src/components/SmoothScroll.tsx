"use client";
import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "@studio-freight/lenis";
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let lenis: Lenis | undefined;
    let frame = 0;
    const configure = () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches || !finePointer.matches) return;
      lenis = new Lenis({ lerp: 0.12, smoothWheel: true, syncTouch: false });
      const tick = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const handleAnchor = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest<HTMLAnchorElement>('a[href^="#"]')
          : null;
      if (!link || link.hash.length < 2) return;
      const target = document.getElementById(
        decodeURIComponent(link.hash.slice(1)),
      );
      if (!target) return;
      event.preventDefault();
      const focusTarget = () => {
        if (!target.hasAttribute("tabindex")) {
          target.setAttribute("tabindex", "-1");
          target.addEventListener(
            "blur",
            () => target.removeAttribute("tabindex"),
            { once: true },
          );
        }
        target.focus({ preventScroll: true });
      };
      history.pushState(null, "", link.hash);
      if (lenis)
        lenis.scrollTo(target, { offset: -96, onComplete: focusTarget });
      else {
        target.scrollIntoView({ behavior: "auto" });
        focusTarget();
      }
    };
    configure();
    preference.addEventListener("change", configure);
    finePointer.addEventListener("change", configure);
    document.addEventListener("click", handleAnchor);
    return () => {
      cancelAnimationFrame(frame);
      lenis?.destroy();
      preference.removeEventListener("change", configure);
      finePointer.removeEventListener("change", configure);
      document.removeEventListener("click", handleAnchor);
    };
  }, []);
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
