# Override — Landing page d’Axel

Ce fichier remplace les recommandations génériques incompatibles du fichier `MASTER.md` pour la page d’accueil.

## Décisions prioritaires

- Palette officielle du projet : marron `#2E2017`, orange `#F69D00`, orange foncé accessible `#B96F00`, beige clair `#FFF6E2`, blanc et blanc cassé `#F7F6F5`.
- Aucun violet : la proposition automatique UI UX Pro Max est rejetée car elle contredit `docs/DESIGN_SYSTEM.md`.
- Police unique : Manrope via `next/font`, choisie pour son équilibre humain, moderne et lisible.
- Composition : hero centré très typographique, vidéo haute, valeur, méthode en quatre étapes, preuves, choix du rendez-vous, FAQ puis calendrier.
- Espacement : rythme aéré mais maîtrisé, sections d’environ 60 à 84 px sur desktop et 56 px sur mobile, avec des séparations fines continues.
- Typographie : hero plafonné à environ 58 px, titres de section à environ 40 px, corps de texte entre 16 et 17 px.
- Grille : conteneur principal plafonné à 1 060 px, marges internes de 32 px sur tablette et mobile, avec 16 à 28 px d’air entre les guides verticaux et le contenu ; la vidéo conserve sa largeur maximale de 940 px et son comportement responsive dédié.
- Médias : vidéo principale centrée, au ratio 16:9, avec une largeur maximale de 940 px sur desktop.
- CTA : orange avec texte marron pour préserver le contraste ; une action principale par zone de décision.
- Cartes : surfaces blanches ou beige clair, bordures fines, ombres légères, rayons de 18 à 36 px.
- Mouvement : CSS en priorité, `transform` et `opacity`, 150–400 ms, aucune dépendance GSAP/Motion, arrêt avec `prefers-reduced-motion`.
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
