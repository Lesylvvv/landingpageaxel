# AGENTS.md — Landing page Axel

Codex doit lire ce fichier avant toute analyse ou modification du repository.

## Mission

Créer une landing page mobile-first qui transforme l’audience d’Axel en rendez-vous gratuits et qualifiés. Le site remplace Tally et permet de réserver directement dans la page avec Calendly.

## Lecture obligatoire

Lire dans cet ordre :

1. `AGENTS.md`
2. `docs/PRODUCT_CONTEXT.md`
3. `docs/DESIGN_SYSTEM.md`
4. `docs/RESOURCES.md`
5. les fichiers concernés par la tâche
6. le design system UI UX Pro Max présent dans `design-system/`, s’il existe

## Ordre de priorité

En cas de contradiction :

1. dernière demande explicite du propriétaire ;
2. contexte produit validé ;
3. design system officiel du projet ;
4. présent fichier ;
5. recommandations UI UX Pro Max ;
6. conventions générales.

UI UX Pro Max améliore la qualité visuelle et l’UX, mais ne remplace jamais arbitrairement la palette, la marque ou les objectifs de conversion.

## Compétence UI/UX obligatoire

Pour toute tâche affectant l’apparence, le responsive, l’accessibilité, l’animation ou le parcours :

- utiliser UI UX Pro Max si elle est installée ;
- commencer par une recommandation adaptée à une landing page éducative B2C, mobile-first et orientée conversion ;
- consulter les domaines pertinents : `landing`, `ux`, `typography`, `icons`, `gsap`, `nextjs` ;
- appliquer sa checklist d’accessibilité et de livraison ;
- enregistrer les décisions durables dans le repository.

Référence : https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Si la compétence est absente, le signaler. Ne jamais prétendre l’avoir utilisée.

## Décisions validées

- Repository : `Lesylvvv/landingpageaxel`
- Priorité : mobile-first, avec desktop soigné
- Rendez-vous : 20 minutes, gratuits, sur Google Meet
- Réservation : ouverte à tous les visiteurs
- Calendrier : Calendly intégré dans la page
- Vidéo : YouTube non répertoriée
- Déploiement : Vercel
- Production : branche `main`
- Référence de tunnel : https://www.agencecut.fr/

Agence Cut sert uniquement de référence pour le rythme, la hiérarchie, les CTA et la preuve sociale. Ne pas copier son code, ses textes, sa marque ou ses assets.

## Parcours de rendez-vous

Conserver exactement ces titres jusqu’à nouvelle validation :

1. `Recherche d’alternance`
2. `Orientation`
3. `Faire le point sur ton profil`

Chaque parcours reçoit une description courte, une URL Calendly distincte et affiche : `20 min`, `Google Meet`, `100 % gratuit`.

Centraliser titres, descriptions, URLs et identifiants analytics dans un seul fichier de configuration. Ne pas disperser ces données dans plusieurs composants.

## Tunnel de conversion attendu

1. Promesse claire dès le premier écran
2. Réassurance immédiate et CTA
3. Vidéo d’Axel placée assez haut
4. Problèmes dans lesquels le visiteur se reconnaît
5. Trois accompagnements
6. Preuves et chiffres vérifiés
7. Processus d’accompagnement
8. Témoignages étudiants
9. Présentation d’Axel
10. FAQ
11. Choix du besoin et Calendly intégré
12. Réassurance et CTA final

Répéter le CTA aux moments de décision sans rendre la page agressive. Un CTA mobile fixe ne doit jamais masquer le contenu, le consentement ou Calendly.

## Règles éditoriales

- écrire en français et tutoyer ;
- écrire principalement à la première personne (`je`) pour Axel et utiliser `on` pour le travail mené avec l’étudiant ;
- réserver `nous` aux affirmations qui concernent réellement l’ensemble des équipes FASUP ;
- ne pas parler d’Axel à la troisième personne hors logo, informations de marque et footer ;
- ton direct, humain, rassurant et énergique ;
- phrases courtes, adaptées à un public de 17 à 25 ans ;
- éviter jargon scolaire, commercial et marketing ;
- parler du problème réel avant de présenter la solution ;
- ne jamais garantir une alternance, une admission ou un résultat ;
- ne jamais inventer chiffre, témoignage, partenaire ou statistique ;
- écrire `À VALIDER` pour toute donnée non confirmée ;
- distinguer clairement Axel, FASUP et l’équipe dans les affirmations.

Exigent une preuve : « plus de 1 000 étudiants accompagnés », durée moyenne pour trouver une alternance, taux de placement, nombre de partenaires et toute comparaison externe.

## Direction artistique

Appliquer `docs/DESIGN_SYSTEM.md`.

- marron pour la structure et les titres ;
- beige clair pour le fond général ;
- blanc pour les cartes et surfaces de lecture ;
- orange FASUP comme accent et CTA, jamais comme grand fond dominant ;
- aucun violet générique d’interface IA ;
- aucun dégradé gratuit ;
- aucun emoji comme icône d’interface ;
- icônes SVG cohérentes, par exemple Lucide ;
- rendu chaleureux, moderne, crédible et humain ;
- ne pas produire une apparence administrative, scolaire ou infantile.

## UX et accessibilité

- vérifier 375, 768, 1024 et 1440 px ;
- aucune barre horizontale ;
- texte courant de 16 px minimum sur mobile ;
- zones tactiles d’au moins 44 × 44 px ;
- contrastes WCAG AA ;
- focus clavier visible et navigation clavier complète ;
- labels accessibles et textes alternatifs pertinents ;
- aucune information portée uniquement par la couleur ;
- respecter `prefers-reduced-motion` ;
- aucun autoplay sonore ;
- réserver l’espace des médias pour limiter le CLS ;
- ne pas laisser YouTube ou Calendly dégrader le premier affichage.

## Vidéo et Calendly

Vidéo : miniature personnalisée, chargement différé, mode de confidentialité renforcée et aucun autoplay sonore.

Calendly : trois URLs configurables, iframe jamais cassée, état d’attente propre tant que les URLs manquent, suivi de la sélection et de la confirmation, respect du consentement applicable en France et dans l’Union européenne.

## Architecture cible

À confirmer au scaffold : Next.js App Router, TypeScript strict, CSS moderne ou Tailwind documenté, composants accessibles, Vercel.

- centraliser les contenus susceptibles de changer ;
- éviter les composants artificiellement minuscules ;
- privilégier CSS pour les micro-interactions ;
- ne pas ajouter une dépendance lourde sans valeur claire ;
- optimiser images, polices et scripts tiers ;
- ne jamais committer de secret ;
- documenter les variables dans `.env.example`.

## Analytics

Prévoir des événements stables :

- `page_view`
- `cta_click`
- `appointment_type_selected`
- `video_start`
- `video_progress`
- `calendly_viewed`
- `calendly_date_selected`
- `appointment_scheduled`

Ne jamais placer de donnée personnelle dans les événements.

## GitHub et Vercel

- `main` représente la production ;
- une branche par évolution significative ;
- Preview Deployment Vercel avant fusion ;
- vérification mobile et desktop ;
- pull request claire et limitée ;
- aucune opération destructive de branche ;
- ne pas modifier silencieusement une décision documentée.

## Définition de terminé

Une tâche UI n’est terminée que si le besoin est utilisable, le responsive vérifié, les états utiles traités, l’accessibilité préservée, les animations réduisibles, les données réelles, le build et les contrôles pertinents réussis, et la documentation actualisée.

## Interdictions

Ne pas :

- cloner Agence Cut pixel par pixel ;
- inventer des données ou témoignages ;
- publier les PDF internes ou données personnelles dans le repository public ;
- afficher une intégration cassée ;
- masquer les obligations de confidentialité ;
- sacrifier la lisibilité pour une animation ;
- changer la palette par préférence personnelle.
