import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24" aria-labelledby="hero-heading">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.18),transparent)]"
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
            Building Digital Products That{" "}
            <span className="brand-gradient-text">Grow Businesses.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-400">
            I help businesses transform their ideas into powerful websites, mobile applications, and
            intelligent software solutions.
          </p>
          <p className="mt-3 text-sm text-neutral-500">{siteConfig.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              Hire Me
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#projects" className="btn-secondary">
              View My Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div className="hero-orb relative rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 shadow-2xl shadow-brand/5 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">Developer workspace</p>
                <p className="mt-1 font-display text-xl font-semibold">{siteConfig.developerName}</p>
              </div>
              <span className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand">Available for hire</span>
            </div>
            <div className="mt-6 grid gap-3 font-mono text-xs sm:text-sm">
              <motion.div
                className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-4"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                <span className="text-brand">const</span> mission ={" "}
                <span className="text-amber-200/90">&quot;Ship products clients trust&quot;</span>;
              </motion.div>
              <motion.div
                className="rounded-xl border border-neutral-800 bg-neutral-950/80 p-4"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-brand">stack</span> = [<span className="text-sky-300/90">&quot;React&quot;</span>,{" "}
                <span className="text-sky-300/90">&quot;Next.js&quot;</span>,{" "}
                <span className="text-sky-300/90">&quot;NestJS&quot;</span>];
              </motion.div>
            </div>
            <motion.div
              className="absolute -bottom-4 -right-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand text-neutral-950 shadow-lg shadow-brand/25"
              aria-hidden
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="h-8 w-8" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}