import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

export function Hero() {
  const typed = useTypewriter({
    words: ["a Developer.", "a Problem Solver.", "a Tech Explorer.", "a Lifelong Learner."],
  });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[auto_1fr] md:items-center md:gap-14 lg:px-8">
        {/* Profile picture */}
        <div className="flex justify-center md:justify-start">
          <div className="relative animate-float">
            <div
              className="absolute inset-0 rounded-full blur-2xl"
              style={{ background: "var(--gradient-mint)", opacity: 0.45 }}
              aria-hidden="true"
            />
            <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-2 border-primary/60 bg-surface shadow-glow sm:h-56 sm:w-56 animate-glow-pulse">
              <span className="font-display text-6xl font-bold text-gradient-mint sm:text-7xl">
                P
              </span>
            </div>
          </div>
        </div>

        {/* Heading + tagline */}
        <div className="text-center md:text-left animate-fade-in-up">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
            Welcome to my portfolio
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            Hey, I am{" "}
            <span className="text-gradient-mint">Pushkar</span>
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold text-foreground/90 sm:text-3xl md:text-4xl">
            I'm{" "}
            <span className="text-gradient-mint">{typed}</span>
            <span
              className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] bg-primary animate-blink align-middle"
              aria-hidden="true"
            />
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mx-0">
            Passionate about solving problems with efficient, scalable approaches. Driven to
            explore new technologies and push beyond comfort zones to grow.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
            <Button
              size="lg"
              className="group bg-primary text-primary-foreground shadow-glow hover:bg-primary-glow"
              onClick={() => scrollTo("projects")}
            >
              View Projects
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/40 bg-transparent text-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => scrollTo("contact")}
            >
              <Mail />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
