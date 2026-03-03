import "./globals.css";
import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "ZentechPoint | Digital Agency",
  description:
    "ZentechPoint builds modern websites, apps, software, UI/UX and marketing solutions.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="min-h-screen w-full overflow-x-hidden bg-[color:var(--background)] text-[color:var(--foreground)]">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
