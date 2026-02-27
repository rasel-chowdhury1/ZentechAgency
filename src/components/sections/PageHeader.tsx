import Container from "@/components/layout/Container";

export default function PageHeader({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb?: string; // e.g. "Home / FAQ"
}) {
  return (
    <section className="bg-[color:var(--dark)] text-[color:var(--dark-foreground)] border-b border-white/10">
      <Container className="py-14 md:py-16">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
            {subtitle && (
              <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>
            )}
          </div>

          {crumb && (
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              {crumb}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
