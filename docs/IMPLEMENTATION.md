# Décisions d’implémentation — V1

## Architecture

La landing page utilise Next.js App Router et reste majoritairement rendue côté serveur. Les composants clients sont limités au header, au choix du besoin, aux vidéos, au carrousel de témoignages et au calendrier Google intégré.

Le contenu remplaçable et les URLs publiques Google Calendar sont centralisés dans `src/data/landing-content.ts`. L’identifiant YouTube configurable reste documenté dans `.env.example`.

## Données et contenu public

Les textes des trois besoins, la méthode, les statistiques, les témoignages publics et la FAQ sont centralisés dans `src/data/landing-content.ts`.

La durée moyenne de recherche d’alternance et les extraits de coaching non sourcés restent retirés. Les neuf témoignages vidéo fournis sont diffusés depuis HubSpot ; aucun résultat individuel n’est inventé dans le texte. Les iframes YouTube et Google Calendar réservent leur espace et utilisent les URLs publiques prévues pour l’intégration.

## Tunnel de conversion

L’ordre de la page suit : pertinence, connexion vidéo, valeur concrète, méthode, preuve, réassurance puis réservation. La section `#reservation` regroupe les trois choix de besoin et l’unique calendrier Google.

## Services tiers

- YouTube utilise `youtube-nocookie.com`, démarre automatiquement sans son et conserve ses contrôles natifs.
- HubSpot charge son loader officiel une seule fois à proximité de `#temoignages`. Le carrousel conserve un seul lecteur actif, muet et en boucle ; les autres cartes restent des miniatures. La modale remplace ce lecteur par une seule instance avec contrôles et son disponible après l’action de l’utilisateur.
- Google Calendar charge uniquement la page publique Appointment Scheduling fournie, jamais l’agenda privé.
- Les trois cartes conduisent au même calendrier inline ; un lien de repli ouvre la booking page publique dans un nouvel onglet si l’iframe est bloquée.

## Analytics

`src/lib/analytics.ts` envoie les événements vers `window.dataLayer` lorsqu’il existe et émet également `axel:analytics` dans le navigateur. Aucun champ personnel n’est transmis.

Événements préparés : `page_view`, `cta_click`, `appointment_type_selected`, `video_start`, `video_progress`, `booking_calendar_viewed`, `appointment_scheduled`.

## Animations et accessibilité

Les animations simples utilisent uniquement CSS. Les révélations au scroll sont une amélioration progressive et le contenu reste visible si le navigateur ne les prend pas en charge. `prefers-reduced-motion` désactive les mouvements continus, le scroll fluide, les transitions et l’autoplay du témoignage actif.

Les zones tactiles principales mesurent au moins 44 px, les accordéons restent natifs et les focus sont visibles. La modale des témoignages gère Échap, le clic sur l’overlay, le retour du focus et le piège de focus.
