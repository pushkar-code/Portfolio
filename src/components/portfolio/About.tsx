import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Sparkles, Rocket, GraduationCap } from "lucide-react";

const facts = [
  { icon: MapPin, label: "Based in", value: "India" },
  { icon: Sparkles, label: "Focus", value: "Full-stack, & Problem Solving" },
  { icon: GraduationCap, label: "Currently learning", value: "DSA & Data Science" },
  { icon: Rocket, label: "Open to", value: "Internships & Collaborations" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          About me
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          A bit about <span className="text-gradient-mint">who I am</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            I am a <span className="text-foreground font-semibold">Computer Science undergraduate student</span>  who enjoys solving problems and building efficient solutions. I like stepping outside my comfort zone by taking on new challenges and exploring unfamiliar technologies. I am always looking to learn, improve, and apply my skills to meaningful projects.
          </p>
        </div>

        <Card className="border-border/60 bg-surface/60 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <h3 className="mb-6 font-display text-xl font-semibold">Quick facts</h3>
            <ul className="space-y-5">
              {facts.map((fact) => (
                <li key={fact.label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <fact.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="text-base font-medium text-foreground">{fact.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
