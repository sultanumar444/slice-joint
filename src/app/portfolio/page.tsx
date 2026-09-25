import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Portfolio — Slice Joint UAE",
  description: "A look at the joints, the events, the catering, and the pies. Selected work from Slice Joint across the UAE.",
};

export default function PortfolioPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Selected Work</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Our "}
            <span className="text-brand-red">Portfolio</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">{"Two joints, dozens of events, hundreds of catered pies — a look at how we've been feeding the UAE."}</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-12 px-6 border-b border-brand-dark/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6">
          <ul className="flex flex-wrap gap-2">
            <li>
              <button className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border-2 transition-all bg-brand-dark text-white border-brand-dark">All</button>
            </li>
            <li>
              <button className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border-2 transition-all border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red">Joints</button>
            </li>
            <li>
              <button className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border-2 transition-all border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red">Events</button>
            </li>
            <li>
              <button className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border-2 transition-all border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red">Catering</button>
            </li>
            <li>
              <button className="px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border-2 transition-all border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red">Collabs</button>
            </li>
          </ul>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-dark/50">8 projects</span>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 auto-rows-[240px] lg:auto-rows-[260px]">
          <article className="group relative overflow-hidden bg-brand-dark lg:col-span-2 lg:row-span-2">
            <img src="/images/hero-pizza.jpg" alt="D3 Joint" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Flagship · 2024</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">D3 Joint</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/pizza-pepperoni.jpg" alt="Sole DXB After-Party" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Event · 2024</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Sole DXB After-Party</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/pizza-margherita.jpg" alt="Careem HQ Friday Lunch" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Catering · 2025</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Careem HQ Friday Lunch</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark lg:col-span-2">
            <img src="/images/craft.jpg" alt="Jumeirah 1 Late-Night" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Joint · 2025</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Jumeirah 1 Late-Night</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/pizza-truffle.jpg" alt="Brewdog x Slice Joint" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Collab · 2025</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Brewdog x Slice Joint</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/pizza-margherita.jpg" alt="Sumayah & Karim" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Wedding · 2025</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Sumayah & Karim</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/pizza-pepperoni.jpg" alt="Hype Magazine Issue 12" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Brand · 2025</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Hype Magazine Issue 12</h3>
            </div>
          </article>
          <article className="group relative overflow-hidden bg-brand-dark ">
            <img src="/images/craft.jpg" alt="Alserkal Avenue Weekender" className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-5 text-white">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Pop-Up · 2026</span>
              <h3 className="text-xl md:text-2xl font-black mt-1">Alserkal Avenue Weekender</h3>
            </div>
          </article>
        </div>
      </section>
      <section className="checker-red-bg text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black">120K+</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 font-bold">Pies fired</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black">350+</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 font-bold">Events catered</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black">1,200+</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 font-bold">5-star reviews</div>
          </div>
          <div>
            <div className="text-5xl md:text-6xl font-black">2</div>
            <div className="text-xs uppercase tracking-[0.25em] mt-2 font-bold">Joints (and counting)</div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-black leading-[1] tracking-tight">{"Got a project? Let's fire something up."}</h2>
          <Link href="/contact" className="inline-flex px-9 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-dark transition-all">Start a Project</Link>
        </div>
      </section>
    </>
  );
}
