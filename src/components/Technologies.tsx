import { techCategories } from "@/data/content";

export function Technologies() {
  return (
    <section id="technologies" className="scroll-mt-24 border-t border-neutral-900 bg-neutral-950/50 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Technologies</h2>
        <p className="section-subheading">
          Stacks verified in ARZON BOZOR and NEWVID — each item appears in those project codebases, not a generic list.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category) => (
            <article key={category.name} className="premium-card">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-brand">
                {category.name}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-1.5 text-sm text-neutral-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}