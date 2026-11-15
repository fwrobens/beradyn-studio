import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, PenTool, LayoutDashboard, LifeBuoy, Check } from "lucide-react";
import mark from "@/assets/beradyn-logo-mark.png.asset.json";
import fullLogo from "@/assets/beradyn-logo-full.png.asset.json";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BERADYN — Websites built for your business" },
      { name: "description", content: "BERADYN designs modern, mobile-first websites for food trucks, restaurants and local businesses — studio quality without the overcharge." },
      { property: "og:title", content: "BERADYN — Websites built for your business" },
      { property: "og:description", content: "Modern websites for food trucks, restaurants and local businesses at a fair price." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Solutions", href: "#solutions" },
  { label: "Our work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const stars = Array.from({ length: 40 }, (_, i) => ({
  top: `${(i * 37) % 100}%`, left: `${(i * 61 + 13) % 100}%`, delay: `${(i % 7) * 0.6}s`,
}));

function Brand() {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="BERADYN home">
      <img src={mark.url} alt="" className="h-8 w-auto drop-shadow-[0_0_12px_var(--accent)]" />
      <span className="font-display text-[15px] font-semibold tracking-[0.32em]">BERADYN</span>
    </a>
  );
}

function Index() {
  const [open, setOpen] = useState(false);
  useReveal();

  return (
    <div id="top" className="relative isolate min-h-screen overflow-x-hidden">
      <div className="site-atmosphere fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="ambient-trace absolute inset-0" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        {stars.map((s, i) => <span key={i} className="star" style={{ top: s.top, left: s.left, animationDelay: s.delay }} />)}
        <div className="absolute inset-0 flex justify-evenly overflow-hidden opacity-30">
          {[0, 1.4, 0.6, 2.2, 3].map((d, i) => <span key={i} className="beam h-64" style={{ animationDelay: `${d}s` }} />)}
        </div>
      </div>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 md:grid-cols-[1fr_auto_1fr]">
          <Brand />
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-md px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex justify-end">
            <Button asChild className="hidden md:inline-flex"><a href="#contact">Get started <ArrowUpRight /></a></Button>
            <Button variant="ghost" size="icon" aria-label="Toggle menu" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="md:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        <div id="mobile-nav" inert={!open} className={`mx-auto max-w-6xl overflow-hidden border-border bg-background/95 transition-all duration-300 md:hidden ${open ? "max-h-96 p-3 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-md px-4 py-3.5 text-base text-muted-foreground hover:bg-secondary hover:text-foreground">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-20">
        <div className="relative mx-auto max-w-7xl">
          <div className="relative z-10 flex min-h-[min(760px,82svh)] flex-col items-center justify-center px-5 py-16 text-center">
            <img src={mark.url} alt="" className="reveal mb-8 h-20 w-auto drop-shadow-[0_0_40px_var(--accent)] sm:h-24" />
            <span className="reveal font-mono text-xs text-muted-foreground">
              The BERADYN digital studio
            </span>
            <h1 className="reveal mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] sm:text-6xl md:text-7xl">
              Built to stand out.<br /><span className="text-sheen">Designed to last.</span>
            </h1>
            <p className="reveal mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Studio-quality websites for food trucks, restaurants and local businesses — without the agency overcharge.
            </p>
            <div className="reveal mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild className="h-12 w-full px-7 sm:w-auto"><a href="#contact">Start your project <ArrowUpRight /></a></Button>
              <Button asChild variant="ghost" className="h-12 w-full px-7 sm:w-auto"><a href="#work">Explore our work <ArrowUpRight /></a></Button>
            </div>
          </div>

        </div>

        {/* marquee */}
        <div className="mx-auto mt-10 max-w-6xl overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="marquee flex w-max gap-12 font-display text-lg text-muted-foreground/60">
            {[...Array(2)].flatMap((_, k) => ["Food trucks", "Restaurants", "Cafés", "Bakeries", "Barbershops", "Local shops", "Caterers", "Food stands"].map((t) => <span key={k + t} className="flex items-center gap-12">{t}<span className="text-accent">✦</span></span>))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="mx-auto max-w-6xl px-5 py-28">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">What we do</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Everything your website needs. Nothing it doesn’t.</h2>
          <p className="mt-4 text-muted-foreground">Built for businesses that want to look established and stay in control.</p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
          {[
            { i: PenTool, n: "01 / Design", t: "Websites that feel premium.", d: "Modern, mobile-first websites that help customers understand your business and take action." },
            { i: LayoutDashboard, n: "02 / Management", t: "Updates without the hassle.", d: "Menu changes, hours and content requests handled through your BERADYN Client Portal." },
            { i: LifeBuoy, n: "03 / Support", t: "A partner after launch.", d: "Hosting and maintenance options keep your website running as your business grows." },
          ].map(({ i: I, n, t, d }, idx) => (
            <article key={n} className="reveal border-t border-border pt-7" style={{ transitionDelay: `${idx * 90}ms` }}>
              <span className="inline-flex h-11 items-center"><I className="h-5 w-5 text-ice" /></span>
              <p className="mt-10 font-mono text-xs text-muted-foreground">{n}</p>
              <h3 className="mt-2 text-xl font-medium">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-5 py-20">
        <div className="reveal flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Featured project</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-5xl">See what we build.</h2>
          </div>
        </div>
        <div className="reveal mt-12 grid items-center gap-10 border-y border-border py-10 md:grid-cols-2">
          <div className="relative min-h-[320px] px-0 py-6 sm:px-6">
            <div className="relative mx-auto mt-6 w-full max-w-sm border-y border-border py-5 float-slow">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold tracking-[0.2em]">NOVA GRILL</span>
              </div>
              {[["Smash Burger", "$12"], ["Street Tacos", "$9"], ["Loaded Fries", "$7"]].map(([a, b]) => (
                <div key={a} className="mt-4 flex items-center justify-between border-t pt-4 text-sm"><span>{a}</span><span className="font-mono text-muted-foreground">{b}</span></div>
              ))}
              <div className="mt-5 rounded-full bg-primary py-2.5 text-center text-xs font-semibold text-primary-foreground">Order now</div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="font-mono text-xs text-muted-foreground">01 / Restaurant website</p>
            <h3 className="mt-3 text-2xl font-medium sm:text-3xl">A restaurant site with a menu that stays current.</h3>
            <p className="mt-4 text-muted-foreground">Menu presentation, pricing, availability and content updates — all managed with BERADYN’s tools.</p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {["Live menu & pricing", "Mobile ordering links", "Hours & location"].map((x) => <li key={x} className="flex items-center gap-2.5"><Check className="h-4 w-4 text-accent" />{x}</li>)}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground/70">BERADYN demonstration project — not a paid client reference.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-28">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">How it works</p>
          <h2 className="mt-4 text-3xl font-medium sm:text-5xl">From your first idea to launch.</h2>
        </div>
        <ol className="process-timeline relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          {[
            ["Tell us about your business", "Share your goals, audience and the features you need."],
            ["We design and build", "Your website takes shape with a clear, responsive experience."],
            ["Review and launch", "Review the work, request changes and go live."],
            ["Manage what comes next", "Use your Client Portal for updates and requests."],
          ].map(([t, d], i) => (
            <li key={t} className="reveal process-step relative pl-14 md:pl-0" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="process-number absolute left-0 top-0 grid h-8 w-8 place-items-center bg-background font-mono text-xs text-ice md:relative">0{i + 1}</span>
              <h3 className="text-lg font-medium md:mt-8">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="reveal">
            <p className="eyebrow">Start here</p>
            <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Let’s build your next step.</h2>
            <p className="mt-4 text-muted-foreground">Tell us what you need and we’ll help you find a clear starting point for your website.</p>
          </div>
          <div className="reveal"><ContactForm /></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={fullLogo.url} alt="BERADYN — Digital experiences built for growth" className="h-28 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Professional websites. Practical tools. Built for your business.</p>
          </div>
          <div>
            <p className="eyebrow">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">{nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-foreground">{n.label}</a></li>)}</ul>
          </div>
          <div>
            <p className="eyebrow">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground"><li>Web design</li><li>Website management</li><li>Hosting & maintenance</li></ul>
          </div>
        </div>
        <p className="border-t py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} BERADYN. All rights reserved.</p>
      </footer>
    </div>
  );
}
