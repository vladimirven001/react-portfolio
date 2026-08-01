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
      const driftXPixels = Math.round(Math.random() * 46 - 23);
      const driftYPixels = Math.round(-18 - Math.random() * 28);
      const driftX = `${driftXPixels}px`;
      const driftY = `${driftYPixels}px`;
      const size = `${Math.round(11 + Math.random() * 10)}px`;
      const duration = Math.round(680 + Math.random() * 220);
      const startRotateDegrees = Math.round(Math.random() * 50 - 25);
      const endRotateDegrees = Math.round(70 + Math.random() * 120);

      sparkle.className = styles.cursorSparkle;
      sparkle.textContent = pick(SPARKLES);
      sparkle.style.left = `${event.clientX}px`;
      sparkle.style.top = `${event.clientY}px`;
      sparkle.style.setProperty("--sparkle-color", pick(COLORS));
      sparkle.style.setProperty("--sparkle-size", size);
      sparkle.style.setProperty("--sparkle-x", driftX);
      sparkle.style.setProperty("--sparkle-y", driftY);
      sparkle.style.setProperty("--sparkle-mid-x", `${Math.round(driftXPixels * 0.45)}px`);
      sparkle.style.setProperty("--sparkle-mid-y", `${Math.round(driftYPixels * 0.45)}px`);
      sparkle.style.setProperty("--sparkle-duration", `${duration}ms`);
      sparkle.style.setProperty("--sparkle-start-rotate", `${startRotateDegrees}deg`);
      sparkle.style.setProperty("--sparkle-mid-rotate", `${Math.round(endRotateDegrees * 0.45)}deg`);
      sparkle.style.setProperty("--sparkle-end-rotate", `${endRotateDegrees}deg`);

      layer.appendChild(sparkle);
      window.setTimeout(() => sparkle.remove(), duration + 120);
    }

    window.addEventListener("pointermove", addSparkle, { passive: true });

    return () => {
      window.removeEventListener("pointermove", addSparkle);
      layer.remove();
    };
  }, []);

  return null;
}
