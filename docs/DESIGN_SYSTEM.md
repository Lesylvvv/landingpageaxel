# Design system officiel

## Intention

Rendu chaleureux, humain, moderne, énergique, crédible, accessible et rassurant. Éviter l’apparence administrative, scolaire datée ou générique produite par une IA.

## Palette officielle

Les valeurs peuvent être adaptées très légèrement pour l’accessibilité, mais jamais remplacées sans raison.

```css
:root {
  --orange: #F69D00;
  --orange-dark: #D88900;
  --orange-light: #FFF3D6;

  --marron: #2E2017;
  --beige: #FBDEAA;
  --beige-clair: #FFF6E2;
  --blanc: #F7F6F5;

  --text: #2E2017;
  --text-light: #7A6448;
  --border: #F0E0C0;

  --tiktok: #1A6DB5;
  --tiktok-light: #D6EAFF;

  --green: #27AE60;
  --green-light: #D4F8E6;
}
```

Ne pas employer un hex directement dans un composant lorsqu’un token existe.

## Rôle des couleurs

### Marron `#2E2017`

Header, titres, chiffres structurants, conclusions et éléments importants.

### Beige clair `#FFF6E2`

Fond global, surfaces légères et blocs méthodologiques doux.

### Blanc `#F7F6F5` et blanc pur

Panneaux, cartes et zones principales de lecture.

### Orange FASUP `#F69D00`

Accents de marque, badges Instagram, bordures, chiffres importants, repères et CTA primaires. L’orange est un accent, jamais le fond principal d’une grande section.

### Bleu TikTok

Réservé aux données ou contenus réellement liés à TikTok. Ce n’est pas une couleur de marque générique.

### Vert

Succès, disponibilité, confirmation et indicateurs positifs. Ne pas remplacer l’orange du CTA principal.

## Contraste et états

Chaque élément interactif définit : défaut, hover, focus, actif, désactivé et chargement. Respecter WCAG AA. Si orange + blanc n’est pas assez contrasté, utiliser le marron ou un état orange légèrement assombri.

## Typographie

Police à valider. Utiliser provisoirement une sans-serif moderne et humaine, une ou deux familles maximum, corps de 16 px minimum, hauteur de ligne proche de 1.5 et titres courts avec une hiérarchie forte.

## Layout

- conception d’abord à 375 px ;
- grille et espacements cohérents ;
- largeur de lecture limitée sur desktop ;
- alternance de surfaces légères, cartes et respirations ;
- informations essentielles au premier écran ;
- aucune section artificiellement immense ;
- aucun défilement horizontal.

## Cartes des rendez-vous

Afficher le titre, la description et le CTA dans chaque carte. Afficher une seule fois au-dessus de la grille les informations communes : 20 minutes, Google Meet et gratuit. Conserver un état sélectionné évident, une zone tactile suffisante et une transition claire vers le Calendly concerné.

## Boutons

CTA primaire orange, contraste mesuré, formulation orientée action, largeur confortable sur mobile et focus visible. Ne pas multiplier les styles.

Formulations à tester : « Prendre rendez-vous », « Réserver gratuitement », « Choisir mon créneau », « Faire le point avec Axel ».

## Iconographie

Icônes SVG cohérentes, par exemple Lucide. Aucun emoji comme icône d’interface. Labels accessibles pour les contrôles.

## Images et vidéo

Privilégier les vraies images autorisées d’Axel et d’étudiants. Éviter les banques d’images génériques. Optimiser en WebP/AVIF, réserver les dimensions et charger YouTube à la demande.

## Animation

Animations utiles : révélations légères, progression des preuves, sélection de rendez-vous et continuité vers Calendly. Généralement 150–300 ms, aucune animation permanente, respect de `prefers-reduced-motion`, aucune animation ne doit ralentir la réservation.

## Référence Agence Cut

Reprendre uniquement la logique de rythme et de hiérarchie. Le tunnel validé suit : hero → vidéo → valeur → méthode → preuves → choix du rendez-vous → FAQ → calendrier. La grille éditoriale utilise un conteneur central d’environ 1 100 px et des séparations fines entre les grandes sections. Ne pas reprendre identité, textes, logos, assets, métriques ou code.
