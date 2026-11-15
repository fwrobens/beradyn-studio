import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassShimmerButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} className={cn("glass-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm font-semibold text-foreground transition-shadow", className)}>
      {children}
    </a>
  );
}
