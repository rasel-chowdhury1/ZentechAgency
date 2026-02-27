import Link from "next/link";
import Container from "@/components/layout/Container";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--background)]">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--foreground)] text-white">
                ZP
              </span>
              <span>ZentechPoint</span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--muted)]">
              Premium web, app, software, UI/UX and marketing solutions — built for performance.
            </p>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Pages</div>
            <div className="mt-3 grid gap-2 text-[color:var(--muted)]">
              {navLinks.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-[color:var(--foreground)]">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Contact</div>
            <div className="mt-3 grid gap-2 text-[color:var(--muted)]">
              <div>hello@zentechpoint.com</div>
              <div>Bangladesh (Remote Worldwide)</div>
              <div>Response within 24 hours</div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} ZentechPoint. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
