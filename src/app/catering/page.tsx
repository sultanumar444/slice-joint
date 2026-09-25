import type { Metadata } from "next";
import { CONTACT_CTA, CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, Steps, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Hot Slice Catering — Slice Joint UAE",
  description: "Pizza, burgers and loaded fries catering for offices, birthdays and events across Dubai. WhatsApp +971 54 456 7894 for a quote.",
};

export default function CateringPage() {
  return (
    <>
      <PageHero kicker="Hot Slice Catering" title="Feed the" accent="Whole Crew" intro="Office lunches, birthdays, match nights and team events — we bring the pizza, burgers and loaded fries, hot and ready to share." image="/images/pizza-pepperoni.jpg" />
      <SplitSection kicker="Catering" title="Big boxes. Bigger appetites." image="/images/craft.jpg" imageAlt="Pizza being prepared for a catering order">
        <p>Whether you&apos;re feeding ten people or a full office floor, Hot Slice Catering takes the stress out of the food. Pick your pies, add burgers and loaded fries, and we&apos;ll time everything to arrive hot when you need it.</p>
        <p>Every order is made fresh from the same kitchen and the same recipes as our everyday menu — the OG Marg, the Pep Joint, garlic knots and the rest of the favourites.</p>
      </SplitSection>
      <FeatureGrid kicker="What We Cater" title="made for sharing." items={[
        { title: "Offices", text: "Team lunches, meetings and Friday treats delivered straight to your desk." },
        { title: "Parties", text: "Birthdays, family gatherings and house parties that need zero cooking." },
        { title: "Match Nights", text: "Big boxes of pizza, wings and loaded fries for the whole squad." },
        { title: "Events", text: "Launches, school events and community days — tell us the headcount." },
      ]} />
      <Steps kicker="How It Works" title="Three easy steps." steps={[
        { label: "Step 01", title: "Tell us the details", text: "Send us your date, time, location and roughly how many people you're feeding." },
        { label: "Step 02", title: "Build your spread", text: "We'll suggest a mix of pizzas, burgers, loaded fries and sides to suit your group and budget." },
        { label: "Step 03", title: "We deliver it hot", text: "Your order is made fresh and delivered on time, boxed and ready to share." },
      ]} />
      <TextSection kicker="In Detail" title="Catering that just works." columns={[{ heading: "Menus for every group", text: ["Mix and match whole pizzas, smash burgers, loaded fries and sides so there's something for everyone — from the pepperoni fans to the veggie crowd.", "Not sure how much to order? Tell us your headcount and we'll recommend quantities so nobody goes hungry and nothing goes to waste."] }, { heading: "On time, every time", text: ["Catering orders are scheduled in advance, so your food is made fresh and timed to arrive when you want it — not an hour early and not cold.", "Everything comes boxed, labelled and ready to serve, with napkins and plates available on request."] }, { heading: "Easy for organisers", text: ["One contact, one order, one delivery. Message us on WhatsApp and we'll handle the details, confirmations and any last-minute changes.", "Planning a regular office lunch? Ask us about setting up a repeat order for your team."] }]} />
      <FaqSection items={[{ q: "How far in advance should I order?", a: "For most catering orders, 24–48 hours' notice is ideal. For large events, get in touch as early as you can so we can plan the kitchen around your order." }, { q: "Is there a minimum order?", a: "Catering is designed for groups, so there is a minimum order size. Message us with your headcount and we'll confirm what works for your event." }, { q: "Can you cater for dietary needs?", a: "Yes. We can include vegetarian options and flag common allergens. Let us know about any requirements when you enquire." }, { q: "Do you deliver catering across Dubai?", a: "We deliver catering across Dubai. Share your location when you enquire and we'll confirm delivery timing." }, { q: "How do I pay?", a: "We'll confirm payment options with you when we finalise your order." }]} />
      <CtaBand title="Get a catering quote." text="Message us on WhatsApp or send an enquiry and we'll put together a menu for your group." {...CONTACT_CTA} />
    </>
  );
}
