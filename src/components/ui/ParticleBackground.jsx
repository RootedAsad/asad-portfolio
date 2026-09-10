import { useEffect, useRef } from "react";

const DARK_COLORS = ["#F59E0B", "#FBBF24", "#D97706"];
const LIGHT_COLORS = ["#D97706", "#B45309", "#92400E"];
const DARK_LINE_COLOR = "#F59E0B";
const LIGHT_LINE_COLOR = "#D97706";

const isLightMode = () =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("light");

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let width, height;
    let lineColor = isLightMode() ? LIGHT_LINE_COLOR : DARK_LINE_COLOR;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    const init = () => {
      const colors = isLightMode() ? LIGHT_COLORS : DARK_COLORS;
      lineColor = isLightMode() ? LIGHT_LINE_COLOR : DARK_LINE_COLOR;
      const count = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: (Math.random() * 1.6 + 0.6) * devicePixelRatio,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.55;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120 * devicePixelRatio) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = lineColor;
            ctx.globalAlpha = 0.08 * (1 - dist / (120 * devicePixelRatio));
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    init();
    if (!prefersReducedMotion) draw();
    else {
      // draw static frame once
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.5;
        ctx.fill();
      });
    }

    const onResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", onResize);

    // Re-color particles instantly when the person toggles light/dark mode
    const themeObserver = new MutationObserver(() => {
      init();
      if (prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = 0.5;
          ctx.fill();
        });
      }
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
    />
  );
}