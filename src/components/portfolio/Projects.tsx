import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DevBoard",
    description:
      "A real-time collaborative kanban board with optimistic updates, dark mode, and keyboard-first UX.",
    tags: ["React", "TypeScript", "WebSockets", "Postgres"],
    accent: "from-primary/30 to-primary-glow/10",
  },
  {
    title: "Pulse Analytics",
    description:
      "Lightweight analytics dashboard that ingests events through a streaming pipeline and renders interactive charts.",
    tags: ["Next.js", "Node.js", "Redis", "D3"],
    accent: "from-primary-glow/30 to-primary/10",
  },
  {
    title: "AlgoTrail",
    description:
      "An algorithm visualizer for sorting, pathfinding, and graph traversal — built to make hard concepts feel intuitive.",
    tags: ["React", "Canvas", "Algorithms"],
    accent: "from-primary/25 to-transparent",
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
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A few selected projects that capture how I think and what I love working on.
        </p>
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
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href="#" aria-label={`View ${project.title} live`}>
                    <ExternalLink className="h-4 w-4" />
                    Live
                  </a>
                </Button>
                <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
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
