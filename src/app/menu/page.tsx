import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Menu — Slice Joint UAE",
  description: "Pizza, smash burgers, loaded fries, sides, salads, desserts and drinks. The full Slice Joint Dubai menu.",
};

export default function MenuPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/pizza-truffle.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">The Menu</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>Fired Fresh, Served Hot</h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">Hot pizza, juicy burgers and loaded fries — made fresh to order and delivered fast across Dubai.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start ">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Signature Pies</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Whole Pies</h2>
              <img src="/images/pizza-margherita.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">OG Marg</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Classic</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">San Marzano tomato, fior di latte, fresh basil, EVOO, sea salt.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 45</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Pep Joint</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Best Seller</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Cup-and-char pepperoni, mozzarella, oregano, hot honey drizzle.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 58</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Truffle Shuffle</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">{"Chef's Pick"}</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Black truffle cream, wild mushrooms, fior di latte, shaved parmesan.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 72</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Diavola</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Spicy</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Spicy nduja, calabrian chilli, mozzarella, basil, chilli oil.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 62</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Quattro Formaggi</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Mozzarella, gorgonzola, parmesan, smoked scamorza, honey.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 68</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Garden Joint</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Veggie</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Roasted peppers, zucchini, cherry tomatoes, olives, rocket, EVOO.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 55</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Bufala Suprema</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">DOP buffalo mozzarella, San Marzano, basil, EVOO, sea salt.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 75</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Carnivore</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Pepperoni, beef sausage, smoked turkey bacon, mozzarella, BBQ swirl.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 78</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start md:[&>div:first-child]:order-2">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">By the Slice</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">The Slice Bar</h2>
              <img src="/images/pizza-pepperoni.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Cheese Slice</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">The original. Crisp edge, gooey middle.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 18</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Pepperoni Slice</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Cup-and-char pepperoni, oregano.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 22</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Veggie Slice</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Seasonal vegetables, basil, EVOO.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 22</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Sicilian Square</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Thick, fluffy, crispy bottom. Tomato + cheese.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 24</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start ">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Juicy Burgers</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Burgers</h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Smash Joint</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Best Seller</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Double smashed beef patties, American cheese, pickles, onions, Joint sauce, toasted brioche.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 42</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Hot Honey Chicken</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Crispy fried chicken thigh, hot honey, slaw, pickles, brioche bun.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 38</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Classic Cheeseburger</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Single beef patty, cheddar, lettuce, tomato, house sauce.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 32</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Truffle Smash</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">{"Chef's Pick"}</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Double beef, Swiss cheese, sautéed mushrooms, truffle mayo.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 48</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start md:[&>div:first-child]:order-2">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Fully Loaded</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Loaded Fries</h2>
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Joint Fries</h3>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-1 bg-brand-red text-white rounded-full">Best Seller</span>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Crispy fries, cheese sauce, jalapeños, spring onion, Joint sauce.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 28</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Pep Fries</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Fries loaded with cheese sauce, crispy pepperoni and chilli flakes.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 32</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Buffalo Chicken Fries</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Fries, buffalo fried chicken, ranch, spring onion.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 36</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Smash Fries</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Fries topped with smashed beef, cheddar, pickles and burger sauce.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 38</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start ">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">On the Side</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Sides & Snacks</h2>
              <img src="/images/craft.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Garlic Knots (6)</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Hand-twisted, garlic butter, parsley, parmesan.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 22</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Truffle Fries</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Skin-on fries, truffle oil, parmesan, chives.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 32</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Mozzarella Sticks</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Six golden sticks, marinara dip.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 28</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Chicken Wings (8)</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Buffalo, BBQ, or hot honey. Blue cheese dip.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 42</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Meatballs</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Beef & ricotta, San Marzano sugo, basil, focaccia.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 38</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start md:[&>div:first-child]:order-2">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Greens</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Salads</h2>
              <img src="/images/pizza-margherita.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Caesar Joint</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Romaine, parmesan, sourdough croutons, anchovy dressing.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 34</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Burrata & Tomato</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Heirloom tomatoes, burrata, basil, balsamic glaze.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 48</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Rocket & Pear</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Wild rocket, poached pear, walnuts, gorgonzola, honey.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 36</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start ">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Sweet Stuff</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Desserts</h2>
              <img src="/images/pizza-truffle.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Nutella Pizza</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Sweet dough, Nutella, strawberries, icing sugar.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 42</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Tiramisu</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Classic mascarpone, espresso, cocoa.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 28</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Cannoli (2)</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Crisp shells, ricotta cream, pistachio crumb.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 26</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 border-t border-brand-dark/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start md:[&>div:first-child]:order-2">
            <div className="md:col-span-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-3">Sip</p>
              <h2 className="font-display uppercase italic font-black text-4xl md:text-[2.5rem] lg:text-5xl text-brand-dark leading-[0.95] mb-6 break-words">Drinks</h2>
              <img src="/images/pizza-pepperoni.jpg" alt="" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="md:col-span-8">
              <ul className="divide-y divide-brand-dark/15">
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Italian Sodas</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Lemon, blood orange, or peach.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 18</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Fresh Lemonade</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Hand-squeezed, mint, a touch of honey.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 20</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Espresso</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">Single shot. Double on request.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 14</div>
                </li>
                <li className="py-5 flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-display uppercase italic font-black text-xl md:text-2xl text-brand-dark">Cold Brew</h3>
                    </div>
                    <p className="text-[15px] text-brand-dark/70 mt-1.5 leading-relaxed">12-hour steep, slow and smooth.</p>
                  </div>
                  <div className="font-display italic font-black text-xl md:text-2xl text-brand-red whitespace-nowrap">AED 22</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-brand-dark text-brand-cream text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red mb-4">Hungry?</p>
          <h2 className="font-display uppercase italic font-black text-5xl md:text-6xl leading-[0.95] mb-6">Skip the line. Order now.</h2>
          <p className="text-brand-cream/80 text-lg mb-10">Delivery in 30 minutes or less across Dubai. Or book a table and dine in with the crew.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order" className="px-8 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-brand-dark transition-all">Order Online</Link>
            <Link href="/booking" className="px-8 py-3 border-2 border-brand-cream text-brand-cream text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all">Book a Table</Link>
          </div>
        </div>
      </section>
    </>
  );
}
