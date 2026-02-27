import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";
import ConnectCTA from "@/components/sections/ConnectCTA";

export default function ServiceDetailsPage({ params }: { params: { slug: string } }) {
  const current = services.find((s) => s.slug === params.slug);
  if (!current) return notFound();

  return (
    <>
      <PageHeader
        title="Service Details"
        subtitle="Your ideas matter to us. Let’s build and scale something amazing together."
        crumb="Home / Service Details"
      />

      <div className="bg-white">
        <Container className="py-12">
          <div className="grid gap-8 md:grid-cols-[1fr_320px]">
            {/* Main content */}
            <div>
              <Card className="p-0 overflow-hidden">
                <div className="relative h-[320px] w-full">
                  <Image
                    src="/images/service.jpg"
                    alt="Service"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Card>

              <h2 className="mt-8 text-3xl font-semibold">{current.title}</h2>
              <p className="mt-3 text-[color:var(--muted)]">
                {current.description}
              </p>

              <h3 className="mt-10 text-xl font-semibold">Advantages of our services</h3>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {current.bullets.map((b) => (
                  <div
                    key={b}
                    className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-3 flex items-center gap-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                    <span className="font-medium">{b}</span>
                  </div>
                ))}
              </div>

              <h3 className="mt-10 text-xl font-semibold">Conclusion</h3>
              <p className="mt-3 text-[color:var(--muted)]">
                We focus on premium delivery: clean UI, scalable architecture, and measurable results.
                If you want to move fast without losing quality — we’re ready.
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <Link href="/contact">
                  <Button>Request a Quote</Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline">All Services</Button>
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <div className="text-sm font-semibold">All Services</div>
                <div className="mt-3 grid gap-2">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className={`rounded-xl border px-4 py-3 text-sm flex items-center justify-between transition ${
                        s.slug === current.slug
                          ? "bg-[color:var(--primary)] text-white border-[color:var(--primary)]"
                          : "bg-white border-[color:var(--border)] hover:bg-[color:var(--muted-bg)]"
                      }`}
                    >
                      <span>{s.title}</span>
                      <span className="opacity-80">›</span>
                    </Link>
                  ))}
                </div>
              </Card>

              <Card className="bg-[color:var(--muted-bg)]">
                <div className="text-sm text-[color:var(--muted)]">Need help?</div>
                <div className="mt-2 font-semibold">Free consultation call</div>
                <p className="mt-2 text-sm text-[color:var(--muted)]">
                  Share requirements and we’ll suggest the best approach.
                </p>
                <Link href="/contact" className="mt-4 inline-block w-full">
                  <Button className="w-full">Contact Now</Button>
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </div>

      <ConnectCTA />
    </>
  );
}
