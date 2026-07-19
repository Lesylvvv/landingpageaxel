import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axel — Clarifions ensemble ton avenir",
  description:
    "Un rendez-vous gratuit de 20 minutes pour clarifier ton alternance, ton orientation ou la suite de tes études.",
  openGraph: {
    title: "Ton avenir ne devrait pas rester flou.",
    description:
      "En 20 minutes, clarifie ta situation et repars avec une prochaine étape concrète.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full`}>
      <body>{children}</body>
    </html>
  );
}
