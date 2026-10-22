import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  FaqList,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
  CallButton,
} from "@/components/shared";
import { FAQS } from "@/data/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    ...seo({
      title: "HVAC FAQ | Elk Heating & Air Dayton OH",
      description:
        "Answers about furnace repair, AC installation, heat pumps, HVAC maintenance, indoor air quality, scheduling, and the Greater Dayton service area.",
      path: "/faq",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions, Answered Straight."
        intro="The things Dayton homeowners ask us most — about services, scheduling, and how we work. If your question isn't here, call us at (937) 344-5445."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <SectionHead
                eyebrow="Common Questions"
                title="Everything Homeowners Ask Before Booking."
                intro="Straight answers, no fine print."
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <BookNowButton label="Book Now" className="btn btn-flame" />
                <CallButton className="btn btn-outline" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <FaqList faqs={FAQS} />
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Still Have a Question? Just Ask."
        copy="Call (937) 344-5445 or book online — a real local team is happy to help."
      />
    </>
  );
}
