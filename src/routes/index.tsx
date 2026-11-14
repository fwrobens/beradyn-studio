import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Menu, X, Truck, UtensilsCrossed, Store, Scissors, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beradyn — Affordable websites for small businesses" },
      { name: "description", content: "Beradyn builds modern websites for food trucks, restaurants and local businesses — without the agency price tag." },
      { property: "og:title", content: "Beradyn — Websites built for growth" },
      { property: "og:description", content: "Modern, mobile-friendly websites for food trucks, restaurants and local shops at a fair price." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Why us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  // Logo placeholder — swap for the real logo image later
  return (
    <a href="#" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-accent/40 bg-secondary font-display text-sm font-bold text-glow glow-ring">
        B
      </span>
      <span className="font-display text-base font-semibold tracking-[0.2em]">BERADYN</span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:glow-ring md:inline-flex">
            Get a quote
          </a>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-lg p-2 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 rounded-2xl p-3 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{n.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-1 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">Get a quote</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pb-20 pt-32 text-center">
        <div className="orb pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[420px] md:h-[640px] md:w-[640px]" />
        <div className="relative">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-glow glow-ring" /> Websites for local businesses
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Your business, <span className="text-glow">online</span> — without the overcharge.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
            We design and build modern websites for food trucks, restaurants and small shops at a price that actually makes sense.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:glow-ring sm:w-auto">
              Start your website <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#services" className="glass inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium sm:w-auto">
              See what we build
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">Who we build for</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold sm:text-5xl">Made for the businesses that feed your neighborhood.</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Truck, t: "Food trucks", d: "Menus, live locations and schedules customers can find fast." },
            { icon: UtensilsCrossed, t: "Restaurants", d: "Beautiful menus, hours, reservations and online ordering links." },
            { icon: Store, t: "Local shops", d: "Showcase products and get found on Google." },
            { icon: Scissors, t: "Services", d: "Barbers, cleaners, trades — bookings and reviews in one place." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="glass group rounded-3xl p-6 transition hover:border-accent/40 hover:glow-ring">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-glow"><I className="h-5 w-5 text-accent" /></span>
              <h3 className="mt-6 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-xs uppercase tracking-[0.25em] text-accent">How it works</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Live in three simple steps.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border bg-border md:grid-cols-3">
          {[
            ["01", "Quick chat", "Tell us about your business, your style and what you need."],
            ["02", "We design & build", "A clean, fast, mobile-first site — you review and we refine."],
            ["03", "Launch & grow", "We put it live and stay around for updates and support."],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-background p-8">
              <span className="font-display text-sm text-accent">{n}</span>
              <h3 className="mt-8 text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-accent">Why Beradyn</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Agency quality. Small-business pricing.</h2>
          <p className="mt-5 text-muted-foreground">No bloated quotes or hidden fees. Just a great website that brings customers through your door.</p>
        </div>
        <ul className="glass space-y-4 rounded-3xl p-7">
          {["Fair, upfront pricing", "Mobile-friendly by default", "Fast turnaround", "Built to show up on Google", "Ongoing support when you need it"].map((x) => (
            <li key={x} className="flex items-center gap-3 text-sm">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15"><Check className="h-3.5 w-3.5 text-accent" /></span>
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section id="contact" className="px-5 py-24">
        <div className="glass relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12">
          <div className="orb pointer-events-none absolute left-1/2 top-full h-[400px] w-[400px]" />
          <h2 className="relative text-3xl font-semibold sm:text-5xl">Ready to get your business online?</h2>
          <p className="relative mx-auto mt-4 max-w-md text-muted-foreground">Tell us what you need and we’ll send a free quote.</p>
          <a href="mailto:hello@beradyn.com" className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:glow-ring">
            Get a free quote <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t px-5 py-10 sm:flex-row">
        <Logo />
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Beradyn. Digital experiences built for growth.</p>
      </footer>
    </div>
  );
}
