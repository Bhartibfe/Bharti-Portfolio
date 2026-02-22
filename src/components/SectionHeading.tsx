import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-secondary">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
