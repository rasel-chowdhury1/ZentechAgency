import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="border-t border-[color:var(--border)]">
      <Container className="py-12">
        <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Start a project with ZentechPoint</h2>
              <p className="mt-2 text-[color:var(--muted)]">
                Tell us your idea — we’ll respond with a clear plan and estimate.
              </p>
            </div>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
