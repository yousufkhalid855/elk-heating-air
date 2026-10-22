import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import { ServiceDetail } from "@/components/service-detail";
import { CORE_SERVICES, SITE_URL } from "@/data/site";
import { heatPumpPremium } from "@/data/images";

const service = CORE_SERVICES[2]!;

export const Route = createFileRoute("/services/heat-pumps")({
  component: () => (
    <ServiceDetail
      service={service}
      image={heatPumpPremium}
      imageAlt="Residential heat pump outdoor unit professionally installed beside a brick home"
      sections={[
        {
          title: "Heat Pump Repair",
          copy: "Heat pumps work hardest during shoulder seasons and defrost cycles, and they show wear differently than a furnace or AC. We diagnose heating and cooling performance issues on both sides of the system and repair what actually needs repairing.",
        },
        {
          title: "Heat Pump Installation & Replacement",
          copy: "A heat pump heats and cools your home from a single system, so getting the right unit — and installing it carefully — matters twice over. We size and install systems built for real Ohio conditions.",
        },
        {
          title: "Heat Pump Maintenance",
          copy: "Because a heat pump runs year-round, it benefits from consistent maintenance. Seasonal checkups keep both the heating and cooling modes performing the way they should.",
        },
        {
          title: "Dual-Fuel & High-Efficiency Systems",
          copy: "Dual-fuel setups pair a heat pump with a furnace, switching to gas heat when it's the smarter choice on the coldest days. We install and service both standard and dual-fuel configurations and explain the trade-offs honestly.",
        },
      ]}
      concerns={[
        "Heat pump struggling to keep up on cold mornings",
        "Outdoor unit covered in frost for long stretches",
        "System constantly switching between heating and cooling",
        "Electric bills that spike during heating season",
        "Uneven temperatures between floors or rooms",
        "Not sure whether a heat pump or furnace fits your home",
      ]}
    />
  ),
  head: () => ({
    ...seo({
      title: "Heat Pump Repair & Installation Dayton OH | Elk Heating & Air",
      description:
        "Heat pump repair, installation, replacement, maintenance, dual-fuel systems, and high-efficiency solutions in Dayton, OH. Efficient heating and cooling, all year long.",
      path: "/services/heat-pumps",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Heat Pumps", path: "/services/heat-pumps" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Heat Pump Services",
          serviceType: "Heat pump repair, installation, and maintenance",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});
