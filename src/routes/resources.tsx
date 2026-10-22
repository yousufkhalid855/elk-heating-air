import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
} from "@/components/shared";
import { EDUCATION_ARTICLES } from "@/data/site";
import { technicianThermostat, furnaceTechnician, comfortableLivingRoom } from "@/data/images";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    ...seo({
      title: "HVAC Education & Resources | Elk Heating & Air Dayton OH",
      description:
        "Plain-language HVAC guidance for Dayton homeowners: furnace repair signs, AC troubleshooting, maintenance schedules, heat pumps vs furnaces, and indoor comfort tips.",
      path: "/resources",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Resources", path: "/resources" },
          ]),
        ),
      },
    ],
  }),
});

const FEATURED = [
  {
    title: "How to Know When Your Furnace Needs Repair",
    summary:
      "Short cycling, unusual noises, weak airflow, or a burning smell at startup are all signals your furnace is asking for attention. Some symptoms mean a simple fix; others warrant a technician visit before the next cold snap.",
    img: furnaceTechnician,
    alt: "Technician diagnosing a residential furnace",
    path: "/services/heating-furnace",
  },
  {
    title: "What to Check When Your AC Isn't Cooling",
    summary:
      "Before you call, a few safe checks can rule out the simple causes: thermostat settings, a clogged filter, a tripped breaker. When those check out and the air is still warm, it's time for a real diagnosis.",
    img: comfortableLivingRoom,
    alt: "Comfortable, cool living room during summer",
    path: "/services/air-conditioning",
  },
  {
    title: "How Often Should HVAC Systems Be Maintained?",
    summary:
      "A practical rhythm for most homes: heating equipment checked in the fall, cooling equipment checked in the spring — right before each system takes on its hardest months of the year.",
    img: technicianThermostat,
    alt: "Seasonal HVAC maintenance visit",
    path: "/maintenance",
  },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="HVAC Education"
        title="Practical Guidance for Your Home."
        intro="Plain-language answers about your heating and cooling system — what symptoms mean, what maintenance actually does, and what to know before big decisions."
        image={technicianThermostat}
        imageAlt="HVAC education resources for Dayton homeowners"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ]}
      />

      {/* Featured guides */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Featured Guides"
              title="Start With These Three."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {FEATURED.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <Link
                  to={a.path}
                  className="card-hairline group flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.alt}
                      loading="lazy"
                      width={800}
                      height={500}
                      className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold leading-snug">{a.title}</h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {a.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wider text-primary">
                      Related service
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* All topics */}
      <section className="section section-warm border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="More Topics"
              title="Browse the Full Library."
              intro="Short, honest reads on the questions we hear on service calls across Greater Dayton."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {EDUCATION_ARTICLES.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 2) * 60}>
                <article className="card-hairline flex h-full flex-col p-7">
                  <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-flame">
                    HVAC Guide
                  </span>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug">{a.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {a.summary}
                  </p>
                  <Link to="/faq" className="link-arrow mt-5">
                    Have a question like this?
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <BookNowButton label="Book Now" className="btn btn-flame" />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
