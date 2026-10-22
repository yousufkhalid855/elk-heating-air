import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, ShieldCheck } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  ReviewCard,
  SectionHead,
  BookNowButton,
} from "@/components/shared";
import { HCP_REVIEWS_URL, REVIEWS } from "@/data/site";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    ...seo({
      title: "Reviews | Elk Heating & Air Dayton OH",
      description:
        "See what Dayton, OH homeowners say about Elk Heating & Air — genuine feedback from HouseCall Pro customers on furnace repair, AC service, and more.",
      path: "/reviews",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Reviews", path: "/reviews" },
          ]),
        ),
      },
    ],
  }),
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="See What Homeowners Are Saying."
        intro="Real feedback from real HouseCall Pro customers across Greater Dayton. We don't write reviews, and we don't invent them — here's what homeowners actually said after our visits."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Reviews", path: "/reviews" },
        ]}
      >
        <BookNowButton label="Book Now" className="btn btn-flame" />
      </PageHero>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <ReviewCard {...r} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="card-hairline mt-12 flex flex-col items-center gap-6 p-8 text-center md:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/8">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </span>
              <div>
                <h2 className="h-display text-2xl sm:text-3xl">Genuine Reviews, Verified Platform.</h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Our reviews come through HouseCall Pro, the booking platform we use to schedule
                  and confirm service — so the feedback you read comes from real completed visits.
                </p>
              </div>
              <a
                href={HCP_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
              >
                <ExternalLink className="h-4 w-4" />
                See Reviews on HouseCall Pro
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-warm border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Our Promise"
              title="Every Review Is Earned, Not Bought."
              intro="Honest work. Done right. That's the standard our customers hold us to — and the one we hold ourselves to on every visit."
            />
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Ready to Become the Next Review?"
        copy="Book your heating, cooling, or maintenance service online in minutes — or call (937) 344-5445."
      />
    </>
  );
}
