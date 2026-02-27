import { cn } from "@/lib/utils/cn";

export default function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition hover:shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
