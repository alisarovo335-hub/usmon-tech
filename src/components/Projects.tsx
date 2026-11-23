import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project, type ProjectStatus } from "@/data/content";
import { ProjectDeviceMockup } from "./ProjectDeviceMockup";

function statusStyles(status: ProjectStatus): string {
  switch (status) {
    case "Completed":
      return "bg-brand/15 text-brand ring-brand/30";
    case "In Development":
      return "bg-amber-500/15 text-amber-300 ring-amber-500/30";
    case "Prototype":
      return "bg-sky-500/15 text-sky-300 ring-sky-500/30";
  }
}

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-x-clip border-y border-neutral-900 bg-neutral-950/40 py-20 sm:py-28"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Case studies</p>
          <h2 className="section-heading mt-2">Products & demos</h2>
          <p className="section-subheading max-w-3xl">
            Large-format previews from real work — public demos only where a URL exists. Screenshots are taken from the
            actual project interfaces, not generated mock data.
          </p>
        </motion.div>

        <ul className="mt-16 space-y-24 sm:mt-20 sm:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <li key={project.id}>
              <ProjectShowcase project={project} visualOnRight={index % 2 === 1} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProjectShowcase({ project, visualOnRight }: { project: Project; visualOnRight: boolean }) {
  const visual = (
    <div
      className={`relative min-w-0 max-w-full overflow-x-clip pb-6 sm:pb-10 ${
        project.showMobilePreview ? "lg:pb-24 lg:pr-2 xl:pr-4" : ""
      }`}
    >
      <ProjectDeviceMockup
        desktopImage={project.image}
        desktopAlt={project.imageAlt}
        demoUrlLabel={project.demoUrlLabel}
        mobileImage={project.mobileImage}
        mobileAlt={project.mobileImageAlt}
        showMobile={project.showMobilePreview}
      />
    </div>
  );

  const copy = (
    <motion.article
      className="flex flex-col justify-center"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: 0.05 }}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ${statusStyles(project.status)}`}
        >
          {project.status}
        </span>
        <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{project.category}</span>
      </div>

      <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{project.name}</h3>

      <p className="mt-4 text-base leading-relaxed text-neutral-300 sm:text-lg">{project.description}</p>

      <p className="mt-4 text-sm leading-relaxed text-neutral-500">
        <span className="font-medium text-neutral-400">My role: </span>
        {project.role}
      </p>

      <div className="mt-8">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Technologies</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-neutral-800 bg-neutral-950/80 px-3 py-1.5 text-xs font-medium text-neutral-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 rounded-2xl border border-neutral-800/80 bg-neutral-900/40 p-5">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Implemented & verifiable</h4>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-400">
          {project.implementedFeatures.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        {project.demoNote ? (
          <p className="mt-4 border-t border-neutral-800 pt-4 text-xs leading-relaxed text-neutral-500">
            {project.demoNote}
          </p>
        ) : null}
      </div>

      <div className="mt-10 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full min-w-0 sm:w-auto"
            >
              {project.externalDemoLabel ?? "View project"}
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          ) : (
            <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-800 px-5 py-3 text-sm text-neutral-500 sm:w-auto">
              Public demo not available
            </span>
          )}
          <a href="#contact" className="btn-secondary group w-full min-w-0 sm:w-auto">
            Discuss a similar build
            <ArrowUpRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
        {project.demoAccessNote ? (
          <p className="text-xs leading-relaxed text-neutral-500">{project.demoAccessNote}</p>
        ) : null}
      </div>
    </motion.article>
  );

  return (
    <motion.div
      className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {visualOnRight ? (
        <>
          <div className="order-2 lg:order-1">{copy}</div>
          <div className="order-1 lg:order-2">{visual}</div>
        </>
      ) : (
        <>
          <div>{visual}</div>
          <div>{copy}</div>
        </>
      )}
    </motion.div>
  );
}