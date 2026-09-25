import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-cream text-brand-red">
      <div className="relative bg-brand-red h-32 md:h-40">
        <div className="absolute left-1/2 -translate-x-1/2 top-8 md:top-12 z-10 w-28 md:w-32 bg-brand-red border-4 border-white text-white text-center py-4 px-2 shadow-lg">
          <div className="font-display italic font-black text-lg leading-none">TimeOut</div>
          <div className="my-2 mx-auto w-16 h-10 bg-white text-brand-red flex items-center justify-center">
            <span className="font-display italic font-black text-sm leading-none">Pizza</span>
          </div>
          <div className="text-[9px] font-bold uppercase tracking-widest leading-tight">
            The Best
            <br />
            In The World
          </div>
          <div className="mt-1 text-xs font-black uppercase tracking-wider">Top 10</div>
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-32 pb-10">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <ul className="space-y-5 text-left">
            <li>
              <Link href="/contact" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Locations</Link>
            </li>
            <li>
              <Link href="/blog" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">{"What's On"}</Link>
            </li>
            <li>
              <Link href="/catering" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Hot Slice Catering</Link>
            </li>
            <li>
              <Link href="/food-truck" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Food Truck</Link>
            </li>
            <li>
              <Link href="/contact" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Contact Us</Link>
            </li>
          </ul>
          <div className="flex flex-col items-center text-center">
            <img src="/images/slice-joint-icon.png" alt="Slice Joint" className="no-round h-28 w-auto mb-4" />
            <p className="font-display italic uppercase text-brand-red text-xl md:text-2xl tracking-wide mb-8">Fresh Pizza · Good Times</p>
            <div className="flex gap-6 mt-2">
              <a href="https://www.facebook.com/slicejointae" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group relative">
                <span className="block w-14 h-14 rounded-full bg-brand-red text-brand-cream flex items-center justify-center transition group-hover:bg-brand-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 w-2 h-4 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
                <span className="absolute left-[calc(50%+10px)] top-12 w-1.5 h-2.5 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
              </a>
              <a href="#" aria-label="Instagram" className="group relative">
                <span className="block w-14 h-14 rounded-full bg-brand-red text-brand-cream flex items-center justify-center transition group-hover:bg-brand-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.5-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 w-2 h-4 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
                <span className="absolute left-[calc(50%+10px)] top-12 w-1.5 h-2.5 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
              </a>
              <a href="#" aria-label="TikTok" className="group relative">
                <span className="block w-14 h-14 rounded-full bg-brand-red text-brand-cream flex items-center justify-center transition group-hover:bg-brand-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M16 2c.4 2.4 1.8 4 4 4.4V10c-1.6 0-3-.4-4.2-1.2v6.4a5.6 5.6 0 1 1-5.6-5.6c.3 0 .6 0 .8.1v3.2a2.4 2.4 0 1 0 1.6 2.3V2H16z" />
                  </svg>
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 w-2 h-4 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
                <span className="absolute left-[calc(50%+10px)] top-12 w-1.5 h-2.5 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
              </a>
              <a href="#" aria-label="YouTube" className="group relative">
                <span className="block w-14 h-14 rounded-full bg-brand-red text-brand-cream flex items-center justify-center transition group-hover:bg-brand-dark">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15V9l5.2 3-5.2 3z" />
                  </svg>
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 top-12 w-2 h-4 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
                <span className="absolute left-[calc(50%+10px)] top-12 w-1.5 h-2.5 bg-brand-red rounded-b-full group-hover:bg-brand-dark transition" />
              </a>
            </div>
          </div>
          <ul className="space-y-5 md:text-right">
            <li>
              <Link href="/our-mission" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Our Mission</Link>
            </li>
            <li>
              <Link href="/our-story" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Our Story</Link>
            </li>
            <li>
              <Link href="/crust-with-a-cause" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Crust with a Cause</Link>
            </li>
            <li>
              <Link href="/new-york-style-pizza" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">New York Style Pizza</Link>
            </li>
            <li>
              <Link href="/detroit-style-pizza" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Detroit Style Pizza</Link>
            </li>
            <li>
              <Link href="/sicilian-style-pizza" className="wavy-underline font-sans font-normal text-[18px] text-brand-red hover:opacity-70 transition">Sicilian Style Pizza</Link>
            </li>
          </ul>
        </div>
        <div className="mt-20 text-center space-y-2">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-bold text-brand-red">
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span>© Slice Joint UAE — 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
