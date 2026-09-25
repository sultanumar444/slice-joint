import type { Metadata } from "next";
import { CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Our Mission — Slice Joint UAE",
  description: "Slice Joint's mission: hot pizza, juicy burgers and loaded fries — fast delivery and unforgettable taste across Dubai.",
};

export default function OurMissionPage() {
  return (
    <>
      <PageHero kicker="Our Mission" title="Fast Food," accent="Done Right" intro="Hot pizza. Juicy burgers. Loaded fries. Fast delivery and unforgettable taste — every single order." />
      <SplitSection kicker="Why We Exist" title="Great food shouldn't mean a long wait." image="/images/craft.jpg" imageAlt="Fresh dough being stretched by hand">
        <p>Slice Joint started with a simple idea: fast food can be fresh, generous and genuinely delicious. You shouldn&apos;t have to choose between speed and quality.</p>
        <p>So we keep our menu focused on the things we do best — pizza, burgers and loaded fries — and make every order fresh, then get it to you fast and hot.</p>
      </SplitSection>
      <FeatureGrid kicker="What We Promise" title="our promise." items={[
        { title: "Fresh", text: "Every order is made when you place it — never sitting under a heat lamp." },
        { title: "Fast", text: "Quick kitchens and quick delivery, so your food arrives hot." },
        { title: "Generous", text: "Loaded, stacked and big enough to share. Nobody leaves hungry." },
      ]} />
      <TextSection kicker="In Detail" title="How we live the mission." columns={[{ heading: "In the kitchen", text: ["We keep our menu tight so every item gets the attention it deserves. Fewer dishes means fresher ingredients and more consistent food.", "Every pizza, burger and box of fries is made when you order it — that's non-negotiable."] }, { heading: "On the road", text: ["Fast delivery only matters if the food arrives hot. We pack every order to travel well, so crusts stay crisp and fries stay crunchy.", "We work with the delivery apps you already use, so ordering is quick and familiar."] }, { heading: "With our customers", text: ["We listen. Your feedback shapes what stays on the menu, what gets tweaked and what comes next.", "Got a comment, a complaint or a craving we should know about? Message us any time — we read everything."] }]} />
      <FaqSection items={[{ q: "What does Slice Joint serve?", a: "Hot pizza, juicy burgers and loaded fries — plus sides like garlic knots, salads, desserts and drinks." }, { q: "How do I order?", a: "Order through Talabat, Deliveroo, Careem or noon food, or call or WhatsApp us on +971 54 456 7894." }, { q: "How can I give feedback?", a: "Message us on WhatsApp, email info@slicejoint.com, or reach us on Facebook. We'd love to hear from you." }]} />
      <CtaBand title="Taste the mission." text="Order now on your favourite delivery app, or call us directly." primary={{ href: "/order", label: "Order Now" }} secondary={{ href: "/menu", label: "View Menu" }} />
    </>
  );
}
