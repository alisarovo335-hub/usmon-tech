import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Technologies", href: "#technologies" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-neutral-800/80 bg-neutral-950/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a
          href="#top"
          className="group flex items-center gap-2 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          aria-label={`${siteConfig.brand} — back to top`}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 font-display text-sm font-bold text-brand ring-1 ring-brand/30"
            aria-hidden
          >
            UT
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">{siteConfig.brand}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-neutral-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary py-2.5 text-sm">
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex rounded-lg border border-neutral-800 p-2 text-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-neutral-800 bg-neutral-950 px-4 pb-6 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-base font-medium text-neutral-200 hover:bg-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Hire Me
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}