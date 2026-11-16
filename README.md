# Lyd's — Portfolio créatif de Doriane Atohountoun

Portfolio multidisciplinaire (community management, création de contenu,
design graphique, web & UI/UX, photographie, montage vidéo) construit avec
Next.js (App Router) et Tailwind CSS v4.

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **TypeScript**
- **Tailwind CSS v4**
- Thème clair/sombre et langue FR/EN pilotés par contexte React + `localStorage`
  (pas de dépendance externe)
- Polices via `next/font/google` : Bricolage Grotesque, Great Vibes, Outfit

## Structure

```
src/
  app/                     routes (App Router)
    a-propos/
    contact/
    parcours/
    projets/
      community-manager/
      creatrice-de-contenu/
      design-graphique/
      montage-video/
      photographie/
      web-ux/
  components/
    chrome/                header, footer, logo, theme/lang switches, halos
    ui/                     primitives, lightbox, filter bar, tools accordion…
  context/                 SiteProvider (theme + lang)
  lib/                     media paths, i18n helpers, motion helpers
public/
  media/                   every photo/video/PDF asset, named by its id
```

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint     # ESLint
```

## Déploiement sur Vercel

Le projet est prêt pour un déploiement "zero-config" sur Vercel :

1. Pousser ce dépôt sur GitHub (ou GitLab/Bitbucket).
2. Sur [vercel.com/new](https://vercel.com/new), importer le dépôt — Vercel
   détecte automatiquement Next.js (build command `next build`, output géré
   par l'adaptateur Next, pas de configuration manuelle nécessaire).
3. Chaque push sur la branche par défaut redéploie automatiquement ; chaque
   pull request obtient une Preview Deployment.

Aucune variable d'environnement n'est nécessaire : le site est entièrement
statique (toutes les pages sont pré-rendues au build, `npm run build` le
confirme avec `○ (Static)`).

### Remarques

- `public/media/` contient ~55 Mo d'images/vidéos/PDF réels (le CV, les
  captures d'écran de projets, les vidéos de montage). C'est au-dessus de la
  taille d'un dépôt Git "léger" mais reste très raisonnable pour Vercel
  (bien en dessous des limites de bande passante et de taille de build). Si
  le dépôt grossit encore avec de nouvelles vidéos, envisager un hébergement
  vidéo externe (Vercel Blob, Cloudinary, Mux) plutôt que `public/`.
- Les images sont servies via la balise `<img>` native plutôt que
  `next/image` dans les galeries et la lightbox : ces vues affichent des
  dimensions/ratios très variables (portrait, paysage, logos) et le coût de
  l'optimisation automatique n'apporte rien ici.
