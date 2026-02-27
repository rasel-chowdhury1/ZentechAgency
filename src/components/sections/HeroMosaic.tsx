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
      <Container className="py-14 md:py-2">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="pt-2">
            {/* Small brand row (optional) */}
            <div className="flex items-center gap-2 text-sm text-[color:var(--muted)]">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[color:var(--primary)] text-white text-xs">
                ZP
              </span>
              <span className="font-medium">ZentechPoint</span>
            </div>

            <h1 className="mt-6 text-[42px] leading-[1.08] font-semibold tracking-tight md:text-[56px]">
              Your <Underline>Reliable Partner</Underline> For
              <br />
              Web and Software
              <br />
              Development
            </h1>

            <p className="mt-5 text-xl italic text-[color:var(--muted)]">
              Scale your company without headache.
              <br />
              We work silently behind your brand.
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[color:var(--muted)]">
              Hire dedicated developers, software engineers, and expert teams to build scalable,
              secure software and high-performing websites—faster, leaner, and without hiring overhead.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact">
                <Button className="rounded-full px-7">
                  Hire us now <span className="ml-2">↗</span>
                </Button>
              </Link>

              <Link href="/services">
                <Button
                  variant="outline"
                  className="rounded-full px-7 bg-white hover:bg-[color:var(--muted-bg)]"
                >
                  Learn more
                </Button>
              </Link>
            </div>

            {/* Trusted by */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-[color:var(--muted)]">
                Trusted by clients <br className="hidden sm:block" />
                across the globe.
              </div>

              <div className="flex flex-wrap items-center gap-6 text-[color:var(--muted)]/70 text-sm font-semibold">
                <span className="tracking-wide">SHARKANI</span>
                <span className="tracking-wide">STUDIOTEM</span>
                <span className="tracking-wide">BOXME</span>
              </div>
            </div>
          </div>

          {/* RIGHT MOSAIC */}
          <div className="relative">
            <div className="grid gap-4 lg:gap-5">
              {/* Row 1 */}
              <div className="grid grid-cols-3 gap-4 lg:gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-40 w-full md:h-44">
                    <Image
                      src="/images/heroImage1.jpg"
                      alt="Team working"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-6">
                    <div className="text-[44px] font-semibold leading-none text-[color:var(--accent)]">
                      55+
                    </div>
                    <div className="mt-3 text-lg font-semibold">Customers Served</div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-4 lg:gap-5">
                <div className="col-span-2 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] text-white shadow-sm">
                  <div className="p-6">
                    <div className="text-sm text-white/85">Completed Projects</div>
                    <div className="mt-2 text-[56px] font-semibold leading-none text-[color:var(--accent)]">
                      380+
                    </div>
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
                      <span className="text-sm font-semibold text-[color:var(--foreground)]">
                        Trustpilot
                      </span>
                      <span className="ml-auto text-xs text-[color:var(--muted)]">
                        ★★★★★
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 gap-4 lg:gap-5">
                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-40 w-full md:h-44">
                    <Image
                      src="/images/heroImage2.jpg"
                      alt="Developers collaborating"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
                  <div className="relative h-40 w-full md:h-44">
                    <Image
                      src="/images/heroImage3.jpg"
                      alt="Developer coding"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Soft glow behind mosaic */}
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
