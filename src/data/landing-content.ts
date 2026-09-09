export type AppointmentId = "alternance" | "orientation" | "audit";

export const navigation = [
  { label: "Comment je t’aide", href: "#valeur" },
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

export const youtubeVideoId =
  process.env.NEXT_PUBLIC_YOUTUBE_VIDEO_ID?.trim() || "EfWg8s08fc0";

export const googleCalendarBookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1BPa22uWIryGt3-3p7uj0bug3Z0NjD5M3myLPzrfYcjSXbyIfejGfSQ8EfgQoWUldPbBpnRbBI?gv=true";

export const googleCalendarFallbackUrl =
  "https://calendar.app.google/ikXsokAarQQMxVASA";

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
    label: "entièrement centrées sur ta situation",
  },
  {
    value: 100,
    prefix: "",
    suffix: " %",
    display: "100 %",
    label: "gratuit et sans engagement",
  },
  {
    value: null,
    prefix: "",
    suffix: "",
    display: "Suivi personnalisé",
    label: "disponible gratuitement après le rendez-vous",
  },
] as const;

export const testimonials = [
  {
    name: "Iwan",
    videoId: "468647380160",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468647380160",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/retour%20Iwan-1-thumb.jpeg?length=1920",
    alt: "retour Iwan-1",
  },
  {
    name: "Yaël & Océane",
    videoId: "468655165631",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468655165631",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/YAEL%20ET%20OC%C3%89ANE-thumb.jpeg?length=1920",
    alt: "YAEL ET OCÉANE",
  },
  {
    name: "Mathias",
    videoId: "468655164655",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468655164655",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/MATHIAS-thumb.jpeg?length=1920",
    alt: "MATHIAS",
  },
  {
    name: "Erwan",
    videoId: "468655164626",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468655164626",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/ERWAN-thumb.jpeg?length=1920",
    alt: "ERWAN",
  },
  {
    name: "Capucine",
    videoId: "468625965278",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468625965278",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/CAPUCINE-thumb.jpeg?length=1920",
    alt: "CAPUCINE",
  },
  {
    name: "Nada",
    videoId: "468655164614",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468655164614",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/NADA-thumb.jpeg?length=1920",
    alt: "NADA",
  },
  {
    name: "Morgane",
    videoId: "468655164604",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468655164604",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/MORGANE-thumb.jpeg?length=1920",
    alt: "MORGANE",
  },
  {
    name: "Louna",
    videoId: "468647381190",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468647381190",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/Louna%20V3-thumb.jpeg?length=1920",
    alt: "Louna V3",
  },
  {
    name: "Anaelle",
    videoId: "468647381181",
    shareUrl: "https://145727087.hs-sites-eu1.com/share/video/468647381181",
    thumbnailUrl:
      "https://145727087.fs1.hubspotusercontent-eu1.net/hub/145727087/hubfs/custom-video-thumbnails/ANAELLE-thumb.jpeg?length=1920",
    alt: "ANAELLE",
  },
] as const;

export const methodSteps = [
  {
    title: "Tu m’expliques où tu en es",
    text: "Ce que tu recherches, ce que tu as déjà essayé et ce qui te fait douter.",
  },
  {
    title: "On identifie le vrai point de blocage",
    text: "CV, discours, méthode ou orientation : on repère ce qui te freine réellement.",
  },
  {
    title: "Tu sais quoi faire ensuite",
    text: "Tu repars avec une priorité claire et une première action réaliste.",
  },
  {
    title: "Tu peux continuer à être accompagné gratuitement",
    text: "Si tu souhaites aller plus loin, les équipes FASUP peuvent t’accompagner sur ton CV, tes candidatures, tes entretiens et ta recherche d’alternance, toujours gratuitement.",
  },
] as const;

export const appointments = [
  {
    id: "orientation",
    analyticsId: "appointment_orientation",
    title: "Orientation",
    description: "J’ai besoin d’aide pour mon orientation",
  },
  {
    id: "alternance",
    analyticsId: "appointment_alternance",
    title: "Recherche d’alternance",
    description: "Je cherche une alternance",
  },
  {
    id: "audit",
    analyticsId: "appointment_audit",
    title: "Audit profil / CV",
    description: "Je veux faire auditer mon profil / CV",
  },
] satisfies ReadonlyArray<{
  id: AppointmentId;
  analyticsId: string;
  title: string;
  description: string;
}>;

export const faqItems = [
  {
    question: "Est-ce que le rendez-vous est vraiment gratuit ?",
    answer: "Oui. Le rendez-vous dure 20 minutes, il est gratuit et tu ne t’engages à rien pour la suite.",
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
    question: "Pourquoi réserver 20 minutes avec moi plutôt que regarder une vidéo de plus ?",
    answer:
      "Une vidéo peut te donner une méthode, une idée ou un déclic. Mais elle ne connaît ni ton parcours, ni ce que tu as déjà essayé, ni ce qui te bloque aujourd’hui. Pendant le rendez-vous, on travaille directement sur ta situation pour identifier ta priorité et décider de la prochaine action.",
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
  {
    question: "Est-ce que je reste libre après le rendez-vous ?",
    answer:
      "Oui, le rendez-vous ne t’engage à rien. Si tu souhaites ensuite poursuivre avec l’accompagnement FASUP, je pourrai t’expliquer comment il fonctionne. La décision restera entièrement la tienne.",
  },
] as const;
