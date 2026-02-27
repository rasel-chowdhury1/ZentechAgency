import { cn } from "@/lib/utils/cn";

export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "mt-1 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-2 outline-none",
        "focus:ring-2 focus:ring-[color:var(--ring)]",
        props.className
      )}
    />
  );
}
