"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-[color:var(--border)]">
      <Container className="py-12">
        <Badge className="bg-[color:var(--muted-bg)]">FAQ</Badge>
        <h2 className="mt-3 text-2xl font-semibold">Frequently asked questions</h2>
        <p className="mt-2 text-[color:var(--muted)] max-w-2xl">
          Quick answers to common questions about our process and pricing.
        </p>

        <div className="mt-8 grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Card key={f.q} className="p-0 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-medium">{f.q}</span>
                  <span className="text-[color:var(--muted)]">{isOpen ? "—" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-[color:var(--muted)]">
                    {f.a}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
