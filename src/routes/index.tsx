import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDown, Menu, X, PenTool, LayoutDashboard, LifeBuoy, Truck, UtensilsCrossed, Store, Smartphone, Check } from "lucide-react";
import mark from "@/assets/beradyn-logo-mark.png.asset.json";
import fullLogo from "@/assets/beradyn-logo-full.png.asset.json";
import { ContactForm } from "@/components/ContactForm";

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
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <div className="glass mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full py-2 pl-4 pr-2 md:grid-cols-[1fr_auto_1fr]">
          <Brand />
          <nav className="hidden items-center gap-1 rounded-full border bg-background/40 p-1 md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="flex justify-end">
            <a href="#contact" className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:glow md:inline-flex">Get started <ArrowUpRight className="h-4 w-4" /></a>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border md:hidden">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div className={`glass mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl transition-all duration-300 md:hidden ${open ? "max-h-96 p-3 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}>
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3.5 text-base text-muted-foreground hover:bg-secondary hover:text-foreground">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-primary py-3.5 text-center text-sm font-semibold text-primary-foreground">Get started</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative px-3 pt-20 sm:px-6 sm:pt-24">
        <div className="relative mx-auto min-h-[88svh] max-w-7xl overflow-hidden rounded-[2rem] border bg-card sm:rounded-[2.5rem]">
          <div className="aurora pointer-events-none absolute inset-0" />
          <div className="bg-grid pointer-events-none absolute inset-0" />
          {stars.map((s, i) => <span key={i} className="star" style={{ top: s.top, left: s.left, animationDelay: s.delay }} />)}
          {/* light beams */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-1/2 justify-center gap-10 overflow-hidden opacity-70">
            {[0, 1.4, 0.6, 2.2, 3].map((d, i) => <span key={i} className="beam h-40" style={{ animationDelay: `${d}s` }} />)}
          </div>
          {/* side circuit lines */}
          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
            <path d="M0 260 H180 C240 260 260 180 340 180" stroke="oklch(1 0 0 / 10%)" />
            <path d="M0 560 H140 C210 560 230 640 320 640" stroke="oklch(1 0 0 / 10%)" />
            <path d="M1200 250 H1030 C970 250 950 320 870 320" stroke="oklch(1 0 0 / 10%)" />
            <path d="M1200 580 H1050 C990 580 970 500 890 500" stroke="oklch(1 0 0 / 10%)" />
          </svg>

          {/* floating chips */}
          <div className="float-slow glass absolute left-[6%] top-[22%] hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full border bg-background/60"><Truck className="h-4 w-4 text-ice" /></span>
            <div><p className="text-sm font-medium">Food trucks</p><p className="font-mono text-[11px] text-muted-foreground">menu · live location</p></div>
          </div>
          <div className="float-slow glass absolute bottom-[22%] left-[9%] hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex" style={{ animationDelay: "1.5s" }}>
            <span className="grid h-9 w-9 place-items-center rounded-full border bg-background/60"><Smartphone className="h-4 w-4 text-ice" /></span>
            <div><p className="text-sm font-medium">Mobile-first</p><p className="font-mono text-[11px] text-muted-foreground">every screen</p></div>
          </div>
          <div className="float-slow glass absolute right-[6%] top-[26%] hidden w-52 rounded-2xl p-4 lg:block" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center justify-between"><p className="font-mono text-[11px] text-muted-foreground">Launch progress</p><ArrowUpRight className="h-4 w-4 text-ice" /></div>
            <p className="mt-2 font-display text-3xl font-semibold">96%</p>
            <div className="mt-3 h-1 rounded-full bg-secondary"><div className="h-full w-[96%] rounded-full bg-accent glow" /></div>
          </div>
          <div className="float-slow glass absolute bottom-[24%] right-[8%] hidden items-center gap-3 rounded-2xl px-4 py-3 lg:flex" style={{ animationDelay: "2.2s" }}>
            <span className="grid h-9 w-9 place-items-center rounded-full border bg-background/60"><UtensilsCrossed className="h-4 w-4 text-ice" /></span>
            <div><p className="text-sm font-medium">Restaurants</p><p className="font-mono text-[11px] text-muted-foreground">menus · ordering</p></div>
          </div>

          <div className="relative z-10 flex min-h-[88svh] flex-col items-center justify-center px-5 py-20 text-center">
            <img src={mark.url} alt="" className="reveal mb-8 h-20 w-auto drop-shadow-[0_0_40px_var(--accent)] sm:h-24" />
            <span className="reveal glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /> The BERADYN digital studio
            </span>
            <h1 className="reveal mt-6 max-w-4xl text-[2.6rem] font-medium leading-[1.02] sm:text-6xl md:text-7xl">
              Built to stand out.<br /><span className="text-sheen">Designed to last.</span>
            </h1>
            <p className="reveal mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Studio-quality websites for food trucks, restaurants and local businesses — without the agency overcharge.
            </p>
            <div className="reveal mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
              <a href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:glow sm:w-auto">Start your project <ArrowUpRight className="h-4 w-4" /></a>
              <a href="#work" className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition hover:border-accent/50 sm:w-auto">Explore our work</a>
            </div>
          </div>

          <a href="#solutions" className="absolute bottom-6 left-6 z-10 hidden items-center gap-3 sm:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground"><ArrowDown className="h-4 w-4" /></span>
            <span className="glass rounded-full px-3 py-1.5 text-xs text-muted-foreground">Scroll down</span>
          </a>
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
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {[
            { i: PenTool, n: "01 / Design", t: "Websites that feel premium.", d: "Modern, mobile-first websites that help customers understand your business and take action." },
            { i: LayoutDashboard, n: "02 / Management", t: "Updates without the hassle.", d: "Menu changes, hours and content requests handled through your BERADYN Client Portal." },
            { i: LifeBuoy, n: "03 / Support", t: "A partner after launch.", d: "Hosting and maintenance options keep your website running as your business grows." },
          ].map(({ i: I, n, t, d }, idx) => (
            <article key={n} className="reveal group relative overflow-hidden rounded-3xl border bg-card p-7 transition duration-500 hover:-translate-y-1 hover:border-accent/40" style={{ transitionDelay: `${idx * 90}ms` }}>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition duration-500 group-hover:bg-accent/30" />
              <span className="grid h-11 w-11 place-items-center rounded-xl border bg-background/50"><I className="h-5 w-5 text-ice" /></span>
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
        <div className="reveal mt-12 grid overflow-hidden rounded-[2rem] border bg-card md:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden bg-background p-6">
            <div className="aurora absolute inset-0 opacity-60" />
            <div className="bg-grid absolute inset-0" />
            <div className="relative mx-auto mt-6 w-full max-w-sm rounded-2xl border bg-card/80 p-5 backdrop-blur float-slow">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold tracking-[0.2em]">NOVA GRILL</span>
                <span className="rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[10px] text-ice">LIVE</span>
              </div>
              {[["Smash Burger", "$12"], ["Street Tacos", "$9"], ["Loaded Fries", "$7"]].map(([a, b]) => (
                <div key={a} className="mt-4 flex items-center justify-between border-t pt-4 text-sm"><span>{a}</span><span className="font-mono text-muted-foreground">{b}</span></div>
              ))}
              <div className="mt-5 rounded-full bg-primary py-2.5 text-center text-xs font-semibold text-primary-foreground">Order now</div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
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
        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Tell us about your business", "Share your goals, audience and the features you need."],
            ["We design and build", "Your website takes shape with a clear, responsive experience."],
            ["Review and launch", "Review the work, request changes and go live."],
            ["Manage what comes next", "Use your Client Portal for updates and requests."],
          ].map(([t, d], i) => (
            <li key={t} className="reveal glass rounded-3xl p-6" style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="grid h-10 w-10 place-items-center rounded-full border font-mono text-sm text-ice glow">0{i + 1}</span>
              <h3 className="mt-8 text-lg font-medium">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Contact */}
      <section id="contact" className="px-3 pb-24 sm:px-6">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] border bg-card">
          <div className="aurora pointer-events-none absolute -bottom-1/2 left-0 right-0 h-full opacity-70" />
          <div className="relative grid gap-12 p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div className="reveal">
              <p className="eyebrow">Start here</p>
              <h2 className="mt-4 text-3xl font-medium sm:text-5xl">Let’s build your next step.</h2>
              <p className="mt-4 text-muted-foreground">Tell us what you need and we’ll help you find a clear starting point for your website.</p>
              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:bandr@beradyn.com" className="glass flex items-center justify-between rounded-2xl px-4 py-3 transition hover:border-accent/50">
                  <span className="text-muted-foreground">Email</span><span>bandr@beradyn.com</span>
                </a>
                <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
                  <span className="text-muted-foreground">Status</span>
                  <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />Project inquiries welcome</span>
                </div>
              </div>
            </div>
            <div className="reveal rounded-3xl border bg-background/60 p-5 backdrop-blur sm:p-8">
              <ContactForm />
            </div>
          </div>
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
