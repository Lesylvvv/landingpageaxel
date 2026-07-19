export type AppointmentId = "alternance" | "orientation" | "audit";

export const navigation = [
  { label: "Accompagnement", href: "#accompagnement" },
  { label: "Méthode", href: "#methode" },
  { label: "Témoignages", href: "#temoignages" },
  { label: "FAQ", href: "#faq" },
] as const;

export const heroTrust = [
  { label: "+1 000 étudiants accompagnés", needsValidation: true },
  { label: "100 % gratuit", needsValidation: false },
  { label: "20 min avec Axel", needsValidation: false },
] as const;

export const heroBenefits = [
  "Un échange adapté à ton profil",
  "Des conseils concrets",
  "Aucun engagement",
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

// À revérifier avec une source, un périmètre et une date avant la mise en production finale.
export const statistics = [
  {
    value: 1000,
    prefix: "+",
    suffix: "",
    display: "+1 000",
    label: "étudiants déjà accompagnés",
    needsValidation: true,
  },
  {
    value: 30,
    prefix: "",
    suffix: " jours",
    display: "30 jours",
    label: "en moyenne pour trouver une alternance",
    needsValidation: true,
  },
  {
    value: 100,
    prefix: "",
    suffix: " %",
    display: "100 %",
    label: "gratuit et sans engagement",
    needsValidation: false,
  },
  {
    value: 1,
    prefix: "",
    suffix: " échange",
    display: "1 échange",
    label: "construit autour de ton profil",
    needsValidation: false,
  },
] as const;

export const problems = [
  {
    title: "Tes candidatures restent sans réponse",
    text: "Tu envoies des CV, mais tu ne sais pas ce qui bloque réellement.",
  },
  {
    title: "Tu as trop de possibilités",
    text: "Tu hésites entre plusieurs voies et tu as peur de perdre du temps.",
  },
  {
    title: "Les conseils restent trop génériques",
    text: "On te dit d’être motivé, sans jamais t’expliquer quoi changer concrètement.",
  },
  {
    title: "Tu doutes de ton propre profil",
    text: "Tu ne sais plus comment présenter ton parcours, tes qualités ou ton projet.",
  },
] as const;

export const trustPoints = [
  {
    title: "On part de ta situation",
    text: "Pas d’avis automatique. Axel écoute ton parcours avant de te proposer une direction.",
  },
  {
    title: "On connaît le terrain",
    text: "Des équipes travaillent avec les étudiants, les entreprises et les recruteurs pour comprendre ce qui fait réellement la différence.",
  },
  {
    title: "On transforme le flou en actions",
    text: "Tu repars avec des priorités claires, des points à améliorer et une prochaine étape réaliste.",
  },
] as const;

export const methodSteps = [
  {
    title: "On comprend où tu en es",
    text: "Tu expliques ta situation, ce que tu recherches, ce que tu as déjà essayé et les questions qui te bloquent.",
  },
  {
    title: "On identifie le vrai problème",
    text: "CV, discours, méthode de recherche, choix d’orientation ou manque de direction : Axel t’aide à repérer ce qui mérite vraiment ton attention.",
  },
  {
    title: "Tu repars avec une direction claire",
    text: "À la fin des 20 minutes, tu sais quelles actions prioriser et quelle prochaine étape engager.",
  },
] as const;

export const appointments = [
  {
    id: "alternance",
    analyticsId: "appointment_alternance",
    title: "Recherche d’alternance",
    description:
      "Tu postules sans réponse ou tu ne sais plus quoi améliorer ? On analyse ta recherche, ton positionnement et les prochaines actions à mettre en place.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ALTERNANCE_URL ?? "",
  },
  {
    id: "orientation",
    analyticsId: "appointment_orientation",
    title: "Orientation",
    description:
      "Tu hésites entre plusieurs voies ou tu as peur de te tromper ? On fait le tri entre tes envies, tes qualités et les possibilités concrètes.",
    calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_ORIENTATION_URL ?? "",
  },
  {
    id: "audit",
    analyticsId: "appointment_audit",
    title: "Audit profil / après tes études",
    description:
      "Tu veux savoir ce que ton parcours raconte et quelle suite serait la plus cohérente ? Axel analyse ton profil et t’aide à construire la prochaine étape.",
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
    answer: "Oui. Le rendez-vous de 20 minutes avec Axel est gratuit et sans engagement.",
  },
  {
    question: "Est-ce que je dois déjà savoir ce que je veux ?",
    answer:
      "Non. Tu peux justement réserver parce que tu es perdu, que tu hésites ou que tu ne sais pas encore quelle direction prendre.",
  },
  {
    question: "Est-ce que vous me garantissez une alternance ?",
    answer:
      "Non. Personne ne peut sérieusement te garantir une alternance. En revanche, Axel peut t’aider à comprendre ce qui bloque, à améliorer ta méthode et à concentrer tes efforts au bon endroit.",
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
      "L’objectif est d’abord de comprendre ta situation et de t’aider à avancer. Si l’accompagnement FASUP correspond à ton projet, Axel pourra te l’expliquer clairement. Tu restes libre de la suite.",
  },
  {
    question: "Quel rendez-vous dois-je choisir ?",
    answer:
      "Choisis simplement celui qui correspond le mieux à ton problème principal. Si tu hésites, sélectionne “Orientation” : Axel pourra ensuite réorienter l’échange selon ta situation.",
  },
] as const;
