"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LEFT_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/blog", label: "Our Blog" },
];

const RIGHT_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact Us" },
  { href: "/order", label: "Order Online" },
];

const drawerLink =
  "block py-4 md:py-5 font-display uppercase italic font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-brand-cream hover:text-brand-red transition-colors";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const renderLinks = (links: { href: string; label: string }[]) =>
    links.map((l) => (
      <li key={l.href} className="border-b border-white/15">
        <Link
          href={l.href}
          onClick={() => setOpen(false)}
          aria-current={pathname === l.href ? "page" : undefined}
          className={`${drawerLink}${pathname === l.href ? " text-brand-red" : ""}`}
        >
          {l.label}
        </Link>
      </li>
    ));

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white border-b border-brand-dark/5">
        <div className="max-w-[1600px] mx-auto px-6 h-24 flex items-center">
          <div className="hidden md:flex items-center gap-10 text-[13px] font-bold uppercase tracking-[0.15em] text-brand-red">
            <Link href="/booking" className="wavy-underline hover:opacity-70 transition">
              Book Now
            </Link>
            <Link href="/contact" className="wavy-underline hover:opacity-70 transition">
              Locations
            </Link>
          </div>
          <Link href="/" aria-label="Slice Joint home" className="flex items-center gap-2 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
            <img src="/images/slice-joint-icon.png" alt="" className="no-round h-10 sm:h-12 md:h-14 w-auto" />
            <img src="/images/slice-joint-logo.png" alt="Slice Joint" className="no-round h-5 sm:h-7 md:h-9 w-auto" />
          </Link>
          <div className="flex items-center gap-3 sm:gap-5 ml-auto">
            <Link
              href="/order"
              className="hidden sm:inline-block wavy-underline text-[13px] font-bold uppercase tracking-[0.15em] text-brand-red hover:opacity-70 transition"
            >
              Order Now
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="w-11 h-11 -mr-2 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition"
            >
              <span className={`block w-6 h-0.5 bg-brand-red transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-brand-red transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <>
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 top-24 z-40 bg-black/60 cursor-default"
          />
          <div className="fixed left-0 right-0 top-24 z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain bg-brand-dark text-brand-cream border-b border-white/10 shadow-2xl">
            <div className="max-w-[1600px] mx-auto px-6 py-6 md:py-10 grid md:grid-cols-2 gap-x-12">
              <ul className="flex flex-col">{renderLinks(LEFT_LINKS)}</ul>
              <ul className="flex flex-col">{renderLinks(RIGHT_LINKS)}</ul>
              <div className="md:col-span-2 flex flex-wrap gap-3 sm:gap-4 pt-6 md:pt-8">
                <Link
                  href="/order"
                  className="px-8 py-3 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-white hover:text-brand-dark transition-all"
                >
                  Order Online
                </Link>
                <Link
                  href="/booking"
                  className="px-8 py-3 border-2 border-brand-cream text-brand-cream text-xs font-bold uppercase tracking-[0.25em] rounded-full hover:bg-brand-cream hover:text-brand-dark transition-all"
                >
                  Book a Table
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
