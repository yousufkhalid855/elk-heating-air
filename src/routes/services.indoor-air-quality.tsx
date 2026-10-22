import { createFileRoute } from "@tanstack/react-router";

import { seo, breadcrumb } from "@/lib/seo";
import { ServiceDetail } from "@/components/service-detail";
import { CORE_SERVICES, SITE_URL } from "@/data/site";
import { iaqHumidifier } from "@/data/images";

const service = CORE_SERVICES[3]!;

export const Route = createFileRoute("/services/indoor-air-quality")({
  component: () => (
    <ServiceDetail
      service={service}
      image={iaqHumidifier}
      imageAlt="Whole-home humidifier installed on residential HVAC equipment"
      sections={[
        {
          title: "Whole-Home Air Filtration & Purification",
          copy: "Your HVAC system moves a lot of air through your home every day. Whole-home filtration and purification systems treat that air as it passes through, helping reduce dust and airborne particles throughout the house — not just in one room.",
        },
        {
          title: "Humidifiers & Dehumidifiers",
          copy: "Ohio winters dry the air out; Miami Valley summers load it with humidity. Whole-home humidity control works with your HVAC system to keep indoor moisture in a comfortable range in every season.",
        },
        {
          title: "UV Air Treatment",
          copy: "UV air treatment integrates into your ductwork or equipment to treat the air your system circulates. We install and service UV systems and explain plainly what they do — and don't — do.",
        },
        {
          title: "A More Comfortable-Feeling Home",
          copy: "Temperature is only part of comfort. Filtration, humidity, and airflow all shape how your home feels day to day. We help you choose practical solutions that make a noticeable difference.",
        },
      ]}
      concerns={[
        "Dry, static-prone air every winter",
        "Heavy, muggy indoor air every summer",
        "Dust that reappears soon after cleaning",
        "Rooms that always feel stuffy",
        "Uneven comfort between upstairs and downstairs",
        "Not sure which air quality solution actually fits your home",
      ]}
    />
  ),
  head: () => ({
    ...seo({
      title: "Indoor Air Quality Solutions Dayton OH | Elk Heating & Air",
      description:
        "Whole-home air filtration, air purification, humidifiers, dehumidifiers, and UV air treatment in Dayton, OH. Create a more comfortable indoor environment.",
      path: "/services/indoor-air-quality",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Indoor Air Quality", path: "/services/indoor-air-quality" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Indoor Air Quality Solutions",
          serviceType: "Whole-home air filtration, purification, and humidity control",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});
