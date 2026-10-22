import { Link } from "@tanstack/react-router";

import {
  CtaBand,
  JsonLd,
  PageHero,
  Reveal,
  SectionHead,
  BookNowButton,
  CallButton,
  TrustPanel,
} from "@/components/shared";
import type { ServiceInfo } from "@/data/site";
import { BOOKING_URL, SITE_URL, TAGLINE } from "@/data/site";

export function ServiceDetail({
  service,
  image,
  imageAlt,
  sections,
  concerns,
}: {
  service: ServiceInfo;
  image: string;
  imageAlt: string;
  sections: { title: string; copy: string }[];
  concerns: string[];
}) {
  return (
    <>
      <PageHero
        eyebrow="HVAC Services"
        title={service.headline}
        intro={service.intro}
        image={image}
        imageAlt={imageAlt}
        breadcrumb={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path: service.path },
        ]}
      >
        <BookNowButton label={service.ctaLabel} className="btn btn-flame" />
        <CallButton className="btn btn-outline" />
      </PageHero>

      {/* What's included */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHead
              eyebrow="What We Handle"
              title={`${service.navLabel} Services in Greater Dayton.`}
              intro={service.tagline}
            />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="card-premium flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-foreground/85"
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 flex-none rotate-45 rounded-[2px] bg-gradient-to-br from-flame to-ember"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-flame">
                {service.ctaLabel}
              </a>
              <Link to="/services" className="link-arrow">
                All services
              </Link>
            </div>
            <TrustPanel className="mt-10" />
          </Reveal>
          <Reveal delay={100}>
            <div className="frame-premium relative h-full min-h-[22rem]">
              <span className="frame-flag">{TAGLINE}</span>
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deep-dive sections */}
      <section className="mesh-warm blueprint section border-y border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead
              eyebrow="In Detail"
              title="What Homeowners Should Know."
              intro="A closer look at the work itself — what happens on the visit and why it matters for your home."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="card-premium flex h-full flex-col p-8">
                  <span className="num-badge">0{i + 1}</span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Homeowner concerns */}
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <SectionHead
              eyebrow="Sound Familiar?"
              title="Concerns We Hear From Dayton Homeowners."
              intro="If any of these sound like your home, it's time to get a straightforward diagnosis."
            />
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-flame">
                {service.ctaLabel}
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-4 sm:grid-cols-2">
              {concerns.map((c) => (
                <div
                  key={c}
                  className="card-premium flex items-start gap-3 p-5 text-sm font-medium leading-relaxed text-foreground/85"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-2 w-2 flex-none rotate-45 rounded-[2px] bg-gradient-to-br from-frost to-flame"
                  />
                  {c}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <JsonLd
                data={{
                  "@context": "https://schema.org",
                  "@type": "Service",
                  name: service.title,
                  provider: {
                    "@type": "HVACBusiness",
                    name: "Elk Heating & Air",
                    telephone: "+1-937-344-5445",
                    url: SITE_URL,
                  },
                  areaServed: "Greater Dayton, Ohio",
                  url: `${SITE_URL}${service.path}`,
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        headline={`Ready to ${service.ctaLabel}?`}
        copy={`Schedule ${service.navLabel.toLowerCase()} online in minutes, or call (937) 344-5445 and talk to a local team that does honest work — done right.`}
      />
    </>
  );
}
