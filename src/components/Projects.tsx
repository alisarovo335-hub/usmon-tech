import { ExternalLink } from "lucide-react";
import { projects, type ProjectStatus } from "@/data/content";

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
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <h2 className="section-heading">My Projects</h2>
        <p className="section-subheading">
          Selected work with honest status labels. Live demos and stacks reflect what is implemented in the codebase.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="premium-card overflow-hidden p-0">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-800">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
          width={640}
          height={400}
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusStyles(project.status)}`}
        >
          {project.status}
        </span>
      </div>
      <div className="p-6 sm:p-8">
        <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.highlights.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-neutral-800 bg-neutral-950 px-2.5 py-1 text-xs text-neutral-300"
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-6 w-full sm:w-auto"
          >
            View live site
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        ) : (
          <p className="mt-6 text-sm text-neutral-500" role="status">
            Public demo URL not published yet — project is actively under development.
          </p>
        )}
      </div>
    </article>
  );
}