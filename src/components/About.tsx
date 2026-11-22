import { aboutHighlights } from "@/data/content";
import { siteConfig } from "@/config/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-neutral-900 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">About Me</h2>
        <p className="section-subheading">
          I&apos;m {siteConfig.developerName}, a software developer focused on turning business ideas into reliable
          digital products. I combine problem-solving, clean code, and modern technologies with an emphasis on
          outcomes that matter to your team and customers.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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