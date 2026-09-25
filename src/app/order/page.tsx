import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Online — Slice Joint UAE",
  description: "Order Slice Joint on Talabat, Deliveroo, Careem, or noon food. Hot, fresh, at your door in 30 minutes.",
};

export default function OrderPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Delivery & Pickup</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Order "}
            <span className="text-brand-red">Online</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">Tap, slice, repeat. Order on your favourite delivery app or call the joint for pickup.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Choose Your App</span>
            <h2 className="text-5xl md:text-6xl font-black tracking-tight">Hot at your door.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
            <a href="#" className="group block p-5 sm:p-8 rounded-[15px] border-2 border-brand-dark/10 hover:border-brand-red transition-all bg-white space-y-3 sm:space-y-4 text-center">
              <img src="/images/apps/talabat.png" alt="Talabat logo" className="no-round mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
              <h3 className="text-base min-[360px]:text-lg sm:text-xl font-black whitespace-nowrap">Talabat</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold text-brand-dark/50 whitespace-nowrap">25–35 min</p>
              <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red group-hover:translate-x-1 transition-transform">Order →</span>
            </a>
            <a href="#" className="group block p-5 sm:p-8 rounded-[15px] border-2 border-brand-dark/10 hover:border-brand-red transition-all bg-white space-y-3 sm:space-y-4 text-center">
              <img src="/images/apps/deliveroo.png" alt="Deliveroo logo" className="no-round mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
              <h3 className="text-base min-[360px]:text-lg sm:text-xl font-black whitespace-nowrap">Deliveroo</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold text-brand-dark/50 whitespace-nowrap">30–40 min</p>
              <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red group-hover:translate-x-1 transition-transform">Order →</span>
            </a>
            <a href="#" className="group block p-5 sm:p-8 rounded-[15px] border-2 border-brand-dark/10 hover:border-brand-red transition-all bg-white space-y-3 sm:space-y-4 text-center">
              <img src="/images/apps/careem.png" alt="Careem logo" className="no-round mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
              <h3 className="text-base min-[360px]:text-lg sm:text-xl font-black whitespace-nowrap">Careem</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold text-brand-dark/50 whitespace-nowrap">20–30 min</p>
              <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red group-hover:translate-x-1 transition-transform">Order →</span>
            </a>
            <a href="#" className="group block p-5 sm:p-8 rounded-[15px] border-2 border-brand-dark/10 hover:border-brand-red transition-all bg-white space-y-3 sm:space-y-4 text-center">
              <img src="/images/apps/noon.png" alt="noon food logo" className="no-round mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover" />
              <h3 className="text-base min-[360px]:text-lg sm:text-xl font-black whitespace-nowrap">noon food</h3>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] font-bold text-brand-dark/50 whitespace-nowrap">25–40 min</p>
              <span className="block text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red group-hover:translate-x-1 transition-transform">Order →</span>
            </a>
          </div>
        </div>
      </section>
      <section className="checker-red-bg text-white py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Pickup</span>
            <h2 className="text-4xl md:text-5xl font-black leading-[1] uppercase">Skip the wait. Call ahead.</h2>
            <p className="text-white/85 leading-relaxed">{"Call or WhatsApp your order and we'll have your pizza, burgers and loaded fries boxed and hot within 15 minutes."}</p>
          </div>
          <div className="space-y-4">
            <a href="tel:+971544567894" className="block bg-white text-brand-dark p-6 rounded-[15px] hover:bg-brand-dark hover:text-white transition-colors">
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red">Call Us</div>
              <div className="text-2xl font-black mt-1">+971 54 456 7894</div>
            </a>
            <a href="https://wa.me/971544567894" target="_blank" rel="noopener noreferrer" className="block bg-white text-brand-dark p-6 rounded-[15px] hover:bg-brand-dark hover:text-white transition-colors">
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red">WhatsApp</div>
              <div className="text-2xl font-black mt-1">+971 54 456 7894</div>
            </a>
          </div>
        </div>
      </section>
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-14 gap-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Most Ordered</span>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mt-3">Top of the menu.</h2>
            </div>
            <Link href="/" className="text-[11px] font-bold uppercase tracking-[0.2em] border-b-2 border-brand-dark pb-1">View Full Menu →</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="group">
              <div className="overflow-hidden mb-5">
                <img src="/images/pizza-margherita.jpg" alt="The OG Margherita" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-black tracking-tight">The OG Margherita</h3>
                <span className="shrink-0 font-black text-[11px] bg-brand-red text-white px-3 py-1.5">AED 65</span>
              </div>
              <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">San Marzano D.O.P, fior di latte, fresh basil, EVOO.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden mb-5">
                <img src="/images/pizza-pepperoni.jpg" alt="Hot Honey Roni" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-black tracking-tight">Hot Honey Roni</h3>
                <span className="shrink-0 font-black text-[11px] bg-brand-red text-white px-3 py-1.5">AED 85</span>
              </div>
              <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Ventricina salami, hot honey, chili flakes, basil.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden mb-5">
                <img src="/images/pizza-truffle.jpg" alt="Truffle Bianco" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-black tracking-tight">Truffle Bianco</h3>
                <span className="shrink-0 font-black text-[11px] bg-brand-red text-white px-3 py-1.5">AED 95</span>
              </div>
              <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Wild mushrooms, truffle cream, ricotta, thyme.</p>
            </article>
            <article className="group">
              <div className="overflow-hidden mb-5">
                <img src="/images/pizza-pepperoni.jpg" alt="Brooklyn Pepperoni" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="flex justify-between items-start gap-3">
                <h3 className="text-xl font-black tracking-tight">Brooklyn Pepperoni</h3>
                <span className="shrink-0 font-black text-[11px] bg-brand-red text-white px-3 py-1.5">AED 80</span>
              </div>
              <p className="text-sm text-brand-dark/60 mt-2 leading-relaxed">Cup-and-char pepperoni, aged mozzarella, oregano.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
