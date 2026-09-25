import type { Metadata } from "next";
import { CONTACT_CTA, CtaBand, FaqSection, FeatureGrid, PageHero, SplitSection, TextSection } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Crust with a Cause — Slice Joint UAE",
  description: "Crust with a Cause is Slice Joint's community programme — supporting local causes, schools and fundraisers across Dubai.",
};

export default function CrustWithACausePage() {
  return (
    <>
      <PageHero kicker="Community" title="Crust with" accent="a Cause" intro="Good food brings people together. We want to use ours to give something back to the community that feeds us." image="/images/pizza-margherita.jpg" />
      <SplitSection kicker="Giving Back" title="More than a slice." image="/images/craft.jpg" imageAlt="Fresh pizza being prepared">
        <p>Crust with a Cause is how Slice Joint supports the people and places around us. From school fundraisers to community clean-ups, we&apos;re happy to help with food, prizes and a helping hand.</p>
        <p>If you&apos;re running something that makes Dubai a better place, we&apos;d love to hear about it.</p>
      </SplitSection>
      <FeatureGrid kicker="How We Help" title="ways we give." items={[
        { title: "Fundraisers", text: "Pizza nights and food support for school and charity fundraising events." },
        { title: "Community Days", text: "Feeding volunteers at clean-ups, drives and neighbourhood events." },
        { title: "Local Heroes", text: "Treating the people who keep our city running — just because." },
      ]} />
      <TextSection kicker="In Detail" title="How to work with us." columns={[{ heading: "Who we support", text: ["Schools, charities, community groups and neighbourhood initiatives across Dubai that bring people together or help those who need it.", "We especially love projects run by volunteers who give up their own time for others."] }, { heading: "What we can offer", text: ["Depending on the request, we may be able to help with food for volunteers, pizza nights for fundraisers, vouchers for raffles, or discounted catering.", "Every request is different, so tell us what you need and we'll see how we can help."] }, { heading: "How to apply", text: ["Send us a short message with your organisation's name, the event or cause, the date and what kind of support you're looking for.", "We aim to reply to every request, and we'll let you know as soon as we can whether we're able to help."] }]} />
      <FaqSection items={[{ q: "Who can apply for support?", a: "Schools, registered charities, community groups and local initiatives in Dubai are welcome to reach out." }, { q: "How much notice do you need?", a: "Please give us at least two weeks' notice so we can plan properly, especially for food donations." }, { q: "Can individuals nominate a cause?", a: "Absolutely. If you know a person or group doing great work in your community, tell us about them." }]} />
      <CtaBand title="Have a cause in mind?" text="Tell us about your event or organisation and how we could help." {...CONTACT_CTA} />
    </>
  );
}
