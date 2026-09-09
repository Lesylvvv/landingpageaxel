import {
  BookingSection,
  MobileStickyCta,
} from "@/components/booking-experience";
import { AnalyticsBridge, TrackedCta } from "@/components/analytics-bridge";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronDownIcon,
  SocialMark,
} from "@/components/icons";
import { SiteHeader } from "@/components/site-header";
import { MethodTimeline } from "@/components/method-timeline";
import { SocialProof } from "@/components/social-proof";
import { VideoFacade } from "@/components/video-facade";
import {
  faqItems,
  heroBenefits,
  heroTrust,
  navigation,
  socialLinks,
  youtubeVideoId,
} from "@/data/landing-content";

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
              {item.href === "#preuves" ? "Résultats" : item.label}
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
    <>
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
              Tu ne sais plus quelle direction prendre ?
              <span>En 20 minutes, on clarifie la suite.</span>
            </h1>
            <p className="hero__lead">
              Alternance, orientation ou poursuite d’études : je t’aide à comprendre ce qui te
              bloque et à choisir ta prochaine action.
            </p>

            <div className="hero__actions">
              <TrackedCta href="#reservation" location="hero">
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
              href="#valeur"
              location="video_followup"
              className="button button--secondary section-cta"
            >
              Découvrir comment je peux t’aider <ArrowRightIcon />
            </TrackedCta>
          </div>
        </section>

        <section className="section results-section" id="valeur" aria-labelledby="value-title">
          <div className="shell">
            <div className="results-copy" data-reveal>
              <h2 id="value-title">
                Concrètement, en 20 minutes, on identifie ce qui te bloque et la première chose à
                changer.
              </h2>
              <p>
                Selon ta situation, on regarde ton parcours, ton CV, ta méthode de recherche ou
                ton projet. À la fin, tu repars avec une priorité claire et une action à mettre en
                place.
              </p>
              <TrackedCta href="#reservation" location="value">
                Choisir mon créneau gratuit <ArrowRightIcon />
              </TrackedCta>
            </div>
          </div>
        </section>

        <section className="section method-section" id="methode" aria-labelledby="method-title">
          <div className="shell method-layout">
            <div className="method-intro" data-reveal>
              <h2 id="method-title">Comment vont se passer ces 20 minutes ?</h2>
            </div>
            <MethodTimeline />
          </div>
        </section>

        <section
          className="section results-section proof-section"
          id="preuves"
          aria-label="Résultats et témoignages"
        >
          <SocialProof />
        </section>

        <BookingSection />

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-intro" data-reveal>
              <h2 id="faq-title">Tes questions avant de réserver</h2>
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
      </main>

      <PageFooter />
      <MobileStickyCta />
    </>
  );
}
