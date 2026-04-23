import * as React from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const socials = [
  { icon: Github, href: "https://github.com/pushkar-code", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/pushkar-c-0b8b7733a/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:pushkar108968a@gmail.com", label: "Email" },
];

export function Contact() {
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      access_key: "2859a4b4-063f-4017-ac4d-3244805b0627",
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      console.log("Sending data:", data);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("API Response:", result);

      if (response.ok) {
        (e.target as HTMLFormElement).reset();
        toast.success("Message sent!", {
          description: "Thanks for reaching out — I'll get back to you soon.",
        });
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Something went wrong", {
        description: error.message || "Your message couldn't be sent. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-primary">
          Contact
        </p>
        <h2 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
          Let's build <span className="text-gradient-mint">something together</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Have an idea, a question, or just want to say hi? Drop a message.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border/60 bg-surface/60 p-6 backdrop-blur sm:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Name
            </label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="border-border/60 bg-background/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="border-border/60 bg-background/50"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell me about your idea or project..."
            className="border-border/60 bg-background/50"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="mt-6 w-full bg-primary text-primary-foreground shadow-glow hover:bg-primary-glow sm:w-auto"
        >
          <Send />
          {submitting ? "Sending..." : "Send message"}
        </Button>
      </form>

      <div className="mt-10 flex justify-center gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-surface/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary hover:shadow-glow"
          >
            <s.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
