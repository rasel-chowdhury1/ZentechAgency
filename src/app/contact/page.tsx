"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "zentechpoint@gmail.com",
    sub: "We reply within 24 hours",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Phone",
    value: "01339880570",
    sub: "Mon – Sat, 9am – 6pm",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Bangladesh",
    sub: "Remote worldwide",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
    sub: "Mon – Sat, 9am – 6pm",
  },
];

const services = [
  { value: "web-development",      label: "Web Development" },
  { value: "app-development",      label: "App Development" },
  { value: "software-development", label: "Software Development" },
  { value: "ui-ux-design",         label: "UI / UX Design" },
  { value: "digital-marketing",    label: "Digital Marketing" },
  { value: "it-consultancy",       label: "IT Consultancy" },
];

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; msg: string }>();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: "web-development",
    message: "",
  });

  // Hero entrance
  useEffect(() => {
    const t = setTimeout(() => heroRef.current?.classList.add("services-header-visible"), 120);
    return () => clearTimeout(t);
  }, []);

  // Form panel entrance
  useEffect(() => {
    const el = formRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTimeout(() => el.classList.add("cards-visible"), 80); obs.disconnect(); } },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setStatus({ type: "ok", msg: "Thanks! We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", company: "", service: "web-development", message: "" });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ type: "err", msg: message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[color:var(--background)]">

      {/* ── Hero ── */}
      <div className="border-b border-[color:var(--border)]">
        <Container className="pt-2 pb-12 md:pt-3 md:pb-16">
          <div ref={heroRef} className="text-center">
            {/* Breadcrumb */}
            <nav
              className="services-header-item mb-5 flex items-center gap-1.5 text-[12px] text-[color:var(--muted)]"
              style={{ transitionDelay: "0ms" }}
              aria-label="Breadcrumb"
            >
              <Link href="/" className="inline-flex items-center gap-1 font-medium transition-colors hover:text-[color:var(--foreground)]">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </Link>
              <svg className="h-3 w-3 shrink-0 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <span className="font-semibold text-[color:var(--foreground)]">Contact</span>
            </nav>

            <span
              className="services-header-item inline-flex items-center gap-1.5 rounded-full border border-[color:var(--primary)]/30 bg-[color:var(--primary)]/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-[color:var(--primary)]"
              style={{ transitionDelay: "0ms" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--primary)]" />
              Contact Us
            </span>

            <h1
              className="services-header-item mt-4 text-4xl font-bold tracking-tight md:text-5xl"
              style={{ transitionDelay: "80ms" }}
            >
              Let's build something great
            </h1>

            <p
              className="services-header-item mx-auto mt-4 max-w-lg leading-relaxed text-[color:var(--muted)]"
              style={{ transitionDelay: "150ms" }}
            >
              Share your idea and we'll respond with a clear plan. Free consultation, no strings attached.
            </p>
          </div>
        </Container>
      </div>

      {/* ── Main content ── */}
      <Container className="py-12 md:py-16">
        <div
          ref={formRef}
          className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-8"
        >

          {/* ── Left: Info panel ── */}
          <div className="card-animated flex flex-col gap-5">

            {/* Contact cards */}
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="group flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5 transition-all duration-300 hover:border-[color:var(--primary)]/30 hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:var(--primary)]/10 text-[color:var(--primary)] ring-1 ring-[color:var(--primary)]/20 transition-all duration-300 group-hover:bg-[color:var(--primary)]/15">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--muted)]">{c.label}</p>
                  <p className="mt-0.5 text-sm font-semibold">{c.value}</p>
                  <p className="mt-0.5 text-xs text-[color:var(--muted)]">{c.sub}</p>
                </div>
              </div>
            ))}

            {/* Why us strip */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Why ZentechPoint</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Free 30-min strategy consultation",
                  "Dedicated project manager",
                  "On-time delivery guarantee",
                  "14-day post-launch support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[color:var(--muted)]">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="card-animated" style={{ transitionDelay: "100ms" }}>
            <div className="relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-7 md:p-9">
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--ring)]" />

              <p className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--primary)]">Project Inquiry</p>
              <h2 className="mt-1.5 text-xl font-bold md:text-2xl">Tell us about your project</h2>
              <p className="mt-1.5 text-sm text-[color:var(--muted)]">Fill in the details below and we'll prepare a tailored proposal.</p>

              <form onSubmit={onSubmit} className="mt-7 space-y-5">

                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                      Full Name <span className="text-[color:var(--primary)]">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--primary)]/50 focus:bg-[color:var(--card)] focus:ring-2 focus:ring-[color:var(--primary)]/15"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                      Email <span className="text-[color:var(--primary)]">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--primary)]/50 focus:bg-[color:var(--card)] focus:ring-2 focus:ring-[color:var(--primary)]/15"
                    />
                  </div>
                </div>

                {/* Company + Service */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">Company</label>
                    <input
                      name="company"
                      value={form.company}
                      onChange={onChange}
                      placeholder="Company (optional)"
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--primary)]/50 focus:bg-[color:var(--card)] focus:ring-2 focus:ring-[color:var(--primary)]/15"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">Service</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-2.5 text-sm outline-none transition-all duration-200 focus:border-[color:var(--primary)]/50 focus:bg-[color:var(--card)] focus:ring-2 focus:ring-[color:var(--primary)]/15"
                    >
                      {services.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[color:var(--muted)]">
                    Message <span className="text-[color:var(--primary)]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    rows={5}
                    placeholder="Tell us what you want to build — goals, timeline, budget..."
                    className="w-full resize-none rounded-xl border border-[color:var(--border)] bg-[color:var(--muted-bg)] px-4 py-2.5 text-sm outline-none transition-all duration-200 placeholder:text-[color:var(--muted)]/60 focus:border-[color:var(--primary)]/50 focus:bg-[color:var(--card)] focus:ring-2 focus:ring-[color:var(--primary)]/15"
                  />
                </div>

                {/* Status message */}
                {status && (
                  <div
                    className={`flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm ${
                      status.type === "ok"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-red-200 bg-red-50 text-red-800"
                    }`}
                  >
                    {status.type === "ok" ? (
                      <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                    )}
                    {status.msg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-85 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-[color:var(--muted)]">
                  No spam. We only use your info to respond to your inquiry.
                </p>
              </form>
            </div>
          </div>

        </div>
      </Container>
    </main>
  );
}
