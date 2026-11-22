# USMON TECH — Developer Portfolio

Premium single-page portfolio for international client acquisition (React + Vite + TypeScript + Tailwind CSS).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Tests & lint

```bash
npm test
npm run lint
```

## Configure production URL and contact details

Edit `src/config/site.ts`:

- **`siteUrl`** — planned production origin (canonical, Open Graph, `robots.txt`, `sitemap.xml`). Not live until you deploy and point DNS.
- **Contact fields** — set `whatsapp`, `telegram`, and `linkedIn` when ready (email is configured in `site.ts`).

## Contact form (Formspree)

1. Copy `.env.example` to `.env.local` (recommended) or `.env`.
2. Set `VITE_FORMSPREE_ENDPOINT` to your full Formspree URL (see Formspree dashboard).
3. Restart `npm run dev` and submit a test message to verify delivery.

`robots.txt` and `sitemap.xml` in `public/` are regenerated from `siteUrl` when you run `npm run build` (or `vite` dev/build via the SEO plugin).

## Contact form backend

The form validates in the browser only. Connect a service (Resend, Formspree, custom API) in `ContactForm.tsx` when ready.

## Deploy

Static output is in `dist/` after `npm run build`. Suitable hosts include Vercel, Netlify, Cloudflare Pages, or Surge:

```bash
npx surge dist your-portfolio-name.surge.sh
```