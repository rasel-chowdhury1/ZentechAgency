import { cn } from "@/lib/utils/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto max-w-[1440px] px-4", className)}>{children}</div>;
}
