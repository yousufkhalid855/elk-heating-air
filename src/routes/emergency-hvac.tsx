import { createFileRoute } from "@tanstack/react-router";
import { Flame, Snowflake, SearchCheck, Wrench, Phone } from "lucide-react";

import { seo, breadcrumb } from "@/lib/seo";
import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
  CallButton,
} from "@/components/shared";
import { HOURS, PHONE_DISPLAY, PHONE_TEL, SITE_URL } from "@/data/site";
import { furnaceTechnician, acInstallation } from "@/data/images";

export const Route = createFileRoute("/emergency-hvac")({
  component: EmergencyPage,
  head: () => ({
    ...seo({
      title: "Emergency HVAC Service Dayton OH | Elk Heating & Air",
      description:
        "Emergency heating repairs, urgent cooling issues, diagnostics, and troubleshooting for Dayton, OH homeowners. When your HVAC stops working, we're ready to help.",
      path: "/emergency-hvac",
    }),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumb([
            { name: "Home", path: "/" },
            { name: "Emergency HVAC", path: "/emergency-hvac" },
          ]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Emergency HVAC Service",
          serviceType: "Emergency heating repairs and urgent HVAC diagnostics",
          provider: { "@type": "HVACBusiness", name: "Elk Heating & Air", telephone: "+1-937-344-5445", url: SITE_URL },
          areaServed: "Greater Dayton, Ohio",
        }),
      },
    ],
  }),
});

const HELP_ITEMS = [
  {
    icon: Flame,
    title: "Emergency Heating Repairs",
    copy: "A failed furnace in an Ohio winter is a real problem. We prioritize getting your heat back with an honest diagnosis and a repair that addresses the actual failure.",
    img: furnaceTechnician,
    alt: "Emergency furnace repair in a Dayton home",
  },
  {
    icon: Snowflake,
    title: "Urgent Cooling Issues",
    copy: "When your air conditioner quits during a Miami Valley heat wave, we respond with the same urgency — diagnosing the failure and giving you clear options.",
    img: acInstallation,
    alt: "Air conditioning service during a Dayton summer",
  },
  {
    icon: SearchCheck,
    title: "System Diagnostics",
    copy: "We don't guess. We test, measure, and trace the problem to its source, so the fix addresses the cause — not just the symptom you noticed first.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting & Repair Recommendations",
    copy: "Once we know what's wrong, you get a straightforward explanation and practical options — repair now, monitor, or plan a replacement. Your call, with honest guidance.",
  },
];

function EmergencyPage() {
  return (
    <>
      <PageHero
        eyebrow="Emergency HVAC"
        image={furnaceTechnician}
        title="When Your HVAC Stops Working, We're Ready to Help."
        intro="A dead furnace or a failed air conditioner can't wait for a convenient moment. Elk Heating & Air provides emergency heating repairs and urgent diagnostics for homeowners across Greater Dayton."
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Emergency HVAC", path: "/emergency-hvac" },
        ]}
      >
        <CallButton className="btn btn-flame" label={`Call ${PHONE_DISPLAY}`} />
        <BookNowButton label="Book Service" className="btn btn-outline" />
      </PageHero>

      {/* Fast response band */}
      <section className="section-navy relative overflow-hidden">
        <div className="container-x relative py-14">
          <Reveal>
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="eyebrow justify-center" style={{ color: "oklch(0.72 0.16 55)" }}>
                Fastest Response
              </p>
              <h2 className="h-display max-w-2xl text-3xl text-white sm:text-4xl">
                When your system is down, calling is the fastest way to reach us.
              </h2>
              <a href={PHONE_TEL} className="btn btn-flame px-8 py-4 text-base">
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
              <div className="text-sm text-white/60">
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white/80">
                  Business Hours
                </p>
                {HOURS.map((h) => (
                  <p key={h.days} className="mt-1">
                    {h.days}: {h.time}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Help sections */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="How We Help"
              title="Urgent Problems, Straightforward Fixes."
              intro="Emergency service at Elk still means honest work — a real diagnosis, clear options, and a repair done right."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {HELP_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="card-hairline flex h-full flex-col p-7">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-flame/10">
                      <item.icon className="h-6 w-6 text-flame" />
                    </span>
                    <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        headline="Don't Wait Out a Broken System."
        copy="Call (937) 344-5445 for the fastest response, or book service online and we'll get your home comfortable again."
      />
    </>
  );
}
