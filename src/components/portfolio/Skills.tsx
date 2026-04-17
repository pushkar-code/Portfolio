import { Code2, Wrench, Layers } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: ["React", "Node.js", "Express", "Next.js", "TailwindCSS", "FastAPI"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: ["Git", "Docker", "PostgreSQL", "MongoDB", "AWS", "Vite"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Skills
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Tools I <span className="text-gradient-mint">work with</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          A snapshot of the technologies I use to build, ship, and learn.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.title}
            className="group rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <group.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border/60 bg-background/40 px-3 py-1 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
