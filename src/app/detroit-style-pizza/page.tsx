import type { Metadata } from "next";
import { CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Detroit Style Pizza — Slice Joint UAE",
  description: "Thick, square, crispy-edged Detroit style pizza — what it is and why people love it. From Slice Joint Dubai.",
};

export default function DetroitStylePizzaPage() {
  return (
    <>
      <PageHero kicker="Pizza Styles" title="Detroit" accent="Style" intro="Square, thick, airy — and famous for that crispy, caramelised cheese edge." image="/images/pizza-truffle.jpg" />
      <SplitSection kicker="The Style" title="All about the edges." image="/images/craft.jpg" imageAlt="Pizza dough being prepared">
        <p>Detroit style pizza is baked in a rectangular pan. The dough is thick and light, almost like focaccia, and the cheese goes all the way to the edges of the pan.</p>
        <p>As it bakes, that cheese melts down the sides and turns into a crunchy, golden, caramelised crust. The sauce is often added on top in stripes after the cheese — a signature look.</p>
        <p>The result is a pizza with real contrast: a soft, fluffy middle, a crunchy golden bottom and cheesy edges you&apos;ll want to save for last.</p>
      </SplitSection>
      <FeatureGrid kicker="What Makes It" title="the detroit square." items={[
        { title: "Pan-Baked", text: "Baked in a deep rectangular pan for a thick, fluffy base." },
        { title: "Cheese Crown", text: "Cheese pushed to the edges bakes into a crispy, lacy frame." },
        { title: "Sauce on Top", text: "Stripes of tomato sauce go on last for a bold, tangy finish." },
      ]} />
      <TextSection kicker="In Detail" title="A short guide to Detroit style." columns={[{ heading: "Where it comes from", text: ["Detroit style pizza was born in Detroit, Michigan in the 1940s, famously baked in rectangular steel pans originally used for car parts.", "That pan is the secret to its thick base and famously crunchy edges."] }, { heading: "How it's built", text: ["The dough is pressed into an oiled pan and left to rise, creating a light, airy base with a crisp, almost fried bottom.", "Cheese goes all the way to the edges, toppings go on next, and the sauce is often spooned on top in stripes."] }, { heading: "Why people love it", text: ["It's the best of both worlds: soft and fluffy in the middle, crunchy and cheesy around the edges.", "The corner pieces — with two crispy edges — are the ones everyone fights over."] }]} />
      <FaqSection items={[{ q: "Is Detroit style the same as deep dish?", a: "No. Chicago deep dish is baked in a round, high-sided pan and filled like a pie. Detroit style is square, lighter and airier, with crispy cheese edges." }, { q: "Is Detroit style pizza on the Slice Joint menu?", a: "Check our menu for our latest pan and square pizzas, and follow us on Facebook for new menu drops." }, { q: "Why is the sauce on top?", a: "Putting the sauce on top keeps the base from going soggy and gives each bite a bright, tangy finish." }]} />
      <CtaBand title="Craving something thicker?" text="Check our menu for our latest square and pan pizzas, or follow us on Facebook for new menu drops." primary={{ href: "/menu", label: "View Menu" }} secondary={{ href: "https://www.facebook.com/slicejointae", label: "Follow Us" }} />
    </>
  );
}
