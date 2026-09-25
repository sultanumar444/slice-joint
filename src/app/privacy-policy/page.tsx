import type { Metadata } from "next";
import { PageHero } from "@/components/ContentBlocks";

export const metadata: Metadata = {
  title: "Privacy Policy — Slice Joint UAE",
  description: "How Slice Joint collects, uses and protects your personal information.",
};

const SECTIONS = [
  {
    title: "Who we are",
    body: [
      "Slice Joint is a fast food restaurant based in Dubai, United Arab Emirates, serving pizza, burgers and loaded fries. In this policy, “we”, “us” and “our” refer to Slice Joint.",
      "If you have any questions about this policy, contact us at info@slicejoint.com or +971 54 456 7894.",
    ],
  },
  {
    title: "Information we collect",
    body: [
      "We only collect information you choose to give us — for example when you fill in our contact, booking, catering or newsletter forms, or message us on WhatsApp. This may include your name, email address, phone number, preferred date and time, and any notes you add.",
      "Like most websites, our hosting provider may automatically log basic technical information such as your browser type, device and pages visited, to keep the site secure and working properly.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your information to respond to your enquiries, manage bookings and catering requests, and — only if you sign up — send you news, offers and event invitations.",
      "We do not sell your personal information. We only share it with service providers who help us run the website and communicate with you, and only as needed for that purpose.",
    ],
  },
  {
    title: "Ordering through delivery apps",
    body: [
      "When you order through Talabat, Deliveroo, Careem or noon food, your order and payment are handled by that app under its own privacy policy. We receive only the details needed to prepare and deliver your order.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep your information only as long as we need it for the purposes above, or as required by law. You can unsubscribe from our emails at any time using the link in any email or by contacting us.",
    ],
  },
  {
    title: "Your rights",
    body: [
      "You can ask us to access, correct or delete the personal information we hold about you, or to stop using it for marketing. Email info@slicejoint.com and we will respond as soon as possible.",
    ],
  },
  {
    title: "WhatsApp, phone and social media",
    body: [
      "If you contact us on WhatsApp, by phone or through Facebook, we will see the details you share with us there, such as your name, number and messages. We use these only to reply to you and handle your request.",
      "Those platforms process your information under their own privacy policies, which we recommend you review.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "Our website uses only the cookies and similar technologies needed for it to work properly. If we add analytics or marketing cookies in the future, we will update this policy and ask for your consent where required.",
      "You can control or delete cookies at any time through your browser settings.",
    ],
  },
  {
    title: "How we protect your information",
    body: [
      "We take reasonable technical and organisational steps to protect your personal information from loss, misuse and unauthorised access. Only people who need your information to help you can access it.",
      "No website or online service can be completely secure, so please avoid sending sensitive information such as card details through our forms or messages.",
    ],
  },
  {
    title: "Children",
    body: [
      "Our website is not aimed at children under 18, and we do not knowingly collect personal information from them. If you believe a child has shared their details with us, please contact us and we will delete them.",
    ],
  },
  {
    title: "Links to other websites",
    body: [
      "Our website links to other sites, including delivery apps and social media. We are not responsible for how those sites handle your information, so please check their privacy policies before sharing your details.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The latest version will always be available on this page.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero kicker="Legal" title="Privacy" accent="Policy" intro="How we collect, use and protect your personal information." />
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Last updated: September 2026</p>
          {SECTIONS.map((s, i) => (
            <div key={s.title} className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                <span className="text-brand-red">{String(i + 1).padStart(2, "0")}.</span> {s.title}
              </h2>
              {s.body.map((p) => (
                <p key={p} className="text-lg text-brand-dark/70 leading-relaxed">{p}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
