export type AppointmentId = "alternance" | "orientation" | "audit";

export const navigation = [
  { label: "Ta situation", href: "#identification" },
  { label: "Méthode", href: "#methode" },
  { label: "Preuves", href: "#preuves" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroTrust = ["Alternance · Orientation · Poursuite d’études"] as const;

export const heroBenefits = [
  "On part de ta situation",
  "On identifie ce qui te freine",
  "Tu sais quoi faire ensuite",
] as const;

export const socialLinks = [
  { label: "Instagram", href: "", shortLabel: "IG" },
  { label: "TikTok", href: "", shortLabel: "TT" },
  { label: "YouTube", href: "", shortLabel: "YT" },
] as const;

export const youtubeVideoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID ?? "";

export const statistics = [
  {
    value: 1000,
    prefix: "+",
    suffix: "",
    display: "+1 000",
    label: "étudiants accompagnés",
  },
  {
    value: 20,
    prefix: "",
    suffix: " min",
    display: "20 min",
    label: "centrées sur ta situation",
  },
  {
    value: 100,
    prefix: "",
    suffix: " %",
    display: "100 %",
    label: "gratuit et sans engagement",
  },
  {
    value: 3,
    prefix: "",
    suffix: " choix",
    display: "3 choix",
    label: "pour partir de ton besoin principal",
  },
] as const;

export const problems = [
  {
    title: "Tu postules, mais personne ne te répond",
    text: "Tu envoies des candidatures sans comprendre ce qui bloque dans ton CV, ton discours ou ta méthode.",
  },
  {
    title: "Tu hésites entre plusieurs directions",
    text: "Plusieurs voies t’intéressent, mais tu as peur de choisir la mauvaise et de perdre encore du temps.",
  },
  {
    title: "Tu ne sais pas comment présenter ton profil",
    text: "Ton parcours te paraît logique dans ta tête, mais tu n’arrives pas à le rendre clair et convaincant pour une entreprise.",
  },
  {
    title: "Les conseils que tu trouves restent trop généraux",
    text: "On te répète d’être motivé, de mieux te vendre ou de persévérer, sans t’expliquer ce que tu dois changer dans TON cas.",
  },
] as const;

export const transformationResults = [
  {
    title: "Une lecture extérieure de ta situation",
    text: "Je regarde ton parcours, ce que tu as déjà essayé et la manière dont tu présentes ton projet.",
  },
  {
    title: "Le problème à traiter en priorité",
    text: "On distingue ensemble ce qui te freine réellement de tout ce qui te fait simplement douter.",
  },
  {
    title: "Une prochaine action claire",
    text: "Tu repars en sachant ce que tu peux modifier, tester ou approfondir dès la fin du rendez-vous.",
  },
] as const;

export const differentiationPoints = [
  {
    title: "Je pars de ta situation",
    text: "Pendant le rendez-vous, je ne parle pas à une audience. Je regarde ton parcours, ton objectif et les difficultés que tu rencontres aujourd’hui.",
  },
  {
    title: "Je confronte ton projet au terrain",
    text: "J’accompagne régulièrement des étudiants et je connais les attentes concrètes des entreprises. Je peux donc t’aider à distinguer une bonne idée d’une direction réellement crédible.",
  },
  {
    title: "Tu repars avec une priorité",
    text: "Le but n’est pas de t’ajouter dix nouveaux conseils. Le but est de t’aider à choisir la première action qui peut réellement faire avancer ta situation.",
  },
] as const;

export const methodSteps = [
  {
    title: "Tu m’expliques où tu en es",
    text: "Tu me présentes ta situation, ce que tu recherches, ce que tu as déjà essayé et ce qui te fait douter.",
  },
  {
    title: "On identifie le vrai point de blocage",
    text: "CV, discours, méthode de recherche, orientation ou manque de direction : on repère ensemble ce qui mérite réellement ton attention.",
  },
  {
    title: "Tu sais quoi faire ensuite",
    text: "À la fin du rendez-vous, tu repars avec une priorité claire et une première action réaliste.",
  },
] as const;

export const appointments = [
  {
    id: "alternance",
    analyticsId: "appointment_alternance",
    title: "Recherche d’alternance",
    description:
      "Tu postules sans réponse ou tu ne sais plus quoi améliorer ? Je regarde avec toi ton CV, ton positionnement et ta méthode de recherche.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ALTERNANCE_URL ?? "",
  },
  {
    id: "orientation",
    analyticsId: "appointment_orientation",
    title: "Orientation",
    description:
      "Tu hésites entre plusieurs voies ou tu as peur de te tromper ? Je t’aide à faire le tri entre tes envies, ton profil et les possibilités concrètes.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ORIENTATION_URL ?? "",
  },
  {
    id: "audit",
    analyticsId: "appointment_audit",
    title: "Faire le point sur ton profil",
    description:
      "Tu veux comprendre ce que raconte ton parcours et quelle suite serait la plus cohérente ? On analyse ton profil et les directions que tu peux réellement envisager.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_AUDIT_URL ?? "",
  },
] satisfies ReadonlyArray<{
  id: AppointmentId;
  analyticsId: string;
  title: string;
  description: string;
  calendlyUrl: string;
}>;

export const faqItems = [
  {
    question: "Est-ce que le rendez-vous est vraiment gratuit ?",
    answer: "Oui. Le rendez-vous dure 20 minutes, il est gratuit et tu ne t’engages à rien pour la suite.",
  },
  {
    question: "Est-ce un appel commercial pour me vendre une école ?",
    answer:
      "Le premier objectif du rendez-vous est de comprendre ta situation et de t’aider à y voir plus clair. Si l’accompagnement FASUP peut réellement correspondre à ton besoin, je pourrai t’expliquer son fonctionnement. Tu resteras entièrement libre de la suite.",
  },
  {
    question: "Est-ce utile si je ne sais absolument pas ce que je veux ?",
    answer:
      "Oui. Tu n’as pas besoin d’arriver avec un projet déjà construit. Le rendez-vous peut justement servir à faire le tri entre tes idées et à identifier ce qu’il faut explorer en premier.",
  },
  {
    question: "Dois-je préparer quelque chose ?",
    answer:
      "Non. Tu peux simplement venir avec tes questions. Si tu souhaites parler de ton CV ou de tes candidatures, garde les documents concernés à proximité.",
  },
  {
    question: "Est-ce que 20 minutes suffisent vraiment ?",
    answer:
      "Le but n’est pas de tout résoudre en 20 minutes. Le but est d’identifier ce qui bloque aujourd’hui et de t’aider à choisir la prochaine action utile.",
  },
  {
    question: "Est-ce que je vais être jugé sur mon parcours ?",
    answer:
      "Non. Tu peux avoir changé de voie, arrêté une formation ou ne pas encore savoir ce que tu veux. Le rendez-vous sert à comprendre ta situation, pas à juger les décisions que tu as prises.",
  },
] as const;
