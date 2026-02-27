import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { navLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--border)] bg-white">
      <Container className="flex h-[72px] items-center justify-between">

        {/* LEFT — LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ZentechPoint Logo"
            width={200}
            height={60}
            priority
            className="h-[42px] w-auto object-contain"
          />
        </Link>

        {/* CENTER — NAV LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-gray-600 transition hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — BUTTON */}
        <Button className="px-6 py-2.5 text-sm font-medium">
          Let’s Talk
        </Button>

      </Container>
    </header>
  );
}
