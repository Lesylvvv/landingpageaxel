# Décisions d’implémentation — V1

## Architecture

La landing page utilise Next.js App Router et reste majoritairement rendue côté serveur. Les composants clients sont limités au header, aux compteurs, au choix du besoin, à la vidéo et au calendrier Google intégré.

Le contenu remplaçable et les URLs publiques Google Calendar sont centralisés dans `src/data/landing-content.ts`. L’identifiant YouTube configurable reste documenté dans `.env.example`.

## Données et contenu public

Les textes des trois besoins, la méthode, les statistiques et la FAQ sont centralisés dans `src/data/landing-content.ts`.

La durée moyenne de recherche d’alternance, les témoignages et les extraits de coaching ont été retirés de la page faute de preuve ou de contenu réel publiable. Aucun emplacement provisoire n’est rendu. Les iframes YouTube et Google Calendar réservent leur espace et utilisent les URLs publiques prévues pour l’intégration.

## Tunnel de conversion

L’ordre de la page suit : pertinence, connexion vidéo, valeur concrète, méthode, preuve, réassurance puis réservation. La section `#reservation` regroupe les trois choix de besoin et l’unique calendrier Google.

## Services tiers

- YouTube utilise `youtube-nocookie.com`, démarre automatiquement sans son et conserve ses contrôles natifs.
- Google Calendar charge uniquement la page publique Appointment Scheduling fournie, jamais l’agenda privé.
- Les trois cartes conduisent au même calendrier inline ; un lien de repli ouvre la booking page publique dans un nouvel onglet si l’iframe est bloquée.

## Analytics

`src/lib/analytics.ts` envoie les événements vers `window.dataLayer` lorsqu’il existe et émet également `axel:analytics` dans le navigateur. Aucun champ personnel n’est transmis.

Événements préparés : `page_view`, `cta_click`, `appointment_type_selected`, `video_start`, `video_progress`, `booking_calendar_viewed`, `appointment_scheduled`.

## Animations et accessibilité

Les animations simples utilisent uniquement CSS. Les révélations au scroll sont une amélioration progressive et le contenu reste visible si le navigateur ne les prend pas en charge. `prefers-reduced-motion` désactive les mouvements continus, le scroll fluide et les transitions.

Les zones tactiles principales mesurent au moins 44 px, les accordéons restent natifs et les focus sont visibles.
