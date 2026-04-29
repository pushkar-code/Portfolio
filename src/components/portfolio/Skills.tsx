import { Code2, Wrench, Layers } from "lucide-react";
import * as Si from "react-icons/si";

// Custom SVG icon for Java (since react-icons/si doesn't have it)
const JavaIcon = ({ className }: { className?: string }) => (
  <svg width="24px" height="24px" fill="white" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149m-.575-2.627s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218m4.84-4.458c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573m6.214 9.029s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892m7.824 4.374c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>
);

const groups = [
  {
    title: "Languages",
    icon: Code2,
    items: [
      { name: "JavaScript", icon: Si.SiJavascript },
      { name: "Python", icon: Si.SiPython },
      { name: "Java", icon: JavaIcon },
      { name: "C", icon: Si.SiC },
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
      { name: "SQLite", icon: Si.SiSqlite },
      { name: "MongoDB", icon: Si.SiMongodb },
      { name: "Vite", icon: Si.SiVite },
      {name: "MySQL",icon: Si.SiMysql},
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
