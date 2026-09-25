import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({ kicker, title, accent, intro, image = "/images/hero-pizza.jpg" }: {
  kicker: string;
  title: string;
  accent?: string;
  intro: string;
  image?: string;
}) {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src={image} alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">{kicker}</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {title}
            {accent && <span className="text-brand-red">{` ${accent}`}</span>}
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">{intro}</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
    </>
  );
}

export function SplitSection({ kicker, title, image, imageAlt, reverse, children }: {
  kicker: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className={`lg:col-span-6 relative ${reverse ? "lg:order-2" : ""}`}>
          <img src={image} alt={imageAlt} className="w-full aspect-[4/5] object-cover" />
          <div className={`absolute -bottom-4 w-28 h-28 checker-red hidden md:block ${reverse ? "-left-4" : "-right-4"}`} />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">{kicker}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">{title}</h2>
          <div className="space-y-5 text-lg text-brand-dark/70 leading-relaxed">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ kicker, title, items }: {
  kicker: string;
  title: string;
  items: { title: string; text: string }[];
}) {
  return (
    <section className="checker-red-bg text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em]">{kicker}</span>
          <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,5rem)] display-civ-dark">{title}</h2>
        </div>
        <div className={`grid gap-px bg-white/20 ${items.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
          {items.map((i) => (
            <div key={i.title} className="bg-brand-red p-8 lg:p-10 space-y-3 text-center">
              <h3 className="text-2xl lg:text-3xl font-black uppercase">{i.title}</h3>
              <p className="text-white/85 leading-relaxed">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps({ kicker, title, steps }: {
  kicker: string;
  title: string;
  steps: { label: string; title: string; text: string }[];
}) {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">{kicker}</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">{title}</h2>
        </div>
        <ol className="relative border-l-2 border-brand-red space-y-12 pl-10">
          {steps.map((s) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">{s.label}</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">{s.title}</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CtaBand({ title, text, primary, secondary }: {
  title: string;
  text: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const btn = (l: { href: string; label: string }, cls: string) =>
    l.href.startsWith("/") ? (
      <Link href={l.href} className={cls}>{l.label}</Link>
    ) : (
      <a href={l.href} className={cls} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{l.label}</a>
    );
  return (
    <section className="bg-brand-dark text-brand-cream py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1]">{title}</h2>
        <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">{text}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {btn(primary, "inline-flex px-9 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all")}
          {secondary && btn(secondary, "inline-flex px-9 py-4 border-2 border-brand-cream text-brand-cream text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all")}
        </div>
      </div>
    </section>
  );
}

export const CONTACT_CTA = {
  primary: { href: "https://wa.me/971544567894", label: "WhatsApp Us" },
  secondary: { href: "/contact", label: "Send an Enquiry" },
};

export function TextSection({ kicker, title, columns }: {
  kicker: string;
  title: string;
  columns: { heading: string; text: string[] }[];
}) {
  return (
    <section className="py-24 px-6 bg-white border-y border-brand-dark/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 max-w-3xl">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">{kicker}</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-3 leading-[1.05]">{title}</h2>
        </div>
        <div className={`grid gap-12 ${columns.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {columns.map((c) => (
            <div key={c.heading} className="space-y-4">
              <h3 className="text-2xl font-black tracking-tight border-t-4 border-brand-red pt-4">{c.heading}</h3>
              {c.text.map((t) => (
                <p key={t} className="text-brand-dark/70 leading-relaxed">{t}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({ title = "FAQ.", items }: { title?: string; items: { q: string; a: string }[] }) {
  return (
    <section className="py-28 px-6 bg-brand-cream">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Good Questions</span>
          <h2 className="font-display italic text-5xl md:text-7xl font-black tracking-tight mt-3 text-brand-red">{title}</h2>
        </div>
        <div className="divide-y divide-brand-dark/10 border-y border-brand-dark/10">
          {items.map((i) => (
            <details key={i.q} className="group py-6">
              <summary className="flex justify-between items-center gap-6 cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                {i.q}
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">{i.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
