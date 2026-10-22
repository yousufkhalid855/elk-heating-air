import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import { ServiceDetail } from "@/components/service-detail";
import { CORE_SERVICES, SITE_URL } from "@/data/site";
import { furnaceTechnician } from "@/data/images";

const service = CORE_SERVICES[0]!;

export const Route = createFileRoute("/services/heating-furnace")({
  component: () => (
    <ServiceDetail
      service={service}
      image={furnaceTechnician}
      imageAlt="HVAC technician repairing a residential furnace in Dayton, Ohio"
      sections={[
        {
          title: "Furnace Repair",
          copy: "A furnace that won't start, keeps shutting off, or just isn't keeping up needs a real diagnosis — not a guess. We inspect the system, explain what we found in plain language, and give you practical repair options for your home and budget before any work begins.",
        },
        {
          title: "Furnace Installation & Replacement",
          copy: "When a repair no longer makes sense, we handle full furnace replacement with equipment properly sized for your home. Careful installation matters just as much as the equipment itself — it affects comfort, efficiency, and how long the system lasts.",
        },
        {
          title: "Furnace Maintenance & Safety Inspections",
          copy: "A fall maintenance visit and heating safety inspection helps your furnace face an Ohio winter ready. We check the components that matter, clean what needs cleaning, and flag anything that should be watched — so small problems don't become mid-January emergencies.",
        },
        {
          title: "Emergency Heating Repairs",
          copy: "When the heat goes out on the col night of the year, you need a team that responds. Call (937) 344-5445 or book online and we'll get your heating back as quickly as we can.",
        },
      ]}
      concerns={[
        "Furnace runs constantly but the house never warms up",
        "Strange noises at startup — banging, squealing, or rattling",
        "Short cycling: the furnace turns on and off in quick bursts",
        "A burning smell the first time it kicks on for the season",
        "Energy bills creeping up without a change in usage",
        "Some rooms comfortable while others stay stubbornly cold",
      ]}
    />
  ),
  head: () => ({
    ...seo({
      title: "Furnace Repair & Heating Service Dayton OH | Elk Heating & Air",
      description:
        "Furnace repair, installation, replacement, maintenance, safety inspections, and emergency heating repairs in Dayton, OH and the Miami Valley. Keep your home ready for cold weather.",
      path: "/services/heating-furnace",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Heating & Furnace", path: "/services/heating-furnace" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Heating & Furnace Services",
          serviceType: "Furnace repair, installation, and maintenance",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});
