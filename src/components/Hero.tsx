import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Globe2 } from "lucide-react";
import { heroDeliverables } from "@/data/content";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.14),transparent)]"
        aria-hidden
      />
      <div className="section-container relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brand">{siteConfig.brand}</p>
          <h1 id="hero-heading" className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Professional Software for{" "}
            <span className="brand-gradient-text">International Businesses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300">
            I design and build production-ready websites, mobile apps, and backend systems for startups and SMEs in
            the US, UK, Europe, and the Gulf — with clear communication and fixed milestones.
          </p>
          <p className="mt-3 text-sm text-neutral-500">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#projects" className="btn-secondary">
              View case studies
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">What I build</p>
                <p className="mt-1 font-display text-xl font-semibold text-neutral-100">End-to-end delivery</p>
              </div>
              <span className="shrink-0 rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">
                Accepting new work
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {heroDeliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <motion.div
              className="mt-6 flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-950/60 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
            >
              <Globe2 className="h-5 w-5 shrink-0 text-brand" aria-hidden />
              <p className="text-sm leading-relaxed text-neutral-400">
                Remote-first collaboration in English. Email and project inquiry form — typically a reply within 24–48
                hours on business days.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}