"use client";

import { useEffect, useRef } from "react";
import { statistics } from "@/data/landing-content";

function AnimatedValue({
  value,
  prefix,
  suffix,
  display,
}: (typeof statistics)[number]) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    node.textContent = `${prefix}0${suffix}`;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const duration = 850;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(value * eased);
          node.textContent = `${prefix}${new Intl.NumberFormat("fr-FR").format(current)}${suffix}`;
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [prefix, suffix, value]);

  return (
    <span ref={ref} aria-label={display}>
      {display}
    </span>
  );
}

export function AnimatedStats() {
  return (
    <div className="stats-grid">
      {statistics.map((stat) => (
        <article className="stat-card" key={stat.label} data-reveal>
          <p className="stat-card__value">
            <AnimatedValue {...stat} />
          </p>
          <p>{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
