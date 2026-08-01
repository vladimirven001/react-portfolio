import { useEffect } from "react";
import styles from "../styles/GeoPortfolio.module.css";

const SPARKLES = ["✦", "✧", "★", "✩"];
const COLORS = ["#ffffff", "#fff06f", "#bdefff", "#f5adc9"];

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export default function CursorSparkles() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    if (reducedMotion.matches || coarsePointer.matches) {
      return undefined;
    }

    const layer = document.createElement("div");
    let lastSparkle = 0;

    layer.className = styles.sparkleLayer;
    document.body.appendChild(layer);

    function addSparkle(event) {
      const now = performance.now();

      if (now - lastSparkle < 38) {
        return;
      }

      lastSparkle = now;

      const sparkle = document.createElement("span");
      const driftX = `${Math.round(Math.random() * 46 - 23)}px`;
      const driftY = `${Math.round(-18 - Math.random() * 28)}px`;
      const size = `${Math.round(11 + Math.random() * 10)}px`;

      sparkle.className = styles.cursorSparkle;
      sparkle.textContent = pick(SPARKLES);
      sparkle.style.left = `${event.clientX}px`;
      sparkle.style.top = `${event.clientY}px`;
      sparkle.style.setProperty("--sparkle-color", pick(COLORS));
      sparkle.style.setProperty("--sparkle-size", size);
      sparkle.style.setProperty("--sparkle-x", driftX);
      sparkle.style.setProperty("--sparkle-y", driftY);

      layer.appendChild(sparkle);
      window.setTimeout(() => sparkle.remove(), 760);
    }

    window.addEventListener("pointermove", addSparkle, { passive: true });

    return () => {
      window.removeEventListener("pointermove", addSparkle);
      layer.remove();
    };
  }, []);

  return null;
}
