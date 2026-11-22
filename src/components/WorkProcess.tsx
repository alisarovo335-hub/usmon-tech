import { processSteps } from "@/data/content";

export function WorkProcess() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">Work Process</h2>
        <p className="section-subheading">
          A structured approach that keeps international projects predictable — clear communication at every stage.
        </p>
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <li key={step.step} className="premium-card relative">
              <span
                className="font-display text-4xl font-bold text-neutral-800"
                aria-hidden
              >
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}