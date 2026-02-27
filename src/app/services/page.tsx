import Link from "next/link";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="theme-dark bg-[color:var(--background)] text-[color:var(--foreground)] min-h-[calc(100vh-64px)]">
      <Container className="py-10">
        {/* Header (white like the template) */}
        <div className="rounded-3xl border border-[color:var(--border)] bg-white text-[#0b1220] p-8 md:p-10 shadow-sm">
          <Badge className="bg-white border border-[#d6dbe6] text-[#0b1220]">
            Services
          </Badge>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Our services, tailored for your needs
          </h1>

          <p className="mt-3 text-[#475569] max-w-2xl">
            Choose a single service or combine multiple services for a complete solution.
          </p>
        </div>

        {/* Services grid (dark cards) */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="block">
              <Card className="h-full bg-[color:var(--card)] border border-[color:var(--border)]">
                <div className="flex items-center justify-between">
                  <Badge className="bg-[color:var(--muted-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]">
                    {s.category}
                  </Badge>

                  <span className="text-xs text-[color:var(--muted)]">
                    {s.timeline}
                  </span>
                </div>

                <div className="mt-4 text-lg font-semibold text-[color:var(--foreground)]">
                  {s.title}
                </div>

                <p className="mt-2 text-[color:var(--muted)]">{s.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.bullets.slice(0, 3).map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-3 py-1 text-xs text-[color:var(--foreground)]"
                    >
                      {b}
                    </span>
                  ))}
                </div>

                <div className="mt-5 text-sm font-medium text-[color:var(--primary)] hover:underline">
                  View details →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
