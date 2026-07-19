# Décisions d’implémentation — V1

## Architecture

La landing page utilise Next.js App Router et reste majoritairement rendue côté serveur. Les composants clients sont limités au header, aux carrousels, aux compteurs, au choix du rendez-vous, à la façade vidéo et à Calendly.

Le contenu remplaçable est centralisé dans `src/data/landing-content.ts`. Les trois URLs Calendly et l’identifiant YouTube sont documentés dans `.env.example`.

## Données non validées

Les affirmations `+1 000 étudiants accompagnés` et `30 jours en moyenne` sont conservées à la demande du brief mais marquées `À valider` dans l’interface et dans les données. Elles ne doivent pas perdre cette mention sans source, périmètre et date de validation.

Les témoignages, photos, vidéos et liens sociaux restent des placeholders explicitement identifiés. Aucun avis ni visage n’a été inventé.

## Services tiers

- YouTube utilise `youtube-nocookie.com` et n’est chargé qu’après activation de la façade.
- Calendly n’est chargé que si une URL HTTPS `calendly.com` valide est configurée et après une action explicite du visiteur.
- Sans configuration, une maquette non interactive est affichée et aucune iframe cassée n’est créée.

## Analytics

`src/lib/analytics.ts` envoie les événements vers `window.dataLayer` lorsqu’il existe et émet également `axel:analytics` dans le navigateur. Aucun champ personnel n’est transmis.

Événements préparés : `page_view`, `cta_click`, `appointment_type_selected`, `video_start`, `video_progress`, `calendly_viewed`, `calendly_date_selected`, `appointment_scheduled`.

## Animations et accessibilité

Les animations simples utilisent uniquement CSS. Les révélations au scroll sont une amélioration progressive et le contenu reste visible si le navigateur ne les prend pas en charge. `prefers-reduced-motion` désactive les mouvements continus, le scroll fluide et les transitions.

Les carrousels disposent de boutons, de points, du swipe, du scroll snap et des flèches clavier. Les zones tactiles principales mesurent au moins 44 px et les focus sont visibles.
