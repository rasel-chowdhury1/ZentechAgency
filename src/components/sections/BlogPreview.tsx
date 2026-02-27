import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { blogPreview } from "@/lib/data";

export default function BlogPreview() {
  return (
    <section className="border-t border-[color:var(--border)] bg-[color:var(--muted-bg)]/50">
      <Container className="py-12">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <Badge className="bg-[color:var(--card)]">Insights</Badge>
            <h2 className="mt-3 text-2xl font-semibold">Latest tips & trends</h2>
            <p className="mt-2 text-[color:var(--muted)] max-w-2xl">
              Helpful content to improve design, engineering, and growth.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {blogPreview.map((b) => (
            <Card key={b.title}>
              <div className="flex items-center justify-between">
                <Badge className="bg-[color:var(--muted-bg)]">{b.tag}</Badge>
                <div className="text-xs text-[color:var(--muted)]">{b.date}</div>
              </div>
              <div className="mt-3 font-semibold">{b.title}</div>
              <p className="mt-2 text-sm text-[color:var(--muted)]">
                Short preview text goes here. Replace with your blog content later.
              </p>
              <div className="mt-4 text-sm font-medium text-[color:var(--primary)] hover:underline">
                Read more →
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
