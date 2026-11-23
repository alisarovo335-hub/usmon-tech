import { aboutHighlights } from "@/data/content";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-neutral-900 py-16 sm:py-20">
      <div className="section-container">
        <h2 className="section-heading">About {siteConfig.brand}</h2>
        <p className="section-subheading max-w-3xl">
          I&apos;m {siteConfig.developerName} — remote full-stack development for international clients: clear scope,
          milestone delivery, maintainable code.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="premium-card">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}