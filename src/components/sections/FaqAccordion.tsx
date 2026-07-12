"use client";

import { useState } from "react";

export default function FaqAccordion({
  items,
  accent,
}: {
  items: { q: string; a: string }[];
  accent: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={f.q}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              isOpen ? "shadow-lg" : "border-[color:var(--border)] bg-[color:var(--card)] hover:shadow-sm"
            }`}
            style={isOpen ? { borderColor: `${accent}45`, backgroundColor: "var(--card)" } : undefined}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-4">
                <span
                  className="mt-0.5 shrink-0 text-[11px] font-black tabular-nums transition-colors duration-300"
                  style={{ color: isOpen ? accent : "var(--border)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[15px] font-semibold leading-snug text-[color:var(--foreground)]">
                  {f.q}
                </span>
              </div>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300"
                style={
                  isOpen
                    ? { borderColor: `${accent}40`, backgroundColor: `${accent}15`, color: accent, transform: "rotate(45deg)" }
                    : { borderColor: "var(--border)", backgroundColor: "var(--muted-bg)", color: "var(--muted)" }
                }
              >
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="flex gap-4 px-6 pb-6 pt-0">
                <div className="ml-9 border-l-2 pl-4" style={{ borderColor: `${accent}30` }}>
                  <p className="text-[14px] leading-[1.8] text-[color:var(--muted)]">{f.a}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
