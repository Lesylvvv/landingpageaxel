"use client";

import { useEffect, useRef } from "react";
import { methodSteps } from "@/data/landing-content";

export function MethodTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const steps = Array.from(timeline.querySelectorAll<HTMLElement>(".method-step"));
    const headings = steps.map((step) => step.querySelector<HTMLElement>("h3")!);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observingScroll = false;
    let activeIndex = -1;

    const update = () => {
      frame = 0;
      if (motion.matches) return;

      const top = timeline.getBoundingClientRect().top;
      const anchors = headings.map((heading) => {
        const bounds = heading.getBoundingClientRect();
        return bounds.top - top + Math.min(bounds.height / 2, 18);
      });
      const start = anchors[0];
      const end = anchors[anchors.length - 1];
      const readingLine = window.innerHeight * 0.42 - top;
      const distance = Math.max(0, Math.min(end - start, readingLine - start));
      const progress = end > start ? distance / (end - start) : 0;
      const nextIndex = anchors.reduce(
        (nearest, anchor, index) =>
          Math.abs(anchor - readingLine) < Math.abs(anchors[nearest] - readingLine)
            ? index
            : nearest,
        0,
      );

      timeline.style.setProperty("--method-rail-top", `${start}px`);
      timeline.style.setProperty("--method-rail-height", `${end - start}px`);
      timeline.style.setProperty("--method-progress", String(progress));
      timeline.style.setProperty("--method-cursor-y", `${distance}px`);
      timeline.dataset.enhanced = "true";

      if (activeIndex !== nextIndex) {
        activeIndex = nextIndex;
        steps.forEach((step, index) => {
          step.dataset.state = index === nextIndex ? "active" : index < nextIndex ? "past" : "future";
          if (index === nextIndex) step.setAttribute("aria-current", "step");
          else step.removeAttribute("aria-current");
        });
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Only listen while the method is near the viewport; at most one update per frame.
    const setScrollObservation = (enabled: boolean) => {
      if (enabled === observingScroll) return;
      observingScroll = enabled;
      if (enabled) window.addEventListener("scroll", schedule, { passive: true });
      else window.removeEventListener("scroll", schedule);
    };

    const observer = new IntersectionObserver(([entry]) => {
      setScrollObservation(entry.isIntersecting && !motion.matches);
      schedule();
    }, { rootMargin: "200px 0px" });

    const onMotionChange = () => {
      if (motion.matches) {
        setScrollObservation(false);
        if (frame) cancelAnimationFrame(frame);
        frame = 0;
        delete timeline.dataset.enhanced;
        activeIndex = -1;
        steps.forEach((step) => {
          delete step.dataset.state;
          step.removeAttribute("aria-current");
        });
      }
      observer.unobserve(timeline);
      observer.observe(timeline);
      schedule();
    };

    const resize = new ResizeObserver(schedule);
    resize.observe(timeline);
    window.addEventListener("resize", schedule, { passive: true });
    motion.addEventListener("change", onMotionChange);
    observer.observe(timeline);
    schedule();

    return () => {
      observer.disconnect();
      resize.disconnect();
      setScrollObservation(false);
      window.removeEventListener("resize", schedule);
      motion.removeEventListener("change", onMotionChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="method-timeline" ref={timelineRef}>
      <div className="method-timeline__rail" aria-hidden="true">
        <span className="method-timeline__fill" />
        <span className="method-timeline__cursor" />
      </div>
      <ol className="method-steps">
        {methodSteps.map((step, index) => (
          <li className="method-step" key={step.title}>
            <h3>
              <span className="method-steps__number" aria-hidden="true">0{index + 1}</span>
              <span>{step.title}</span>
            </h3>
            <div className="method-step__card"><p>{step.text}</p></div>
          </li>
        ))}
      </ol>
    </div>
  );
}
