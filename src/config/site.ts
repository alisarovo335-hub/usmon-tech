/**
 * Contact: add real values before publishing. Links stay hidden until non-empty.
 *
 * Production URL (`siteUrl`): used for canonical links, Open Graph, sitemap, and robots.txt.
 * This is your planned live domain — it is NOT verified as deployed until you connect hosting and DNS.
 */
export const siteConfig = {
  brand: "USMON TECH",
  tagline:
    "Custom websites, mobile apps, and business software — built for international teams.",
  developerName: "Usmon",
  email: "sultonsuliman2726@gmail.com",
  whatsapp: "",
  telegram: "",
  linkedIn: "",
  locale: "en",
  /** Live deployment origin (no trailing slash). Update when a custom domain is verified. */
  siteUrl: "https://usmon-tech.vercel.app",
} as const;

export type SiteConfig = typeof siteConfig;

export function hasContactChannel(
  key: "email" | "whatsapp" | "telegram" | "linkedIn",
): boolean {
  return siteConfig[key].trim().length > 0;
}