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
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CompassIcon,
  MessageIcon,
  PlayIcon,
  SocialMark,
  SparkIcon,
  TargetIcon,
  VideoIcon,
} from "@/components/icons";
import { ScrollCarousel } from "@/components/scroll-carousel";
import { SiteHeader } from "@/components/site-header";
import { VideoFacade } from "@/components/video-facade";
import {
  coachingVideos,
  faqItems,
  heroBenefits,
  heroTrust,
  methodSteps,
  navigation,
  problems,
  socialLinks,
  testimonialVideos,
  testimonials,
  topics,
  trustPoints,
  youtubeVideoId,
} from "@/data/landing-content";

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading section-heading--${align}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title}
        {accent && <span> {accent}</span>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}

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
              <small>Lien à ajouter</small>
            </span>
          ))}
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>© {new Date().getFullYear()} Axel · FASUP. Tous droits réservés.</p>
        <div>
          <span>Mentions légales · à compléter</span>
          <span>Confidentialité · à compléter</span>
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
                <span key={item.label}>
                  {item.label}
                  {item.needsValidation && <small>À valider</small>}
                </span>
              ))}
            </div>

            <h1 id="hero-title">
              Ton avenir ne devrait pas rester flou.
              <span>On le clarifie avec toi.</span>
            </h1>
            <p className="hero__lead">
              Alternance, orientation ou poursuite d’études : fais le point sur ta situation
              avec Axel et repars avec des prochaines étapes concrètes.
            </p>

            <div className="hero__actions">
              <TrackedCta href="#rendez-vous" location="hero">
                Faire le point avec Axel <ArrowRightIcon />
              </TrackedCta>
              <small>Gratuit · 20 min · Google Meet · Sans engagement</small>
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

        <section className="section video-section" aria-labelledby="video-title">
          <div className="shell">
            <div className="video-section__intro" data-reveal>
              <span className="eyebrow">Commence ici</span>
              <h2 id="video-title">
                Avant de réserver, découvre comment Axel accompagne vraiment un étudiant.
              </h2>
              <p>
                Pas de discours générique. Axel part de ta situation, de tes blocages et de ce
                que tu veux réellement construire.
              </p>
            </div>
            <div data-reveal className="video-reveal">
              <VideoFacade videoId={youtubeVideoId} />
            </div>
          </div>
        </section>

        <div className="topics-strip" aria-label="Sujets abordés pendant l’accompagnement">
          <div className="topics-strip__track">
            {[...topics, ...topics].map((topic, index) => (
              <span key={`${topic}-${index}`}>
                {topic} <SparkIcon />
              </span>
            ))}
          </div>
        </div>

        <section className="section coaching-section" id="accompagnement" aria-labelledby="coaching-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Des situations réelles"
              title="Des étudiants sont arrivés avec"
              accent="les mêmes doutes que toi."
              description="Découvre bientôt de vrais extraits de coachings, de prises de conscience et de parcours débloqués."
            />
            <ScrollCarousel
              label="Futurs extraits de coachings"
              itemCount={coachingVideos.length}
              className="coaching-carousel"
            >
              {coachingVideos.map((video, index) => (
                <article className="coaching-card" data-carousel-item key={video.id}>
                  <div className={`abstract-visual abstract-visual--${(index % 3) + 1}`} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="eyebrow">{video.label}</span>
                  <h3>{video.title}</h3>
                  <button
                    type="button"
                    className="placeholder-play"
                    disabled
                    aria-label={`${video.title} — extrait bientôt disponible`}
                  >
                    <PlayIcon /> Bientôt disponible
                  </button>
                </article>
              ))}
            </ScrollCarousel>
            <TrackedCta
              href="#methode"
              location="coaching_carousel"
              className="button button--secondary section-cta"
            >
              Voir comment on t’accompagne <ArrowRightIcon />
            </TrackedCta>
          </div>
        </section>

        <section className="section results-section" aria-labelledby="results-title">
          <div className="shell results-layout">
            <div className="results-copy" data-reveal>
              <span className="eyebrow">Des prochaines étapes, pas des promesses</span>
              <h2 id="results-title">On ne te laisse pas repartir avec un simple “bon courage”.</h2>
              <p>L’objectif, c’est de transformer tes doutes en prochaines étapes concrètes.</p>
              <TrackedCta href="#rendez-vous" location="results">
                Réserver mes 20 minutes <ArrowRightIcon />
              </TrackedCta>
            </div>
            <AnimatedStats />
          </div>
        </section>

        <section className="section problems-section" aria-labelledby="problems-title">
          <div className="shell">
            <SectionHeading
              eyebrow="Tu n’es pas le problème"
              title="Tu fais des efforts."
              accent="Mais tu ne sais plus quoi changer."
              description="Tu postules, tu demandes des conseils, tu regardes des vidéos… mais tu avances toujours sans savoir si tu vas dans la bonne direction."
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
              Tu n’as peut-être pas besoin d’en faire plus. Tu as peut-être besoin de savoir
              <strong> où concentrer tes efforts.</strong>
            </p>
          </div>
        </section>

        <section className="section trust-section" aria-labelledby="trust-title">
          <div className="shell trust-layout">
            <div className="trust-copy" data-reveal>
              <span className="eyebrow">Pourquoi nous faire confiance</span>
              <h2 id="trust-title">
                Parce qu’on ne te donne <span>pas une méthode copiée-collée.</span>
              </h2>
              <p>
                Chaque étudiant arrive avec un parcours, des contraintes et des ambitions
                différentes. L’accompagnement commence donc par toi : ce que tu as déjà essayé,
                ce qui te bloque et ce que tu veux vraiment.
              </p>
              <div className="axel-placeholder">
                <div className="axel-placeholder__mark" aria-hidden="true">
                  A<span>.</span>
                </div>
                <div>
                  <span className="eyebrow">Visuel à venir</span>
                  <strong>Axel + FASUP</strong>
                  <small>Photo ou courte vidéo de présentation</small>
                </div>
              </div>
            </div>
            <div className="trust-points">
              {trustPoints.map((point, index) => {
                const icons = [MessageIcon, CompassIcon, TargetIcon];
                const Icon = icons[index];
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
                Une <span>méthode simple</span> pour arrêter de tourner en rond.
              </h2>
              <TrackedCta href="#rendez-vous" location="method">
                Choisir mon rendez-vous <ArrowRightIcon />
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

        <section className="section appointments-section" id="rendez-vous" aria-labelledby="appointments-title">
          <div className="shell">
            <SectionHeading
              eyebrow="À toi de choisir"
              title="Choisis le rendez-vous dont tu as besoin."
              accent="C’est gratuit."
              description="Pas besoin d’avoir déjà toutes les réponses. Sélectionne simplement ce qui ressemble le plus à ta situation actuelle."
              align="center"
            />
            <AppointmentCards />
            <p className="appointments-note">
              <ClockIcon /> Chaque rendez-vous dure 20 minutes et se déroule sur Google Meet.
            </p>
          </div>
        </section>

        <section className="section testimonials-section" id="temoignages" aria-labelledby="testimonials-title">
          <div className="shell">
            <SectionHeading
              eyebrow="La preuve, dès qu’elle est disponible"
              title="Ils sont venus avec un doute."
              accent="Ils sont repartis avec une direction."
              description="Cette section attend des témoignages réels et autorisés. Aucun avis n’a été inventé."
            />

            <div className="testimonial-feature" data-reveal>
              <span className="testimonial-feature__quote">“</span>
              <blockquote>{testimonials[0].quote}</blockquote>
              <div className="testimonial-feature__meta">
                <span className="testimonial-avatar" aria-hidden="true">?</span>
                <div>
                  <strong>{testimonials[0].name}</strong>
                  <span>{testimonials[0].context}</span>
                  <span>{testimonials[0].outcome}</span>
                </div>
              </div>
            </div>

            <ScrollCarousel
              label="Futurs témoignages textuels"
              itemCount={testimonials.length}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial, index) => (
                <article className="testimonial-card" data-carousel-item key={index}>
                  <span className="eyebrow">Témoignage à ajouter</span>
                  <p>{testimonial.quote}</p>
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.context}</span>
                  </div>
                </article>
              ))}
            </ScrollCarousel>

            <div className="testimonial-video-grid" aria-label="Futurs témoignages vidéo">
              {testimonialVideos.map((video, index) => (
                <article key={video.id} className={`testimonial-video testimonial-video--${(index % 3) + 1}`} data-reveal>
                  <div aria-hidden="true">
                    <VideoIcon />
                  </div>
                  <span>{video.label}</span>
                  <small>Vidéo autorisée à ajouter</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section conversion-band" aria-labelledby="conversion-title">
          <div className="shell conversion-band__inner" data-reveal>
            <span className="eyebrow">Un premier pas suffit</span>
            <h2 id="conversion-title">
              Plus de 1 000 étudiants ont déjà été accompagnés.
              <span> Et si le prochain déclic, c’était le tien ?</span>
            </h2>
            <span className="validation-badge">Chiffre à valider avant publication</span>
            <p>
              Tu n’as pas besoin de tout régler aujourd’hui. Tu as seulement besoin de savoir
              quelle est la prochaine bonne étape.
            </p>
            <TrackedCta href="#rendez-vous" location="conversion_band">
              Faire le point avec Axel <ArrowRightIcon />
            </TrackedCta>
            <small>20 min · Google Meet · Gratuit</small>
          </div>
        </section>

        <BookingSection />

        <section className="section faq-section" id="faq" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-intro" data-reveal>
              <span className="eyebrow">Questions fréquentes</span>
              <h2 id="faq-title">
                Les réponses dont tu as besoin <span>avant de réserver.</span>
              </h2>
              <p>Pas de petite ligne cachée. Voici comment se déroule vraiment le rendez-vous.</p>
              <div className="faq-reassurance">
                <CalendarIcon />
                <span>
                  <strong>20 minutes avec Axel</strong>
                  Gratuit · Google Meet · Sans engagement
                </span>
              </div>
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

        <section className="section final-cta" aria-labelledby="final-title">
          <div className="shell final-cta__inner" data-reveal>
            <span className="final-cta__icon"><CompassIcon /></span>
            <h2 id="final-title">
              Tu n’as pas besoin d’avoir toutes les réponses avant de réserver.
              <span>C’est justement pour ça que ce rendez-vous existe.</span>
            </h2>
            <TrackedCta href="#rendez-vous" location="final">
              Réserver gratuitement <ArrowRightIcon />
            </TrackedCta>
            <small>20 minutes avec Axel · Google Meet · Sans engagement</small>
          </div>
        </section>
      </main>

      <PageFooter />
      <MobileStickyCta />
    </BookingProvider>
  );
}
