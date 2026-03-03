"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { services } from "@/lib/data";

export default function ServicesGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("cards-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="border-t border-[color:var(--border)]">
      <Container className="py-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <Badge className="bg-[color:var(--muted-bg)]">Our Services</Badge>
            <h2 className="mt-3 text-2xl font-semibold">Expert solutions designed to drive success</h2>
            <p className="mt-2 text-[color:var(--muted)] max-w-2xl">
              We combine strategy, design, engineering, and growth to build premium digital products.
            </p>
          </div>
          <Link href="/services" className="text-sm font-medium text-[color:var(--primary)] hover:underline">
            View all services →
          </Link>
        </div>

        <div ref={gridRef} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card-animated">
              <Card className="h-full hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="text-xs text-[color:var(--muted)]">{s.category}</div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-[color:var(--muted)]">{s.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {s.bullets.slice(0, 3).map((b) => (
                    <Badge key={b} className="bg-[color:var(--muted-bg)]">
                      {b}
                    </Badge>
                  ))}
                </div>

                <div className="mt-5 text-sm font-medium text-[color:var(--foreground)]">
                  Learn more →
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
