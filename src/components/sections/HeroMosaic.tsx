import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        className="absolute left-0 right-0 -bottom-1.5 h-[6px] rounded-full opacity-80"
        style={{ background: "linear-gradient(90deg, var(--ring), transparent)" }}
      />
    </span>
  );
}

export default function HeroMosaic() {
  return (
    <section className="bg-[color:var(--background)]">
      <Container className="py-10 md:py-14 lg:py-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

          {/* LEFT — text */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-xs">
                ZP
              </span>
              <span className="font-medium">ZentechPoint</span>
            </div>

            <h1 className="mt-5 text-[30px] leading-[1.1] font-semibold tracking-tight sm:text-[38px] md:text-[44px] lg:text-[52px]">
              Your <Underline>Reliable Partner</Underline> For
              <br />
              Web and Software
              <br />
              Development
            </h1>

            <p className="mt-4 text-base italic text-[color:var(--muted)] sm:text-xl">
              Scale your company without headache.{" "}
              We work silently behind your brand.
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-7 text-[color:var(--muted)]">
              Hire dedicated developers, software engineers, and expert teams to build scalable,
              secure software and high-performing websites—faster, leaner, and without hiring overhead.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="rounded-full px-6 py-2.5 text-sm sm:px-7">
                  Hire us now <span className="ml-2">↗</span>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-full px-6 py-2.5 text-sm bg-white font-bold text-gray-800 border-gray-300 hover:bg-gray-50 hover:text-gray-900 sm:px-7"
                >
                  Learn more
                </Button>
              </Link>
            </div>

            {/* Trusted by */}
            <div className="mt-8 flex items-center gap-5">
              <div className="shrink-0 text-sm leading-snug text-[color:var(--muted)]">
                Trusted by clients
                <br />
                across the globe.
              </div>
              <div className="shrink-0 w-px h-8 bg-[color:var(--border)]" />
              <div className="overflow-hidden relative flex-1 min-w-0">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-8 z-10"
                  style={{ background: "linear-gradient(to right, var(--background), transparent)" }} />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-8 z-10"
                  style={{ background: "linear-gradient(to left, var(--background), transparent)" }} />
                <div className="marquee-track flex items-center gap-10 whitespace-nowrap w-max">
                  {["SHARKANI", "STUDIOTEM", "BOXME", "NEXLABZ", "DEVHIVE", "CLOUDORA",
                    "SHARKANI", "STUDIOTEM", "BOXME", "NEXLABZ", "DEVHIVE", "CLOUDORA",
                    "SHARKANI", "STUDIOTEM", "BOXME", "NEXLABZ", "DEVHIVE", "CLOUDORA"].map((name, i) => (
                    <span key={i} className="tracking-widest text-sm font-bold text-[color:var(--muted)]/60">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — hidden on mobile, visible on lg+ */}
          <div className="relative hidden lg:block">

            {/* ── MOBILE (below lg) ── */}
            <div className="flex flex-col gap-3 lg:hidden">

              {/* Single full-width image */}
              <div className="overflow-hidden rounded-2xl shadow-md">
                <div className="relative h-56 w-full sm:h-72">
                  <Image
                    src="/images/heroImage1.jpg"
                    alt="Team working"
                    fill
                    priority
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
                </div>
              </div>

              {/* Stats strip */}
              <div className="flex gap-3">
                <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] py-4 shadow-sm">
                  <span className="text-[28px] font-bold leading-none text-[color:var(--primary)]">55+</span>
                  <span className="mt-1.5 text-xs text-[color:var(--muted)]">Customers</span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] py-4 shadow-sm">
                  <span className="text-[28px] font-bold leading-none text-[color:var(--primary)]">380+</span>
                  <span className="mt-1.5 text-xs text-[color:var(--muted)]">Projects</span>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] py-4 shadow-sm">
                  <span className="text-[28px] font-bold leading-none text-[color:var(--primary)]">4+</span>
                  <span className="mt-1.5 text-xs text-[color:var(--muted)]">Years</span>
                </div>
              </div>

            </div>

            {/* ── DESKTOP (lg+) ── */}
            <div className="hidden gap-5 lg:grid">

              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage1.jpg" alt="Team working" fill priority className="object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-5">
                    <div className="text-[44px] font-semibold leading-none text-[color:var(--accent)]">55+</div>
                    <div className="mt-3 text-lg font-semibold">Customers Served</div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-6">
                    <div className="text-sm text-white/85">Completed Projects</div>
                    <div className="mt-2 text-[56px] font-semibold leading-none text-[color:var(--accent)]">380+</div>
                  </div>
                  <div className="h-10 opacity-20"
                    style={{ background: "radial-gradient(circle at 20% 50%, #fff, transparent 60%)" }} />
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="p-6">
                    <p className="text-sm leading-6 text-[color:var(--muted)]">
                      Our clients share their experiences—honest feedback that speaks for itself.
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <span className="text-[color:var(--primary)] text-lg">★</span>
                      <span className="text-sm font-semibold text-[color:var(--foreground)]">Trustpilot</span>
                      <span className="ml-auto text-xs text-[color:var(--muted)]">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-5">
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage2.png" alt="Developers collaborating" fill className="object-cover" />
                  </div>
                </div>
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-44 w-full">
                    <Image src="/images/heroImage3.jpg" alt="Developer coding" fill className="object-cover" />
                  </div>
                </div>
              </div>

            </div>

            {/* Soft glow */}
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] blur-3xl opacity-40"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, var(--accent), transparent 50%), radial-gradient(circle at 70% 70%, var(--ring), transparent 55%)",
              }}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
