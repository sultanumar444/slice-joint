import type { Metadata } from "next";
import { CONTACT_CTA, CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, Steps, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Food Truck — Slice Joint UAE",
  description: "Bring the Slice Joint experience to your event in Dubai — pizza, burgers and loaded fries served fresh on site. Enquire on WhatsApp.",
};

export default function FoodTruckPage() {
  return (
    <>
      <PageHero kicker="Food Truck" title="Slice Joint" accent="On Wheels" intro="Hot pizza, juicy burgers and loaded fries served fresh at your event, festival or private party." image="/images/pizza-margherita.jpg" />
      <SplitSection kicker="The Truck" title="We bring the joint to you." image="/images/pizza-pepperoni.jpg" imageAlt="Pepperoni pizza fresh from the oven">
        <p>Want the Slice Joint experience somewhere other than your sofa? Our food truck service brings the menu to your venue, so your guests get it fresh, hot and made to order.</p>
        <p>It&apos;s perfect for outdoor events, corporate days, community markets and private celebrations. Get in touch to check availability for your date.</p>
      </SplitSection>
      <FeatureGrid kicker="Perfect For" title="any occasion." items={[
        { title: "Festivals", text: "Feed a crowd quickly with a menu everyone already loves." },
        { title: "Corporate", text: "Staff appreciation days, launches and open days with a difference." },
        { title: "Private Parties", text: "Weddings, birthdays and family celebrations with food made on the spot." },
      ]} />
      <Steps kicker="Booking the Truck" title="How to book." steps={[
        { label: "Step 01", title: "Send an enquiry", text: "Share your date, venue, expected guests and the type of event." },
        { label: "Step 02", title: "Choose your menu", text: "Pick from pizzas, burgers, loaded fries and sides — we'll help you plan quantities." },
        { label: "Step 03", title: "Enjoy the day", text: "We arrive, set up and serve. You enjoy the party." },
      ]} />
      <TextSection kicker="In Detail" title="What to expect on the day." columns={[{ heading: "Made fresh on site", text: ["Your guests order straight from the truck and get their food made fresh, hot and fast — no trays sitting around, no soggy boxes.", "We keep the menu focused on crowd favourites so the queue keeps moving, even at busy events."] }, { heading: "Flexible packages", text: ["Choose to cover the cost for all your guests, let guests pay for themselves, or mix both — whatever suits your event.", "We'll help you pick a menu and quantities based on your guest numbers and the length of your event."] }, { heading: "What we need from you", text: ["A flat, accessible spot to park the truck, plus confirmation of any venue permits or access requirements.", "Your event timings, expected guest numbers and a contact person on the day. We'll take care of the rest."] }]} />
      <FaqSection items={[{ q: "How many guests can the food truck serve?", a: "It depends on the menu and the length of your event. Share your expected guest numbers and we'll let you know what's realistic." }, { q: "How early should I book?", a: "Food truck dates are limited, so we recommend enquiring as early as possible — especially for weekends and public holidays." }, { q: "Do you travel outside Dubai?", a: "Our focus is Dubai. For events elsewhere in the UAE, get in touch and we'll let you know if we can make it work." }, { q: "Can we customise the menu?", a: "Yes, within reason. We'll build a menu around our best-sellers and your guests' preferences." }]} />
      <CtaBand title="Check availability." text="Food truck dates are limited, so reach out early with your event details." {...CONTACT_CTA} />
    </>
  );
}
