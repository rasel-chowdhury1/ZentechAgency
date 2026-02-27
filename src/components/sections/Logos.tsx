import Container from "@/components/layout/Container";

export default function Logos() {
  const items = ["VISA", "ORACLE", "XERO", "EBAY", "NETFLIX", "AIRBNB"];
  // Duplicate for seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <section className="border-t border-[color:var(--border)]">
      <Container className="py-10">
        <div className="text-sm text-[color:var(--muted)]">Trusted by teams & founders</div>
        <div className="mt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex gap-3 w-max animate-[marquee_18s_linear_infinite]"
            style={{
              animationTimingFunction: "linear",
            }}
          >
            {doubled.map((x, i) => (
              <div
                key={`${x}-${i}`}
                className="rounded-xl border border-[color:var(--border)] bg-[color:var(--card)] px-6 py-2 text-center text-sm text-[color:var(--muted)] whitespace-nowrap"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}