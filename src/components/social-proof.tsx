"use client";

import Image from "next/image";
import Script from "next/script";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { ArrowLeftIcon, ArrowRightIcon, CloseIcon, PlayIcon } from "@/components/icons";
import { statistics, testimonials } from "@/data/landing-content";

const HUBSPOT_LOADER_URL = "https://static.hsappstatic.net/video-embed/ex/loader.js";
const HUBSPOT_PORTAL_ID = "145727087";
const HUBSPOT_ACCENT = "#F69D00";

type Testimonial = (typeof testimonials)[number];

type HubSpotPlayerInstance = {
  triggerPause?: () => void;
};

type HubSpotVideoApi = {
  getPlayer?: (embedId: string) => HubSpotPlayerInstance | undefined;
  pauseAllPlayers?: () => void;
  renderPlayer: (
    element: HTMLElement,
    options: Record<string, boolean | number | string>,
  ) => HubSpotPlayerInstance | undefined;
};

declare global {
  interface Window {
    hsVideoApi?: HubSpotVideoApi;
  }
}

let hubspotEmbedSequence = 0;
const testimonialSlides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(query.matches);

    updatePreference();
    query.addEventListener("change", updatePreference);
    return () => query.removeEventListener("change", updatePreference);
  }, []);

  return reducedMotion;
}

function HubspotPlayer({
  loaderFailed,
  loaderReady,
  mode,
  reducedMotion,
  testimonial,
}: {
  loaderFailed: boolean;
  loaderReady: boolean;
  mode: "carousel" | "modal";
  reducedMotion: boolean;
  testimonial: Testimonial;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [playerFailed, setPlayerFailed] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    if (!loaderReady || !mountRef.current || !window.hsVideoApi) return;

    const mount = mountRef.current;
    const embedId = `axel-${mode}-${testimonial.videoId}-${++hubspotEmbedSequence}`;
    let player: HubSpotPlayerInstance | undefined;
    let revealTimer: ReturnType<typeof setTimeout> | undefined;
    let cancelled = false;

    setPlayerFailed(false);
    setPlayerReady(false);
    mount.replaceChildren();
    mount.dataset.hsvEmbedId = embedId;
    mount.dataset.hsvId = testimonial.videoId;

    try {
      player = window.hsVideoApi.renderPlayer(mount, {
        altText: testimonial.alt,
        autoplay: !reducedMotion,
        embedId,
        env: "prod",
        height: "100%",
        hiddenControls: mode === "carousel",
        id: Number(testimonial.videoId),
        loop: true,
        muted: mode === "carousel",
        objectFit: "cover",
        playButtonColor: HUBSPOT_ACCENT,
        portalId: HUBSPOT_PORTAL_ID,
        region: "eu1",
        width: "100%",
      });

      revealTimer = setTimeout(() => {
        if (!cancelled) setPlayerReady(true);
      }, 500);
    } catch {
      queueMicrotask(() => {
        if (!cancelled) setPlayerFailed(true);
      });
    }

    return () => {
      cancelled = true;
      if (revealTimer) clearTimeout(revealTimer);
      player?.triggerPause?.();
      window.hsVideoApi?.getPlayer?.(embedId)?.triggerPause?.();
      mount.replaceChildren();
    };
  }, [loaderReady, mode, reducedMotion, testimonial]);

  const showFallback = loaderFailed || playerFailed;

  return (
    <div className={`hubspot-player hubspot-player--${mode}`}>
      <Image
        alt=""
        aria-hidden="true"
        className="hubspot-player__poster"
        fill
        sizes={mode === "modal" ? "(max-width: 700px) 80vw, 430px" : "300px"}
        src={testimonial.thumbnailUrl}
      />
      <div
        className={`hubspot-player__mount${playerReady ? " is-ready" : ""}`}
        ref={mountRef}
      />
      {!playerReady && !showFallback ? (
        <span className="hubspot-player__loader" aria-label="Chargement de la vidéo" />
      ) : null}
      {showFallback ? (
        <a
          className="hubspot-player__fallback"
          href={testimonial.shareUrl}
          rel="noreferrer"
          target="_blank"
        >
          Voir le témoignage
        </a>
      ) : null}
    </div>
  );
}

function ResultsMarquee() {
  return (
    <div className="proof-marquee" aria-label="Résultats et informations clés">
      <div className="proof-marquee__track">
        {[0, 1].map((copyIndex) => (
          <div
            aria-hidden={copyIndex === 1 ? "true" : undefined}
            className="proof-marquee__group"
            key={copyIndex}
          >
            {statistics.map((stat, statIndex) => (
              <div
                className={`proof-marquee__item${statIndex === 0 ? " is-primary" : ""}`}
                key={`${copyIndex}-${stat.display}`}
              >
                <strong>{stat.display}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function physicalToTestimonialIndex(physicalIndex: number) {
  if (physicalIndex === 0) return testimonials.length - 1;
  if (physicalIndex === testimonials.length + 1) return 0;
  return physicalIndex - 1;
}

export function SocialProof() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [activePhysicalIndex, setActivePhysicalIndex] = useState(1);
  const [hasApproached, setHasApproached] = useState(false);
  const [inPlaybackRange, setInPlaybackRange] = useState(false);
  const [loaderFailed, setLoaderFailed] = useState(false);
  const [loaderReady, setLoaderReady] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const activeTestimonialIndex = physicalToTestimonialIndex(activePhysicalIndex);

  const scrollToPhysicalIndex = useCallback(
    (physicalIndex: number, behavior: ScrollBehavior = "smooth") => {
      const viewport = carouselRef.current;
      const slide = viewport?.querySelector<HTMLElement>(
        `[data-physical-index="${physicalIndex}"]`,
      );
      if (!viewport || !slide) return;

      const viewportBounds = viewport.getBoundingClientRect();
      const slideBounds = slide.getBoundingClientRect();
      const left =
        viewport.scrollLeft +
        slideBounds.left +
        slideBounds.width / 2 -
        (viewportBounds.left + viewportBounds.width / 2);
      if (behavior === "auto" || reducedMotion) {
        const previousScrollBehavior = viewport.style.scrollBehavior;
        const previousScrollSnapType = viewport.style.scrollSnapType;
        viewport.style.scrollBehavior = "auto";
        viewport.style.scrollSnapType = "none";
        void viewport.offsetWidth;
        viewport.scrollTo({ left, behavior: "auto" });
        requestAnimationFrame(() => {
          viewport.style.scrollBehavior = previousScrollBehavior;
          viewport.style.scrollSnapType = previousScrollSnapType;
        });
      } else {
        viewport.scrollTo({ left, behavior });
      }
      setActivePhysicalIndex(physicalIndex);
    },
    [reducedMotion],
  );

  const normaliseLoopPosition = useCallback(
    (physicalIndex: number) => {
      if (physicalIndex === 0) {
        scrollToPhysicalIndex(testimonials.length, "auto");
      } else if (physicalIndex === testimonials.length + 1) {
        scrollToPhysicalIndex(1, "auto");
      }
    },
    [scrollToPhysicalIndex],
  );

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => scrollToPhysicalIndex(1, "auto"));
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollToPhysicalIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) {
      setHasApproached(true);
      setInPlaybackRange(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInPlaybackRange(entry.isIntersecting);
        if (entry.isIntersecting) setHasApproached(true);
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleCarouselScroll = useCallback(() => {
    const viewport = carouselRef.current;
    if (!viewport) return;

    const viewportBounds = viewport.getBoundingClientRect();
    const viewportCenter = viewportBounds.left + viewportBounds.width / 2;
    const slideElements = Array.from(
      viewport.querySelectorAll<HTMLElement>("[data-physical-index]"),
    );
    const closestSlide = slideElements.reduce((closest, slide) => {
      const slideBounds = slide.getBoundingClientRect();
      const closestBounds = closest.getBoundingClientRect();
      const slideCenter = slideBounds.left + slideBounds.width / 2;
      const closestCenter = closestBounds.left + closestBounds.width / 2;
      return Math.abs(slideCenter - viewportCenter) < Math.abs(closestCenter - viewportCenter)
        ? slide
        : closest;
    });
    const closestIndex = Number(closestSlide.dataset.physicalIndex);

    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      setActivePhysicalIndex(closestIndex);
      if (closestIndex === 0 || closestIndex === testimonials.length + 1) {
        normaliseLoopPosition(closestIndex);
      } else {
        scrollToPhysicalIndex(closestIndex);
      }
    }, 180);
  }, [normaliseLoopPosition, scrollToPhysicalIndex]);

  const moveCarousel = (direction: -1 | 1) => {
    const target = Math.max(
      0,
      Math.min(testimonials.length + 1, activePhysicalIndex + direction),
    );
    scrollToPhysicalIndex(target);
    if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => normaliseLoopPosition(target), 520);
  };

  const openModal = (testimonialIndex: number) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    window.hsVideoApi?.pauseAllPlayers?.();
    setModalClosing(false);
    setModalIndex(testimonialIndex);
  };

  const finishClosingModal = useCallback(() => {
    setModalIndex(null);
    setModalClosing(false);
    previousFocusRef.current?.focus();
  }, []);

  const closeModal = useCallback(() => {
    window.hsVideoApi?.pauseAllPlayers?.();
    setModalClosing(true);
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(finishClosingModal, reducedMotion ? 0 : 180);
  }, [finishClosingModal, reducedMotion]);

  useEffect(() => {
    if (modalIndex === null) return;

    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    const focusableSelector =
      'button:not([disabled]), [href], iframe, [tabindex]:not([tabindex="-1"])';
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeModal();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLElement>("button")?.focus());

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
    };
  }, [closeModal, modalIndex]);

  useEffect(
    () => () => {
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const handleSlideAction = (physicalIndex: number) => {
    if (physicalIndex === activePhysicalIndex) {
      openModal(physicalToTestimonialIndex(physicalIndex));
    } else {
      scrollToPhysicalIndex(physicalIndex);
    }
  };

  const handleDialogBackdrop = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) closeModal();
  };

  const handleSlideKeyDown = (
    event: ReactKeyboardEvent<HTMLButtonElement>,
    physicalIndex: number,
  ) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      scrollToPhysicalIndex(
        Math.max(
          0,
          Math.min(
            testimonials.length + 1,
            physicalIndex + (event.key === "ArrowLeft" ? -1 : 1),
          ),
        ),
      );
    }
  };

  const modal =
    modalIndex !== null && typeof document !== "undefined"
      ? createPortal(
          <div
            className="testimonial-modal"
            data-closing={modalClosing ? "true" : undefined}
            onMouseDown={handleDialogBackdrop}
          >
            <div
              aria-describedby="testimonial-modal-help"
              aria-labelledby="testimonial-modal-title"
              aria-modal="true"
              className="testimonial-modal__dialog"
              ref={dialogRef}
              role="dialog"
            >
              <div className="testimonial-modal__topbar">
                <div>
                  <span>Témoignage étudiant</span>
                  <h3 id="testimonial-modal-title">{testimonials[modalIndex].name}</h3>
                </div>
                <button
                  aria-label="Fermer le témoignage"
                  className="testimonial-modal__close"
                  onClick={closeModal}
                  type="button"
                >
                  <CloseIcon />
                </button>
              </div>
              <p className="sr-only" id="testimonial-modal-help">
                Utilise les contrôles du lecteur pour régler le son, mettre en pause ou passer en
                plein écran.
              </p>
              <div className="testimonial-modal__stage">
                <button
                  aria-label="Témoignage précédent"
                  className="testimonial-modal__arrow testimonial-modal__arrow--previous"
                  onClick={() => {
                    window.hsVideoApi?.pauseAllPlayers?.();
                    setModalIndex((modalIndex - 1 + testimonials.length) % testimonials.length);
                  }}
                  type="button"
                >
                  <ArrowLeftIcon />
                </button>
                <div className="testimonial-modal__video">
                  <HubspotPlayer
                    key={`modal-${testimonials[modalIndex].videoId}`}
                    loaderFailed={loaderFailed}
                    loaderReady={loaderReady}
                    mode="modal"
                    reducedMotion={reducedMotion}
                    testimonial={testimonials[modalIndex]}
                  />
                </div>
                <button
                  aria-label="Témoignage suivant"
                  className="testimonial-modal__arrow testimonial-modal__arrow--next"
                  onClick={() => {
                    window.hsVideoApi?.pauseAllPlayers?.();
                    setModalIndex((modalIndex + 1) % testimonials.length);
                  }}
                  type="button"
                >
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="social-proof" ref={sectionRef}>
      <ResultsMarquee />

      <div className="shell testimonials" id="temoignages">
        <header className="testimonials__heading" data-reveal>
          <h2>Ils sont passés par là.</h2>
          <p>
            Orientation, alternance, CV… découvre ce que l’accompagnement leur a vraiment
            apporté.
          </p>
        </header>

        <div className="testimonial-carousel" data-reveal>
          <div
            aria-label="Témoignages vidéo"
            aria-roledescription="carrousel"
            className="testimonial-carousel__viewport"
            onScroll={handleCarouselScroll}
            ref={carouselRef}
            role="region"
          >
            <div className="testimonial-carousel__track">
              {testimonialSlides.map((testimonial, physicalIndex) => {
                const testimonialIndex = physicalToTestimonialIndex(physicalIndex);
                const isActive = physicalIndex === activePhysicalIndex;
                const shouldRenderPlayer =
                  isActive && inPlaybackRange && modalIndex === null && loaderReady;

                return (
                  <article
                    aria-label={`${testimonial.name}, témoignage ${testimonialIndex + 1} sur ${testimonials.length}`}
                    className={`testimonial-slide${isActive ? " is-active" : ""}`}
                    data-physical-index={physicalIndex}
                    key={`${testimonial.videoId}-${physicalIndex}`}
                  >
                    <div className="testimonial-slide__media">
                      {shouldRenderPlayer ? (
                        <HubspotPlayer
                          key={`carousel-${testimonial.videoId}-${physicalIndex}`}
                          loaderFailed={loaderFailed}
                          loaderReady={loaderReady}
                          mode="carousel"
                          reducedMotion={reducedMotion}
                          testimonial={testimonial}
                        />
                      ) : (
                        <Image
                          alt={testimonial.alt}
                          className="testimonial-slide__poster"
                          fill
                          sizes="(max-width: 700px) 72vw, 300px"
                          src={testimonial.thumbnailUrl}
                        />
                      )}
                      <button
                        aria-label={
                          isActive
                            ? `Ouvrir le témoignage de ${testimonial.name} avec le son`
                            : `Afficher le témoignage de ${testimonial.name}`
                        }
                        className="testimonial-slide__action"
                        onClick={() => handleSlideAction(physicalIndex)}
                        onKeyDown={(event) => handleSlideKeyDown(event, physicalIndex)}
                        type="button"
                      >
                        <span className="testimonial-slide__play" aria-hidden="true">
                          <PlayIcon />
                        </span>
                        {isActive ? (
                          <span className="testimonial-slide__sound">Voir avec le son</span>
                        ) : null}
                      </button>
                    </div>
                    <p>{testimonial.name}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="testimonial-carousel__controls">
            <button aria-label="Témoignage précédent" onClick={() => moveCarousel(-1)} type="button">
              <ArrowLeftIcon />
            </button>
            <p aria-live="polite">
              <strong>{String(activeTestimonialIndex + 1).padStart(2, "0")}</strong>
              <span aria-hidden="true"> / </span>
              {String(testimonials.length).padStart(2, "0")}
            </p>
            <button aria-label="Témoignage suivant" onClick={() => moveCarousel(1)} type="button">
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {hasApproached ? (
        <Script
          data-hs-env="prod"
          data-hs-external="true"
          data-hs-portal-id={HUBSPOT_PORTAL_ID}
          data-hs-region="eu1"
          data-hs-seo="true"
          id="hubspot-video-loader"
          onError={() => setLoaderFailed(true)}
          onLoad={() => setLoaderReady(Boolean(window.hsVideoApi))}
          onReady={() => setLoaderReady(Boolean(window.hsVideoApi))}
          src={HUBSPOT_LOADER_URL}
          strategy="lazyOnload"
        />
      ) : null}
      {modal}
    </div>
  );
}
