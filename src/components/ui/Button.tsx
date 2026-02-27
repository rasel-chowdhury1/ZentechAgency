import { cn } from "@/lib/utils/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "outline" | "ghost";
};

export function Button({ className, variant = "solid", ...props }: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition",
        "focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)] disabled:opacity-60 disabled:cursor-not-allowed",
        variant === "solid" &&
          "bg-[color:var(--primary)] text-[color:var(--primary-foreground)] hover:bg-[color:var(--primary-hover)]",
        variant === "outline" &&
          "border border-[color:var(--border)] bg-[color:var(--card)] text-[color:var(--foreground)] hover:bg-[color:var(--muted-bg)]",
        variant === "ghost" &&
          "bg-transparent text-[color:var(--foreground)] hover:bg-[color:var(--muted-bg)]",
        className
      )}
      {...props}
    />
  );
}
