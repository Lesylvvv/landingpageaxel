export type AppointmentId = "alternance" | "orientation" | "audit";

export const navigation = [
  { label: "Accompagnement", href: "#accompagnement" },
  { label: "Méthode", href: "#methode" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroTrust = [
  "+1 000 étudiants accompagnés",
  "100 % gratuit",
  "20 min avec moi",
] as const;

export const heroBenefits = [
  "Un échange centré sur ta situation",
  "Des conseils concrets, adaptés à ton profil",
  "Une prochaine étape claire",
] as const;

export const socialLinks = [
  { label: "Instagram", href: "", shortLabel: "IG" },
  { label: "TikTok", href: "", shortLabel: "TT" },
  { label: "YouTube", href: "", shortLabel: "YT" },
] as const;

export const youtubeVideoId = process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID ?? "";

export const topics = [
  "Recherche d’alternance",
  "Orientation",
  "CV",
  "Entretien",
  "Poursuite d’études",
  "Projet professionnel",
  "Confiance",
  "Motivation",
] as const;

export const coachingVideos = [
  "Je postule, mais personne ne me répond",
  "Je ne sais pas quoi faire après mon BTS",
  "Mon CV ne raconte pas mon projet",
  "J’ai peur de choisir la mauvaise voie",
  "Je ne sais pas me vendre en entretien",
  "Je cherche une alternance depuis des mois",
].map((title, index) => ({
  id: `coaching-${index + 1}`,
  title,
  label: "Futur extrait coaching",
  videoUrl: "",
}));

export const statistics = [
  {
    value: 1000,
    prefix: "+",
    suffix: "",
    display: "+1 000",
    label: "étudiants accompagnés",
  },
  {
    value: 30,
    prefix: "",
    suffix: " jours",
    display: "30 jours",
    label: "en moyenne pour trouver une alternance",
  },
  {
    value: 100,
    prefix: "",
    suffix: " %",
    display: "100 %",
    label: "gratuit et sans engagement",
  },
  {
    value: 20,
    prefix: "",
    suffix: " min",
    display: "20 min",
    label: "entièrement centrées sur ta situation",
  },
] as const;

export const problems = [
  {
    title: "Tes candidatures restent sans réponse",
    text: "Tu envoies des CV sans comprendre pourquoi les entreprises ne reviennent pas vers toi.",
  },
  {
    title: "Tu hésites entre plusieurs directions",
    text: "Plusieurs possibilités t’intéressent, mais tu as peur de choisir la mauvaise et de perdre du temps.",
  },
  {
    title: "Les conseils restent trop génériques",
    text: "On te répète d’être motivé ou de mieux te vendre, sans te montrer précisément ce que tu dois changer.",
  },
  {
    title: "Tu doutes de ton propre profil",
    text: "Tu ne sais plus comment présenter ton parcours, tes qualités ou ton projet de manière convaincante.",
  },
] as const;

export const trustPoints = [
  {
    title: "Je pars de ta situation",
    text: "Avant de te proposer une direction, je prends le temps d’écouter ton parcours et de comprendre ce dont tu as réellement besoin.",
  },
  {
    title: "Je connais le terrain",
    text: "Avec les équipes FASUP, je travaille quotidiennement avec des étudiants, des entreprises et des recruteurs.",
  },
  {
    title: "Je t’aide à passer à l’action",
    text: "Tu repars avec des priorités claires, des points précis à améliorer et une prochaine étape réaliste.",
  },
] as const;

export const methodSteps = [
  {
    title: "Tu m’expliques où tu en es",
    text: "Tu me présentes ta situation, ce que tu recherches, ce que tu as déjà essayé et les questions qui te bloquent.",
  },
  {
    title: "On identifie ce qui te freine",
    text: "CV, discours, méthode de recherche, orientation ou manque de direction : on repère ensemble ce qui mérite vraiment ton attention.",
  },
  {
    title: "Tu repars avec un plan clair",
    text: "À la fin du rendez-vous, tu sais quelles actions prioriser et quelle prochaine étape mettre en place.",
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
      "Tu hésites entre plusieurs voies ou tu as peur de te tromper ? Je t’aide à faire le tri entre tes envies, tes qualités et les possibilités concrètes.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ORIENTATION_URL ?? "",
  },
  {
    id: "audit",
    analyticsId: "appointment_audit",
    title: "Faire le point sur ton profil",
    description:
      "Tu veux comprendre ce que ton parcours raconte et quelle suite serait la plus cohérente ? J’analyse ton profil avec toi et je t’aide à construire la prochaine étape.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_AUDIT_URL ?? "",
  },
] satisfies ReadonlyArray<{
  id: AppointmentId;
  analyticsId: string;
  title: string;
  description: string;
  calendlyUrl: string;
}>;

export const testimonials = [
  {
    quote: "[TÉMOIGNAGE ÉTUDIANT À AJOUTER]",
    name: "[PRÉNOM]",
    context: "[SITUATION DE DÉPART]",
    outcome: "[RÉSULTAT OU DÉCLIC]",
  },
  {
    quote: "[TÉMOIGNAGE ÉTUDIANT À AJOUTER]",
    name: "[PRÉNOM]",
    context: "[SITUATION DE DÉPART]",
    outcome: "[RÉSULTAT OU DÉCLIC]",
  },
  {
    quote: "[TÉMOIGNAGE ÉTUDIANT À AJOUTER]",
    name: "[PRÉNOM]",
    context: "[SITUATION DE DÉPART]",
    outcome: "[RÉSULTAT OU DÉCLIC]",
  },
] as const;

export const testimonialVideos = Array.from({ length: 6 }, (_, index) => ({
  id: `testimonial-${index + 1}`,
  label: `Futur témoignage ${String(index + 1).padStart(2, "0")}`,
  videoUrl: "",
}));

export const faqItems = [
  {
    question: "C’est vraiment gratuit ?",
    answer: "Oui. Le rendez-vous de 20 minutes avec moi est gratuit et sans engagement.",
  },
  {
    question: "Est-ce que je dois déjà savoir ce que je veux ?",
    answer:
      "Non. Tu peux justement réserver parce que tu es perdu, que tu hésites ou que tu ne sais pas encore quelle direction prendre.",
  },
  {
    question: "Est-ce que vous me garantissez une alternance ?",
    answer:
      "Non. Personne ne peut sérieusement te garantir une alternance. En revanche, je peux t’aider à comprendre ce qui bloque, à améliorer ta méthode et à concentrer tes efforts au bon endroit.",
  },
  {
    question: "Que dois-je préparer avant le rendez-vous ?",
    answer:
      "Tu peux venir avec ton CV, une offre, une idée de formation ou simplement tes questions. Si tu n’as encore rien de tout ça, le rendez-vous reste utile.",
  },
  {
    question: "Comment vais-je recevoir le lien Google Meet ?",
    answer:
      "Après ta réservation Calendly, tu recevras une confirmation avec la date, l’heure et le lien Google Meet.",
  },
  {
    question: "Est-ce un rendez-vous commercial ?",
    answer:
      "L’objectif est d’abord de comprendre ta situation et de t’aider à avancer. Si l’accompagnement FASUP correspond à ton projet, je pourrai alors t’expliquer clairement comment fonctionne l’accompagnement. Tu resteras entièrement libre de la suite.",
  },
  {
    question: "Quel rendez-vous dois-je choisir ?",
    answer:
      "Choisis simplement celui qui correspond le mieux à ton problème principal. Si tu hésites, sélectionne “Orientation” : je pourrai ensuite adapter le rendez-vous à ta situation.",
  },
] as const;
