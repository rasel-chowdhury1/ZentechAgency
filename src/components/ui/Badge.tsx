import { cn } from "@/lib/utils/cn";

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1 text-xs text-[color:var(--foreground)]/80",
        className
      )}
    >
      {children}
    </span>
  );
}
