import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Great_Vibes, Outfit } from "next/font/google";
import { SiteProvider } from "@/context/site-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["800"],
});

const greatVibes = Great_Vibes({
  variable: "--font-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Lyd's — Doriane Atohountoun",
  description:
    "Portfolio créatif de Doriane Atohountoun : community management, création de contenu, design graphique, web & UI/UX, photographie et montage vidéo.",
  metadataBase: new URL("https://lyds-portfolio.vercel.app"),
};

export const viewport: Viewport = {
  themeColor: "#FBF6F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${greatVibes.variable} ${outfit.variable}`}>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
