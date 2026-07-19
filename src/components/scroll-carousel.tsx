"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./icons";

export function ScrollCarousel({
  children,
  label,
  itemCount,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  itemCount: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const items = useCallback(() => {
    return Array.from(
      trackRef.current?.querySelectorAll<HTMLElement>("[data-carousel-item]") ?? [],
    );
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const carouselItems = items();
      const nextIndex = Math.max(0, Math.min(index, carouselItems.length - 1));
      carouselItems[nextIndex]?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "nearest",
        inline: "start",
      });
      setActiveIndex(nextIndex);
    },
    [items],
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const carouselItems = items();
        if (!carouselItems.length) return;
        const closest = carouselItems.reduce(
          (best, item, index) => {
            const distance = Math.abs(item.offsetLeft - track.scrollLeft);
            return distance < best.distance ? { index, distance } : best;
          },
          { index: 0, distance: Number.POSITIVE_INFINITY },
        );
        setActiveIndex(closest.index);
      });
    };

    track.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
    };
  }, [items]);

  return (
    <div className={`carousel ${className}`.trim()} aria-roledescription="carrousel">
      <div
        ref={trackRef}
        className="carousel__track"
        tabIndex={0}
        role="region"
        aria-label={label}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            goTo(activeIndex - 1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            goTo(activeIndex + 1);
          }
        }}
      >
        {children}
      </div>

      <div className="carousel__controls">
        <div className="carousel__arrows">
          <button
            type="button"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Voir l’élément précédent"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex >= itemCount - 1}
            aria-label="Voir l’élément suivant"
          >
            <ArrowRightIcon />
          </button>
        </div>

        <div className="carousel__dots" aria-label="Choisir un élément">
          {Array.from({ length: itemCount }, (_, index) => (
            <button
              key={index}
              type="button"
              className={activeIndex === index ? "is-active" : ""}
              aria-label={`Afficher l’élément ${index + 1} sur ${itemCount}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
