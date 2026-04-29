import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Placement Portal",
    description:
      "Simplifying campus placements by connecting students, recruiters, and opportunities in one place.",
    tags: ["Jinja", "Flask", "REST Api", "Sqlite","Bootstrap"],
    accent: "from-primary/30 to-primary-glow/10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Projects
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Things I've <span className="text-gradient-mint">built</span>
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-surface/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div
              className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 grid-bg opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-5xl font-bold text-gradient-mint opacity-90">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-xs font-medium text-primary"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-2">
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:bg-transparent hover:text-primary" asChild>
                  <a href="#" aria-label={`View ${project.title} source code`}>
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
