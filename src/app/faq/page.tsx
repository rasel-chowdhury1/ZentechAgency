"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { faqCategories, faqItemsByCategory } from "@/lib/data";
import ConnectCTA from "@/components/sections/ConnectCTA";

export default function FAQPage() {
  const [active, setActive] = useState<(typeof faqCategories)[number]>("General");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(() => faqItemsByCategory[active], [active]);

  return (
    <>
      <PageHeader
        title="FAQ"
        subtitle="Your ideas matter to us. Let’s build and scale something amazing together."
        crumb="Home / FAQ"
      />

      <div className="bg-[color:var(--background)]">
        <Container className="py-12">
          <div className="text-center">
            <div className="inline-flex rounded-full border border-[color:var(--border)] bg-white px-4 py-1 text-xs text-[color:var(--muted)]">
              FAQ
            </div>
            <h2 className="mt-4 text-3xl font-semibold">Frequently Asked Questions</h2>
            <p className="mt-3 text-[color:var(--muted)] max-w-2xl mx-auto">
              Find answers to common questions. If you still need help, contact our team.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-[260px_1fr]">
            {/* Left categories */}
            <Card className="p-4">
              <div className="text-sm font-semibold mb-3">Categories</div>
              <div className="grid gap-2">
                {faqCategories.map((c) => (
                  <button
                    key={c}
                    onClick={() => {
                      setActive(c);
                      setOpenIndex(0);
                    }}
                    className={`w-full rounded-xl border px-4 py-3 text-left text-sm transition flex items-center justify-between ${
                      active === c
                        ? "bg-[color:var(--primary)] text-white border-[color:var(--primary)]"
                        : "bg-white border-[color:var(--border)] hover:bg-[color:var(--muted-bg)]"
                    }`}
                  >
                    <span>{c}</span>
                    <span className="opacity-80">›</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Right accordion */}
            <div className="grid gap-3">
              {items.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <Card key={f.q} className="p-0 overflow-hidden">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-medium">{String(i + 1).padStart(2, "0")}. {f.q}</span>
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
          </div>
        </Container>
      </div>

      <ConnectCTA />
    </>
  );
}
