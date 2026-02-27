import Image from "next/image";
import PageHeader from "@/components/sections/PageHeader";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { team } from "@/lib/data";
import ConnectCTA from "@/components/sections/ConnectCTA";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="We help businesses build, launch, and scale premium digital products."
        crumb="Home / About Us"
      />

      <div className="bg-white">
        <Container className="py-12">
          {/* Collage + content (like template) */}
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-0 overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src="/images/team-1.jpg"
                      alt="Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
                <Card className="p-0 overflow-hidden">
                  <div className="relative h-44 w-full">
                    <Image
                      src="/images/team-2.jpg"
                      alt="Team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
              </div>

              <Card className="bg-[color:var(--muted-bg)]">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-4 border border-[color:var(--border)]">
                    <div className="text-2xl font-semibold">12+</div>
                    <div className="text-sm text-[color:var(--muted)]">Team Members</div>
                  </div>
                  <div className="rounded-2xl bg-white p-4 border border-[color:var(--border)]">
                    <div className="text-2xl font-semibold">2k+</div>
                    <div className="text-sm text-[color:var(--muted)]">Happy Clients</div>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <Badge className="bg-[color:var(--muted-bg)]">Who we are</Badge>
              <h2 className="mt-4 text-3xl font-semibold">
                We bring our ideas to life every step of the way
              </h2>
              <p className="mt-3 text-[color:var(--muted)]">
                We are a digital agency focused on premium UI, clean engineering, and growth-driven strategy.
                From design to deployment — we deliver polished products.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "Data-driven decisions",
                  "Fast delivery with quality",
                  "Performance, SEO & security",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 flex items-center gap-3"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                    <span className="font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experts */}
          <div className="mt-14 text-center">
            <div className="inline-flex rounded-full border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-1 text-xs text-[color:var(--muted)]">
              Our Team
            </div>
            <h3 className="mt-4 text-2xl font-semibold">Top Skilled Experts</h3>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {team.map((m) => (
              <Card key={m.name} className="text-center">
                <div className="mx-auto h-20 w-20 rounded-full bg-[color:var(--muted-bg)] border border-[color:var(--border)]" />
                <div className="mt-4 font-semibold">{m.name}</div>
                <div className="mt-1 text-sm text-[color:var(--muted)]">{m.role}</div>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <ConnectCTA />
    </>
  );
}
