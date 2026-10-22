import { useEffect, useState } from "react";
import elkMark from "@/assets/elk-mark.png";

const SESSION_KEY = "elk-preloaded-v1";
const WORD = "ELK HEATING & AIR";

/**
 * Premium brand preloader. Shows once per browser session:
 * elk mark drops in inside a spinning flame/frost ring, the wordmark
 * staggers up, a heat-to-cool progress bar fills, then the curtain lifts.
 */
export function Preloader() {
  const [phase, setPhase] = useState<"show" | "exit" | "hidden">("show");

  useEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) {
      setPhase("hidden");
      return;
    }
    document.body.style.overflow = "hidden";
    const exitTimer = window.setTimeout(() => setPhase("exit"), 1500);
    const hideTimer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // ignore
      }
      document.body.style.overflow = "";
      setPhase("hidden");
    }, 2150);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      aria-hidden="true"
      className={`preloader-overlay${phase === "exit" ? " preloader-exit" : ""}`}
    >
      <div className="relative flex items-center justify-center">
        <div className="preloader-ring" />
        <img src={elkMark} alt="" className="preloader-mark" />
      </div>
      <div className="preloader-word">
        {WORD.split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${0.25 + i * 0.035}s` }}>
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </div>
      <div className="preloader-tagline">Honest work. Done right.</div>
      <div className="preloader-bar">
        <span />
      </div>
    </div>
  );
}
