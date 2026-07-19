import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Axel — Fais le point sur ton avenir",
  description:
    "Un rendez-vous gratuit de 20 minutes avec Axel pour clarifier ton alternance, ton orientation ou la suite de tes études.",
  openGraph: {
    title: "Ton avenir ne devrait pas rester flou.",
    description:
      "Fais le point avec Axel et repars avec des prochaines étapes concrètes.",
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
