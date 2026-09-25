import type { Metadata } from "next";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Book a Table — Slice Joint UAE",
  description: "Reserve your table at Slice Joint Dubai. Walk-ins always welcome, groups of 6+ book ahead.",
};

export default function BookingPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Reservations</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Book a "}
            <span className="text-brand-red">Table</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">Grab a booth, a bar stool, or take over the joint. Walk-ins always welcome — groups of 6 or more, please book ahead.</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <SubmitForm className="lg:col-span-7 bg-white p-8 md:p-12 border border-brand-dark/10 space-y-6 rounded-[15px]">
            <h2 className="text-3xl font-black tracking-tight">Reserve your slice.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Full Name</label>
                <input id="name" type="text" placeholder="Jane Doe" className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red placeholder:text-brand-dark/30" name="name" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Phone</label>
                <input id="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red placeholder:text-brand-dark/30" name="phone" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Email</label>
                <input id="email" type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red placeholder:text-brand-dark/30" name="email" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Location</label>
                <select className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red">
                  <option>D3 Flagship</option>
                  <option>Jumeirah 1</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Date</label>
                <input id="date" type="date" className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red placeholder:text-brand-dark/30" name="date" />
              </div>
              <div>
                <label htmlFor="time" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Time</label>
                <input id="time" type="time" className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red placeholder:text-brand-dark/30" name="time" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Guests</label>
                <select className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9+</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Occasion</label>
                <select className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-full text-sm focus:outline-none focus:border-brand-red">
                  <option>Just hungry</option>
                  <option>Birthday</option>
                  <option>Date night</option>
                  <option>Business</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Special Requests</label>
              <textarea rows={4} placeholder="Allergies, seating preference, surprises..." className="w-full px-4 py-3 bg-brand-cream border border-brand-dark/15 rounded-2xl text-sm focus:outline-none focus:border-brand-red" />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-dark transition-all">Confirm Booking →</button>
          </SubmitForm>
          <aside className="lg:col-span-5 space-y-8">
            <div className="bg-brand-dark text-brand-cream p-8 space-y-5 rounded-[15px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Good To Know</span>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-brand-red">★</span>
                  Tables held for 15 minutes past booking time.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red">★</span>
                  Groups of 6+ require a credit card hold.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red">★</span>
                  Children welcome until 9 PM. High chairs available.
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-red">★</span>
                  Bar seating is walk-in only — first come, first slice.
                </li>
              </ul>
            </div>
            <div className="bg-white border border-brand-dark/10 p-8 space-y-4 rounded-[15px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Prefer to Call?</span>
              <a href="tel:+971544567894" className="block text-2xl font-black">+971 54 456 7894</a>
              <a href="https://wa.me/971544567894" className="inline-flex px-6 py-3 bg-brand-red text-white text-[11px] font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-dark transition-all">WhatsApp Us</a>
            </div>
            <div className="bg-white border border-brand-dark/10 p-8 space-y-3 rounded-[15px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Opening Hours</span>
              <ul className="text-sm space-y-2 text-brand-dark/70">
                <li className="flex justify-between">
                  <span>Sun – Thu</span>
                  <span>12:00 – 23:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Fri – Sat</span>
                  <span>12:00 – 02:00</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
