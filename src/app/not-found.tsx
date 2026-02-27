import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-16">
      <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-10 text-center">
        <h1 className="text-3xl font-semibold">Page not found</h1>
        <p className="mt-3 text-[color:var(--muted)]">
          The page you’re looking for doesn’t exist.
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}
