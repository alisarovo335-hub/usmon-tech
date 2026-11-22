import { hasContactChannel, siteConfig } from "@/config/site";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
      <div className="section-container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold">{siteConfig.brand}</p>
            <p className="mt-2 text-sm text-neutral-400">Professional Software Development</p>
            {hasContactChannel("email") ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-block text-sm text-brand hover:underline"
              >
                {siteConfig.email}
              </a>
            ) : null}
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-neutral-900 pt-8 text-center text-xs text-neutral-500">
          © {year} {siteConfig.brand}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}