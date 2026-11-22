import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";
import { siteConfig } from "./src/config/site";

const projectRoot = fileURLToPath(new URL(".", import.meta.url));

function getProductionSiteUrl(): string {
  return siteConfig.siteUrl.replace(/\/+$/, "");
}

function seoStaticPlugin(): Plugin {
  return {
    name: "usmon-seo-static",
    buildStart() {
      const base = getProductionSiteUrl();
      const publicDir = path.join(projectRoot, "public");
      fs.writeFileSync(
        path.join(publicDir, "robots.txt"),
        ["User-agent: *", "Allow: /", "", `Sitemap: ${base}/sitemap.xml`, ""].join("\n"),
        "utf8",
      );
      fs.writeFileSync(
        path.join(publicDir, "sitemap.xml"),
        [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          "  <url>",
          `    <loc>${base}/</loc>`,
          "    <changefreq>monthly</changefreq>",
          "    <priority>1.0</priority>",
          "  </url>",
          "</urlset>",
          "",
        ].join("\n"),
        "utf8",
      );
    },
    transformIndexHtml(html) {
      const base = getProductionSiteUrl();
      const canonical = `${base}/`;
      const ogImage = `${base}/og-image.svg`;
      let result = html;
      if (!result.includes('rel="canonical"')) {
        result = result.replace(
          '<meta name="theme-color"',
          [
            `<link rel="canonical" href="${canonical}" />`,
            `    <meta property="og:url" content="${canonical}" />`,
            '    <meta name="theme-color"',
          ].join("\n    "),
        );
      }
      result = result.replace(
        '<meta property="og:image" content="/og-image.svg" />',
        `<meta property="og:image" content="${ogImage}" />`,
      );
      if (!result.includes('name="twitter:image"')) {
        result = result.replace(
          '<meta name="twitter:card"',
          `<meta name="twitter:image" content="${ogImage}" />\n    <meta name="twitter:card"`,
        );
      }
      result = result.replace(/"url": "https:\/\/usmon\.tech"/, `"url": "${base}"`);
      return result;
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoStaticPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});