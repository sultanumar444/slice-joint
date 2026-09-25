import type { Metadata } from "next";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Slice Joint UAE — New York Style Pizza in Dubai",
  description: "Slice Joint Dubai — hot pizza, juicy burgers and loaded fries. Fast delivery on Talabat, Deliveroo, Careem and noon food, or call +971 54 456 7894.",
};

export default function HomePage() {
  return (
    <>
      <header className="relative min-h-[68vh] md:min-h-[80vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <video className="no-round absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline poster="/images/hero-pizza.jpg">
          <source src="https://videos.pexels.com/video-files/4252010/4252010-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/40 to-brand-dark/80" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-14 md:py-20">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Dubai · UAE · Since 2024</span>
          <h1 className="uppercase leading-[0.85] tracking-tight max-w-6xl">
            <span className="block text-white text-[clamp(1.9rem,9.8vw,8.5rem)] md:text-[clamp(2.8rem,8.8vw,8.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>Neighbourhood</span>
            <span className="block text-transparent text-[clamp(1.9rem,9.8vw,8.5rem)] md:text-[clamp(2.8rem,8.8vw,8.5rem)] md:-mt-2" style={{ WebkitTextStroke: "2px #ffffff" }}>New York</span>
            <span className="block text-brand-red text-[clamp(1.9rem,9.8vw,8.5rem)] md:text-[clamp(2.8rem,8.8vw,8.5rem)] md:-mt-2" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>Pizza Joints</span>
          </h1>
          <p className="max-w-xl mt-10 text-sm md:text-base text-white/85 leading-relaxed">{"Hot pizza. Juicy burgers. Loaded fries. Fast delivery and unforgettable taste — made fresh in Dubai, one order at a time."}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <a href="#order" className="inline-flex items-center gap-2 px-9 py-4 bg-brand-red text-white text-xs uppercase tracking-[0.25em] rounded-full border-2 border-brand-red hover:bg-white hover:text-brand-red hover:border-white transition-all">
              {"Order Now "}
              <span>→</span>
            </a>
            <a href="#contact" className="inline-flex items-center px-9 py-4 bg-transparent text-white text-xs uppercase tracking-[0.25em] rounded-full border-2 border-white hover:bg-white hover:text-brand-dark transition-all">Book a Table</a>
          </div>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="checker-red-bg text-white py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-sm font-black uppercase tracking-[0.3em]">Welcome to Slice Joint</span>
          <h2 className="font-black uppercase text-[clamp(2.5rem,7vw,6rem)] display-civ-dark">
            {"our craft. "}
            <br />
            {" your slice."}
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
            {"Welcome to Slice Joint — Dubai's home for "}
            <strong>hot pizza, juicy burgers and loaded fries</strong>
            {". From the OG Marg and the Pep Joint to garlic knots and fully loaded fries, everything is made fresh to order and "}
            <strong>delivered fast, hot and unforgettable</strong>
            {" — straight to your door."}
          </p>
        </div>
      </section>
      <section id="order" className="bg-brand-dark text-brand-cream py-8 overflow-hidden border-y-4 border-brand-red">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          <div className="flex items-center gap-16">
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Talabat
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Deliveroo
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Careem
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on noon food
              <span className="text-brand-red text-3xl">★</span>
            </span>
          </div>
          <div className="flex items-center gap-16">
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Talabat
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Deliveroo
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Careem
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on noon food
              <span className="text-brand-red text-3xl">★</span>
            </span>
          </div>
          <div className="flex items-center gap-16">
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Talabat
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Deliveroo
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Careem
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on noon food
              <span className="text-brand-red text-3xl">★</span>
            </span>
          </div>
          <div className="flex items-center gap-16">
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Talabat
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Deliveroo
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on Careem
              <span className="text-brand-red text-3xl">★</span>
            </span>
            <span className="flex items-center gap-6 text-2xl font-black uppercase tracking-tight">
              Order on noon food
              <span className="text-brand-red text-3xl">★</span>
            </span>
          </div>
        </div>
      </section>
      <section id="menu" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">The Lineup</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">Signature Slices.</h2>
            </div>
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 border-brand-dark pb-1">View Full Menu →</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-margherita.jpg" alt="OG Marg" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">OG Marg</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">San Marzano D.O.P, fior di latte, fresh basil, EVOO.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 65</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-pepperoni.jpg" alt="Hot Honey Roni" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Hot Honey Roni</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Ventricina salami, hot honey, chili flakes, basil.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 85</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-truffle.jpg" alt="Truffle Bianco" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Truffle Bianco</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Wild mushrooms, truffle cream, ricotta, thyme.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 95</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-pepperoni.jpg" alt="Pep Joint" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Pep Joint</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Cup-and-char pepperoni, aged mozzarella, oregano.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 80</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-margherita.jpg" alt="Burrata Garden" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Burrata Garden</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Burrata di Puglia, cherry tomatoes, basil oil, lemon zest.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 99</span>
              </div>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden bg-brand-dark/5 mb-5">
                <img src="/images/pizza-truffle.jpg" alt="Funghi Tartufo" width="800" height="800" loading="lazy" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Funghi Tartufo</h3>
                  <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Wild mushroom medley, black truffle, parmigiano.</p>
                </div>
                <span className="shrink-0 font-black text-sm bg-brand-red text-white px-3 py-1.5">AED 110</span>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="craft" className="bg-brand-dark text-brand-cream py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/images/craft.jpg" alt="Chef hand-stretching pizza dough" width="1200" height="800" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -right-4 w-28 h-28 checker-red hidden md:block" />
          </div>
          <div className="space-y-8">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">No Shortcuts</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Just dough,
              <br />
              fire, and
              <br />
              patience.
            </h2>
            <p className="text-lg text-brand-cream/70 leading-relaxed max-w-lg">Our sourdough is cold-fermented for two full days to develop a light, airy crumb that you can fold without it falling apart. Antimo Caputo flour. San Marzano tomatoes. Hand-pulled mozzarella, every single morning.</p>
            <ul className="space-y-4 pt-4">
              <li className="flex gap-4 items-center text-sm font-bold uppercase tracking-[0.15em]">
                <span className="w-2 h-2 bg-brand-red" />
                48-hour cold-fermented sourdough
              </li>
              <li className="flex gap-4 items-center text-sm font-bold uppercase tracking-[0.15em]">
                <span className="w-2 h-2 bg-brand-red" />
                Imported Antimo Caputo 00 flour
              </li>
              <li className="flex gap-4 items-center text-sm font-bold uppercase tracking-[0.15em]">
                <span className="w-2 h-2 bg-brand-red" />
                Daily-made small-batch sauce
              </li>
              <li className="flex gap-4 items-center text-sm font-bold uppercase tracking-[0.15em]">
                <span className="w-2 h-2 bg-brand-red" />
                Stone-fired at 450°C
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="locations" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Find Us</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">Visit the Joint.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-brand-dark/10 border border-brand-dark/10">
            <div className="bg-brand-cream p-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Location</span>
              <h3 className="text-2xl font-black tracking-tight">Dubai Design District</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Building 7, Ground Floor, D3, Dubai</p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] pt-2 border-t border-brand-dark/10">12:00 PM – 11:00 PM</p>
            </div>
            <div className="bg-brand-cream p-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Location</span>
              <h3 className="text-2xl font-black tracking-tight">Jumeirah 1</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Al Wasl Road, Wasl 51, Shop 4, Dubai</p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] pt-2 border-t border-brand-dark/10">12:00 PM – 02:00 AM</p>
            </div>
            <div className="bg-brand-cream p-10 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Location</span>
              <h3 className="text-2xl font-black tracking-tight">DIFC — Coming Soon</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Gate Village, DIFC, Dubai</p>
              <p className="text-xs font-bold uppercase tracking-[0.15em] pt-2 border-t border-brand-dark/10">Opening 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/images/pizza-pepperoni.jpg" alt="Slice flying with pepperoni" className="w-full aspect-square object-cover" />
            <div className="absolute -top-4 -left-4 w-24 h-24 checker-red hidden md:block" />
          </div>
          <div className="space-y-10 min-w-0">
            <div>
              <h2 className="font-display italic uppercase text-4xl sm:text-5xl md:text-6xl text-brand-red leading-none">Our Spicy Creature</h2>
              <p className="text-2xl sm:text-3xl md:text-4xl font-black tracking-[0.15em] mt-2 text-brand-dark/80">FEATURES</p>
            </div>
            <article className="group flex items-start gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full checker-red flex items-center justify-center text-xl sm:text-2xl">🍕</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">Delicious Recipe</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">48-hour cold-fermented sourdough, Antimo Caputo 00 flour, San Marzano tomatoes — no shortcuts, just the real recipe.</p>
              </div>
              <a href="#order" aria-label="Order now" className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl group-hover:rotate-45 transition-transform">↗</a>
            </article>
            <article className="group flex items-start gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full checker-red flex items-center justify-center text-xl sm:text-2xl">🍕</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">Global Flavours</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">From a Brooklyn margherita to a Dubai-spiced hot honey roni — flavours that travel without losing their soul.</p>
              </div>
              <a href="#order" aria-label="Order now" className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl group-hover:rotate-45 transition-transform">↗</a>
            </article>
            <article className="group flex items-start gap-4 sm:gap-6 bg-white p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
              <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full checker-red flex items-center justify-center text-xl sm:text-2xl">🍕</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight mb-2">Delightful Taste</h3>
                <p className="text-sm text-brand-dark/70 leading-relaxed">Hand-stretched, stone-fired at 450°C and finished with EVOO. Every slice is a folded, foldable, unforgettable bite.</p>
              </div>
              <a href="#order" aria-label="Order now" className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-red text-white flex items-center justify-center text-xl group-hover:rotate-45 transition-transform">↗</a>
            </article>
          </div>
        </div>
      </section>
      <section id="story" className="py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">From a corner in Brooklyn to a joint in Dubai.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-brand-dark/70 leading-relaxed">
            <p>Slice Joint was born from late nights in New York pizzerias, dollar slices folded in half, and the obsession of getting the crust right. We brought that exact ritual to the UAE — same flour, same fermentation, same fire.</p>
            <p>No frills. No fusion. Just the perfect 22-inch pie, sliced wide, served fast, eaten standing if you have to.</p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-brand-dark/10">
              <div>
                <div className="text-4xl font-black text-brand-red">48h</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold mt-2">Cold Ferment</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-red">{"22\""}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold mt-2">NY Pies</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-red">450°</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold mt-2">Stone Oven</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-brand-dark text-brand-cream">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-brand-cream/50 mb-10">As Featured In</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-cream/70 hover:text-brand-cream transition-colors">Time Out</span>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-cream/70 hover:text-brand-cream transition-colors">{"What's On"}</span>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-cream/70 hover:text-brand-cream transition-colors">Esquire ME</span>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-cream/70 hover:text-brand-cream transition-colors">Gulf News</span>
            <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-cream/70 hover:text-brand-cream transition-colors">Hype</span>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display italic uppercase text-5xl md:text-6xl text-brand-red leading-none">Our Spicy Crew</h2>
            <p className="text-3xl md:text-4xl font-black tracking-[0.15em] mt-2 text-brand-dark/80">THE TEAM</p>
            <p className="max-w-2xl mx-auto mt-6 text-brand-dark/70 leading-relaxed">{"The hands behind the dough. Pizzaiolos who've trained in Naples, New York and Dubai — all obsessing over the same 22-inch pie."}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <article className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-cream to-white" style={{ borderRadius: "50% 50% 12px 12px / 35% 35% 12px 12px" }}>
                <img src="/images/crew-1.webp" alt="Marco Russo" loading="lazy" className="no-round w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-black uppercase">Marco Russo</h3>
                  <p className="text-brand-red text-sm font-bold uppercase tracking-[0.2em]">Head Pizzaiolo</p>
                </div>
              </div>
            </article>
            <article className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-cream to-white" style={{ borderRadius: "50% 50% 12px 12px / 35% 35% 12px 12px" }}>
                <img src="/images/crew-2.webp" alt="Daniel Cole" loading="lazy" className="no-round w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-black uppercase">Daniel Cole</h3>
                  <p className="text-brand-red text-sm font-bold uppercase tracking-[0.2em]">Sous Chef</p>
                </div>
              </div>
            </article>
            <article className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-brand-cream to-white" style={{ borderRadius: "50% 50% 12px 12px / 35% 35% 12px 12px" }}>
                <img src="/images/crew-3.webp" alt="Luca Romano" loading="lazy" className="no-round w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-black uppercase">Luca Romano</h3>
                  <p className="text-brand-red text-sm font-bold uppercase tracking-[0.2em]">Delivery Captain</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Word on the Street</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">
                {"Real reviews. "}
                <br />
                Real slices.
              </h2>
            </div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-dark/60">★★★★★ 4.9 / 5 · 1,200+ reviews</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <figure className="bg-white p-8 rounded-[15px] border border-brand-dark/5 space-y-5">
              <div className="text-brand-red text-xl">★★★★★</div>
              <blockquote className="text-lg leading-relaxed">{"\"Closest thing to a Brooklyn slice I've had outside of NYC. The hot honey roni is unreal.\""}</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] font-bold pt-4 border-t border-brand-dark/10">
                {"Ahmed K. · "}
                <span className="text-brand-dark/50">Dubai</span>
              </figcaption>
            </figure>
            <figure className="bg-white p-8 rounded-[15px] border border-brand-dark/5 space-y-5">
              <div className="text-brand-red text-xl">★★★★★</div>
              <blockquote className="text-lg leading-relaxed">{"\"Crust is everything — blistered, chewy, foldable. They got it right. My new Friday night spot.\""}</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] font-bold pt-4 border-t border-brand-dark/10">
                {"Priya S. · "}
                <span className="text-brand-dark/50">Jumeirah</span>
              </figcaption>
            </figure>
            <figure className="bg-white p-8 rounded-[15px] border border-brand-dark/5 space-y-5">
              <div className="text-brand-red text-xl">★★★★★</div>
              <blockquote className="text-lg leading-relaxed">{"\"Finally a proper NY slice in the UAE. Walked in for one, left with three. No regrets.\""}</blockquote>
              <figcaption className="text-xs uppercase tracking-[0.2em] font-bold pt-4 border-t border-brand-dark/10">
                {"James M. · "}
                <span className="text-brand-dark/50">D3</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-brand-cream">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">@slicejoint.ae</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">From the joint.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden">
              <img src="/images/hero-pizza.jpg" alt="Slice Joint moment 1" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-margherita.jpg" alt="Slice Joint moment 2" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-pepperoni.jpg" alt="Slice Joint moment 3" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-truffle.jpg" alt="Slice Joint moment 4" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/craft.jpg" alt="Slice Joint moment 5" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-margherita.jpg" alt="Slice Joint moment 6" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-pepperoni.jpg" alt="Slice Joint moment 7" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src="/images/pizza-truffle.jpg" alt="Slice Joint moment 8" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-28 px-6 bg-brand-cream border-t border-brand-dark/10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Good Questions</span>
            <h2 className="font-display italic text-5xl md:text-7xl font-black tracking-tight mt-3 text-brand-red">FAQ.</h2>
          </div>
          <div className="divide-y divide-brand-dark/10 border-y border-brand-dark/10">
            <details className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                Do you deliver across Dubai?
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">Yes — order via Talabat, Deliveroo, Careem, or noon food. Most slices arrive in 30 minutes or less.</p>
            </details>
            <details className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                Are your pizzas halal?
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">Every ingredient on our menu is 100% halal-certified, sourced from trusted UAE suppliers.</p>
            </details>
            <details className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                Can I book a table?
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">Walk-ins are always welcome, and groups of 6+ can book via WhatsApp or by calling the joint directly.</p>
            </details>
            <details className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                Do you do catering?
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">Absolutely. From office lunches to wedding after-parties, we can fire pies for 10 to 1,000. Drop us a line.</p>
            </details>
            <details className="group py-6">
              <summary className="flex justify-between items-center cursor-pointer font-display italic text-2xl md:text-3xl font-black tracking-tight list-none text-brand-dark">
                What makes your dough different?
                <span className="text-brand-red text-3xl transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 font-sans text-base md:text-lg text-brand-dark/70 leading-relaxed max-w-3xl">{"Antimo Caputo 00 flour, 48-hour cold ferment, hand-stretched, baked at 450°C on stone. That's the whole secret."}</p>
            </details>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-brand-red text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display italic text-4xl md:text-6xl font-black tracking-tight leading-[1]">Want exclusive Slice Joint content?</h2>
          <p className="mt-6 text-base md:text-lg text-white/90 max-w-2xl mx-auto">Sign up for the latest Slice Joint news, invites to openings, menu tastings and other fun pizza events</p>
          <SubmitForm className="mt-10 max-w-2xl mx-auto text-left space-y-5">
            <p className="text-sm text-white/90">
              <span className="font-bold">*</span>
              {" indicates required"}
            </p>
            <input type="email" required placeholder="Email Address*" className="w-full px-6 py-4 bg-white text-brand-dark rounded-full border-2 border-brand-dark placeholder:text-brand-dark/50 focus:outline-none" />
            <div className="grid sm:grid-cols-2 gap-5">
              <input type="text" placeholder="First Name" className="w-full px-6 py-4 bg-white text-brand-dark rounded-full border-2 border-brand-dark placeholder:text-brand-dark/50 focus:outline-none" />
              <input type="text" placeholder="Last Name" className="w-full px-6 py-4 bg-white text-brand-dark rounded-full border-2 border-brand-dark placeholder:text-brand-dark/50 focus:outline-none" />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-brand-red text-white text-base font-medium rounded-full border-2 border-brand-dark hover:bg-brand-dark transition-all">Subscribe</button>
          </SubmitForm>
        </div>
      </section>
    </>
  );
}
