import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import { CtaBand, JsonLd, PageHero, Reveal } from "@/components/shared";
import { cn } from "@/lib/utils";
import {
  furnaceTechnician,
  acInstallation,
  heatPumpOutdoor,
  heatPumpPremium,
  iaqHumidifier,
  technicianThermostat,
  comfortableLivingRoom,
  heroHomeDusk,
} from "@/data/images";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    ...seo({
      title: "HVAC Project Gallery | Elk Heating & Air Dayton OH",
      description:
        "A look at the heating, cooling, heat pump, and indoor air quality work Elk Heating & Air performs for homeowners across Greater Dayton.",
      path: "/gallery",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Gallery", path: "/gallery" },
          ]),
        ),
      },
    ],
  }),
});

const CATEGORIES = [
  "All",
  "Heating",
  "Air Conditioning",
  "Heat Pumps",
  "HVAC Installation",
  "HVAC Repair",
  "Indoor Air Quality",
  "Technicians at Work",
  "Equipment",
] as const;

type Category = (typeof CATEGORIES)[number];

const ITEMS: { src: string; alt: string; caption: string; cats: Category[] }[] = [
  {
    src: furnaceTechnician,
    alt: "HVAC technician repairing a residential furnace in a Dayton, Ohio basement",
    caption: "Furnace repair visit",
    cats: ["Heating", "HVAC Repair", "Technicians at Work"],
  },
  {
    src: acInstallation,
    alt: "Air conditioner installation and lineset work at a Dayton area home",
    caption: "Air conditioning installation",
    cats: ["Air Conditioning", "HVAC Installation", "Equipment"],
  },
  {
    src: heatPumpOutdoor,
    alt: "Heat pump outdoor units being serviced beside a brick home",
    caption: "Heat pump service",
    cats: ["Heat Pumps", "HVAC Repair", "Equipment"],
  },
  {
    src: iaqHumidifier,
    alt: "Whole-home humidifier installed on residential HVAC equipment",
    caption: "Indoor air quality install",
    cats: ["Indoor Air Quality", "HVAC Installation", "Equipment"],
  },
  {
    src: heatPumpPremium,
    alt: "Professionally installed residential heat pump condensers on a concrete pad",
    caption: "Heat pump installation detail",
    cats: ["Heat Pumps", "HVAC Installation", "Equipment"],
  },
  {
    src: technicianThermostat,
    alt: "Technician setting a smart thermostat in a Dayton home",
    caption: "Thermostat setup & system check",
    cats: ["Technicians at Work", "Equipment"],
  },
  {
    src: comfortableLivingRoom,
    alt: "Comfortable living room kept warm and cozy through an Ohio winter",
    caption: "The result: steady, even comfort",
    cats: ["Heating", "Indoor Air Quality"],
  },
  {
    src: heroHomeDusk,
    alt: "Dayton area home glowing warm at dusk in autumn",
    caption: "Homes we keep comfortable across the Miami Valley",
    cats: ["Heating", "Air Conditioning"],
  },
];

function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const visible = ITEMS.filter((i) => active === "All" || i.cats.includes(active));

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        image={acInstallation}
        title="Real Work, Real Equipment, Real Comfort."
        intro="A look at the systems we service and install across Greater Dayton — furnaces, air conditioners, heat pumps, and indoor air quality equipment in the homes we keep comfortable."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Gallery", path: "/gallery" },
        ]}
      />

      <section className="section">
        <div className="container-x">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filter gallery by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active === cat
                    ? "border-transparent bg-primary text-primary-foreground shadow-md"
                    : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-primary",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, i) => (
              <Reveal key={item.src + item.caption} delay={(i % 3) * 70}>
                <figure className="frame-img group relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/85 to-transparent p-4 pt-10">
                    <p className="font-display text-sm font-bold text-white">{item.caption}</p>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-wider text-white/70">
                      {item.cats[0]}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Representative photos of residential HVAC equipment and service work.
          </p>
        </div>
      </section>

      <CtaBand
        headline="Want Your Home Looking Like This?"
        copy="Book heating, cooling, or indoor air quality service online — or call (937) 344-5445 to talk with our team."
      />
    </>
  );
}
