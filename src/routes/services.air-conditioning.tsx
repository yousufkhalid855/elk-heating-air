import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import { ServiceDetail } from "@/components/service-detail";
import { CORE_SERVICES, SITE_URL } from "@/data/site";
import { acInstallation } from "@/data/images";

const service = CORE_SERVICES[1]!;

export const Route = createFileRoute("/services/air-conditioning")({
  component: () => (
    <ServiceDetail
      service={service}
      image={acInstallation}
      imageAlt="Air conditioner installation at a home in the Dayton, Ohio area"
      sections={[
        {
          title: "AC Repair",
          copy: "Warm air from the vents, ice on the refrigerant line, or a unit that runs all day without catching up — we diagnose the real cause and give you honest repair options before any work starts.",
        },
        {
          title: "AC Installation & Replacement",
          copy: "When it's time for a new system, we size it for your home — not just the square footage, but how your house actually holds and moves air. A careful installation is what turns good equipment into reliable summer comfort.",
        },
        {
          title: "Seasonal Tune-Ups & Preventative Maintenance",
          copy: "A spring tune-up gets your air conditioner ready before the first hot, humid Miami Valley week. Cleaning coils, checking refrigerant, and verifying airflow now helps prevent the mid-July breakdown later.",
        },
        {
          title: "Cooling Diagnostics",
          copy: "Some cooling problems are equipment issues; others are airflow, insulation, or thermostat issues. We look at the whole picture so you're paying to fix the actual problem.",
        },
      ]}
      concerns={[
        "AC runs constantly but the house never cools down",
        "Air from the vents feels warm or weak",
        "Ice building up on the outdoor unit or refrigerant line",
        "Indoor humidity that makes 74° feel like 84°",
        "Loud grinding, buzzing, or clicking when the unit starts",
        "Cooling bills that climb higher every summer",
      ]}
    />
  ),
  head: () => ({
    ...seo({
      title: "AC Repair & Air Conditioning Service Dayton OH | Elk Heating & Air",
      description:
        "AC repair, installation, replacement, seasonal tune-ups, preventative maintenance, and cooling diagnostics in Dayton, OH. Stay comfortable all summer with honest, dependable service.",
      path: "/services/air-conditioning",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Air Conditioning", path: "/services/air-conditioning" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Air Conditioning Services",
          serviceType: "AC repair, installation, and maintenance",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});
