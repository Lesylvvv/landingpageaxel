"use client";

import { useEffect, useState } from "react";
import {
  appointments,
  googleCalendarBookingUrl,
  googleCalendarFallbackUrl,
} from "@/data/landing-content";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  VideoIcon,
} from "./icons";

function AppointmentCards() {
  return (
    <div className="appointment-grid">
      {appointments.map((appointment, index) => {
        return (
          <article
            className="appointment-card"
            key={appointment.id}
            data-reveal
          >
            <div className="appointment-card__topline">
              <span>0{index + 1}</span>
              <span className="appointment-card__state">Disponible</span>
            </div>
            <h3>{appointment.title}</h3>
            <p>{appointment.description}</p>
            <a
              href="#booking-calendar"
              className="button appointment-card__button"
              onClick={() =>
                trackEvent("appointment_type_selected", {
                  appointment_type: appointment.analyticsId,
                })
              }
            >
              Choisir ce rendez-vous <ArrowRightIcon />
            </a>
          </article>
        );
      })}
    </div>
  );
}

export function BookingSection() {
  return (
    <section className="section booking-section" id="reservation" aria-labelledby="booking-title">
      <div className="shell">
        <div className="booking-section__intro" data-reveal>
          <span className="eyebrow">Réserve ton échange</span>
          <h2 id="booking-title">Besoin d’un coup de main pour la suite ?</h2>
          <p>
            Choisis ce qui correspond le mieux à ta situation et réserve directement un créneau
            avec moi.
          </p>
        </div>

        <p className="appointments-note">
          <ClockIcon /> Tous les rendez-vous durent 20 minutes, se déroulent sur Google Meet et
          sont entièrement gratuits.
        </p>

        <AppointmentCards />

        <div className="booking-calendar" id="booking-calendar">
          <div className="booking-calendar__intro" data-reveal>
            <span className="eyebrow">Réservation</span>
            <h3>Choisis ton créneau avec moi</h3>
            <ul className="appointment-meta" aria-label="Informations pratiques du rendez-vous">
              <li>
                <ClockIcon /> 20 minutes
              </li>
              <li>
                <CheckIcon /> Gratuit
              </li>
              <li>
                <VideoIcon /> En visio
              </li>
              <li>
                <CheckIcon /> Sans engagement
              </li>
            </ul>
          </div>

          <div className="google-calendar-embed">
            <iframe
              src={googleCalendarBookingUrl}
              title="Réserver un rendez-vous avec moi sur Google Calendar"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => trackEvent("booking_calendar_viewed", { provider: "google_calendar" })}
            />
          </div>

          <p className="booking-calendar__fallback">
            Le calendrier ne s’affiche pas ?
            <a
              className="button button--secondary"
              href={googleCalendarFallbackUrl}
              target="_blank"
              rel="noreferrer"
            >
              Voir les créneaux disponibles <ArrowRightIcon />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const booking = document.getElementById("reservation");
    const footer = document.getElementById("footer");
    const testimonialCarousel = document.querySelector(".testimonial-carousel");
    if (!hero || !booking || !footer) return;

    const visibility = { hero: true, booking: false, footer: false, testimonialCarousel: false };
    const update = () =>
      setVisible(
        !visibility.hero &&
          !visibility.booking &&
          !visibility.footer &&
          !visibility.testimonialCarousel,
      );
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) visibility.hero = entry.isIntersecting;
        if (entry.target === booking) visibility.booking = entry.isIntersecting;
        if (entry.target === footer) visibility.footer = entry.isIntersecting;
        if (entry.target === testimonialCarousel) {
          visibility.testimonialCarousel = entry.isIntersecting;
        }
      });
      update();
    }, { threshold: 0.08 });
    observer.observe(hero);
    observer.observe(booking);
    observer.observe(footer);
    if (testimonialCarousel) observer.observe(testimonialCarousel);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`mobile-sticky-cta${visible ? " is-visible" : ""}`}
      href="#reservation"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={() => trackEvent("cta_click", { location: "mobile_sticky" })}
    >
      <span>
        <strong>Choisir mon créneau</strong>
        <small>Gratuit · 20 min</small>
      </span>
      <ArrowRightIcon />
    </a>
  );
}
