import { cn } from "@/lib/utils/cn";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}
