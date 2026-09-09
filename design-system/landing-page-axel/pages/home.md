# Override — Landing page d’Axel

Ce fichier remplace les recommandations génériques incompatibles du fichier `MASTER.md` pour la page d’accueil.

## Décisions prioritaires

- Palette officielle du projet : marron `#2E2017`, orange `#F69D00`, orange foncé accessible `#B96F00`, beige clair `#FFF6E2`, blanc et blanc cassé `#F7F6F5`.
- Aucun violet : la proposition automatique UI UX Pro Max est rejetée car elle contredit `docs/DESIGN_SYSTEM.md`.
- Police unique : Manrope via `next/font`, choisie pour son équilibre humain, moderne et lisible.
- Composition : hero centré très typographique, vidéo haute, valeur, méthode en quatre étapes, preuves, section de réservation regroupant choix du besoin et calendrier Google, puis FAQ finale avant le footer.
- Espacement : tokens partagés de 64 à 80 px sur desktop et 48 px sur mobile ; transitions liées de 40 / 32 px et espacement titre-contenu de 24 px. Aucun quadrillage décoratif. Le bloc de preuves conserve un padding externe nul pour éviter les espaces cumulés avant le ticker.
- Typographie : hero plafonné à environ 58 px, titres de section à environ 40 px, corps de texte entre 16 et 17 px.
- Conteneur : largeur principale plafonnée à 1 060 px et marges internes de 32 px sur tablette et mobile, sans guides verticaux ; la vidéo conserve sa largeur maximale de 940 px et son comportement responsive dédié. Les arcs du hero sont masqués jusqu’à 768 px.
- Médias : vidéo YouTube principale centrée, au ratio 16:9, avec une largeur maximale de 940 px sur desktop ; lecture automatique muette, contrôles natifs et `playsinline` sur mobile.
- Réservation : trois cartes existantes dans l’ordre orientation, alternance, audit profil/CV, puis une unique page publique Google Calendar Appointment Scheduling intégrée en pleine largeur.
- CTA : orange avec texte marron pour préserver le contraste ; une action principale par zone de décision.
- Cartes : surfaces blanches ou beige clair, bordures fines, ombres légères, rayons de 18 à 36 px.
- Mouvement : CSS en priorité, `transform` et `opacity`, 150–400 ms, aucune dépendance GSAP/Motion, arrêt avec `prefers-reduced-motion`.
- Méthode : quatre titres numérotés avec cartes compactes, ligne et curseur à gauche. L’étape proche de la ligne de lecture à 42 % du viewport devient active ; les précédentes restent secondaires et les suivantes plus douces. Le contenu reste visible sans JavaScript et sans animation.
- Preuves mobiles (jusqu’à 520 px) : ticker de 60 px, items sur une ligne sans réduction flex, séparateurs en points et boucle CSS continue. Texte desktop conservé. L’ordre Capucine → Iwan → Louna et l’absence de compteur sont impératifs.
- Responsive : conçu pour 375 px puis enrichi à 768, 1024 et 1440 px.
- Accessibilité : focus visible, cibles de 44 px, accordéon natif, carrousel clavier + boutons, aucune information portée uniquement par la couleur.

## Inspirations 21st.dev évaluées

Les recherches ont servi de référence de motif, sans récupération ni copie de code :

- `Modern Landing Hero` et `Cinematic landing Hero` pour la hiérarchie du hero ;
- `Interfaces Carousel` pour la logique de navigation visible ;
- `Count Animation` pour les statistiques au viewport ;
- `FAQ Accordion` pour la structure de l’accordéon ;
- `Appointment Scheduler` pour la lisibilité du calendrier ;
- `Header Navbar` pour le header sticky et le menu mobile.

L’implémentation finale utilise des composants maison afin de limiter les dépendances et de contrôler le responsive, l’accessibilité et les performances.
