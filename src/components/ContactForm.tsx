import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { BUDGETS, NEEDS, TIMELINES, projectRequestSchema } from "@/lib/project-request";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = projectRequestSchema.safeParse(data);
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    setStatus("sending");
    const v = parsed.data;
    const { error } = await supabase.from("project_requests").insert({
      ...v,
      business_name: v.business_name || null,
      phone: v.phone || null,
    });
    if (error) {
      setStatus("idle");
      return setError("Something went wrong. Please try again or email bandr@beradyn.com.");
    }
    setStatus("sent");
  }

  if (status === "sent")
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="text-2xl font-semibold">Request received</h3>
        <p className="max-w-sm text-muted-foreground">Thanks! We’ll review your project and reach out soon.</p>
      </div>
    );

  const label = "mb-2 block text-sm font-medium text-foreground/90";
  return (
    <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
      <div><label className={label} htmlFor="full_name">Your name</label><input id="full_name" name="full_name" className="field" maxLength={100} autoComplete="name" /></div>
      <div><label className={label} htmlFor="email">Email address</label><input id="email" name="email" type="email" className="field" maxLength={255} autoComplete="email" /></div>
      <div><label className={label} htmlFor="business_name">Business name</label><input id="business_name" name="business_name" className="field" maxLength={150} /></div>
      <div><label className={label} htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></label><input id="phone" name="phone" type="tel" className="field" maxLength={40} autoComplete="tel" /></div>
      {[
        ["need", "What do you need?", NEEDS],
        ["budget", "Budget range", BUDGETS],
        ["timeline", "Ideal timeline", TIMELINES],
      ].map(([name, text, opts]) => (
        <div key={name as string} className={name === "timeline" ? "sm:col-span-2" : ""}>
          <label className={label} htmlFor={name as string}>{text as string}</label>
          <select id={name as string} name={name as string} className="field appearance-none">
            {(opts as readonly string[]).map((o) => <option key={o} className="bg-background">{o}</option>)}
          </select>
        </div>
      ))}
      <div className="sm:col-span-2">
        <label className={label} htmlFor="message">Tell us about your business and goals</label>
        <textarea id="message" name="message" rows={5} className="field resize-none" maxLength={2000} placeholder="e.g. We run a taco truck and want customers to see our menu and weekly locations." />
      </div>
      {error && <p className="text-sm text-destructive sm:col-span-2">{error}</p>}
      <button disabled={status === "sending"} className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:glow disabled:opacity-60 sm:col-span-2 sm:justify-self-start">
        {status === "sending" ? <Loader2 className="h-4 w-4 animate-spin" /> : <>Submit request <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}
      </button>
    </form>
  );
}
