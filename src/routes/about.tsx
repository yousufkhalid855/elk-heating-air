import { createFileRoute, Link } from "@tanstack/react-router";

import { seo } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  Reveal,
  SectionHead,
  BookNowButton,
  CallButton,
  TickList,
} from "@/components/shared";
import { SITE_URL, TAGLINE } from "@/data/site";
import { technicianThermostat, comfortableLivingRoom } from "@/data/images";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    ...seo({
      title: "About Elk Heating & Air | Dayton, OH HVAC Company",
      description:
        "Elk Heating & Air was built on one belief: homeowners deserve honest recommendations, quality workmanship, and dependable service. HVAC experience since 2008 — serving Dayton since 2015.",
      path: "/about",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Elk Heating & Air",
          url: SITE_URL,
          slogan: TAGLINE,
          email: "kylearic@elkheatingandair.com",
          telephone: "+1-937-344-5445",
        }),
      },
    ],
  }),
});

const TIMELINE = [
  {
    year: "2008",
    title: "HVAC Experience Begins",
    copy: "Our story in heating and cooling starts here — years of hands-on experience repairing, installing, and maintaining residential systems.",
  },
  {
    year: "2015",
    title: "The Dayton Market",
    copy: "Elk Heating & Air begins serving homeowners across Dayton and the surrounding Miami Valley communities.",
  },
  {
    year: "Today",
    title: "Greater Dayton Residential HVAC",
    copy: "A trusted local team for furnace repair, AC service, heat pumps, maintenance, and indoor air quality — with honest work at the core of every visit.",
  },
];

const VALUES = [
  {
    title: "Honest Recommendations",
    copy: "We explain what your system needs in plain language and help you choose the right fix for your home and budget.",
  },
  {
    title: "Quality Workmanship",
    copy: "Dependable repairs, careful installations, and attention to detail — the kind of work that helps systems last.",
  },
  {
    title: "A Company That Stands Behind Its Promises",
    copy: "When we say we'll take care of it, we do. Dependable service and practical solutions are how we earn repeat business.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-warm relative overflow-hidden border-b border-border">
        <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow">About Us</p>
            <h1 className="h-display mt-4 text-4xl sm:text-5xl lg:text-[3.3rem]">
              Honest Work. Done Right.
            </h1>
            <p className="lead mt-5 max-w-xl">
              Elk Heating &amp; Air was built on one simple belief: homeowners deserve honest
              recommendations, quality workmanship, dependable service, and a company that stands
              behind its promises.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <BookNowButton label="Book Now" className="btn btn-flame" />
              <CallButton className="btn btn-outline" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="frame-img">
              <img
                src={technicianThermostat}
                alt="Elk Heating & Air technician checking a home thermostat"
                loading="lazy"
                width={1200}
                height={1000}
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Our Story"
              title="Built Around What Homeowners Deserve."
            />
            <div className="prose-copy mt-5">
              <p>
                With HVAC experience dating back to 2008 and service in the Dayton market since
                2015, our team brings years of hands-on knowledge to every repair, installation,
                and maintenance visit.
              </p>
              <p>
                We keep our focus where it belongs: residential heating and cooling for Greater
                Dayton. That means transparent pricing, precision repairs, and total indoor
                comfort — backed by dedicated local service.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-img">
              <img
                src={comfortableLivingRoom}
                alt="Comfortable living space kept warm and cozy by reliable HVAC"
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section-warm border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Milestones" title="From 2008 to Today." />
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 90}>
                <li className="relative">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-black italic text-flame">
                      {t.year}
                    </span>
                    <span className="h-px flex-1 bg-border" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="What We Stand For"
              title="The Standard Behind Every Visit."
            />
          </Reveal>
          <div className="mt-12 space-y-10">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="grid gap-3 border-b border-border pb-8 md:grid-cols-[0.4fr_1fr] md:gap-10">
                  <h3 className="font-display text-xl font-bold">{v.title}</h3>
                  <p className="leading-relaxed text-muted-foreground">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <TickList
                className="sm:grid sm:grid-cols-2 sm:gap-x-10"
                items={[
                  "Transparent pricing",
                  "Precision repairs",
                  "Total indoor comfort",
                  "Dedicated local service",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Let's Take Care of Your Home Comfort."
        copy="Book heating, cooling, or maintenance service online in minutes — or call and talk to a real local team."
      />
    </>
  );
}
