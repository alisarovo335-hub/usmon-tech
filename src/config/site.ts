/**
 * Contact: add real values before publishing. Links stay hidden until non-empty.
 *
 * Production URL (`siteUrl`): used for canonical links, Open Graph, sitemap, and robots.txt.
 * This is your planned live domain — it is NOT verified as deployed until you connect hosting and DNS.
 */
export const siteConfig = {
  brand: "USMON TECH",
  tagline: "Full-Stack Developer | Web & Mobile Application Developer | Business Software Solutions",
  developerName: "Usmon",
  email: "sultonsuliman2726@gmail.com",
  whatsapp: "",
  telegram: "",
  linkedIn: "",
  locale: "en",
  /** Planned production origin (no trailing slash). Change to your real URL before go-live. */
  siteUrl: "https://usmon.tech",
} as const;

export type SiteConfig = typeof siteConfig;

export function hasContactChannel(
  key: "email" | "whatsapp" | "telegram" | "linkedIn",
): boolean {
  return siteConfig[key].trim().length > 0;
}