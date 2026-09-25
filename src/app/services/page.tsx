import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services — Slice Joint UAE",
  description: "Dine-in, delivery, private events, catering, and corporate orders — Slice Joint serves Dubai every way you want pizza.",
};

export default function ServicesPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">What We Do</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Our "}
            <span className="text-brand-red">Services</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">Dine in, take out, deliver, cater, or take over the whole joint — pizza, the way you want it.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">The Lineup</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">Six ways to slice it.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/craft.jpg" alt="Dine-In" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Dine-In</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">Walk into either joint and grab a stool at the bar or a booth with the crew. Hot slices, cold drinks, neighbourhood vibes.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-pepperoni.jpg" alt="Delivery" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Delivery</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">Order on Talabat, Deliveroo, Careem, or noon food. Hot, fresh, and at your door in 30 minutes or less.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-margherita.jpg" alt="Private Events" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Private Events</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">Take over the joint. Birthdays, brand launches, after-parties — we cater the whole night with bottomless slices.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-truffle.jpg" alt="Catering" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Catering</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">From office lunches to wedding after-parties, we fire pies for 10 to 1,000 — delivered hot, sliced, ready to share.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/craft.jpg" alt="Corporate Orders" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Corporate Orders</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">Friday lunch fixed. Weekly corporate accounts with priority kitchen lanes and invoicing.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-margherita.jpg" alt="Pizza Workshops" className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Pizza Workshops</h3>
              <p className="text-sm text-brand-dark/70 mt-2 leading-relaxed">{"Hands-on pizza-making sessions for teams, kids' parties, or just a fun date night. You stretch, we fire."}</p>
            </article>
          </div>
        </div>
      </section>
      <section className="bg-brand-dark text-brand-cream py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">How It Works</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">From order to oven.</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4 border-t-2 border-brand-red pt-6">
              <span className="text-5xl font-black text-brand-red">01</span>
              <h3 className="text-2xl font-black tracking-tight">Tell us what you need</h3>
              <p className="text-brand-cream/70 leading-relaxed">Date, headcount, location — drop us a message or call the joint.</p>
            </div>
            <div className="space-y-4 border-t-2 border-brand-red pt-6">
              <span className="text-5xl font-black text-brand-red">02</span>
              <h3 className="text-2xl font-black tracking-tight">We tailor the menu</h3>
              <p className="text-brand-cream/70 leading-relaxed">Pick from signature pies, slice platters, sides, salads, and desserts.</p>
            </div>
            <div className="space-y-4 border-t-2 border-brand-red pt-6">
              <span className="text-5xl font-black text-brand-red">03</span>
              <h3 className="text-2xl font-black tracking-tight">We fire it fresh</h3>
              <p className="text-brand-cream/70 leading-relaxed">Stone-fired the same day. Packed hot. Sliced ready to serve.</p>
            </div>
            <div className="space-y-4 border-t-2 border-brand-red pt-6">
              <span className="text-5xl font-black text-brand-red">04</span>
              <h3 className="text-2xl font-black tracking-tight">We deliver & set up</h3>
              <p className="text-brand-cream/70 leading-relaxed">Drop-off, full service, or on-site oven hire across the UAE.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Packages</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Catering packs.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="p-10 space-y-6 bg-white border border-brand-dark/10">
              <div>
                <h3 className="text-3xl font-black">The Office</h3>
                <div className="text-xs uppercase tracking-[0.25em] mt-2 text-brand-dark/60">min 10 people</div>
              </div>
              <div className="text-4xl font-black tracking-tight">AED 45/pax</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" 2 signature slices p.p."}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Garden salad"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Soft drinks"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Free Dubai delivery"}
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-colors bg-brand-dark text-white hover:bg-brand-red">Enquire</Link>
            </article>
            <article className="p-10 space-y-6 bg-brand-red text-white">
              <div>
                <h3 className="text-3xl font-black">The Party</h3>
                <div className="text-xs uppercase tracking-[0.25em] mt-2 text-white/70">min 20 people</div>
              </div>
              <div className="text-4xl font-black tracking-tight">AED 75/pax</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-white" />
                  {" 3 slices p.p. + sides"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-white" />
                  {" Antipasti board"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-white" />
                  {" Drinks + desserts"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-white" />
                  {" On-site set-up"}
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-colors bg-white text-brand-red hover:bg-brand-dark hover:text-white">Enquire</Link>
            </article>
            <article className="p-10 space-y-6 bg-white border border-brand-dark/10">
              <div>
                <h3 className="text-3xl font-black">The Takeover</h3>
                <div className="text-xs uppercase tracking-[0.25em] mt-2 text-brand-dark/60">50–500 people</div>
              </div>
              <div className="text-4xl font-black tracking-tight">Custom</div>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Full menu access"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Live pizzaiolo station"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Dedicated event manager"}
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 bg-brand-red" />
                  {" Bar service available"}
                </li>
              </ul>
              <Link href="/contact" className="block text-center px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-colors bg-brand-dark text-white hover:bg-brand-red">Enquire</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
