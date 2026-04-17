import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Pushkar. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Built with <Heart className="h-4 w-4 fill-primary text-primary" /> by Pushkar
        </p>
      </div>
    </footer>
  );
}
