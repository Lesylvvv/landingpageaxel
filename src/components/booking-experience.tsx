"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  appointments,
  type AppointmentId,
} from "@/data/landing-content";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowRightIcon,
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  VideoIcon,
} from "./icons";

type BookingContextValue = {
  selectedId: AppointmentId | null;
  selectAppointment: (id: AppointmentId) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

function useBooking() {
  const value = useContext(BookingContext);
  if (!value) throw new Error("useBooking must be used inside BookingProvider");
  return value;
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [selectedId, setSelectedId] = useState<AppointmentId | null>(null);

  const value = useMemo<BookingContextValue>(
    () => ({
      selectedId,
      selectAppointment: (id) => {
        const appointment = appointments.find((item) => item.id === id);
        setSelectedId(id);
        trackEvent("appointment_type_selected", {
          appointment_type: appointment?.analyticsId ?? id,
        });
        window.setTimeout(() => {
          document
            .getElementById("reservation")
            ?.scrollIntoView({
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
              block: "start",
            });
        }, 120);
      },
    }),
    [selectedId],
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function AppointmentCards() {
  const { selectedId, selectAppointment } = useBooking();

  return (
    <div className="appointment-grid">
      {appointments.map((appointment, index) => {
        const selected = selectedId === appointment.id;
        return (
          <article
            className={`appointment-card${selected ? " is-selected" : ""}`}
            key={appointment.id}
            data-reveal
          >
            <div className="appointment-card__topline">
              <span>0{index + 1}</span>
              <span className="appointment-card__state">
                {selected ? (
                  <>
                    <CheckIcon /> Sélectionné
                  </>
                ) : (
                  "Rendez-vous gratuit"
                )}
              </span>
            </div>
            <h3>{appointment.title}</h3>
            <p>{appointment.description}</p>
            <ul className="appointment-meta" aria-label="Informations du rendez-vous">
              <li>
                <ClockIcon /> 20 min
              </li>
              <li>
                <VideoIcon /> Google Meet
              </li>
              <li>
                <CheckIcon /> 100 % gratuit
              </li>
            </ul>
            <button
              type="button"
              className="button appointment-card__button"
              aria-pressed={selected}
              onClick={() => selectAppointment(appointment.id)}
            >
              {selected ? "Rendez-vous sélectionné" : "Choisir ce rendez-vous"}
              {selected ? <CheckIcon /> : <ArrowRightIcon />}
            </button>
          </article>
        );
      })}
    </div>
  );
}

function CalendarPlaceholder({ selectedTitle }: { selectedTitle?: string }) {
  const weekdays = ["L", "M", "M", "J", "V", "S", "D"];
  const days = Array.from({ length: 28 }, (_, index) => index + 1);

  return (
    <div className="calendar-mockup" aria-label="Aperçu non interactif du futur calendrier">
      <div className="calendar-mockup__heading">
        <div>
          <span className="eyebrow">Aperçu du calendrier</span>
          <h3>{selectedTitle ?? "Choisis d’abord ton besoin"}</h3>
        </div>
        <span className="calendar-mockup__month">Juillet 2026</span>
      </div>
      <div className="calendar-mockup__body" aria-hidden="true">
        <div className="calendar-grid">
          {weekdays.map((day, index) => (
            <span className="calendar-grid__weekday" key={`${day}-${index}`}>
              {day}
            </span>
          ))}
          {days.map((day) => (
            <span
              className={`calendar-grid__day${[9, 11, 16, 18, 23].includes(day) ? " is-open" : ""}`}
              key={day}
            >
              {day}
            </span>
          ))}
        </div>
        <div className="calendar-slots">
          <p>Créneaux disponibles</p>
          {[
            "10:00",
            "11:20",
            "14:00",
            "15:40",
          ].map((time) => (
            <span key={time}>{time}</span>
          ))}
        </div>
      </div>
      <p className="calendar-mockup__notice">
        <CalendarIcon /> Intégration Calendly bientôt disponible — cet aperçu n’est pas interactif.
      </p>
    </div>
  );
}

function isValidCalendlyUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" &&
      (url.hostname === "calendly.com" || url.hostname.endsWith(".calendly.com"));
  } catch {
    return false;
  }
}

export function BookingSection() {
  const { selectedId } = useBooking();
  const [loadedAppointmentId, setLoadedAppointmentId] = useState<AppointmentId | null>(null);
  const selected = appointments.find((appointment) => appointment.id === selectedId);
  const hasValidUrl = Boolean(selected && isValidCalendlyUrl(selected.calendlyUrl));
  const embedLoaded = selectedId !== null && loadedAppointmentId === selectedId;

  useEffect(() => {
    if (!embedLoaded) return;
    const onMessage = (event: MessageEvent) => {
      if (typeof event.origin !== "string") return;
      let calendlyOrigin = false;
      try {
        const hostname = new URL(event.origin).hostname;
        calendlyOrigin = hostname === "calendly.com" || hostname.endsWith(".calendly.com");
      } catch {
        return;
      }
      if (!calendlyOrigin) return;
      const eventName = event.data?.event;
      if (eventName === "calendly.date_and_time_selected") {
        trackEvent("calendly_date_selected", {
          appointment_type: selected?.analyticsId,
        });
      }
      if (eventName === "calendly.event_scheduled") {
        trackEvent("appointment_scheduled", {
          appointment_type: selected?.analyticsId,
        });
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [embedLoaded, selected?.analyticsId]);

  return (
    <section className="section booking-section" id="reservation" aria-labelledby="booking-title">
      <div className="shell">
        <div className="booking-intro" data-reveal>
          <span className="eyebrow">La prochaine étape</span>
          <h2 id="booking-title">20 minutes pour y voir plus clair.</h2>
          <p>
            Choisis ton besoin, sélectionne un créneau et retrouve-moi sur Google Meet. Tu
            recevras toutes les informations juste après ta réservation.
          </p>
          {selected ? (
            <div className="selected-appointment" role="status">
              <CheckIcon />
              <span>
                Besoin sélectionné : <strong>{selected.title}</strong>
              </span>
              <a href="#rendez-vous">Modifier</a>
            </div>
          ) : (
            <a className="text-link" href="#rendez-vous">
              Choisir mon type de rendez-vous <ArrowRightIcon />
            </a>
          )}
        </div>

        {embedLoaded && selected && hasValidUrl ? (
          <div className="calendly-embed" aria-live="polite">
            <iframe
              src={selected.calendlyUrl}
              title={`Réserver le rendez-vous ${selected.title} sur Calendly`}
              loading="lazy"
            />
          </div>
        ) : hasValidUrl && selected ? (
          <div className="calendar-consent" data-reveal>
            <CalendarPlaceholder selectedTitle={selected.title} />
            <div className="calendar-consent__action">
              <p>
                Calendly est un service tiers. Il ne sera chargé qu’après ton action afin de
                préserver les performances et ton choix de confidentialité.
              </p>
              <button
                type="button"
                className="button"
                onClick={() => {
                  setLoadedAppointmentId(selected.id);
                  trackEvent("calendly_viewed", {
                    appointment_type: selected.analyticsId,
                  });
                }}
              >
                Afficher les créneaux Calendly <ArrowRightIcon />
              </button>
            </div>
          </div>
        ) : (
          <CalendarPlaceholder selectedTitle={selected?.title} />
        )}
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
    if (!hero || !booking || !footer) return;

    const visibility = { hero: true, booking: false, footer: false };
    const update = () => setVisible(!visibility.hero && !visibility.booking && !visibility.footer);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hero) visibility.hero = entry.isIntersecting;
        if (entry.target === booking) visibility.booking = entry.isIntersecting;
        if (entry.target === footer) visibility.footer = entry.isIntersecting;
      });
      update();
    }, { threshold: 0.08 });
    observer.observe(hero);
    observer.observe(booking);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      className={`mobile-sticky-cta${visible ? " is-visible" : ""}`}
      href="#rendez-vous"
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
