import { services } from "@/data/content";

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-neutral-950/50 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Services</h2>
        <p className="section-subheading">
          End-to-end development for businesses that need professional web, mobile, and software solutions — from
          first concept to deployment.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="premium-card flex h-full flex-col">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-base font-semibold leading-snug">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">{service.description}</p>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <a href="#contact" className="btn-primary">
            Discuss your project
          </a>
        </div>
      </div>
    </section>
  );
}