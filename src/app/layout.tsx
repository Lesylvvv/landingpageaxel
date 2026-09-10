import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
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
      <body>
        {children}
        <Script id="metricool-tracker" strategy="afterInteractive">
          {`function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"15dd4ecad95ae1b9bfc6ba5e26ddb301"})});`}
        </Script>
        <Script
          id="hs-script-loader"
          type="text/javascript"
          src="https://js-eu1.hs-scripts.com/145727087.js"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
