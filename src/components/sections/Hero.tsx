import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-[color:var(--background)] overflow-hidden">
      
      {/* Background gradient blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, var(--grad-peach), transparent 60%)",
        }}
      />

      <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(circle, var(--grad-mint), transparent 60%)",
        }}
      />

      <Container className="py-8">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              The Types Digital{" "}
              <span className="text-[color:var(--primary)]">
                Creative Products
              </span>{" "}
              That You Build.
            </h1>

            <p className="mt-5 text-lg text-[color:var(--muted)] max-w-lg">
              We design and develop high-quality websites, apps, and software
              that help your business grow faster.
            </p>

            <div className="mt-8 flex gap-4">
              <Link href="/contact">
                <Button>Get Started</Button>
              </Link>

              <Link href="/portfolio">
                <Button variant="outline">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-semibold">10+</div>
                <div className="text-sm text-[color:var(--muted)]">
                  Team Members
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold">9k+</div>
                <div className="text-sm text-[color:var(--muted)]">
                  Clients
                </div>
              </div>

              <div>
                <div className="text-2xl font-semibold">80+</div>
                <div className="text-sm text-[color:var(--muted)]">
                  Projects
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative">

            {/* Main image card */}
            <div className="relative h-[420px] w-full rounded-3xl overflow-hidden border border-[color:var(--border)] shadow-xl">

              <Image
                src="/images/heroImage.png"
                alt="Agency working"
                fill
                priority
                className="object-cover"
              />

            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white border border-[color:var(--border)] shadow-lg px-5 py-4">

              <div className="text-sm text-gray-500">
                Successful Projects
              </div>

              <div className="text-xl font-semibold">
                500+
              </div>

            </div>

            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 rounded-2xl bg-[color:var(--primary)] text-white px-4 py-3 shadow-lg">

              <div className="text-sm font-medium">
                Premium Agency
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}
