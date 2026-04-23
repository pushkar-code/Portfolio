import { Code2, Wrench, Layers } from "lucide-react";
import * as Si from "react-icons/si";

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", icon: Si.SiJavascript },
      { name: "Python", icon: Si.SiPython },
      { name: "Java", icon: Si.SiOpenjdk },
      { name: "C", icon: Si.SiCplusplus },
      { name: "SQL", icon: Si.SiMysql },
      { name: "HTML", icon: Si.SiHtml5 },
      { name: "CSS", icon: Si.SiCss },
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    items: [
      { name: "React", icon: Si.SiReact },
      { name: "Node.js", icon: Si.SiNodedotjs },
      { name: "Express", icon: Si.SiExpress },
      { name: "TailwindCSS", icon: Si.SiTailwindcss },
      { name: "Bootstrap", icon: Si.SiBootstrap },
      { name: "Flask", icon: Si.SiFlask },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      { name: "Git", icon: Si.SiGit },
      { name: "Github", icon: Si.SiGithub },
      { name: "PostgreSQL", icon: Si.SiPostgresql },
      { name: "MongoDB", icon: Si.SiMongodb },
      { name: "Vite", icon: Si.SiVite },
    ],
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
                  key={item.name}
                  className="flex items-center rounded-full border border-border/60 bg-background/40 px-3 py-1 text-sm text-foreground/90 transition-colors hover:border-primary/60 hover:text-primary"
                >
                  {item.icon && <item.icon className="mr-1.5 h-3.5 w-3.5" />}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
