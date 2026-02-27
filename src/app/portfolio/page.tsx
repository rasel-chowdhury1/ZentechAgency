"use client";

import { useMemo, useState } from "react";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { portfolio } from "@/lib/data";

const FILTERS = ["All", "Web", "Mobile", "Software", "Design"] as const;

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

  const items = useMemo(() => {
    if (active === "All") return portfolio;
    return portfolio.filter((p) => p.tag === active);
  }, [active]);

  return (
    <div className="theme-dark bg-[color:var(--background)] text-[color:var(--foreground)] min-h-[calc(100vh-64px)]">
      <Container className="py-10">
        {/* Header box (white like screenshot) */}
        <div className="rounded-3xl border border-[color:var(--border)] bg-white text-[#0b1220] p-8 md:p-10 shadow-sm">
          <Badge className="bg-white border border-[#d6dbe6] text-[#0b1220]">
            Portfolio
          </Badge>

          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Selected work and project types
          </h1>

          <p className="mt-3 text-[#475569] max-w-2xl">
            These are example projects. Replace them with your real client work.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  active === f
                    ? "bg-[#0b1220] text-white border-[#0b1220]"
                    : "bg-white text-[#0b1220] border-[#d6dbe6] hover:bg-[#f1f5f9]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Dark cards grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Card
              key={p.id}
              className="bg-[color:var(--card)] border border-[color:var(--border)]"
            >
              <div className="flex items-center justify-between">
                <Badge className="bg-[color:var(--muted-bg)] text-[color:var(--foreground)] border border-[color:var(--border)]">
                  {p.tag}
                </Badge>
              </div>

              <div className="mt-3 text-lg font-semibold text-[color:var(--foreground)]">
                {p.title}
              </div>

              <p className="mt-2 text-[color:var(--muted)]">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-3 py-1 text-xs text-[color:var(--foreground)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
