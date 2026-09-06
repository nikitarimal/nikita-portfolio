"use client";
import { useState } from "react";
import { Pause, Play } from "lucide-react";
export default function Marquee({
  text,
  reverse = false,
}: {
  text: string;
  reverse?: boolean;
}) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="marquee">
      <div
        aria-hidden="true"
        className={`marquee-track${reverse ? " marquee-reverse" : ""}`}
        style={{ animationPlayState: paused ? "paused" : undefined }}
      >
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {[0, 1, 2, 3].map((item) => (
              <span key={item}>
                {text}
                <span className="marquee-star">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <button
        className="marquee-toggle"
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Play moving banner" : "Pause moving banner"}
        aria-pressed={paused}
      >
        {paused ? <Play size={15} /> : <Pause size={15} />}
      </button>
    </div>
  );
}
