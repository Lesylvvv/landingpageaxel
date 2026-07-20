# Décisions d’implémentation — V1

## Architecture

La landing page utilise Next.js App Router et reste majoritairement rendue côté serveur. Les composants clients sont limités au header, aux compteurs, au choix du rendez-vous, à la façade vidéo et à Calendly.

Le contenu remplaçable est centralisé dans `src/data/landing-content.ts`. Les trois URLs Calendly et l’identifiant YouTube sont documentés dans `.env.example`.

## Données et contenu public

Les textes des trois rendez-vous, les situations, la méthode, les statistiques et la FAQ sont centralisés dans `src/data/landing-content.ts`.

La durée moyenne de recherche d’alternance, les témoignages et les extraits de coaching ont été retirés de la page faute de preuve ou de contenu réel publiable. Aucun emplacement provisoire n’est rendu. Les iframes YouTube et Calendly ne sont chargées que lorsque leur configuration est valide ; leurs états de repli restent neutres et utilisables.

## Tunnel de conversion

L’ordre de la page suit : pertinence, connexion vidéo, valeur concrète, méthode, preuve, choix du rendez-vous, réassurance puis réservation. La FAQ précède le calendrier et le calendrier termine le parcours principal.

## Services tiers

- YouTube utilise `youtube-nocookie.com` et n’est chargé qu’après activation de la façade.
- Calendly n’est chargé que si une URL HTTPS `calendly.com` valide est configurée et après une action explicite du visiteur.
- Sans configuration, une maquette non interactive est affichée et aucune iframe cassée n’est créée.

## Analytics

`src/lib/analytics.ts` envoie les événements vers `window.dataLayer` lorsqu’il existe et émet également `axel:analytics` dans le navigateur. Aucun champ personnel n’est transmis.

Événements préparés : `page_view`, `cta_click`, `appointment_type_selected`, `video_start`, `video_progress`, `calendly_viewed`, `calendly_date_selected`, `appointment_scheduled`.

## Animations et accessibilité

Les animations simples utilisent uniquement CSS. Les révélations au scroll sont une amélioration progressive et le contenu reste visible si le navigateur ne les prend pas en charge. `prefers-reduced-motion` désactive les mouvements continus, le scroll fluide et les transitions.

Les zones tactiles principales mesurent au moins 44 px, les accordéons restent natifs et les focus sont visibles.
