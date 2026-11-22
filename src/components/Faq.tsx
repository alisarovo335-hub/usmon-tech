import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";

export function Faq() {
  const baseId = useId();

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container max-w-3xl">
        <h2 className="section-heading">FAQ</h2>
        <p className="section-subheading">
          Common questions from international clients about timelines, pricing, and remote work.
        </p>
        <div className="mt-10 divide-y divide-neutral-800 rounded-2xl border border-neutral-800">
          {faqItems.map((item, index) => (
            <FaqItem key={item.question} id={`${baseId}-${index}`} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ id, question, answer }: { id: string; question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="bg-neutral-950/30">
      <h3>
        <button
          type="button"
          id={`${id}-button`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-neutral-100 hover:bg-neutral-900/50"
          onClick={() => setOpen((v) => !v)}
        >
          {question}
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        hidden={!open}
        className="px-5 pb-4 text-sm leading-relaxed text-neutral-400"
      >
        {answer}
      </div>
    </article>
  );
}