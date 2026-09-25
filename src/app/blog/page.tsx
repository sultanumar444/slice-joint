import type { Metadata } from "next";
import SubmitForm from "@/components/SubmitForm";
import BlogList from "@/components/BlogList";

export const metadata: Metadata = {
  title: "Our Blog — Slice Joint UAE",
  description: "Dough science, NY pizza history, behind-the-counter stories, and what's new from the Slice Joint kitchen.",
};

export default function BlogPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">The Inside Slice</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Our "}
            <span className="text-brand-red">Blog</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">Stories, recipes, and dough science from the people who fire your pies.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Featured</span>
          <article className="mt-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 overflow-hidden">
              <img src="/images/craft.jpg" alt="Why we cold-ferment for 48 hours (and what happens at hour 49)" className="w-full aspect-[16/10] object-cover" />
            </div>
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-block bg-brand-red text-white text-[10px] uppercase tracking-[0.3em] px-3 py-1 rounded-full">Dough</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Why we cold-ferment for 48 hours (and what happens at hour 49)</h2>
              <p className="text-lg text-brand-dark/70 leading-relaxed">{"There's a moment in the life of a dough ball when sugars finish breaking down, the gluten relaxes, and the crust starts whispering 'fold me'. Here's how we chase it."}</p>
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-brand-dark/50">Marco Russo · May 12, 2026</div>
              <a href="#" className="inline-flex px-7 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-red transition-all">Read Article →</a>
            </div>
          </article>
        </div>
      </section>
      <BlogList />
      <section className="py-24 px-6 bg-brand-dark text-brand-cream">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Subscribe</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1]">Get fresh slices in your inbox.</h2>
          <SubmitForm className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
            <input type="email" required placeholder="your@email.com" className="flex-1 px-6 py-4 bg-transparent border border-brand-cream/30 rounded-full text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-red transition-colors" />
            <button type="submit" className="px-8 py-4 bg-brand-red text-brand-cream text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all">Sign Me Up</button>
          </SubmitForm>
        </div>
      </section>
    </>
  );
}
