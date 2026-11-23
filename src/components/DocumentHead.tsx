import { useEffect } from "react";
import { getCanonicalUrl, getOgImageUrl, getProductionSiteUrl } from "@/lib/seo";

function ensureLinkRel(rel: string, href: string): void {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

function ensureMeta(selector: string, attrs: Record<string, string>): void {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    const created = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      if (key !== "content") {
        created.setAttribute(key, value);
      }
    });
    document.head.appendChild(created);
    el = created;
  }
  if (attrs.content !== undefined) {
    el.content = attrs.content;
  }
}

export function DocumentHead() {
  useEffect(() => {
    const canonical = getCanonicalUrl();
    const ogImage = getOgImageUrl();
    const siteUrl = getProductionSiteUrl();

    document.title = "USMON TECH | International Software Development";
    ensureLinkRel("canonical", canonical);
    ensureMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    ensureMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    ensureMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    const ldScript = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (ldScript?.textContent) {
      try {
        const data = JSON.parse(ldScript.textContent) as { url?: string };
        if (data.url !== siteUrl) {
          data.url = siteUrl;
          ldScript.textContent = JSON.stringify(data);
        }
      } catch {
        /* keep existing JSON-LD if parse fails */
      }
    }
  }, []);

  return null;
}