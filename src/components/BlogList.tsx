"use client";

import { useState } from "react";

const CATEGORIES = ["All", "Dough", "History", "Recipe", "Kitchen", "Community", "Pairing"];

const POSTS = [
  {
    "image": "/images/hero-pizza.jpg",
    "category": "History",
    "title": "A short, opinionated history of the New York slice",
    "excerpt": "From Lombardi's in 1905 to the dollar-slice wars — how the foldable pie became a city symbol.",
    "date": "May 04, 2026"
  },
  {
    "image": "/images/pizza-pepperoni.jpg",
    "category": "Recipe",
    "title": "Hot honey: the unlikely topping that changed everything",
    "excerpt": "Sweet, spicy, sticky, and impossible to put down. The honey we drizzle and why we make it ourselves.",
    "date": "Apr 22, 2026"
  },
  {
    "image": "/images/pizza-margherita.jpg",
    "category": "Kitchen",
    "title": "How we built a stone oven that breathes like a brick wall",
    "excerpt": "450°C, refractory bricks, and a custom flue. The chemistry of a great char.",
    "date": "Apr 10, 2026"
  },
  {
    "image": "/images/pizza-truffle.jpg",
    "category": "Community",
    "title": "Late-night pizza is Dubai's most underrated ritual",
    "excerpt": "Why the joint stays open until 2 AM, and the regulars who keep us going.",
    "date": "Mar 28, 2026"
  },
  {
    "image": "/images/pizza-pepperoni.jpg",
    "category": "Pairing",
    "title": "Wine, beer, or chinotto? Pairing drinks with NY pizza",
    "excerpt": "A bartender's guide to washing down a 22-inch pie.",
    "date": "Mar 15, 2026"
  },
  {
    "image": "/images/craft.jpg",
    "category": "Behind-the-Scenes",
    "title": "A day in the joint, from 6 AM dough to last slice",
    "excerpt": "Fourteen hours, four pizzaiolos, one nonstop oven.",
    "date": "Mar 02, 2026"
  }
];

export default function BlogList() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? POSTS : POSTS.filter((p) => p.category === active);

  return (
    <>
      <section className="px-6 border-y border-brand-dark/10 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] rounded-full border transition-all ${
                active === c
                  ? "bg-brand-dark text-white border-brand-dark"
                  : "border-brand-dark/20 text-brand-dark/70 hover:border-brand-red hover:text-brand-red"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {visible.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-5">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">{p.category}</span>
              <h3 className="text-2xl font-black tracking-tight mt-2 group-hover:text-brand-red transition-colors">{p.title}</h3>
              <p className="text-sm text-brand-dark/70 mt-3 leading-relaxed">{p.excerpt}</p>
              <div className="text-xs uppercase tracking-[0.25em] font-bold text-brand-dark/40 mt-4">{p.date}</div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
