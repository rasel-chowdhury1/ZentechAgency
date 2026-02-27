"use client";

import { useState } from "react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string }>();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "web-development",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(undefined);
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Failed to send.");

      setStatus({
        type: "ok",
        msg: "Thanks! We will contact you within 24 hours.",
      });
      setForm({
        name: "",
        email: "",
        company: "",
        service: "web-development",
        message: "",
      });
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-gradient-to-br from-neutral-50 to-white p-6 md:p-10">
          <Badge className="bg-white">Contact</Badge>
          <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
            Let’s build something great
          </h1>
          <p className="mt-3 text-neutral-600">
            Share your requirements and we’ll respond with a clear plan.
          </p>

          <div className="mt-8 grid gap-3 text-sm text-neutral-700">
            <div className="rounded-2xl border bg-white p-4">
              <div className="text-neutral-500">Email</div>
              <div className="font-medium">hello@zentechpoint.com</div>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <div className="text-neutral-500">Location</div>
              <div className="font-medium">Bangladesh (Remote Worldwide)</div>
            </div>
            <div className="rounded-2xl border bg-white p-4">
              <div className="text-neutral-500">Response time</div>
              <div className="font-medium">Within 24 hours</div>
            </div>
          </div>
        </div>

        <Card className="p-6 md:p-8">
          <div className="text-xl font-semibold">Project inquiry</div>
          <p className="mt-1 text-sm text-neutral-600">
            Tell us about your project, budget, and timeline.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-neutral-600">Name</label>
                <Input
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-neutral-600">Email</label>
                <Input
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  type="email"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-neutral-600">Company</label>
                <Input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  placeholder="Company (optional)"
                />
              </div>

              <div>
                <label className="text-sm text-neutral-600">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300"
                >
                  <option value="web-development">Web Development</option>
                  <option value="app-development">App Development</option>
                  <option value="software-development">
                    Software Development
                  </option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="it-consultancy">IT Consultancy</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm text-neutral-600">Message</label>
              <Textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={6}
                placeholder="Tell us what you want to build..."
              />
            </div>

            {status && (
              <div
                className={`rounded-xl border px-3 py-2 text-sm ${
                  status.type === "ok"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {status.msg}
              </div>
            )}

            <Button disabled={loading} type="submit">
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
