import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, ClipboardList, Flame, Snowflake, Gauge } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
  CallButton,
  TickList,
} from "@/components/shared";
import { SITE_URL } from "@/data/site";
import { technicianThermostat, furnaceTechnician } from "@/data/images";

export const Route = createFileRoute("/maintenance")({
  component: MaintenancePage,
  head: () => ({
    ...seo({
      title: "HVAC Maintenance Dayton OH | Elk Heating & Air",
      description:
        "Seasonal HVAC maintenance, preventative inspections, heating and cooling maintenance, and system performance checks for Dayton, OH homeowners. Protect your comfort.",
      path: "/maintenance",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Maintenance", path: "/maintenance" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "HVAC Maintenance",
          serviceType: "Seasonal HVAC maintenance and preventative inspections",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});

const VISIT_ITEMS = [
  {
    icon: Flame,
    title: "Heating Maintenance",
    copy: "A fall visit that readies your furnace for the season — burners, safety controls, airflow, and the details that matter in an Ohio winter.",
  },
  {
    icon: Snowflake,
    title: "Cooling Maintenance",
    copy: "A spring visit for your air conditioner or heat pump — coils, refrigerant, electrical connections, and condensate drainage before the humidity arrives.",
  },
  {
    icon: Gauge,
    title: "System Performance Checks",
    copy: "We verify your system is performing the way it should, and flag anything worth watching so you can plan ahead instead of reacting.",
  },
  {
    icon: ClipboardList,
    title: "Preventative Inspections",
    copy: "Small issues found early are simple fixes. Preventative inspections catch wear before it turns into a breakdown on the hottest or coldest day.",
  },
];

function MaintenancePage() {
  return (
    <>
      <PageHero
        eyebrow="HVAC Maintenance"
        title="Protect Your Comfort With Regular HVAC Maintenance."
        intro="Your heating and cooling system works hardest when you need it most. Regular maintenance keeps it performing the way it should — season after season, without the guesswork."
        image={technicianThermostat}
        imageAlt="HVAC technician performing seasonal maintenance on home equipment"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Maintenance", path: "/maintenance" },
        ]}
      >
        <BookNowButton label="Book Maintenance" className="btn btn-flame" />
        <CallButton className="btn btn-outline" />
      </PageHero>

      {/* Why it matters */}
      <section className="section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="Why It Matters"
              title="Prevent Small Problems From Becoming Big Repairs."
            />
            <div className="prose-copy mt-5">
              <p>
                Most HVAC breakdowns don't come out of nowhere — they build up quietly through a
                season of wear. Regular maintenance gives your equipment a chance to be inspected,
                cleaned, and corrected before Ohio's weather puts it to the test.
              </p>
              <p>
                We won't promise unrealistic savings or lifespan numbers. What we can promise is a
                careful, honest inspection and straightforward recommendations about what your
                system actually needs.
              </p>
            </div>
            <TickList
              className="mt-7"
              items={[
                "Seasonal maintenance for heating and cooling",
                "Preventative inspections that catch wear early",
                "Performance checks with plain-language explanations",
                "Honest recommendations — no pressure, no surprises",
              ]}
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-img">
              <img
                src={furnaceTechnician}
                alt="Furnace maintenance visit in a Dayton, Ohio home"
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* What a visit includes */}
      <section className="section section-warm border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Maintenance Visits"
              title="What a Maintenance Visit Covers."
              intro="Each visit is built around the season and your equipment — here's the structure behind them."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {VISIT_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card-hairline flex h-full gap-5 p-7">
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/8">
                    <item.icon className="h-6 w-6 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* When to schedule */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="card-hairline relative overflow-hidden p-8 md:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(30rem 18rem at 90% 10%, oklch(0.58 0.21 28 / 0.06), transparent 60%), radial-gradient(26rem 16rem at 5% 95%, oklch(0.62 0.15 240 / 0.07), transparent 60%)",
                }}
              />
              <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr_auto]">
                <CalendarCheck className="h-12 w-12 text-flame" aria-hidden="true" />
                <div>
                  <h2 className="h-display text-2xl sm:text-3xl">A Simple Rhythm: Fall &amp; Spring.</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    For most homes, the practical rhythm is heating equipment checked in the fall
                    and cooling equipment checked in the spring — right before each system takes on
                    its hardest months.
                  </p>
                </div>
                <BookNowButton label="Book Maintenance" className="btn btn-flame" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Keep Your System Ready Before the Season Hits."
        copy="Schedule your fall or spring maintenance online in minutes — or call (937) 344-5445 and we'll get you on the calendar."
      />
    </>
  );
}
