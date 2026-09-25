import type { Metadata } from "next";
import { CtaBand, FaqSection, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Our Story — Slice Joint UAE",
  description: "How Slice Joint brought hot pizza, juicy burgers and loaded fries to Dubai.",
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero kicker="Our Story" title="How the" accent="Joint Started" intro="A love for big slices, stacked burgers and fries loaded to the edge of the box — brought to Dubai." image="/images/pizza-pepperoni.jpg" />
      <SplitSection kicker="The Beginning" title="Built on cravings." image="/images/craft.jpg" imageAlt="Pizza dough being hand-stretched">
        <p>Slice Joint came from the kind of food we always wanted on a late night in Dubai: a proper pizza with a crust worth finishing, a burger that needs two hands, and fries that are a meal on their own.</p>
        <p>We couldn&apos;t always find all three done well in one place — so we built a joint that does exactly that.</p>
      </SplitSection>
      <SplitSection kicker="The Menu" title="Favourites, not fillers." image="/images/pizza-margherita.jpg" imageAlt="OG Marg pizza" reverse>
        <p>Our menu is short on purpose. Crowd favourites like the OG Marg and the Pep Joint sit next to smash burgers, garlic knots and loaded fries — each one tested until it earned its place.</p>
        <p>Everything is made fresh to order, packed to travel well and delivered fast, so it tastes just as good at home as it does in the kitchen.</p>
      </SplitSection>
      <TextSection kicker="In Detail" title="What we believe in." columns={[{ heading: "Food worth craving", text: ["We started Slice Joint because we wanted fast food that actually felt like a treat — the kind you think about the next day.", "That means big flavours, generous portions and no shortcuts on the things that matter."] }, { heading: "Built for Dubai", text: ["Dubai eats late, orders often and expects quality. We built our kitchen and our menu around exactly that.", "Whether it's a family dinner, a late-night craving or a match with friends, we want to be the first name you think of."] }, { heading: "Just getting started", text: ["Every joint has to start somewhere, and ours is still being written. New menu items, new ideas and new ways to get Slice Joint to you are on the way.", "Follow us on Facebook to be the first to hear what's next."] }]} />
      <FaqSection items={[{ q: "Where is Slice Joint based?", a: "We're based in Dubai, United Arab Emirates." }, { q: "What are your best-sellers?", a: "The OG Marg and the Pep Joint are two of our biggest hits, along with our loaded fries and garlic knots." }, { q: "How can I stay updated?", a: "Follow Slice Joint on Facebook for new menu drops, offers and news." }]} />
      <CtaBand title="Be part of the story." text="Order your first Slice Joint meal today and follow us on Facebook for new drops and offers." primary={{ href: "/order", label: "Order Now" }} secondary={{ href: "https://www.facebook.com/slicejointae", label: "Follow Us" }} />
    </>
  );
}
