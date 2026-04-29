import * as React from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "home")}
          className="flex items-center gap-2 text-2xl font-bold font-display"
          aria-label="Pushkar — home"
        >
          <span className="text-gradient-mint">Pushkar C</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  active === link.id ? "text-primary" : "text-muted-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300",
                    active === link.id ? "w-full" : "w-0",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-surface md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/50 glass md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleClick(e, link.id)}
                  className={cn(
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors",
                    active === link.id
                      ? "bg-surface text-primary"
                      : "text-muted-foreground hover:bg-surface hover:text-primary",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
