import type { Metadata } from "next";
import SubmitForm from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Contact Us — Slice Joint UAE",
  description: "Drop us a line for catering, events, press, careers, or just to say hi. Two joints across Dubai.",
};

export default function ContactPage() {
  return (
    <>
      <header className="relative min-h-[58vh] flex flex-col bg-brand-dark text-white overflow-hidden">
        <img src="/images/hero-pizza.jpg" alt="" aria-hidden="true" className="no-round absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/55 to-brand-dark/85" />
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
          <span className="inline-block bg-brand-red text-white text-[10px] md:text-xs uppercase tracking-[0.3em] px-5 py-2 rounded-full mb-6">Say Hi</span>
          <h1 className="uppercase leading-[0.9] tracking-tight max-w-5xl text-white text-[clamp(2.4rem,7.5vw,6.5rem)]" style={{ textShadow: "4px 4px 0 rgba(0,0,0,0.5)" }}>
            {"Contact "}
            <span className="text-brand-red">Us</span>
          </h1>
          <p className="max-w-2xl mt-8 text-sm md:text-base text-white/85 leading-relaxed">{"Catering, events, press, careers, or just a slice of feedback — we're listening."}</p>
        </div>
      </header>
      <div className="h-10 checker-red" />
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <article className="bg-white border border-brand-dark/10 p-8 space-y-3 rounded-[15px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Email</span>
            <a href="mailto:info@slicejoint.com" className="block text-2xl font-black tracking-tight hover:text-brand-red transition-colors">info@slicejoint.com</a>
            <p className="text-sm text-brand-dark/60">Replies in under 24 hours</p>
          </article>
          <article className="bg-white border border-brand-dark/10 p-8 space-y-3 rounded-[15px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Phone</span>
            <a href="tel:+971544567894" className="block text-2xl font-black tracking-tight hover:text-brand-red transition-colors">+971 54 456 7894</a>
            <p className="text-sm text-brand-dark/60">Daily 10 AM – 11 PM</p>
          </article>
          <article className="bg-white border border-brand-dark/10 p-8 space-y-3 rounded-[15px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">WhatsApp</span>
            <a href="https://wa.me/971544567894" className="block text-2xl font-black tracking-tight hover:text-brand-red transition-colors">+971 54 456 7894</a>
            <p className="text-sm text-brand-dark/60">Fastest for bookings</p>
          </article>
        </div>
      </section>
      <section className="pb-28 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          <SubmitForm className="lg:col-span-7 bg-brand-dark text-brand-cream p-8 md:p-12 space-y-6 rounded-[15px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Send a Message</span>
            <h2 className="text-3xl font-black tracking-tight">Drop us a line.</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Name</label>
                <input id="name" type="text" placeholder="Jane Doe" className="w-full px-4 py-3 bg-brand-cream/10 border border-brand-cream/20 rounded-full text-sm text-brand-cream focus:outline-none focus:border-brand-red placeholder:text-brand-cream/30" name="name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Email</label>
                <input id="email" type="email" placeholder="your@email.com" className="w-full px-4 py-3 bg-brand-cream/10 border border-brand-cream/20 rounded-full text-sm text-brand-cream focus:outline-none focus:border-brand-red placeholder:text-brand-cream/30" name="email" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Phone (optional)</label>
                <input id="phone" type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 bg-brand-cream/10 border border-brand-cream/20 rounded-full text-sm text-brand-cream focus:outline-none focus:border-brand-red placeholder:text-brand-cream/30" name="phone" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Subject</label>
                <select className="w-full px-4 py-3 bg-brand-cream/10 border border-brand-cream/20 rounded-full text-sm text-brand-cream focus:outline-none focus:border-brand-red">
                  <option>General enquiry</option>
                  <option>Catering / Events</option>
                  <option>Press</option>
                  <option>Careers</option>
                  <option>Feedback</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.25em] mb-2">Message</label>
              <textarea rows={6} placeholder="Tell us what's on your mind..." className="w-full px-4 py-3 bg-brand-cream/10 border border-brand-cream/20 rounded-2xl text-sm text-brand-cream focus:outline-none focus:border-brand-red placeholder:text-brand-cream/30" />
            </div>
            <button type="submit" className="w-full px-8 py-4 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all">Send Message →</button>
          </SubmitForm>
          <aside className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">Visit</span>
            <div className="bg-white border border-brand-dark/10 p-7 space-y-3 rounded-[15px]">
              <h3 className="text-xl font-black tracking-tight">D3 Flagship</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Building 7, Ground Floor, Dubai Design District</p>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-dark/10 text-[11px] font-bold uppercase tracking-[0.2em]">
                <div>
                  <div className="text-brand-red mb-1">Hours</div>
                  <div>12:00 PM – 11:00 PM</div>
                </div>
                <div>
                  <div className="text-brand-red mb-1">Phone</div>
                  <div>+971 54 456 7894</div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-brand-dark/10 p-7 space-y-3 rounded-[15px]">
              <h3 className="text-xl font-black tracking-tight">Jumeirah 1</h3>
              <p className="text-sm text-brand-dark/70 leading-relaxed">Al Wasl Road, Wasl 51, Shop 4, Dubai</p>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-brand-dark/10 text-[11px] font-bold uppercase tracking-[0.2em]">
                <div>
                  <div className="text-brand-red mb-1">Hours</div>
                  <div>12:00 PM – 02:00 AM</div>
                </div>
                <div>
                  <div className="text-brand-red mb-1">Phone</div>
                  <div>+971 54 456 7894</div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto rounded-[15px] overflow-hidden border border-brand-dark/10">
          <iframe title="Slice Joint Dubai map" src="https://www.openstreetmap.org/export/embed.html?bbox=55.27%2C25.18%2C55.30%2C25.22&layer=mapnik" className="w-full h-[420px] no-round" loading="lazy" />
        </div>
      </section>
    </>
  );
}
