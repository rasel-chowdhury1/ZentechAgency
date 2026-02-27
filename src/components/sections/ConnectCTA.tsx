import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function ConnectCTA() {
  return (
    <section className="bg-[color:var(--dark)] border-t border-white/10">
      <Container className="py-10">
        <div className="rounded-2xl bg-[color:var(--primary)] p-8 md:p-10 text-white flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-semibold">Let’s Connect And Collaborate!</h3>
            <p className="mt-2 text-white/90">
              Share your requirements — we’ll respond with a clear plan and estimate.
            </p>
          </div>

          <Link href="/contact">
            <Button className="bg-white text-[#0b1220] hover:bg-white/90">
              Contact Now
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
