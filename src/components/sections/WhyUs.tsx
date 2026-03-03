import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/ui/Badge";

const benefits = [
  {
    title: "White-Label Friendly",
    desc: "We work silently under your brand. Your clients never know we exist.",
  },
  {
    title: "No Hiring Overhead",
    desc: "Skip recruitment and onboarding. Get battle-tested engineers from day one.",
  },
  {
    title: "Ship Faster",
    desc: "Pre-vetted developers who move fast without breaking things — deadlines met.",
  },
  {
    title: "Scale On Demand",
    desc: "Expand or reduce your team as projects shift — zero friction, zero lock-in.",
  },
];

export default function WhyUs() {
  return (
    <section className="border-t border-[color:var(--border)]">
      <Container className="py-14 md:py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">

          {/* LEFT — Image Stack */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Main large image */}
            <div className="overflow-hidden rounded-3xl shadow-lg">
              <div className="relative h-[320px] w-full sm:h-[400px] md:h-[460px]">
                <Image
                  src="/images/heroImage1.jpg"
                  alt="Team collaborating"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating secondary image — hidden on very small screens */}
            <div className="absolute -bottom-5 -right-3 w-36 overflow-hidden rounded-2xl border-4 border-[color:var(--background)] shadow-xl sm:-bottom-6 sm:-right-4 sm:w-44 md:w-52">
              <div className="relative h-28 w-full sm:h-32 md:h-36">
                <Image
                  src="/images/heroImage3.jpg"
                  alt="Developer coding"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -top-4 left-3 flex flex-col gap-1 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 py-3 shadow-lg sm:-top-5 sm:-left-4 sm:px-5 sm:py-4">
              <span className="text-2xl font-bold text-[color:var(--primary)] sm:text-3xl">380+</span>
              <span className="text-xs text-[color:var(--muted)]">Projects Delivered</span>
            </div>

            {/* Experience pill */}
            <div className="absolute bottom-16 left-4 flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--card)] px-3 py-1.5 shadow-md sm:bottom-20 sm:left-5 sm:px-4 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-[color:var(--primary)]" />
              <span className="text-xs font-medium">4+ Years of Excellence</span>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <Badge className="bg-[color:var(--muted-bg)]">Why Choose Us</Badge>

            <h2 className="mt-4 text-[26px] font-semibold leading-tight tracking-tight sm:text-3xl md:text-[38px]">
              Your silent tech partner,
              <br />
              built for growth.
            </h2>

            <p className="mt-4 leading-7 text-[color:var(--muted)]">
              We are not a typical outsourcing firm. We embed directly into your workflow —
              discreet, committed, and laser-focused on your success.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-5">
              {benefits.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/10">
                    <svg
                      viewBox="0 0 12 12"
                      fill="none"
                      className="h-3 w-3 text-[color:var(--primary)]"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2,6 5,9 10,3" />
                    </svg>
                  </span>
                  <div>
                    <div className="font-semibold text-[color:var(--foreground)]">{b.title}</div>
                    <div className="mt-0.5 text-sm leading-6 text-[color:var(--muted)]">{b.desc}</div>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--primary-hover)]"
              >
                Start a project <span>↗</span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-[color:var(--muted)] underline-offset-4 hover:underline"
              >
                Learn about us
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
