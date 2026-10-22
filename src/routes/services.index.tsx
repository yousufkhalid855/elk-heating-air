import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import { CtaBand, PageHero, Reveal, SectionHead } from "@/components/shared";
import { BOOKING_URL, SERVICES } from "@/data/site";
import {
  furnaceTechnician,
  acInstallation,
  heatPumpPremium,
  iaqHumidifier,
  technicianThermostat,
  heatPumpOutdoor,
} from "@/data/images";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    ...seo({
      title: "HVAC Services in Dayton OH | Elk Heating & Air",
      description:
        "Heating & furnace service, air conditioning, heat pumps, indoor air quality, HVAC maintenance, and emergency HVAC repairs for homeowners across Greater Dayton.",
      path: "/services",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ),
      },
    ],
  }),
});

const SERVICE_IMAGES: Record<string, { src: string; alt: string; flag: string }> = {
  "heating-furnace": {
    src: furnaceTechnician,
    alt: "Furnace repair and heating service in a Dayton, Ohio home",
    flag: "Heat",
  },
  "air-conditioning": {
    src: acInstallation,
    alt: "Air conditioner installation and AC repair in Dayton, Ohio",
    flag: "Cool",
  },
  "heat-pumps": {
    src: heatPumpPremium,
    alt: "Heat pump installation and service for year-round comfort",
    flag: "All Season",
  },
  "indoor-air-quality": {
    src: iaqHumidifier,
    alt: "Whole-home humidifier and indoor air quality equipment",
    flag: "Air Quality",
  },
  "hvac-maintenance": {
    src: technicianThermostat,
    alt: "Technician performing seasonal HVAC maintenance at a thermostat",
    flag: "Maintenance",
  },
  "emergency-hvac": {
    src: heatPumpOutdoor,
    alt: "Technician servicing outdoor HVAC equipment on an urgent call",
    flag: "Urgent",
  },
};

const STEPS = [
  {
    title: "Book Online or Call",
    copy: "Pick a time that works for you through our online scheduler, or call (937) 344-5445 and talk to a real local team.",
  },
  {
    title: "We Diagnose the System",
    copy: "A thorough inspection and a plain-language explanation of what's actually going on — no guesswork, no jargon.",
  },
  {
    title: "Honest Options, Your Choice",
    copy: "Practical repair, replacement, or maintenance options for your home and budget. You decide, we do the work right.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Residential HVAC Services, Done Right."
        intro="Six focused service areas for Dayton homeowners — each with its own dedicated team approach, honest recommendations, and practical options for your home and budget."
        image={furnaceTechnician}
        imageAlt="HVAC technician servicing residential equipment"
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ]}
      />

      {/* ---------- Service cards ---------- */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Service Areas of Focus"
              title="Every Part of Your Home's Comfort."
              intro="Choose a service below to see what's included and book online in minutes."
            />
          </Reveal>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {SERVICES.map((s, i) => {
              const img = SERVICE_IMAGES[s.slug] ?? {
                src: technicianThermostat,
                alt: s.title,
                flag: "Service",
              };
              return (
                <Reveal key={s.slug} delay={(i % 2) * 80}>
                  <article className="card-premium group flex h-full flex-col overflow-hidden">
                    <div className="frame-premium relative aspect-[16/10] rounded-none border-0 shadow-none">
                      <span className="frame-flag">{img.flag}</span>
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        width={800}
                        height={500}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center gap-4">
                        <span className="num-badge">0{i + 1}</span>
                        <div>
                          <h2 className="font-display text-xl font-bold leading-tight">{s.title}</h2>
                          <p className="mt-0.5 font-display text-xs font-bold uppercase tracking-[0.14em] text-flame">
                            {s.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.intro}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {s.items.slice(0, 4).map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[0.72rem] font-medium text-foreground/75"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-border pt-5">
                        <a
                          href={BOOKING_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-flame"
                        >
                          {s.ctaLabel}
                        </a>
                        <Link to={s.path} className="link-arrow">
                          Explore {s.navLabel}
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="mesh-warm blueprint section border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="Simple Process"
              title="Booking With Elk, Step by Step."
              intro="No mystery, no runaround — just a straightforward path from 'something's wrong' to 'it's fixed.'"
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 90}>
                <div className="card-premium flex h-full flex-col p-8">
                  <span className="num-badge">{`0${i + 1}`}</span>
                  <h3 className="mt-5 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Ready when you are —{" "}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary underline decoration-flame/50 underline-offset-4 hover:text-flame"
              >
                book your service online
              </a>{" "}
              and pick your time.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
