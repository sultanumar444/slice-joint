import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Slice Joint UAE",
  description: "The story behind Slice Joint: a New York-style neighbourhood pizza joint hand-crafting 22-inch pies in Dubai.",
};

export default function AboutPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Who We Are</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"About "}
            <span className="text-brand-red">Slice Joint</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">A neighbourhood New York-style pizza joint, born in Brooklyn dreams and fired up in Dubai.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <img src="/images/craft.jpg" alt="Hand-stretched pizza dough" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 checker-red hidden md:block" />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">From a corner in Brooklyn to a joint in Dubai.</h2>
            <p className="text-lg text-brand-dark/70 leading-relaxed">Slice Joint was born from late nights in New York pizzerias, dollar slices folded in half, and the obsession of getting the crust right. We brought that exact ritual to the UAE — same flour, same fermentation, same fire.</p>
            <p className="text-lg text-brand-dark/70 leading-relaxed">No frills. No fusion. Just the perfect 22-inch pie, sliced wide, served fast, eaten standing if you have to.</p>
          </div>
        </div>
      </section>
      <section className="checker-red-bg text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">What We Stand For</span>
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,5rem)] display-civ-dark">our values.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-white/20">
            <div className="bg-brand-red p-8 lg:p-10 space-y-3 text-center">
              <h3 className="text-2xl lg:text-3xl font-black uppercase">Craft</h3>
              <p className="text-white/85 leading-relaxed">48-hour cold-fermented sourdough, hand-stretched, never compromised.</p>
            </div>
            <div className="bg-brand-red p-8 lg:p-10 space-y-3 text-center">
              <h3 className="text-2xl lg:text-3xl font-black uppercase">Community</h3>
              <p className="text-white/85 leading-relaxed">A joint is a neighbourhood. We feed ours like family.</p>
            </div>
            <div className="bg-brand-red p-8 lg:p-10 space-y-3 text-center">
              <h3 className="text-2xl lg:text-3xl font-black uppercase">Honesty</h3>
              <p className="text-white/85 leading-relaxed">Real ingredients, real fire, real value — every single slice.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">The Journey</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">Our timeline.</h2>
          </div>
          <ol className="relative border-l-2 border-brand-red space-y-12 pl-10">
            <li className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">2018</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">The Idea</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">Two friends, one Brooklyn pizzeria, a napkin sketch of a dream.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">2022</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">The Test Kitchen</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">18 months perfecting a 48-hour cold-ferment recipe in a Dubai warehouse.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">2024</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">The Joint Opens</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">{"D3 flagship opens its doors. First 22\" pie out of the oven at 11:47 AM."}</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">2025</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">Jumeirah 1</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">Second location opens on Al Wasl Road. Late-night slices until 2 AM.</p>
            </li>
            <li className="relative">
              <span className="absolute -left-[3.1rem] top-1 w-5 h-5 rounded-full bg-brand-red ring-4 ring-brand-cream" />
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">2026</div>
              <h3 className="text-2xl md:text-3xl font-black mt-1">DIFC, Coming Soon</h3>
              <p className="text-brand-dark/70 mt-2 leading-relaxed">Third joint in the works. Bigger ovens, bigger pies, same craft.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="py-28 px-6 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">The Crew</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Meet the joint.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="group">
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img src="/images/craft.jpg" alt="Marco Russo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-black">Marco Russo</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-red mt-1">Founder & Head Pizzaiolo</p>
            </article>
            <article className="group">
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img src="/images/hero-pizza.jpg" alt="Sara Al Marri" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-black">Sara Al Marri</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-red mt-1">Co-Founder, Operations</p>
            </article>
            <article className="group">
              <div className="overflow-hidden mb-5 aspect-[4/5]">
                <img src="/images/craft.jpg" alt="Tom Hayes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-2xl font-black">Tom Hayes</h3>
              <p className="text-sm uppercase tracking-[0.2em] text-brand-red mt-1">Executive Chef</p>
            </article>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tight">Come say hi at the joint.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/booking" className="px-9 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-dark transition-all">Book a Table</Link>
            <Link href="/contact" className="px-9 py-4 bg-transparent border-2 border-brand-dark text-brand-dark text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-dark hover:text-white transition-all">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
