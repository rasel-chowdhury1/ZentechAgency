import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { pricing } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl border bg-gradient-to-br from-neutral-50 to-white p-6 md:p-10">
        <Badge className="bg-white">Pricing</Badge>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Transparent starting prices
        </h1>
        <p className="mt-3 text-neutral-600 max-w-2xl">
          Final price depends on scope, timeline, and feature set.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {pricing.map((p) => (
          <Card
            key={p.name}
            className={`relative ${
              p.featured ? "border-neutral-900 shadow-sm" : ""
            }`}
          >
            {p.featured && (
              <div className="absolute right-4 top-4 rounded-full bg-neutral-900 px-3 py-1 text-xs text-white">
                Most Popular
              </div>
            )}

            <div className="text-sm text-neutral-500">{p.tag}</div>
            <div className="mt-2 text-xl font-semibold">{p.name}</div>
            <div className="mt-3 text-3xl font-semibold">{p.price}</div>
            <p className="mt-2 text-neutral-600">{p.desc}</p>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-neutral-700">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="mt-6">
              <Link href="/contact">
                <Button
                  variant={p.featured ? "solid" : "outline"}
                  className="w-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
