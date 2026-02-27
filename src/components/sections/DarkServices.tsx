import Container from "@/components/layout/Container";
import { services } from "@/lib/data";

export default function DarkServices() {
  return (
    <section className="border-t border-white/10 bg-[color:var(--dark)] text-[color:var(--dark-foreground)]">
      <Container className="py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl font-semibold">Innovative service design for business</h2>
            <p className="mt-2 text-white/70">
              A premium dark section like your template — with emerald highlights and clean lists.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[color:var(--dark-2)] p-5">
            <div className="text-sm text-white/70">Highlights</div>
            <ul className="mt-3 space-y-3">
              {services.slice(0, 6).map((s, idx) => (
                <li key={s.slug} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-medium">{s.title}</span>
                  </div>
                  <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
