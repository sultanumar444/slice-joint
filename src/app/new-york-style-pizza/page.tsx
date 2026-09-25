import type { Metadata } from "next";
import { CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "New York Style Pizza — Slice Joint UAE",
  description: "Big, thin, foldable New York style pizza in Dubai. Try the OG Marg and the Pep Joint from Slice Joint.",
};

export default function NewYorkStylePizzaPage() {
  return (
    <>
      <PageHero kicker="Pizza Styles" title="New York" accent="Style" intro="Big, thin and foldable — the classic slice that started it all." image="/images/pizza-pepperoni.jpg" />
      <SplitSection kicker="The Style" title="Wide slices. Thin crust. Fold it." image="/images/pizza-margherita.jpg" imageAlt="New York style margherita pizza">
        <p>New York style pizza is all about balance: a thin, crisp-bottomed base with a chewy edge, a bright tomato sauce and a generous layer of melted mozzarella.</p>
        <p>The slices are wide enough that you fold them in half to eat — the proper way. It&apos;s the style our OG Marg and Pep Joint are built on.</p>
        <p>Every pie is made fresh when you order, baked until the cheese bubbles and the crust turns golden, then boxed and sent out hot, so your first slice tastes like it just left the oven.</p>
      </SplitSection>
      <FeatureGrid kicker="What Makes It" title="the ny slice." items={[
        { title: "Thin Base", text: "Stretched thin so the bottom crisps up while the edge stays chewy." },
        { title: "Simple Sauce", text: "A bright, lightly seasoned tomato sauce that lets the toppings shine." },
        { title: "The Fold", text: "Big slices that bend without breaking — fold and eat on the go." },
      ]} />
      <TextSection kicker="In Detail" title="A short guide to the New York slice." columns={[{ heading: "Where it comes from", text: ["New York style pizza grew out of the pizzerias opened by Italian immigrants in New York City in the early 20th century.", "Over time it evolved into its own thing: larger, thinner and made for eating by the slice, on the go."] }, { heading: "How to spot one", text: ["Look for a large, round pie cut into wide triangular slices, with a thin centre that's crisp underneath and a chewy, puffy outer crust.", "The toppings are kept simple — a light tomato sauce, plenty of mozzarella and a few classic toppings like pepperoni."] }, { heading: "How to eat it", text: ["Pick up your slice, fold it lengthways down the middle, and eat it from the tip. The fold keeps the slice firm and the toppings where they belong.", "Add chilli flakes, oregano or a drizzle of hot honey if you like a kick."] }]} />
      <FaqSection items={[{ q: "What's the difference between New York and Neapolitan pizza?", a: "Neapolitan pizza is smaller with a soft, puffy crust and a soupy centre, eaten with a knife and fork. New York style is larger and thinner with a crisper base, made to be folded and eaten by hand." }, { q: "Which Slice Joint pizzas are New York style?", a: "Our OG Marg and Pep Joint are classic New York style slices." }, { q: "Can I order it by the slice?", a: "Check our menu's Slice Bar section for slices available to order." }]} />
      <CtaBand title="Get your fold on." text="Order the OG Marg or the Pep Joint and taste the New York slice done right." primary={{ href: "/order", label: "Order Now" }} secondary={{ href: "/menu", label: "View Menu" }} />
    </>
  );
}
