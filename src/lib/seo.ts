import { siteConfig } from "@/config/site";

/**
 * Planned production URL for SEO (canonical, Open Graph, sitemap).
 * Update `siteConfig.siteUrl` before deploy — domain is not live until you configure DNS and hosting.
 */
export function getProductionSiteUrl(): string {
  return siteConfig.siteUrl.replace(/\/+$/, "");
}

export function getCanonicalUrl(): string {
  return `${getProductionSiteUrl()}/`;
}

export function getOgImageUrl(): string {
  return `${getProductionSiteUrl()}/og-image.svg`;
}