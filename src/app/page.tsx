import {
  AppointmentCards,
  BookingProvider,
  BookingSection,
  MobileStickyCta,
} from "@/components/booking-experience";
import { AnalyticsBridge, TrackedCta } from "@/components/analytics-bridge";
import { AnimatedStats } from "@/components/animated-stats";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CompassIcon,
  MessageIcon,
  SocialMark,
  TargetIcon,
} from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { VideoFacade } from "@/components/video-facade";
import {
  differentiationPoints,
  faqItems,
  heroBenefits,
  heroTrust,
  methodSteps,
  navigation,
  problems,
  socialLinks,
  transformationResults,
  youtubeVideoId,
} from "@/data/landing-content";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

const pointIcons = [MessageIcon, CompassIcon, TargetIcon] as const;

function PageFooter() {
  return (
    <footer className="site-footer" id="footer">
      <div className="shell site-footer__grid">
        <div>
          <a className="wordmark wordmark--footer" href="#top">
            Axel<span>.</span>
          </a>
          <p>Orientation, alternance et avenir professionnel.</p>
        </div>
        <nav aria-label="Navigation de pied de page">
          <span>Navigation</span>
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-footer__socials">
          <span>Réseaux</span>
          {socialLinks.map((social) => (
            <span className="social-placeholder" key={social.label}>
              <SocialMark label={social.shortLabel} />
              {social.label}
            </span>
          ))}
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Axel · FASUP. Tous droits réservés.</p>
        <div>
          <span>Mentions légales</span>
          <span>Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <BookingProvider>
      <AnalyticsBridge />
      <a className="skip-link" href="#main-content">
        Aller au contenu principal
      </a>
      <SiteHeader />

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__noise" aria-hidden="true" />
          <div className="hero__socials" aria-hidden="true">
            {socialLinks.map((social, index) => (
              <span className={`social-bubble social-bubble--${index + 1}`} key={social.label}>
                <SocialMark label={social.shortLabel} />
              </span>
            ))}
          </div>
          <div className="shell hero__inner">
            <div className="hero__trust" aria-label="Informations clés">
              {heroTrust.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <h1 id="hero-title">
              Ton avenir ne devrait pas rester flou.
              <span>On va le clarifier ensemble.</span>
            </h1>
            <p className="hero__lead">
              Tu ne sais plus où chercher, quoi améliorer ou quelle direction choisir ? Pendant
              20 minutes, je t’aide à comprendre ce qui te bloque et à savoir quoi faire ensuite.
            </p>

            <div className="hero__actions">
              <TrackedCta href="#rendez-vous" location="hero">
                Choisir mon créneau gratuit <ArrowRightIcon />
              </TrackedCta>
              <small>20 min · Google Meet · Gratuit · Sans engagement</small>
            </div>

            <ul className="hero__benefits">
              {heroBenefits.map((benefit) => (
                <li key={benefit}>
                  <CheckIcon /> {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="video-section" aria-label="Présentation vidéo">
          <div className="shell">
            <div data-reveal className="video-reveal">
              <VideoFacade videoId={youtubeVideoId} />
            </div>
            <TrackedCta
              href="#identification"
              location="video_followup"
              className="button button--secondary section-cta"
            >
              Découvrir comment je peux t’aider <ArrowRightIcon />
            </TrackedCta>
          </div>
        </section>

        <section
          className="section problems-section"
          id="identification"
          aria-labelledby="identification-title"
        >
          <div className="shell">
            <SectionHeading
              eyebrow="Tu te reconnais ?"
              title="Tu fais des efforts. Mais tu ne sais plus lesquels vont vraiment faire la différence."
              description="Tu regardes des conseils, tu modifies ton CV, tu envoies des candidatures ou tu réfléchis à plusieurs orientations. Pourtant, tu as toujours l’impression d’avancer sans savoir si tu vas dans la bonne direction."
            />
            <div className="problem-grid">
              {problems.map((problem, index) => (
                <article className="problem-card" key={problem.title} data-reveal>
                  <span>0{index + 1}</span>
                  <h3>{problem.title}</h3>
                  <p>{problem.text}</p>
                </article>
              ))}
            </div>
            <p className="problems-conclusion" data-reveal>
              Tu n’as peut-être pas besoin d’en faire davantage. Tu as surtout besoin de savoir
              <strong> où concentrer tes efforts.</strong>
            </p>
          </div>
        </section>

        <section className="section results-section" id="valeur" aria-labelledby="value-title">
          <div className="shell trust-layout">
            <div className="results-copy" data-reveal>
              <span className="eyebrow">Ce que tu vas réellement obtenir</span>
              <h2 id="value-title">
                En 20 minutes, tu sauras ce qui mérite vraiment ton attention.
              </h2>
              <p>
                Je ne vais pas essayer de résoudre toute ta vie en un rendez-vous. En revanche,
                je peux t’aider à comprendre ce qui bloque aujourd’hui et à décider de la
                première chose à améliorer.
              </p>
              <TrackedCta href="#rendez-vous" location="value">
                Choisir mon créneau gratuit <ArrowRightIcon />
              </TrackedCta>
            </div>
            <div className="trust-points">
              {transformationResults.map((result, index) => {
                const Icon = pointIcons[index];
                return (
                  <article key={result.title} data-reveal>
                    <span className="icon-box">
                      <Icon />
                    </span>
                    <div>
                      <span className="trust-points__number">0{index + 1}</span>
                      <h3>{result.title}</h3>
                      <p>{result.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section trust-section" id="difference" aria-labelledby="difference-title">
          <div className="shell trust-layout">
            <div className="trust-copy" data-reveal>
              <span className="eyebrow">Un échange personnalisé</span>
              <h2 id="difference-title">
                Pourquoi réserver 20 minutes avec moi plutôt que regarder une vidéo de plus ?
              </h2>
              <p>
                Une vidéo peut te donner une méthode, une idée ou un déclic. Mais elle ne connaît
                ni ton parcours, ni ce que tu as déjà essayé, ni ce qui te bloque vraiment.
              </p>
              <p>
                <strong>Les contenus peuvent t’aider à réfléchir.</strong> Pendant le rendez-vous,
                on travaille directement sur toi.
              </p>
            </div>
            <div className="trust-points">
              {differentiationPoints.map((point, index) => {
                const Icon = pointIcons[index];
                return (
                  <article key={point.title} data-reveal>
                    <span className="icon-box">
                      <Icon />
                    </span>
                    <div>
                      <span className="trust-points__number">0{index + 1}</span>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section method-section" id="methode" aria-labelledby="method-title">
          <div className="shell method-layout">
            <div className="method-intro" data-reveal>
              <span className="eyebrow">Comment ça se passe</span>
              <h2 id="method-title">
                20 minutes pour comprendre ce qui bloque et décider de la suite.
              </h2>
              <TrackedCta href="#rendez-vous" location="method">
                Voir les créneaux disponibles <ArrowRightIcon />
              </TrackedCta>
            </div>
            <ol className="method-steps">
              {methodSteps.map((step, index) => (
                <li key={step.title} data-reveal>
                  <span className="method-steps__number">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section results-section" id="preuves" aria-labelledby="proof-title">
          <div className="shell results-layout">
            <div className="results-copy" data-reveal>
              <span className="eyebrow">Pourquoi tu peux me faire confiance</span>
              <h2 id="proof-title">
                Je ne vais pas te réciter une méthode trouvée sur Internet.
              </h2>
              <p>
                J’accompagne régulièrement de vrais étudiants et je travaille au contact
                d’entreprises qui recrutent. Je vois les erreurs qui reviennent, les attentes qui
                ne sont pas comprises et les changements qui peuvent réellement faire la
                différence.
              </p>
            </div>
            <AnimatedStats />
          </div>
        </section>

        <section
          className="section appointments-section"
          id="rendez-vous"
          aria-labelledby="appointments-title"
        >
          <div className="shell">
            <SectionHeading
              eyebrow="Choisis ton besoin"
              title="Choisis simplement la situation qui se rapproche le plus de la tienne."
              description="Tu n’as pas besoin de savoir exactement ce dont tu as besoin. Choisis le sujet principal et on ajustera le rendez-vous ensemble."
              align="center"
            />
            <AppointmentCards />
            <p className="appointments-note">
              <ClockIcon /> Chaque rendez-vous dure 20 minutes et se déroule sur Google Meet.
            </p>
          </div>
        </section>

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-intro" data-reveal>
              <span className="eyebrow">Avant de réserver</span>
              <h2 id="faq-title">Tes dernières questions, avec des réponses claires.</h2>
              <p>
                Gratuité, durée, préparation ou crainte d’être jugé : voici ce qu’il faut savoir
                avant de choisir ton créneau.
              </p>
            </div>
            <div className="faq-list">
              {faqItems.map((item, index) => (
                <details key={item.question} data-reveal>
                  <summary>
                    <span>0{index + 1}</span>
                    <strong>{item.question}</strong>
                    <ChevronDownIcon />
                  </summary>
                  <div className="faq-list__answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <BookingSection />
      </main>

      <PageFooter />
      <MobileStickyCta />
    </BookingProvider>
  );
}
