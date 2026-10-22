import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Navigation } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
} from "@/components/shared";
import { COUNTIES, CITIES, SITE_URL } from "@/data/site";
import { heatPumpOutdoor } from "@/data/images";

export const Route = createFileRoute("/service-areas")({
  component: ServiceAreasPage,
  head: () => ({
    ...seo({
      title: "HVAC Service Areas Dayton OH & Miami Valley | Elk Heating & Air",
      description:
        "Elk Heating & Air serves Dayton, Huber Heights, Beavercreek, Centerville, Kettering, Springfield, Tipp City, Troy, Vandalia, Englewood, Fairborn, Oakwood and surrounding counties.",
      path: "/service-areas",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Service Areas", path: "/service-areas" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HVACBusiness",
          name: "Elk Heating & Air",
          url: SITE_URL,
          telephone: "+1-937-344-5445",
          areaServed: [...CITIES.map((c) => `${c}, OH`), ...COUNTIES],
        }),
      },
    ],
  }),
});

const AREA_LINKS = [
  { label: "Heating & Furnace", path: "/services/heating-furnace" },
  { label: "Air Conditioning", path: "/services/air-conditioning" },
  { label: "Heat Pumps", path: "/services/heat-pumps" },
  { label: "HVAC Maintenance", path: "/maintenance" },
];

function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        image={heatPumpOutdoor}
        title="Serving Dayton & Surrounding Communities."
        intro="Elk Heating & Air proudly serves Dayton and the surrounding Miami Valley — twelve communities by name, eleven counties, and neighborhoods within roughly 50 miles."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]}
      >
        <BookNowButton label="Book Now" className="btn btn-flame" />
      </PageHero>

      {/* Cities */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Communities We Serve"
              title="Local Service, Community by Community."
              intro="If you're in or near any of these communities, we can help — and if you're unsure whether you're within our range, just call (937) 344-5445."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CITIES.map((city, i) => (
              <Reveal key={city} delay={(i % 3) * 60}>
                <div className="card-hairline group flex items-center gap-4 p-5 transition-shadow hover:shadow-md">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary/8">
                    <MapPin className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{city}, OH</h3>
                    <p className="text-xs text-muted-foreground">Residential HVAC service</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Counties */}
      <section className="section section-warm border-y border-border">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHead
              eyebrow="County Coverage"
              title="Eleven Counties Across the Miami Valley."
            />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {COUNTIES.map((c) => (
                <li key={c} className="chip">
                  <Navigation className="h-3.5 w-3.5 text-frost" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Plus surrounding communities within roughly 50 miles of Dayton. Not sure if you're in
              range? Call us — if we can help, we'll tell you plainly.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-hairline p-8">
              <h3 className="font-display text-lg font-bold">Services Available in Every Area</h3>
              <ul className="mt-5 space-y-3">
                {AREA_LINKS.map((l) => (
                  <li key={l.path}>
                    <Link
                      to={l.path}
                      className="flex items-center justify-between rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
                    >
                      {l.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline="Your Neighborhood Is on the List."
        copy="Book heating, cooling, or maintenance service online in minutes — or call (937) 344-5445."
      />
    </>
  );
}
