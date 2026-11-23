import { hasContactChannel, siteConfig } from "@/config/site";

const footerNav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12">
      <div className="section-container">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold">{siteConfig.brand}</p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              Remote software development for international businesses — web, mobile, APIs, and internal tools.
            </p>
            {hasContactChannel("email") ? (
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-4 inline-block text-sm font-medium text-brand hover:underline"
              >
                {siteConfig.email}
              </a>
            ) : null}
          </div>
          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-6">
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