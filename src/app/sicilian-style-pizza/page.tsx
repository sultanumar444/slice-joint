import type { Metadata } from "next";
import { CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Sicilian Style Pizza — Slice Joint UAE",
  description: "Thick, square Sicilian style pizza with a soft, airy crumb and crisp base. Try the Sicilian Square at Slice Joint Dubai.",
};

export default function SicilianStylePizzaPage() {
  return (
    <>
      <PageHero kicker="Pizza Styles" title="Sicilian" accent="Style" intro="Thick, square and satisfying — the hearty cousin of the New York slice." image="/images/pizza-margherita.jpg" />
      <SplitSection kicker="The Style" title="Soft inside. Crisp underneath." image="/images/pizza-truffle.jpg" imageAlt="Square pizza slice">
        <p>Sicilian style pizza is baked in a sheet pan, giving it a thick, square shape with a soft, airy crumb and a golden, crispy base.</p>
        <p>It&apos;s hearty enough to hold plenty of sauce and toppings, and it&apos;s cut into squares that are perfect for sharing. Try it on our menu as the Sicilian Square.</p>
        <p>Made fresh to order and baked until the base is crisp and the top is bubbling, it&apos;s a filling, crowd-pleasing slice that travels well and tastes great at home.</p>
      </SplitSection>
      <FeatureGrid kicker="What Makes It" title="the sicilian square." items={[
        { title: "Sheet Pan", text: "Baked in a large tray for a thick, even, square slice." },
        { title: "Airy Crumb", text: "A light, bready inside with a crisp, oily base." },
        { title: "Big Flavour", text: "Plenty of sauce and cheese on a base built to carry it." },
      ]} />
      <TextSection kicker="In Detail" title="A short guide to Sicilian style." columns={[{ heading: "Where it comes from", text: ["Sicilian style pizza is inspired by sfincione, a thick, spongy pizza from Sicily in southern Italy.", "Italian immigrants brought it to the United States, where it became the square slice now found in pizzerias everywhere."] }, { heading: "How it's built", text: ["The dough is stretched into a well-oiled sheet pan and left to rise, giving it a tall, airy crumb.", "It's topped with a rich tomato sauce and cheese, then baked until the bottom is golden and crisp."] }, { heading: "How to enjoy it", text: ["It's cut into squares, which makes it perfect for sharing at parties and events.", "Because it's so sturdy, it holds up to plenty of toppings — and it reheats brilliantly."] }]} />
      <FaqSection items={[{ q: "What's the difference between Sicilian and Detroit style?", a: "Both are square, pan-baked pizzas. Sicilian style has a thicker, breadier crumb, while Detroit style is known for its crispy, caramelised cheese edges." }, { q: "Is Sicilian style pizza on the Slice Joint menu?", a: "Yes — look for the Sicilian Square in our Slice Bar." }, { q: "Is it good for catering?", a: "Definitely. Square slices are easy to share, which makes them a great choice for catering orders." }]} />
      <CtaBand title="Square up." text="Add a Sicilian Square to your next order." primary={{ href: "/order", label: "Order Now" }} secondary={{ href: "/menu", label: "View Menu" }} />
    </>
  );
}
